import { genTypesOpts } from "./gen-types";
import prettier = require("prettier");
declare type SwaggerDoc = SwaggerIo.V2.SchemaJson;
declare type Operation = SwaggerIo.V2.SchemaJson.Definitions.Operation;
declare type genPathsOpts = {
    output: string;
    moduleStyle: "commonjs" | "esm";
    failOnMissingOperationId?: boolean;
    typesOpts?: genTypesOpts;
    mapOperation?: (operation: Operation) => Operation;
    templateString?: string;
    prettierOpts?: prettier.Options;
};
export declare function genPaths(swaggerDoc: SwaggerDoc, opts: genPathsOpts): Promise<void>;
export declare function defaultMapOperation(o: Operation): SwaggerIo.V2.SchemaJson.Definitions.Operation;
export {};
