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
const lo = require("lodash");
const fs = require("fs");
const cp = require("cp");
const gen_types_1 = require("./gen-types");
const mkdirp = require("mkdirp");
const rimraf = require("rimraf");
const path = require("path");
const util_1 = require("util");
const type_template_1 = require("./type-template");
function genPaths(swaggerDoc, opts) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!opts.output)
            throw Error("Missing parameter: output.");
        opts.moduleStyle = opts.moduleStyle || "commonjs";
        opts.templateString = opts.templateString || defaultTemplateStr;
        opts.mapOperation = opts.mapOperation || defaultMapOperation;
        const compiledTemplate = lo.template(opts.templateString);
        preNormalize();
        yield util_1.promisify(rimraf)(opts.output);
        yield util_1.promisify(mkdirp)(path.resolve(opts.output, "modules"));
        yield util_1.promisify(cp)(path.resolve(__dirname, "..", "src", "api-common.ts"), path.resolve(opts.output, "api-common.ts"));
        const typesFile = yield gen_types_1.genTypes(swaggerDoc, Object.assign({ external: true, hideComments: true }, (opts.typesOpts || {})));
        yield util_1.promisify(fs.writeFile)(path.resolve(opts.output, "api-types.d.ts"), typesFile);
        let tags = lo
            .chain(swaggerDoc.paths)
            .toPairs()
            .map(([path, schema]) => {
            //search for a tag name
            let tags = (() => {
                let verbs = Object.keys(schema);
                let out = [];
                for (let it = 0; it < verbs.length; it++) {
                    let verb = verbs[it];
                    if (verb === "parameters")
                        continue;
                    let verbObj = schema[verb];
                    if (lo.get(verbObj, ["tags", "length"])) {
                        out.push(...(verbObj.tags || []).map(camelCased));
                    }
                }
                return out;
            })();
            if (!tags.length)
                tags.push("NoTag");
            let out = lo
                .toPairs(schema)
                .map(([verb, operation]) => {
                if (verb === "parameters")
                    return null;
                operation["__path__"] = path;
                operation["__tag__"] = tags;
                operation["__verb__"] = verb;
                operation["__parentParameters__"] = schema["parameters"];
                let params = [
                    ...(operation["__parentParameters__"] || []),
                    ...(operation.parameters || [])
                ]
                    .map(p => {
                    if (p.$ref)
                        p = unRef(p);
                    if (p.schema) {
                        p.type = p.schema;
                    }
                    let out = lo.pick(p, "name", "type", "required", "in");
                    if (!out.name)
                        throw Error("unexpected");
                    return out;
                })
                    .reduce((out, line) => {
                    out[line.name] = line;
                    return out;
                }, {});
                params = lo.values(params);
                operation["__mergedParameters__"] = params;
                return operation;
            })
                .filter(i => i !== null);
            return out;
        }) // [ [Operation], [Operation] ]
            .reduce((out, curr) => {
            return [...out, ...curr];
        }, []) // [ Operation ] __tag__ : string[]
            .value();
        tags = tags.reduce((out, operation) => {
            let spread = operation.__tag__.map(tag => {
                return Object.assign({}, operation, { __tag__: tag });
            });
            return [...out, ...spread];
        }, []); // [ Operation ] __tag__ : string
        tags = lo.groupBy(tags, "__tag__"); // { [__tag__:string] : Operation[] }
        tags = lo.mapValues(tags, value => {
            let uniq = {};
            value.forEach(v => {
                if (!v.operationId) {
                    if (opts.failOnMissingOperationId) {
                        throw Error(`operationId missing for route ${v.__verb__.toUpperCase()} ${v.__path__}`);
                    }
                    else {
                        console.info(`operationId missing for route ${v.__verb__.toUpperCase()} ${v.__path__}`);
                        return;
                    }
                }
                uniq[v.operationId] = v;
            });
            return lo.values(uniq);
        });
        //DANGEROUSLY MUTABLE AND SHARED
        let __usesTypes = false;
        const typegen = new type_template_1.TypeTemplate(opts.typesOpts || {}, "definitions", swaggerDoc);
        function paramsType(operation) {
            let params = operation["__mergedParameters__"];
            let out = "{";
            let count = 0;
            params = params.sort((a, b) => {
                let namea = String(a.name).toLowerCase();
                let nameb = String(b.name).toLowerCase();
                if (namea > nameb)
                    return 1;
                else if (namea < nameb)
                    return -1;
                return 0;
            });
            params.forEach(param => {
                if (!param.in && !param.$ref)
                    return;
                if (param.schema) {
                    param.type = param.schema;
                }
                const generatedType = typegen.typeTemplate(param.type, operation.operationId + ".params", true);
                if (param.in === "header" && param.name === "Authorization")
                    return;
                count++;
                out += `\n    '${param.name}'${param.required ? "" : "?"} : ${generatedType.data.join("\n")}`;
            });
            if (count)
                out += "\n";
            out += "}";
            return out;
        }
        function preNormalize() {
            Object.keys(swaggerDoc.paths).forEach(pathKey => {
                const path = swaggerDoc.paths[pathKey];
                Object.keys(path).forEach(opKey => {
                    if (opKey === "parameters")
                        return;
                    if (opts.mapOperation) {
                        path[opKey] = opts.mapOperation(path[opKey]);
                    }
                    const operation = path[opKey];
                    let find = findResponseSchema(operation);
                    if (find && !find.$ref) {
                        const tempTypeName = "__" + operation.operationId + "__response";
                        swaggerDoc.definitions[tempTypeName] = Object.assign({}, find);
                        find.$ref = tempTypeName;
                    }
                });
            });
        }
        function findResponseSchema(operation) {
            let find = lo.get(operation, ["responses", "201", "schema"]);
            if (!find)
                find = lo.get(operation, ["responses", "200", "schema"]);
            return find;
        }
        function responseType(operation) {
            let find = findResponseSchema(operation);
            if (!find)
                return "void";
            if (find.type === "array") {
                if (!lo.get(find, ["items", "$ref"]))
                    return "any[]";
                let typeName = refName(find.items);
                __usesTypes = true;
                return `${typeName}[]`;
            }
            else {
                if (!find.$ref)
                    return "any";
                let typeName = refName(find);
                __usesTypes = true;
                return `${typeName}`;
            }
        }
        yield lo.toPairs(tags).reduce((chain, [tag, operations]) => __awaiter(this, void 0, void 0, function* () {
            yield chain;
            __usesTypes = false;
            let merged = compiledTemplate({
                operations,
                paramsType,
                responseType,
                strip,
                getImportString,
                style: opts.moduleStyle
            });
            if (__usesTypes)
                merged =
                    getImportString({
                        variable: "Types",
                        module: "../api-types",
                        style: opts.moduleStyle
                    }) +
                        "\n" +
                        merged;
            yield util_1.promisify(fs.writeFile)(path.resolve(opts.output, "modules", tag + ".ts"), merged);
        }), Promise.resolve());
        function unRef(param) {
            let path = param.$ref.substr(2).split("/");
            let found = lo.get(swaggerDoc, path);
            return found;
        }
        function refName(param) {
            let split = param.$ref.split("/");
            __usesTypes = true;
            return "Types." + gen_types_1.fixVariableName(split[split.length - 1]);
        }
        function strip(op) {
            return op.map(line => lo.omit(line, "type"));
        }
    });
}
exports.genPaths = genPaths;
function camelCased(tag) {
    return (tag.match(/[a-zA-Z]+/g) || [tag])
        .map(word => {
        let out = String(word[0]).toUpperCase() + word.substr(1).toLowerCase();
        return out;
    })
        .reduce((a, b) => a + b, "");
}
function getImportString(i) {
    if (i.style === "commonjs") {
        return `import ${i.variable} = require('${i.module}')`;
    }
    else {
        return `import * as ${i.variable} from '${i.module}'`;
    }
}
const defaultTemplateStr = `<%=getImportString({ variable: 'ApiCommon', module: '../api-common', style: style }) %>

<% operations.forEach( operation => { %>
export type <%=operation.operationId%>_Type = <%= paramsType(operation) %>
export const <%=operation.operationId%>
    = ApiCommon.requestMaker
    <<%=operation.operationId%>_Type, <%=responseType(operation)%> >({
        id: '<%=operation.operationId%>',
        path: '<%=operation.__path__%>',
        verb: '<%=String(operation.__verb__).toUpperCase()%>',
        parameters: <%=JSON.stringify(strip(operation.__mergedParameters__))%>
    })


<% }) %>
`;
function defaultMapOperation(o) {
    if (!o.operationId)
        return o;
    o.operationId = o.operationId.replace(/^[^a-zA-Z_$]|[^\w$]/g, "_");
    return o;
}
exports.defaultMapOperation = defaultMapOperation;
//# sourceMappingURL=gen-paths.js.map