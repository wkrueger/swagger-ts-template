import { TypeTemplate } from "./type-template"
import prettier = require("prettier")

type SwaggerDoc = SwaggerIo.V2.SchemaJson
type SwaggerType = SwaggerIo.V2.SchemaJson.Definitions.Schema

export interface genTypesOpts {
  external?: any
  hideComments?: boolean
  mapVariableName?: (s: string) => string
  prettierOpts?: prettier.Options
}
export async function genTypes(swaggerDoc: SwaggerDoc, opts: genTypesOpts = {}) {
  //ts formatter requires a file
  //TODO use prettier
  const mapVariableName = opts.mapVariableName || (s => s)
  const definitionRoot = "definitions"

  let external = opts.external ? "export " : ""
  if (!Object.keys(swaggerDoc[definitionRoot] || {}).length) {
    throw Error("No definition found in " + definitionRoot)
  }
  let list: { name; def }[] = []
  for (let _name in swaggerDoc[definitionRoot]) {
    list.push({
      name: _name,
      def: swaggerDoc[definitionRoot]![_name]
    })
  }
  list.sort((i1, i2) => {
    if (i1.name == i2.name) return 0
    return i2.name - i1.name
  })

  const typeTemplateGen = new TypeTemplate(opts, definitionRoot, swaggerDoc)

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
      `${templ.data.join("\n")}`
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
