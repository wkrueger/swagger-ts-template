"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_template_1 = require("./type-template");
const prettier = require("prettier");
const lo = require("lodash");
function genTypes(swaggerDoc, lookupPaths, opts = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const mapVariableName = opts.mapVariableName || (s => s);
        lookupPaths = lo.uniq(lookupPaths);
        let external = opts.external ? "export " : "";
        let list = [];
        for (let _path of lookupPaths) {
            const split = _path.split(/\//g).filter(x => x !== "#");
            lookupPath(swaggerDoc, split, list);
        }
        list = lo.uniqBy(list, x => x.srcPath);
        list.sort((i1, i2) => {
            if (i1.name == i2.name)
                return 0;
            return i2.name - i1.name;
        });
        const typeTemplateGen = new type_template_1.TypeTemplate(opts, "definitions", swaggerDoc);
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
            out += [
                `\n${external}${keyword} ${exports.fixVariableName(mapVariableName(item.name))} ${extend}  ${equals}`,
                `${templ.data.join("\n")}`,
                ""
            ].join("\n");
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
    parser: "typescript"
};
function lookupPath(doc, path, list = []) {
    const found = lo.get(doc, path);
    if (typeof found !== "object")
        return;
    if ((found === null || found === void 0 ? void 0 : found.type) || (found === null || found === void 0 ? void 0 : found.allOf) || (found === null || found === void 0 ? void 0 : found.$ref) || (found === null || found === void 0 ? void 0 : found.anyOf)) {
        list.push({ name: path[path.length - 1], def: found, srcPath: path.join(".") });
    }
    else {
        Object.keys(found).forEach(key => {
            const toSearch = [...path, key];
            lookupPath(doc, toSearch, list);
        });
    }
}
//# sourceMappingURL=gen-types.js.map