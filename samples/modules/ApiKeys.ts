import * as Types from '../api-types'
import * as ApiCommon from '../api-common'


export type GET_api_keys_Type = {
    'limit'? : number
    'on-behalf-of'? : string
}
export const GET_api_keys
    = ApiCommon.requestMaker
    <GET_api_keys_Type, Types.__GET_api_keys__response >({
        id: 'GET_api_keys',
        path: '/api_keys',
        verb: 'GET',
        parameters: [{"name":"limit","in":"query"},{"name":"on-behalf-of","in":"header"}]
    })



export type create_api_keys_Type = {
    'body'? : any
    'on-behalf-of'? : string
}
export const create_api_keys
    = ApiCommon.requestMaker
    <create_api_keys_Type, Types.__create_api_keys__response >({
        id: 'create_api_keys',
        path: '/api_keys',
        verb: 'POST',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"}]
    })



export type GET_api_keys_api_key_id_Type = {
    'api_key_id' : string
    'on-behalf-of'? : string
}
export const GET_api_keys_api_key_id
    = ApiCommon.requestMaker
    <GET_api_keys_api_key_id_Type, Types.__GET_api_keys_api_key_id__response >({
        id: 'GET_api_keys_api_key_id',
        path: '/api_keys/{api_key_id}',
        verb: 'GET',
        parameters: [{"name":"api_key_id","required":true,"in":"path"},{"name":"on-behalf-of","in":"header"}]
    })



export type DELETE_api_keys_api_key_id_Type = {
    'api_key_id' : string
    'on-behalf-of'? : string
}
export const DELETE_api_keys_api_key_id
    = ApiCommon.requestMaker
    <DELETE_api_keys_api_key_id_Type, void >({
        id: 'DELETE_api_keys_api_key_id',
        path: '/api_keys/{api_key_id}',
        verb: 'DELETE',
        parameters: [{"name":"api_key_id","required":true,"in":"path"},{"name":"on-behalf-of","in":"header"}]
    })



export type PATCH_api_keys_api_key_id_Type = {
    'api_key_id' : string
    'body'? : any
    'on-behalf-of'? : string
}
export const PATCH_api_keys_api_key_id
    = ApiCommon.requestMaker
    <PATCH_api_keys_api_key_id_Type, Types.api_key_name_id >({
        id: 'PATCH_api_keys_api_key_id',
        path: '/api_keys/{api_key_id}',
        verb: 'PATCH',
        parameters: [{"name":"api_key_id","required":true,"in":"path"},{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"}]
    })



export type PUT_api_keys_api_key_id_Type = {
    'api_key_id' : string
    'body'? : any
    'on-behalf-of'? : string
}
export const PUT_api_keys_api_key_id
    = ApiCommon.requestMaker
    <PUT_api_keys_api_key_id_Type, Types.api_key_name_id_scopes >({
        id: 'PUT_api_keys_api_key_id',
        path: '/api_keys/{api_key_id}',
        verb: 'PUT',
        parameters: [{"name":"api_key_id","required":true,"in":"path"},{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"}]
    })



