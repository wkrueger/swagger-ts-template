import _ = require("lodash")
import formatter = require("typescript-formatter")
import { promisify } from "util"
import fs = require("fs")
const wordwrap = require("word-wrap")

type SwaggerDoc = SwaggerIo.V2.SchemaJson
type SwaggerType = SwaggerIo.V2.SchemaJson.Definitions.Schema

var __mainDoc: SwaggerDoc
var __definitionRoot: string

export interface genTypesOpts {
  external?: any
  filename?: string
  hideComments?: boolean
  //search for type definitions in the following path (currently only 1 item)
  //searchWithin?: string
  noOptionals?: boolean
  mapVariableName?: (s: string) => string
}
export async function genTypes(swaggerDoc: SwaggerDoc, opts: genTypesOpts = {}) {
  //ts formatter requires a file
  //TODO use prettier
  const originalFilename = opts.filename
  const mapVariableName = opts.mapVariableName || (s => s)
  opts.filename = opts.filename || "typing_" + Math.ceil(Math.random() * 10000) + ".d.ts"
  __definitionRoot = "definitions"

  __mainDoc = swaggerDoc
  var out = ""
  let external = opts.external ? "export " : ""
  if (!Object.keys(swaggerDoc[__definitionRoot] || {}).length) {
    throw Error("No definition found in " + __definitionRoot)
  }
  let list: { name; def }[] = []
  for (let _name in swaggerDoc[__definitionRoot]) {
    list.push({
      name: _name,
      def: swaggerDoc[__definitionRoot][_name]
    })
  }
  list.sort((i1, i2) => {
    if (i1.name == i2.name) return 0
    return i2.name - i1.name
  })

  list.forEach(item => {
    //if (name !== 'PurchaseHeaderIn') continue
    let def: SwaggerType = item.def

    let templ = typeTemplate(def, true)
    let isInterface = ["object", "allOf", "anyOf"].indexOf(templ.type) !== -1
    let keyword = isInterface ? "interface" : "type"
    let equals = isInterface ? "" : " = "
    let extend = ""
    if (isInterface && (templ.extends || []).length) {
      extend = "extends" + " " + (templ.extends || []).join(",")
    }
    out += `
        ${external}${keyword} ${mapVariableName(item.name)} ${extend}  ${equals}
        ${templ.data.join("\n")}
        
        `
  })

  //console.log('dest', opts.filename)
  let result = await formatter.processString(opts.filename, out, {
    editorconfig: false,
    replace: true,
    tsconfig: false,
    tsfmt: false,
    tslint: false,
    verify: false,
    tsconfigFile: null,
    tslintFile: null,
    vscode: false,
    vscodeFile: null,
    tsfmtFile: null
  })
  if (!originalFilename) await promisify(fs.unlink)(opts.filename)
  return result.dest

  function typeTemplate(swaggerType: SwaggerType, embraceObjects = false) {
    function wrap(): { data: string[]; type: string; extends?: string[] } {
      if (swaggerType.$ref) {
        let split = swaggerType.$ref.split("/")
        return {
          data: [split[split.length - 1]],
          type: "ref"
        }
      }

      if (swaggerType.enum) {
        let typestr = swaggerType.enum.reduce((bef, curr) => {
          if (typeof curr === "string") curr = `'${String(curr).replace(/'/g, "\\'")}'`
          if (bef) bef += "|"
          bef += String(curr)
          return bef
        }, "")
        let wrapped = wrapLiteral(typestr)
        return { data: wrapped, type: "enum" }
      }

      if (~["integer", "double", "number"].indexOf(swaggerType.type as any)) {
        return { data: ["number"], type: "primitive" }
      }

      if (~["string", "boolean"].indexOf(swaggerType.type as any)) {
        return { data: [swaggerType.type as any], type: "primitive" }
      }

      if (swaggerType.type === "object" || swaggerType.properties) {
        let aux = _.toPairs(swaggerType.properties).map(pair => {
          var [key, prop] = pair as [string, SwaggerType]
          let current = typeTemplate(prop, true).data
          let required = swaggerType.required && swaggerType.required.indexOf(key) != -1 ? "" : "?"
          if (opts.noOptionals) required = ""
          current[0] = `${key}${required} : ${mapVariableName(current[0].trim())}`
          if (prop.description && !opts.hideComments) {
            var doc = [
              "/**",
              ...wordwrap(prop.description, { width: 60 })
                .split("\n")
                .map(s => ` *  ${s.trim()}`),
              " */"
            ]
            current = [...doc, ...current]
          }
          return current
        })
        let joined = aux.reduce((bef, curr) => [...bef, ...curr], [])
        if (embraceObjects) {
          //one-liner
          if (joined.length === 1) {
            joined[0] = `{ ${aux[0]} }`
          } else {
            joined.unshift("{")
            joined.push("}")
          }
        }
        return { data: joined, type: "object" }
      }

      if (swaggerType.type === "array" || swaggerType.items) {
        let inner = typeTemplate(swaggerType.items as any, true).data
        inner[inner.length - 1] += "[]"
        return { data: inner, type: "array" }
      }

      if (swaggerType.allOf) {
        let merged = mergeAllof(swaggerType)
        return {
          data: ["{", ...typeTemplate(merged.swaggerDoc).data, "}"],
          type: "allOf",
          extends: merged.extends
        }
      }

      if ((<any>swaggerType).anyOf) {
        //typedef says anyOf does not belong to swagger Schema
        let merged = mergeAllof(swaggerType, "anyOf")
        return {
          data: ["{", ...typeTemplate(merged.swaggerDoc).data, "}"],
          type: "anyOf",
          extends: merged.extends
        }
      }

      throw swaggerType.type
    }

    let out = wrap()
    return {
      data: out.data,
      type: out.type,
      extends: out.extends
    }
  }
}

