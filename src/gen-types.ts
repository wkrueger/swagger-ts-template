import { TypeTemplate } from "./type-template"
import prettier = require("prettier")
import lo = require("lodash")

type SwaggerDoc = SwaggerIo.V2.SchemaJson
type SwaggerType = SwaggerIo.V2.SchemaJson.Definitions.Schema

export interface genTypesOpts {
  external?: any
  hideComments?: boolean
  mapVariableName?: (s: string) => string
  prettierOpts?: prettier.Options
}
export async function genTypes(
  swaggerDoc: SwaggerDoc,
  lookupPaths: string[],
  opts: genTypesOpts = {}
) {
  const mapVariableName = opts.mapVariableName || (s => s)
  lookupPaths = lo.uniq(lookupPaths)

  let external = opts.external ? "export " : ""
  let list: { name; def; srcPath }[] = []

  for (let _path of lookupPaths) {
    const split = _path.split(/\//g).filter(x => x !== "#")
    lookupPath(swaggerDoc, split, list)
  }
  list = lo.uniqBy(list, x => x.srcPath)
  list.sort((i1, i2) => {
    if (i1.name == i2.name) return 0
    return i2.name - i1.name
  })

  const typeTemplateGen = new TypeTemplate(opts, "definitions", swaggerDoc)

  let out = ""
  list.forEach(item => {
    let def: SwaggerType = item.def

    let templ = typeTemplateGen.typeTemplate(def, item.name, true)
    let isInterface = ["object", "allOf", "anyOf"].indexOf(templ.type) !== -1
    let keyword = isInterface ? "interface" : "type"
    let equals = isInterface ? "" : " = "
    let extend = ""
    if (isInterface && (templ.extends || []).length) {
      extend = "extends" + " " + (templ.extends || []).join(",")
    }
    out += [
      `\n${external}${keyword} ${fixVariableName(mapVariableName(item.name))} ${extend}  ${equals}`,
      `${templ.data.join("\n")}`,
      ""
    ].join("\n")
  })

  let result = prettier.format(out, opts.prettierOpts || defaultPrettierOpts)
  return result
}

export const fixVariableName = (s: string) => s.replace(/^[^a-zA-Z_$]|[^\w$]/g, "_")
export const defaultPrettierOpts: prettier.Options = {
  semi: false,
  printWidth: 100,
  parser: "typescript" as "typescript"
}

function lookupPath(doc: any, path: string[], list = [] as { name; def; srcPath }[]) {
  const found = lo.get(doc, path) as any
  if (typeof found !== "object") return
  if (found?.type || found?.allOf || found?.$ref || found?.anyOf) {
    list.push({ name: path[path.length - 1], def: found, srcPath: path.join(".") })
  } else {
    Object.keys(found).forEach(key => {
      const toSearch = [...path, key]
      lookupPath(doc, toSearch, list)
    })
  }
}
