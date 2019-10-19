import * as ApiCommon from '../api-common'


export type GET_suppression_blocks_Type = {
    'end_time'? : number
    'limit'? : number
    'offset'? : number
    'on-behalf-of'? : string
    'start_time'? : number
}
export const GET_suppression_blocks
    = ApiCommon.requestMaker
    <GET_suppression_blocks_Type, any[] >({
        id: 'GET_suppression_blocks',
        path: '/suppression/blocks',
        verb: 'GET',
        parameters: [{"name":"end_time","in":"query"},{"name":"limit","in":"query"},{"name":"offset","in":"query"},{"name":"on-behalf-of","in":"header"},{"name":"start_time","in":"query"}]
    })



export type DELETE_suppression_blocks_Type = {
    'body'? : any
    'on-behalf-of'? : string
}
export const DELETE_suppression_blocks
    = ApiCommon.requestMaker
    <DELETE_suppression_blocks_Type, void >({
        id: 'DELETE_suppression_blocks',
        path: '/suppression/blocks',
        verb: 'DELETE',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"}]
    })



export type GET_suppression_blocks_email_Type = {
    'email' : string
    'on-behalf-of'? : string
}
export const GET_suppression_blocks_email
    = ApiCommon.requestMaker
    <GET_suppression_blocks_email_Type, any[] >({
        id: 'GET_suppression_blocks_email',
        path: '/suppression/blocks/{email}',
        verb: 'GET',
        parameters: [{"name":"email","required":true,"in":"path"},{"name":"on-behalf-of","in":"header"}]
    })



export type DELETE_suppression_blocks_email_Type = {
    'body'? : any
    'email' : string
    'on-behalf-of'? : string
}
export const DELETE_suppression_blocks_email
    = ApiCommon.requestMaker
    <DELETE_suppression_blocks_email_Type, void >({
        id: 'DELETE_suppression_blocks_email',
        path: '/suppression/blocks/{email}',
        verb: 'DELETE',
        parameters: [{"name":"Authorization","required":true,"in":"header"},{"name":"body","in":"body"},{"name":"email","required":true,"in":"path"},{"name":"on-behalf-of","in":"header"}]
    })



