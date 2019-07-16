declare type SwaggerDoc = SwaggerIo.V2.SchemaJson;
export interface genTypesOpts {
    external?: any;
    filename?: string;
    hideComments?: boolean;
    noOptionals?: boolean;
    mapVariableName?: (s: string) => string;
}
export declare function genTypes(swaggerDoc: SwaggerDoc, opts?: genTypesOpts): Promise<string>;
export {};
