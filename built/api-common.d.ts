declare global {
    namespace GApiCommon {
        interface MergeToRequest {
        }
        interface MergeToResponse {
        }
    }
}
export declare type RequestHandler_t<T> = (payload: ReqHandlerPayload_t & GApiCommon.MergeToRequest, data: any, operation: Operation_t) => Promise<T>;
export interface ReqHandlerPayload_t {
    verb?: string;
    url: string;
    query?: any;
    body?: any;
    headers?: any;
}
export interface Operation_t {
    id: string;
    path: string;
    verb: string;
    parameters: {
        name: string;
        in: string;
        required?: boolean;
    }[];
}
export declare type RequestMaker_t = <Params, Response>(o: Operation_t) => (params: Params & GApiCommon.MergeToRequest) => Promise<Response & GApiCommon.MergeToResponse>;
export declare class SwaggerRequester {
    paramBuilder(operation: Operation_t, data: any): ReqHandlerPayload_t;
    handler: RequestHandler_t<any>;
}
export declare const settings: {
    getRequester(): SwaggerRequester;
};
export declare const requestMaker: RequestMaker_t;
