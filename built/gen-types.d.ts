import prettier = require("prettier");
declare type SwaggerDoc = SwaggerIo.V2.SchemaJson;
export interface genTypesOpts {
    external?: any;
    hideComments?: boolean;
    mapVariableName?: (s: string) => string;
    prettierOpts?: prettier.Options;
}
export declare function genTypes(swaggerDoc: SwaggerDoc, lookupPaths: string[], opts?: genTypesOpts): Promise<string>;
export declare const fixVariableName: (s: string) => string;
export declare const defaultPrettierOpts: prettier.Options;
export {};
