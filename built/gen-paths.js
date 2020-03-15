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
const lo = require("lodash");
const fs = require("fs");
const cp = require("cp");
const gen_types_1 = require("./gen-types");
const mkdirp = require("mkdirp");
const rimraf = require("rimraf");
const path = require("path");
const util_1 = require("util");
const type_template_1 = require("./type-template");
const prettier = require("prettier");
class GenPathsClass {
    constructor(swaggerDoc, opts) {
        this.swaggerDoc = swaggerDoc;
        this.opts = opts;
        if (!opts.output)
            throw Error("Missing parameter: output.");
        opts.moduleStyle = opts.moduleStyle || "commonjs";
        opts.templateString = opts.templateString || defaultTemplateStr;
        opts.mapOperation = opts.mapOperation || defaultMapOperation;
        opts.prettierOpts = opts.prettierOpts || gen_types_1.defaultPrettierOpts;
        opts.typesOpts = Object.assign(Object.assign({}, (opts.typesOpts || {})), { prettierOpts: opts.prettierOpts });
        this.preNormalize();
        this.typegen = new type_template_1.TypeTemplate(this.opts.typesOpts, "definitions", this.swaggerDoc, "Types.");
        this.lookupPaths = opts.lookupPaths || [];
        const definitionsPath = "#/definitions";
        if (!this.lookupPaths.includes(definitionsPath)) {
            this.lookupPaths.push(definitionsPath);
        }
    }
    preNormalize() {
        this.swaggerDoc = this.swaggerDoc || {};
        this.swaggerDoc.definitions = this.swaggerDoc.definitions || {};
        this.swaggerDoc.paths = this.swaggerDoc.paths || {};
        Object.keys(this.swaggerDoc.paths).forEach(pathKey => {
            const path = this.swaggerDoc.paths[pathKey];
            Object.keys(path).forEach(opKey => {
                if (opKey === "parameters")
                    return;
                if (this.opts.mapOperation) {
                    path[opKey] = this.opts.mapOperation(path[opKey], path, pathKey, opKey);
                }
            });
        });
        const mappedDefs = {};
        Object.keys(this.swaggerDoc.definitions).forEach(key => {
            mappedDefs[gen_types_1.fixVariableName(key)] = this.swaggerDoc.definitions[key];
        });
        this.swaggerDoc.definitions = mappedDefs;
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const { swaggerDoc, opts } = this;
            yield util_1.promisify(rimraf)(opts.output);
            yield util_1.promisify(mkdirp)(path.resolve(opts.output, "modules"));
            yield util_1.promisify(cp)(path.resolve(__dirname, "..", "src", "api-common.ts"), path.resolve(opts.output, "api-common.ts"));
            // - groups operations by tags
            // - "copies down" metadata which were present on higher ranks of the Doc to the scope
            // of each operation.
            // FIXME: cryptic code. Lodash chain bad.
            let tags = lo
                .chain(swaggerDoc.paths)
                .toPairs()
                .map(([path, schema]) => {
                //search for a tag name
                let tags = (() => {
                    var _a;
                    let verbs = Object.keys(schema);
                    let out = [];
                    for (let it = 0; it < verbs.length; it++) {
                        let verb = verbs[it];
                        if (verb === "parameters")
                            continue;
                        let operation = schema[verb];
                        if (!((_a = operation.tags) === null || _a === void 0 ? void 0 : _a.length)) {
                            operation.tags = [this.generateOperationTag(path)];
                        }
                        out.push(...(operation.tags || []).map(camelCased));
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
                    operation.__path__ = path;
                    operation.__tag__ = tags;
                    operation.__verb__ = verb;
                    operation.__parentParameters__ = schema["parameters"];
                    let params = [
                        ...(operation["__parentParameters__"] || []),
                        ...(operation.parameters || [])
                    ]
                        .map(p => {
                        if (p.$ref)
                            p = this.unRef(p);
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
                    return Object.assign(Object.assign({}, operation), { __tag__: tag });
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
                            const oid = this.generateOperationId(v.__path__, v.__verb__);
                            console.info(`operationId missing for route ${v.__verb__.toUpperCase()} ${v.__path__}. Generated name ${oid} from path.`);
                            v.operationId = oid;
                        }
                    }
                    uniq[v.operationId] = v;
                });
                return lo.values(uniq);
            });
            const compiledTemplate = lo.template(this.opts.templateString);
            const tagsPairs = lo.toPairs(tags);
            yield Promise.all(tagsPairs.map(([tag, operations]) => __awaiter(this, void 0, void 0, function* () {
                let merged = compiledTemplate({
                    operations,
                    paramsType: this.paramsType.bind(this),
                    responseType: this.responseType.bind(this),
                    strip: this.strip.bind(this),
                    getImportString: this.getImportString.bind(this),
                    commentBlock: this.commentBlock.bind(this),
                    style: opts.moduleStyle
                });
                merged = prettier.format(merged, opts.prettierOpts);
                yield util_1.promisify(fs.writeFile)(path.resolve(opts.output, "modules", tag + ".ts"), merged);
            })));
            const typesFile = yield gen_types_1.genTypes(swaggerDoc, [...this.lookupPaths, ...this.typegen.foundRefs], Object.assign({ external: true }, (opts.typesOpts || {})));
            yield util_1.promisify(fs.writeFile)(path.resolve(opts.output, "api-types.d.ts"), typesFile);
        });
    }
    unRef(param) {
        let path = param.$ref.substr(2).split("/");
        let found = lo.get(this.swaggerDoc, path);
        if (found) {
            this.lookupPaths.push(param.$ref);
        }
        return found;
    }
    strip(op) {
        return op.map(line => lo.omit(line, "type"));
    }
    /** response types may lie in different places... */
    findResponseSchema(operation) {
        var _a, _b;
        let traversing = operation.responses;
        if (!traversing)
            return;
        traversing = traversing[201] || traversing[200];
        if (!traversing)
            return;
        if (traversing.schema)
            return traversing.schema;
        return (_b = (_a = traversing.content) === null || _a === void 0 ? void 0 : _a["application/json"]) === null || _b === void 0 ? void 0 : _b.schema;
    }
    /** operation comment block, string, merged into template */
    commentBlock(operation) {
        const lines = [`${operation.__verb__.toUpperCase()} ${operation.__path__}  `, ""];
        if (operation.description)
            lines.push(...operation.description.split("\n"));
        return lines.map(line => " * " + line).join("\n");
    }
    /** parameters type, string, merged into template */
    paramsType(operation) {
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
            const generatedType = this.typegen.typeTemplate(param, operation.operationId + ":params", true);
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
    /** response type, string, merged into template */
    responseType(operation) {
        let find = this.findResponseSchema(operation);
        if (!find)
            return "void";
        const generatedType = this.typegen.typeTemplate(find, operation.operationId + ":response", true);
        return generatedType.data.join("\n");
    }
    getImportString(i) {
        if (i.style === "commonjs") {
            return `import ${i.variable} = require('${i.module}')`;
        }
        else {
            return `import * as ${i.variable} from '${i.module}'`;
        }
    }
    /** generates operationId when it is missing */
    generateOperationId(pathKey, methodKey) {
        const pre = pathKey
            .split("/")
            .slice(1)
            .map((expr, idx, list) => {
            if (expr.startsWith("{"))
                return "";
            const next = list[idx + 1];
            if (next && next.startsWith("{")) {
                return expr.substr(0, expr.length - 1);
            }
            return expr;
        })
            .join("_");
        const camel = lo.camelCase(methodKey + "_" + pre);
        console.log(camel);
        return camel;
    }
    /** generates operation tag when it is missing */
    generateOperationTag(pathKey) {
        const found = pathKey.match(/^\/\w+/);
        if (!found)
            return "unknown";
        return found[0].substr(1);
    }
}
exports.GenPathsClass = GenPathsClass;
function genPaths(swaggerDoc, opts) {
    return __awaiter(this, void 0, void 0, function* () {
        const instance = new GenPathsClass(swaggerDoc, opts);
        return instance.run();
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
`;
function defaultMapOperation(o) {
    if (!o.operationId)
        return o;
    o.operationId = gen_types_1.fixVariableName(o.operationId);
    return o;
}
exports.defaultMapOperation = defaultMapOperation;
//# sourceMappingURL=gen-paths.js.map