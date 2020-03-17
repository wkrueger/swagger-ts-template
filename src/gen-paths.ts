import lo = require("lodash")
import fs = require("fs")
import cp = require("cp")
import { genTypes, genTypesOpts, defaultPrettierOpts, fixVariableName } from "./gen-types"
import mkdirp = require("mkdirp")
import rimraf = require("rimraf")
import path = require("path")
import { promisify } from "util"
import { TypeTemplate } from "./type-template"
import prettier = require("prettier")

type SwaggerDoc = SwaggerIo.V2.SchemaJson

interface Operation extends SwaggerIo.V2.SchemaJson.Definitions.Operation {
  __path__: string
  __tag__: string
  __verb__: string
  __parentParameters__: string
}

type genPathsOpts = {
  output: string
  moduleStyle: "commonjs" | "esm"
  failOnMissingOperationId?: boolean
  typesOpts?: genTypesOpts
  mapOperation?: (
    operation: Operation,
    pathItem: SwaggerIo.V2.SchemaJson.Definitions.PathItem,
    pathKey: string,
    methodKey: string
  ) => Operation
  templateString?: string
  prettierOpts?: prettier.Options
}

export class GenPathsClass {
  constructor(private swaggerDoc: SwaggerDoc, public opts: genPathsOpts) {
    if (!opts.output) throw Error("Missing parameter: output.")
    opts.moduleStyle = opts.moduleStyle || "commonjs"
    opts.templateString = opts.templateString || defaultTemplateStr
    opts.mapOperation = opts.mapOperation || defaultMapOperation
    opts.prettierOpts = opts.prettierOpts || defaultPrettierOpts
    opts.typesOpts = { ...(opts.typesOpts || {}), prettierOpts: opts.prettierOpts }
    this.preNormalize()
    this.typegen = new TypeTemplate(this.opts.typesOpts!, "definitions", this.swaggerDoc, "Types.")
  }
  typegen: TypeTemplate
  lookupPaths = ["#/definitions"]

  preNormalize() {
    this.swaggerDoc = this.swaggerDoc || {}
    this.swaggerDoc.definitions = this.swaggerDoc.definitions || {}
    this.swaggerDoc.paths = this.swaggerDoc.paths || {}

    Object.keys(this.swaggerDoc.paths).forEach(pathKey => {
      const path = this.swaggerDoc.paths[pathKey]
      Object.keys(path).forEach(opKey => {
        if (opKey === "parameters") return
        if (path[opKey].requestBody) {
          // oai v2 <> oai v3
          const verb = path[opKey] as any
          let content = verb.requestBody.content["application/json"]
          if (!content) content = verb.requestBody.content[Object.keys(verb.requestBody.content)[0]]
          if (content) {
            const params = (verb.parameters = verb.parameters || [])
            params.push({
              description: verb.requestBody.description,
              required: verb.requestBody.required,
              in: "body",
              name: "body",
              schema: content.schema
            } as SwaggerIo.V2.SchemaJson.Definitions.BodyParameter)
          }
        }
        if (this.opts.mapOperation) {
          path[opKey] = this.opts.mapOperation(path[opKey], path, pathKey, opKey)
        }
      })
    })
    const mappedDefs = {} as Record<string, JsonSchemaOrg.Draft04.Schema>
    Object.keys(this.swaggerDoc.definitions!).forEach(key => {
      mappedDefs[fixVariableName(key)] = this.swaggerDoc.definitions![key]
    })
    this.swaggerDoc.definitions = mappedDefs
  }

