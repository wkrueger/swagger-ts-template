import * as Types from '../api-types'
import * as ApiCommon from '../api-common'


export type GET_suppression_unsubscribes_Type = {
    'end_time'? : number
    'limit'? : number
    'offset'? : number
    'on-behalf-of'? : string
    'start_time'? : number
}
export const GET_suppression_unsubscribes
    = ApiCommon.requestMaker
    <GET_suppression_unsubscribes_Type, any[] >({
        id: 'GET_suppression_unsubscribes',
        path: '/suppression/unsubscribes',
        verb: 'GET',
        parameters: [{"name":"end_time","in":"query"},{"name":"limit","in":"query"},{"name":"offset","in":"query"},{"name":"on-behalf-of","in":"header"},{"name":"start_time","in":"query"}]
    })



export type POST_asm_suppressions_global_Type = {
    'body'? : any
    'on-behalf-of'? : string
}
export const POST_asm_suppressions_global
    = ApiCommon.requestMaker
    <POST_asm_suppressions_global_Type, Types.__POST_asm_suppressions_global__response >({
        id: 'POST_asm_suppressions_global',
        path: '/asm/suppressions/global',
        verb: 'POST',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"}]
    })



export type GET_asm_suppressions_global_email_Type = {
    'email' : string
    'on-behalf-of'? : string
}
export const GET_asm_suppressions_global_email
    = ApiCommon.requestMaker
    <GET_asm_suppressions_global_email_Type, Types.__GET_asm_suppressions_global_email__response >({
        id: 'GET_asm_suppressions_global_email',
        path: '/asm/suppressions/global/{email}',
        verb: 'GET',
        parameters: [{"name":"email","required":true,"in":"path"},{"name":"on-behalf-of","in":"header"}]
    })



export type DELETE_asm_suppressions_global_email_Type = {
    'body'? : any
    'email' : string
    'on-behalf-of'? : string
}
export const DELETE_asm_suppressions_global_email
    = ApiCommon.requestMaker
    <DELETE_asm_suppressions_global_email_Type, void >({
        id: 'DELETE_asm_suppressions_global_email',
        path: '/asm/suppressions/global/{email}',
        verb: 'DELETE',
        parameters: [{"name":"body","in":"body"},{"name":"email","required":true,"in":"path"},{"name":"on-behalf-of","in":"header"}]
    })



