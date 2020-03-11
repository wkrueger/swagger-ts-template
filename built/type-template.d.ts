import { genTypesOpts } from "./gen-types";
declare type SwaggerType = SwaggerIo.V2.SchemaJson.Definitions.Schema;
declare type SwaggerDoc = SwaggerIo.V2.SchemaJson;
export declare class TypeTemplate {
    opts: genTypesOpts;
    definitionRoot: string;
    mainDoc: SwaggerDoc;
    refPrefix: string;
    constructor(opts: genTypesOpts, definitionRoot: string, mainDoc: SwaggerDoc, refPrefix?: string);
    mapVariableName: (s: string) => string;
    foundRefs: string[];
    typeTemplate(swaggerType: SwaggerType | string, path: string, embraceObjects?: boolean): {
        type: string;
        data: string[];
        extends?: string[];
    };
    mergeAllof(swaggerType: SwaggerType, key?: "allOf" | "anyOf"): {
        swaggerDoc: any;
        extends: any[];
    };
    findDef(src: any, path: string[]): any;
    wrapLiteral(inp: any): string[];
}
export {};