  async run() {
    const { swaggerDoc, opts } = this
    await promisify(rimraf)(opts.output)
    await promisify(mkdirp as any)(path.resolve(opts.output, "modules"))
    await promisify(cp)(
      path.resolve(__dirname, "..", "src", "api-common.ts"),
      path.resolve(opts.output, "api-common.ts")
    )

    // - groups operations by tags
    // - "copies down" metadata which were present on higher ranks of the Doc to the scope
    // of each operation.
    // FIXME: cryptic code. Lodash chain bad.
    let tags: any = lo
      .chain((swaggerDoc.paths as any) as Record<string, Operation>)
      .toPairs()
      .map(([path, schema]) => {
        //search for a tag name
        let tags = (() => {
          let verbs = Object.keys(schema)
          let out: string[] = []
          for (let it = 0; it < verbs.length; it++) {
            let verb = verbs[it]
            if (verb === "parameters") continue
            let operation: Operation = schema[verb]
            if (!operation.tags?.length) {
              operation.tags = [this.generateOperationTag(path)]
            }
            out.push(...(operation.tags || []).map(camelCased))
          }
          return out
        })()
        if (!tags.length) tags.push("NoTag")
        let out = lo
          .toPairs(schema)
          .map(([verb, operation]) => {
            if (verb === "parameters") return null
            operation.__path__ = path
            operation.__tag__ = tags
            operation.__verb__ = verb
            operation.__parentParameters__ = schema["parameters"]
            let params = [
              ...(operation["__parentParameters__"] || []),
              ...(operation.parameters || [])
            ]
              .map(p => {
                if (p.$ref) p = this.unRef(p)

                if (p.schema) {
                  p.type = p.schema
                }
                let out: any = lo.pick(p, "name", "type", "required", "in")
                if (!out.name) throw Error("unexpected")
                return out
              })
              .reduce((out, line: any) => {
                out[line.name] = line
                return out
              }, {})
            params = lo.values(params)

            operation["__mergedParameters__"] = params
            return operation
          })
          .filter(i => i !== null)
        return out
      }) // [ [Operation], [Operation] ]
      .reduce((out: any, curr) => {
        return [...out, ...curr]
      }, []) // [ Operation ] __tag__ : string[]
      .value()

    tags = tags.reduce((out, operation) => {
      let spread = operation.__tag__.map(tag => {
        return { ...operation, __tag__: tag }
      })
      return [...out, ...spread]
    }, []) // [ Operation ] __tag__ : string
    tags = lo.groupBy(tags, "__tag__") // { [__tag__:string] : Operation[] }
    tags = lo.mapValues(tags, value => {
      let uniq = {}
      value.forEach(v => {
        if (!v.operationId) {
          if (opts.failOnMissingOperationId) {
            throw Error(`operationId missing for route ${v.__verb__.toUpperCase()} ${v.__path__}`)
          } else {
            const oid = this.generateOperationId(v.__path__, v.__verb__)
            console.info(
              `operationId missing for route ${v.__verb__.toUpperCase()} ${
                v.__path__
              }. Generated name ${oid} from path.`
            )
            v.operationId = oid
          }
        }
        uniq[v.operationId] = v
      })
      return lo.values(uniq)
    })

    const compiledTemplate = lo.template(this.opts.templateString!)
    const tagsPairs = lo.toPairs(tags)
    await Promise.all(
      tagsPairs.map(async ([tag, operations]) => {
        let merged = compiledTemplate({
          operations,
          paramsType: this.paramsType.bind(this),
          responseType: this.responseType.bind(this),
          strip: this.strip.bind(this),
          getImportString: this.getImportString.bind(this),
          commentBlock: this.commentBlock.bind(this),
          style: opts.moduleStyle
        })
        merged = prettier.format(merged, opts.prettierOpts)
        await promisify(fs.writeFile)(path.resolve(opts.output, "modules", tag + ".ts"), merged)
      })
    )

    const typesFile = await genTypes(swaggerDoc, [...this.lookupPaths, ...this.typegen.foundRefs], {
      external: true,
      //filename: path.resolve(opts.output, "api-types.d.ts"),
      ...(opts.typesOpts || {})
    })
    await promisify(fs.writeFile)(path.resolve(opts.output, "api-types.d.ts"), typesFile)
  }

  unRef(param) {
    let path = param.$ref.substr(2).split("/")
    let found = lo.get(this.swaggerDoc, path)
    if (found) {
      this.lookupPaths.push(param.$ref)
    }
    return found
  }

  strip(op: any[]) {
    return op.map(line => lo.omit(line, "type"))
  }

  /** response types may lie in different places... */
  findResponseSchema(operation) {
    let traversing = operation.responses
    if (!traversing) return
    traversing = traversing[201] || traversing[200]
    if (!traversing) return
    if (traversing.schema) return traversing.schema
    return traversing.content?.["application/json"]?.schema
  }

