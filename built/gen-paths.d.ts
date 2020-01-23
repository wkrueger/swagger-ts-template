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
    swaggerDoc: SwaggerDoc;
    opts: genPathsOpts;
    constructor(swaggerDoc: SwaggerDoc, opts: genPathsOpts);
    typegen: TypeTemplate;
    run(): Promise<void>;
    preNormalize(): void;
    unRef(param: any): unknown;
    strip(op: any[]): {}[];
    findResponseSchema(operation: any): any;
    commentBlock(operation: Operation): string;
    paramsType(operation: Operation): string;
    responseType(operation: SwaggerIo.V2.SchemaJson.Definitions.Operation): string;
    getImportString(i: {
        variable: string;
        module: string;
        style: "commonjs" | "esm";
    }): string;
}
export declare function genPaths(swaggerDoc: SwaggerDoc, opts: genPathsOpts): Promise<void>;
export declare function defaultMapOperation(o: Operation): Operation;
export declare function generateOperationId(pathKey: string, methodKey: string): string;
export declare function generateOperationTag(pathKey: string): string;
export {};
