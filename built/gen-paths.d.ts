import { genTypesOpts } from "./gen-types";
declare type SwaggerDoc = SwaggerIo.V2.SchemaJson;
declare type genPathsOpts = {
    output: string;
    moduleStyle: "commonjs" | "esm";
    failOnMissingOperationId?: boolean;
    typesOpts?: genTypesOpts;
};
export declare function genPaths(swaggerDoc: SwaggerDoc, opts: genPathsOpts): Promise<void>;
export {};