  /** operation comment block, string, merged into template */
  commentBlock(operation: Operation) {
    const lines = [`${operation.__verb__.toUpperCase()} ${operation.__path__}  `, ""]
    if (operation.description) lines.push(...operation.description.split("\n"))
    return lines.map(line => " * " + line).join("\n")
  }

  /** parameters type, string, merged into template */
  paramsType(operation: Operation) {
    let params = operation["__mergedParameters__"]
    let out = "{"
    let count = 0
    params = params.sort((a, b) => {
      let namea = String(a.name).toLowerCase()
      let nameb = String(b.name).toLowerCase()
      if (namea > nameb) return 1
      else if (namea < nameb) return -1
      return 0
    })
    params.forEach(param => {
      if (!param.in && !param.$ref) return
      if (param.schema) {
        param.type = param.schema
      }
      const generatedType = this.typegen.typeTemplate(
        param,
        operation.operationId + ":params",
        true
      )
      if (param.in === "header" && param.name === "Authorization") return
      count++
      out += `\n    '${param.name}'${param.required ? "" : "?"} : ${generatedType.data.join("\n")}`
    })
    if (count) out += "\n"
    out += "}"
    return out
  }

  /** response type, string, merged into template */
  responseType(operation: SwaggerIo.V2.SchemaJson.Definitions.Operation) {
    let find = this.findResponseSchema(operation)
    if (!find) return "void"
    const generatedType = this.typegen.typeTemplate(find, operation.operationId + ":response", true)
    return generatedType.data.join("\n")
  }

  getImportString(i: { variable: string; module: string; style: "commonjs" | "esm" }) {
    if (i.style === "commonjs") {
      return `import ${i.variable} = require('${i.module}')`
    } else {
      return `import * as ${i.variable} from '${i.module}'`
    }
  }

  /** generates operationId when it is missing */
  generateOperationId(pathKey: string, methodKey: string) {
    const pre = pathKey
      .split("/")
      .slice(1)
      .map((expr, idx, list) => {
        if (expr.startsWith("{")) return ""
        const next = list[idx + 1]
        if (next && next.startsWith("{")) {
          return expr.substr(0, expr.length - 1)
        }
        return expr
      })
      .join("_")
    const camel = lo.camelCase(methodKey + "_" + pre)
    console.log(camel)
    return camel
  }

  /** generates operation tag when it is missing */
  generateOperationTag(pathKey: string) {
    const found = pathKey.match(/^\/\w+/)
    if (!found) return "unknown"
    return found[0].substr(1)
  }
}

export async function genPaths(swaggerDoc: SwaggerDoc, opts: genPathsOpts) {
  const instance = new GenPathsClass(swaggerDoc, opts)
  return instance.run()
}

function camelCased(tag: string) {
  return (tag.match(/[a-zA-Z]+/g) || [tag])
    .map(word => {
      let out = String(word[0]).toUpperCase() + word.substr(1).toLowerCase()
      return out
    })
    .reduce((a, b) => a + b, "")
}

const defaultTemplateStr = `<%=getImportString({ variable: 'ApiCommon', module: '../api-common', style: style }) %>
// @ts-ignore
<%=getImportString({ variable: "Types", module: "../api-types", style: style })%>

<% operations.forEach( operation => { %>
export type <%=operation.operationId%>_Type = <%= paramsType(operation) %>
export type <%=operation.operationId%>_Response = <%= responseType(operation) %>
/**
<%=commentBlock(operation)%>
 **/
export const <%=operation.operationId%>
    = ApiCommon.requestMaker
    <<%=operation.operationId%>_Type, <%=operation.operationId%>_Response>({
        id: '<%=operation.operationId%>',
        path: '<%=operation.__path__%>',
        verb: '<%=String(operation.__verb__).toUpperCase()%>',
        parameters: <%=JSON.stringify(strip(operation.__mergedParameters__))%>
    })



<% }) %>
`

export function defaultMapOperation(o: Operation) {
  if (!o.operationId) return o
  o.operationId = fixVariableName(o.operationId!)
  return o
}