function mergeAllof(swaggerType: SwaggerType, key: "allOf" | "anyOf" = "allOf") {
  let item = swaggerType[key]
  if (!item) throw Error("wrong mergeAllOf call.")
  var extend = [] as any[]
  let merged = item.reduce(
    (prev, toMerge) => {
      let refd: SwaggerType
      if (toMerge.$ref) {
        let split = toMerge.$ref.split("/")
        if (split[0] === "#" && split[1] === __definitionRoot && split.length === 3) {
          extend.push(split[2])
          return prev
        }
        refd = findDef(__mainDoc, split)
      } else {
        refd = toMerge
      }
      if (refd.allOf) refd = mergeAllof(refd, "allOf").swaggerDoc
      else if ((<any>refd).anyOf) refd = mergeAllof(refd, "anyOf").swaggerDoc
      //typedef says anyOf does not belong to swagger schema
      if (!refd.properties) {
        console.error("allOf merge: unsupported object type at " + JSON.stringify(toMerge))
      }
      for (var it in <any>refd.properties) {
        //if ((<any>prev).properties[it]) console.error('property', it, 'overwritten in ', JSON.stringify(toMerge).substr(0,80));
        ;(<any>prev).properties[it] = (<any>refd).properties[it]
      }
      return prev
    },
    { type: "object", properties: {} }
  )
  return { swaggerDoc: merged, extends: extend }
}

function findDef(src, path: string[]) {
  if (path[0] == "#") path = path.slice(1)
  if (!path.length) return src
  return findDef(src[path[0]], path.slice(1))
}

function wrapLiteral(inp) {
  let items = inp.split("|")
  let allLines: string[] = []
  let currentLine = ""
  items.forEach(i => {
    currentLine += i + "|"
    if (currentLine.length > 40) {
      allLines.push(currentLine)
      currentLine = ""
    }
  })
  if (currentLine) {
    allLines.push(currentLine)
  }
  let last = allLines[allLines.length - 1]
  last = last.substr(0, last.length - 1)
  allLines[allLines.length - 1] = last
  return allLines
}
