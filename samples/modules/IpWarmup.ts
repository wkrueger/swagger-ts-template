import * as Types from '../api-types'
import * as ApiCommon from '../api-common'


export type GET_ips_warmup_Type = {
    'on-behalf-of'? : string
}
export const GET_ips_warmup
    = ApiCommon.requestMaker
    <GET_ips_warmup_Type, Types.ip_warmup_response >({
        id: 'GET_ips_warmup',
        path: '/ips/warmup',
        verb: 'GET',
        parameters: [{"name":"on-behalf-of","in":"header"}]
    })



export type POST_ips_warmup_Type = {
    'body'? : any
    'on-behalf-of'? : string
}
export const POST_ips_warmup
    = ApiCommon.requestMaker
    <POST_ips_warmup_Type, Types.ip_warmup_response >({
        id: 'POST_ips_warmup',
        path: '/ips/warmup',
        verb: 'POST',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"}]
    })



export type GET_ips_warmup_ip_address_Type = {
    'ip_address' : string
    'on-behalf-of'? : string
}
export const GET_ips_warmup_ip_address
    = ApiCommon.requestMaker
    <GET_ips_warmup_ip_address_Type, Types.ip_warmup_response >({
        id: 'GET_ips_warmup_ip_address',
        path: '/ips/warmup/{ip_address}',
        verb: 'GET',
        parameters: [{"name":"ip_address","required":true,"in":"path"},{"name":"on-behalf-of","in":"header"}]
    })



export type DELETE_ips_warmup_ip_address_Type = {
    'body'? : any
    'ip_address' : string
    'on-behalf-of'? : string
}
export const DELETE_ips_warmup_ip_address
    = ApiCommon.requestMaker
    <DELETE_ips_warmup_ip_address_Type, void >({
        id: 'DELETE_ips_warmup_ip_address',
        path: '/ips/warmup/{ip_address}',
        verb: 'DELETE',
        parameters: [{"name":"body","in":"body"},{"name":"ip_address","required":true,"in":"path"},{"name":"on-behalf-of","in":"header"}]
    })



