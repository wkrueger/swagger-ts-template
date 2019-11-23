declare global {
    namespace GApiCommon {
        interface MergeToRequest {
        }
        interface MergeToResponse {
        }
    }
}
export interface IRequest {
    verb?: string;
    url: string;
    query?: any;
    body?: any;
    headers?: any;
}
export interface IOperation {
    id: string;
    path: string;
    verb: string;
    parameters: {
        name: string;
        in: string;
        required?: boolean;
    }[];
}
export declare abstract class SwaggerRequester {
    paramBuilder(operation: IOperation, data: any): IRequest;
    /**
     * Override to return API Response + Common extra fields
     * (Response + GApiCommon.MergeToResponse)
     */
    abstract handler(request: IRequest, input: Record<string, any> & GApiCommon.MergeToRequest, operation: IOperation): Promise<any>;
}
export declare const settings: {
    getRequester(): SwaggerRequester;
};
export declare const requestMaker: <Input, Response_1>(operation: IOperation) => (_input: Input & GApiCommon.MergeToRequest) => Promise<Response_1 & GApiCommon.MergeToResponse>;
