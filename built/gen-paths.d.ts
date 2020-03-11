import { genTypesOpts } from "./gen-types";
import { TypeTemplate } from "./type-template";
import prettier = require("prettier");
declare type SwaggerDoc = SwaggerIo.V2.SchemaJson;
declare type Operation = SwaggerIo.V2.SchemaJson.Definitions.Operation & {
    __path__: string;
    __verb__: string;
};
declare type genPathsOpts = {
    output: string;
    moduleStyle: "commonjs" | "esm";
    failOnMissingOperationId?: boolean;
    typesOpts?: genTypesOpts;
    mapOperation?: (operation: Operation, pathItem: SwaggerIo.V2.SchemaJson.Definitions.PathItem, pathKey: string, methodKey: string) => Operation;
    templateString?: string;
    prettierOpts?: prettier.Options;
};
export declare class GenPathsClass {
    private swaggerDoc;
    opts: genPathsOpts;
    constructor(swaggerDoc: SwaggerDoc, opts: genPathsOpts);
    typegen: TypeTemplate;
    lookupPaths: string[];
    preNormalize(): void;
    run(): Promise<void>;
    unRef(param: any): unknown;
    strip(op: any[]): {}[];
    /** response types may lie in different places... */
    findResponseSchema(operation: any): any;
    /** operation comment block, string, merged into template */
    commentBlock(operation: Operation): string;
    /** parameters type, string, merged into template */
    paramsType(operation: Operation): string;
    /** response type, string, merged into template */
    responseType(operation: SwaggerIo.V2.SchemaJson.Definitions.Operation): string;
    getImportString(i: {
        variable: string;
        module: string;
        style: "commonjs" | "esm";
    }): string;
    /** generates operationId when it is missing */
    generateOperationId(pathKey: string, methodKey: string): string;
    /** generates operation tag when it is missing */
    generateOperationTag(pathKey: string): string;
}
export declare function genPaths(swaggerDoc: SwaggerDoc, opts: genPathsOpts): Promise<void>;
export declare function defaultMapOperation(o: Operation): Operation;
export {};
