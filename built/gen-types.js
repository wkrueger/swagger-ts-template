"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_template_1 = require("./type-template");
const prettier = require("prettier");
function genTypes(swaggerDoc, opts = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        //ts formatter requires a file
        //TODO use prettier
        const mapVariableName = opts.mapVariableName || (s => s);
        const definitionRoot = "definitions";
        let external = opts.external ? "export " : "";
        if (!Object.keys(swaggerDoc[definitionRoot] || {}).length) {
            throw Error("No definition found in " + definitionRoot);
        }
        let list = [];
        for (let _name in swaggerDoc[definitionRoot]) {
            list.push({
                name: _name,
                def: swaggerDoc[definitionRoot][_name]
            });
        }
        list.sort((i1, i2) => {
            if (i1.name == i2.name)
                return 0;
            return i2.name - i1.name;
        });
        const typeTemplateGen = new type_template_1.TypeTemplate(opts, definitionRoot, swaggerDoc);
        let out = "";
        list.forEach(item => {
            let def = item.def;
            let templ = typeTemplateGen.typeTemplate(def, item.name, true);
            let isInterface = ["object", "allOf", "anyOf"].indexOf(templ.type) !== -1;
            let keyword = isInterface ? "interface" : "type";
            let equals = isInterface ? "" : " = ";
            let extend = "";
            if (isInterface && (templ.extends || []).length) {
                extend = "extends" + " " + (templ.extends || []).join(",");
            }
            out += `
        ${external}${keyword} ${exports.fixVariableName(mapVariableName(item.name))} ${extend}  ${equals}
        ${templ.data.join("\n")}
        
        `;
        });
        let result = prettier.format(out, opts.prettierOpts || exports.defaultPrettierOpts);
        return result;
    });
}
exports.genTypes = genTypes;
exports.fixVariableName = (s) => s.replace(/^[^a-zA-Z_$]|[^\w$]/g, "_");
exports.defaultPrettierOpts = {
    semi: false,
    printWidth: 100,
    parser: "typestript"
};
//# sourceMappingURL=gen-types.js.map