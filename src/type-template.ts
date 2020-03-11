import wordwrap = require("wordwrap")
import { genTypesOpts, fixVariableName } from "./gen-types"
import lo = require("lodash")

type SwaggerType = SwaggerIo.V2.SchemaJson.Definitions.Schema
type SwaggerDoc = SwaggerIo.V2.SchemaJson

export class TypeTemplate {
  constructor(
    public opts: genTypesOpts,
    public definitionRoot: string,
    public mainDoc: SwaggerDoc,
    public refPrefix: string = ""
  ) {
    this.mapVariableName = opts.mapVariableName || (s => s)
  }

  mapVariableName: (s: string) => string
  foundRefs = [] as string[]

  typeTemplate(
    swaggerType: SwaggerType | string,
    path: string,
    embraceObjects = false
  ): { type: string; data: string[]; extends?: string[] } {
    if (typeof swaggerType === "string") {
      const out = swaggerType === "integer" ? "number" : swaggerType
      return {
        type: "primitive",
        data: [out]
      }
    }

    if (swaggerType.$ref) {
      const split = swaggerType.$ref.split("/")
      let variableName = fixVariableName(split[split.length - 1])
      // const validJsCheck = fixVariableName(variableName)
      // if (validJsCheck !== variableName) {
      //   console.error("Strange variable name at " + path + " , reverting to any.")
      //   return { type: "primitive", data: ["any"] }
      // }
      this.foundRefs.push(swaggerType.$ref)
      return {
        data: [this.refPrefix + variableName],
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
      let wrapped = this.wrapLiteral(typestr)
      return { data: wrapped, type: "enum" }
    }

    if (~["integer", "double", "number"].indexOf(swaggerType.type as any)) {
      return { data: ["number"], type: "primitive" }
    }

    if (~["string", "boolean", "null"].indexOf(swaggerType.type as any)) {
      return { data: [swaggerType.type as any], type: "primitive" }
    }

    if (swaggerType.type === "object" || swaggerType.properties) {
      let aux = lo.toPairs(swaggerType.properties).map(pair => {
        var [key, prop] = pair as [string, SwaggerType]
        let current = this.typeTemplate(prop, path + "." + key, true).data
        let required = swaggerType.required && swaggerType.required.indexOf(key) != -1 ? "" : "?"
        if (fixVariableName(key) !== key) key = fixVariableName(key)
        current[0] = `${key}${required} : ${this.mapVariableName(current[0].trim())}`
        if (prop.description && !this.opts.hideComments) {
          var doc = [
            "/**",
            ...wordwrap()(prop.description, { width: 60 })
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
      let inner = this.typeTemplate(swaggerType.items as any, path + "[]", true).data
      inner[inner.length - 1] += "[]"
      return { data: inner, type: "array" }
    }

    if (Array.isArray(swaggerType.type)) {
      const inner = swaggerType.type
        .map(t => this.typeTemplate(t, path + "|", true))
        .map(o => o.data)
      const fixd = [] as string[]
      for (let x = 0; x < inner.length; x++) {
        fixd.push("|")
        fixd.push(...inner[x])
      }
      return { data: fixd, type: "union" }
    }

    if (swaggerType.allOf) {
      let merged = this.mergeAllof(swaggerType)
      return {
        data: ["{", ...this.typeTemplate(merged.swaggerDoc, path + ".ALLOF").data, "}"],
        type: "allOf",
        extends: merged.extends
      }
    }

    if ((<any>swaggerType).anyOf) {
      //typedef says anyOf does not belong to swagger Schema
      let merged = this.mergeAllof(swaggerType, "anyOf")
      return {
        data: ["{", ...this.typeTemplate(merged.swaggerDoc, path + ".ANYOF").data, "}"],
        type: "anyOf",
        extends: merged.extends
      }
    }

    if (swaggerType.type) {
      return this.typeTemplate(swaggerType.type, path, embraceObjects)
    }

    console.error("Unhandled type at " + path, swaggerType)
    return {
      type: "primitive",
      data: ["any"]
    }
  }

  mergeAllof(swaggerType: SwaggerType, key: "allOf" | "anyOf" = "allOf") {
    let item = swaggerType[key]
    if (!item) throw Error("wrong mergeAllOf call.")
    var extend = [] as any[]
    let merged = item.reduce(
      (prev, toMerge) => {
        let refd: SwaggerType
        if (toMerge.$ref) {
          let split = toMerge.$ref.split("/")
          if (split[0] === "#" && split[1] === this.definitionRoot && split.length === 3) {
            extend.push(split[2])
            return prev
          }
          refd = this.findDef(this.mainDoc, split)
        } else {
          refd = toMerge
        }
        if (refd.allOf) refd = this.mergeAllof(refd, "allOf").swaggerDoc
        else if ((<any>refd).anyOf) refd = this.mergeAllof(refd, "anyOf").swaggerDoc
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

  findDef(src, path: string[]) {
    if (path[0] == "#") path = path.slice(1)
    if (!path.length) return src
    return this.findDef(src[path[0]], path.slice(1))
  }

  wrapLiteral(inp) {
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
}
