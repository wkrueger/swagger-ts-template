import * as Types from '../api-types'
import * as ApiCommon from '../api-common'


export type GET_whitelabel_ips_Type = {
    'ip'? : string
    'limit'? : number
    'offset'? : number
    'on-behalf-of'? : string
}
export const GET_whitelabel_ips
    = ApiCommon.requestMaker
    <GET_whitelabel_ips_Type, Types.ip_whitelabel[] >({
        id: 'GET_whitelabel_ips',
        path: '/whitelabel/ips',
        verb: 'GET',
        parameters: [{"name":"ip","in":"query"},{"name":"limit","in":"query"},{"name":"offset","in":"query"},{"name":"on-behalf-of","in":"header"}]
    })



export type POST_whitelabel_ips_Type = {
    'body'? : any
    'on-behalf-of'? : string
}
export const POST_whitelabel_ips
    = ApiCommon.requestMaker
    <POST_whitelabel_ips_Type, Types.ip_whitelabel >({
        id: 'POST_whitelabel_ips',
        path: '/whitelabel/ips',
        verb: 'POST',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"}]
    })



export type GET_whitelabel_ips_id_Type = {
    'id' : string
    'on-behalf-of'? : string
}
export const GET_whitelabel_ips_id
    = ApiCommon.requestMaker
    <GET_whitelabel_ips_id_Type, Types.ip_whitelabel >({
        id: 'GET_whitelabel_ips_id',
        path: '/whitelabel/ips/{id}',
        verb: 'GET',
        parameters: [{"name":"id","required":true,"in":"path"},{"name":"on-behalf-of","in":"header"}]
    })



export type DELETE_whitelabel_ips_id_Type = {
    'body'? : any
    'id' : string
    'on-behalf-of'? : string
}
export const DELETE_whitelabel_ips_id
    = ApiCommon.requestMaker
    <DELETE_whitelabel_ips_id_Type, void >({
        id: 'DELETE_whitelabel_ips_id',
        path: '/whitelabel/ips/{id}',
        verb: 'DELETE',
        parameters: [{"name":"body","in":"body"},{"name":"id","required":true,"in":"path"},{"name":"on-behalf-of","in":"header"}]
    })



export type POST_whitelabel_ips_id_validate_Type = {
    'body'? : any
    'id' : number
    'on-behalf-of'? : string
}
export const POST_whitelabel_ips_id_validate
    = ApiCommon.requestMaker
    <POST_whitelabel_ips_id_validate_Type, Types.__POST_whitelabel_ips_id_validate__response >({
        id: 'POST_whitelabel_ips_id_validate',
        path: '/whitelabel/ips/{id}/validate',
        verb: 'POST',
        parameters: [{"name":"body","in":"body"},{"name":"id","required":true,"in":"path"},{"name":"on-behalf-of","in":"header"}]
    })



