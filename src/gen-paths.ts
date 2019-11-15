import lo = require("lodash")
import fs = require("fs")
import cp = require("cp")
import { genTypes, genTypesOpts, defaultPrettierOpts } from "./gen-types"
import mkdirp = require("mkdirp")
import rimraf = require("rimraf")
import path = require("path")
import { promisify } from "util"
import { TypeTemplate } from "./type-template"
import prettier = require("prettier")

type SwaggerDoc = SwaggerIo.V2.SchemaJson
type Operation = SwaggerIo.V2.SchemaJson.Definitions.Operation & {
  __path__: string
  __verb__: string
}

type genPathsOpts = {
  output: string
  moduleStyle: "commonjs" | "esm"
  failOnMissingOperationId?: boolean
  typesOpts?: genTypesOpts
  mapOperation?: (
    operation: Operation,
    pathItem: SwaggerIo.V2.SchemaJson.Definitions.PathItem,
    pathKey: string
  ) => Operation
  templateString?: string
  prettierOpts?: prettier.Options
}

export async function genPaths(swaggerDoc: SwaggerDoc, opts: genPathsOpts) {
  if (!opts.output) throw Error("Missing parameter: output.")
  opts.moduleStyle = opts.moduleStyle || "commonjs"
  opts.templateString = opts.templateString || defaultTemplateStr
  opts.mapOperation = opts.mapOperation || defaultMapOperation
  opts.prettierOpts = opts.prettierOpts || defaultPrettierOpts
  opts.typesOpts = { ...(opts.typesOpts || {}), prettierOpts: opts.prettierOpts }
  const compiledTemplate = lo.template(opts.templateString)
  preNormalize()

  await promisify(rimraf)(opts.output)
  await promisify(mkdirp as any)(path.resolve(opts.output, "modules"))
  await promisify(cp)(
    path.resolve(__dirname, "..", "src", "api-common.ts"),
    path.resolve(opts.output, "api-common.ts")
  )
  const typesFile = await genTypes(swaggerDoc, {
    external: true,
    //filename: path.resolve(opts.output, "api-types.d.ts"),
    ...(opts.typesOpts || {})
  })
  await promisify(fs.writeFile)(path.resolve(opts.output, "api-types.d.ts"), typesFile)

  // - groups operations by tags
  // - "copies down" metadata which were present on higher ranks of the Doc to the scope
  // of each operation.
  let tags: any = lo
    .chain(swaggerDoc.paths)
    .toPairs()
    .map(([path, schema]) => {
      //search for a tag name
      let tags = (() => {
        let verbs = Object.keys(schema)
        let out: string[] = []
        for (let it = 0; it < verbs.length; it++) {
          let verb = verbs[it]
          if (verb === "parameters") continue
          let verbObj: SwaggerIo.V2.SchemaJson.Definitions.Operation = schema[verb]
          if (lo.get(verbObj, ["tags", "length"])) {
            out.push(...(verbObj.tags || []).map(camelCased))
          }
        }
        return out
      })()
      if (!tags.length) tags.push("NoTag")
      let out = lo
        .toPairs(schema)
        .map(([verb, operation]) => {
          if (verb === "parameters") return null
          operation["__path__"] = path
          operation["__tag__"] = tags
          operation["__verb__"] = verb
          operation["__parentParameters__"] = schema["parameters"]
          let params = [
            ...(operation["__parentParameters__"] || []),
            ...(operation.parameters || [])
          ]
            .map(p => {
              if (p.$ref) p = unRef(p)

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
          console.info(`operationId missing for route ${v.__verb__.toUpperCase()} ${v.__path__}`)
          return
        }
      }
      uniq[v.operationId] = v
    })
    return lo.values(uniq)
  })

  const typegen = new TypeTemplate(opts.typesOpts, "definitions", swaggerDoc, "Types.")

  const tagsPairs = lo.toPairs(tags)
  await Promise.all(
    tagsPairs.map(async ([tag, operations]) => {
      let merged = compiledTemplate({
        operations,
        paramsType,
        responseType,
        strip,
        getImportString,
        commentBlock,
        style: opts.moduleStyle
      })
      merged = prettier.format(merged, opts.prettierOpts)
      await promisify(fs.writeFile)(path.resolve(opts.output, "modules", tag + ".ts"), merged)
    })
  )

  // -----------------------

  function preNormalize() {
    Object.keys(swaggerDoc.paths).forEach(pathKey => {
      const path = swaggerDoc.paths[pathKey]
      Object.keys(path).forEach(opKey => {
        if (opKey === "parameters") return
        if (opts.mapOperation) {
          path[opKey] = opts.mapOperation(path[opKey], path, pathKey)
        }
      })
    })
  }

  function unRef(param) {
    let path = param.$ref.substr(2).split("/")
    let found = lo.get(swaggerDoc, path)
    return found
  }

  function strip(op: any[]) {
    return op.map(line => lo.omit(line, "type"))
  }

  function findResponseSchema(operation) {
    let find: any = lo.get(operation, ["responses", "201", "schema"])
    if (!find) find = lo.get(operation, ["responses", "200", "schema"])
    return find
  }

  function commentBlock(operation: Operation) {
    const lines = [`${operation.__verb__.toUpperCase()} ${operation.__path__}  `, ""]
    if (operation.description) lines.push(...operation.description.split("\n"))
    return lines.map(line => " * " + line).join("\n")
  }

  function paramsType(operation: Operation) {
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
      const generatedType = typegen.typeTemplate(
        param.type,
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

  function responseType(operation: SwaggerIo.V2.SchemaJson.Definitions.Operation) {
    let find = findResponseSchema(operation)
    if (!find) return "void"
    const generatedType = typegen.typeTemplate(find, operation.operationId + ":response", true)
    return generatedType.data.join("\n")
  }
}

function camelCased(tag: string) {
  return (tag.match(/[a-zA-Z]+/g) || [tag])
    .map(word => {
      let out = String(word[0]).toUpperCase() + word.substr(1).toLowerCase()
      return out
    })
    .reduce((a, b) => a + b, "")
}

function getImportString(i: { variable: string; module: string; style: "commonjs" | "esm" }) {
  if (i.style === "commonjs") {
    return `import ${i.variable} = require('${i.module}')`
  } else {
    return `import * as ${i.variable} from '${i.module}'`
  }
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
  o.operationId = o.operationId!.replace(/^[^a-zA-Z_$]|[^\w$]/g, "_")
  return o
}
