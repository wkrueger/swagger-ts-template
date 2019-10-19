import * as Types from '../api-types'
import * as ApiCommon from '../api-common'


export type GET_whitelabel_domains_Type = {
    'domain'? : string
    'exclude_subusers'? : boolean
    'limit'? : number
    'offset'? : number
    'on-behalf-of'? : string
    'username'? : string
}
export const GET_whitelabel_domains
    = ApiCommon.requestMaker
    <GET_whitelabel_domains_Type, any[] >({
        id: 'GET_whitelabel_domains',
        path: '/whitelabel/domains',
        verb: 'GET',
        parameters: [{"name":"domain","in":"query"},{"name":"exclude_subusers","in":"query"},{"name":"limit","in":"query"},{"name":"offset","in":"query"},{"name":"on-behalf-of","in":"header"},{"name":"username","in":"query"}]
    })



export type POST_whitelabel_domains_Type = {
    'body'? : any
    'on-behalf-of'? : string
}
export const POST_whitelabel_domains
    = ApiCommon.requestMaker
    <POST_whitelabel_domains_Type, Types.whitelabel__domain >({
        id: 'POST_whitelabel_domains',
        path: '/whitelabel/domains',
        verb: 'POST',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"}]
    })



export type GET_whitelabel_domains_domain_id_Type = {
    'domain_id' : string
    'on-behalf-of'? : string
}
export const GET_whitelabel_domains_domain_id
    = ApiCommon.requestMaker
    <GET_whitelabel_domains_domain_id_Type, Types.whitelabel__domain >({
        id: 'GET_whitelabel_domains_domain_id',
        path: '/whitelabel/domains/{domain_id}',
        verb: 'GET',
        parameters: [{"name":"domain_id","required":true,"in":"path"},{"name":"on-behalf-of","in":"header"}]
    })



export type PATCH_whitelabel_domains_domain_id_Type = {
    'body'? : any
    'domain_id' : string
    'on-behalf-of'? : string
}
export const PATCH_whitelabel_domains_domain_id
    = ApiCommon.requestMaker
    <PATCH_whitelabel_domains_domain_id_Type, Types.__PATCH_whitelabel_domains_domain_id__response >({
        id: 'PATCH_whitelabel_domains_domain_id',
        path: '/whitelabel/domains/{domain_id}',
        verb: 'PATCH',
        parameters: [{"name":"body","in":"body"},{"name":"domain_id","required":true,"in":"path"},{"name":"on-behalf-of","in":"header"}]
    })



export type DELETE_whitelabel_domains_domain_id_Type = {
    'body'? : any
    'domain_id' : string
    'on-behalf-of'? : string
}
export const DELETE_whitelabel_domains_domain_id
    = ApiCommon.requestMaker
    <DELETE_whitelabel_domains_domain_id_Type, void >({
        id: 'DELETE_whitelabel_domains_domain_id',
        path: '/whitelabel/domains/{domain_id}',
        verb: 'DELETE',
        parameters: [{"name":"body","in":"body"},{"name":"domain_id","required":true,"in":"path"},{"name":"on-behalf-of","in":"header"}]
    })



export type GET_whitelabel_domains_default_Type = {
    'on-behalf-of'? : string
}
export const GET_whitelabel_domains_default
    = ApiCommon.requestMaker
    <GET_whitelabel_domains_default_Type, Types.whitelabel_domain_spf >({
        id: 'GET_whitelabel_domains_default',
        path: '/whitelabel/domains/default',
        verb: 'GET',
        parameters: [{"name":"on-behalf-of","in":"header"}]
    })



export type POST_whitelabel_domains_id_ips_Type = {
    'body'? : any
    'id' : string
    'on-behalf-of'? : string
}
export const POST_whitelabel_domains_id_ips
    = ApiCommon.requestMaker
    <POST_whitelabel_domains_id_ips_Type, Types.whitelabel_domain_spf >({
        id: 'POST_whitelabel_domains_id_ips',
        path: '/whitelabel/domains/{id}/ips',
        verb: 'POST',
        parameters: [{"name":"body","in":"body"},{"name":"id","required":true,"in":"path"},{"name":"on-behalf-of","in":"header"}]
    })



export type DELETE_whitelabel_domains_id_ips_ip_Type = {
    'body'? : any
    'id' : string
    'ip' : string
    'on-behalf-of'? : string
}
export const DELETE_whitelabel_domains_id_ips_ip
    = ApiCommon.requestMaker
    <DELETE_whitelabel_domains_id_ips_ip_Type, Types.whitelabel_domain_spf >({
        id: 'DELETE_whitelabel_domains_id_ips_ip',
        path: '/whitelabel/domains/{id}/ips/{ip}',
        verb: 'DELETE',
        parameters: [{"name":"body","in":"body"},{"name":"id","required":true,"in":"path"},{"name":"ip","required":true,"in":"path"},{"name":"on-behalf-of","in":"header"}]
    })



export type POST_whitelabel_domains_id_validate_Type = {
    'body'? : any
    'id' : string
    'on-behalf-of'? : string
}
export const POST_whitelabel_domains_id_validate
    = ApiCommon.requestMaker
    <POST_whitelabel_domains_id_validate_Type, Types.__POST_whitelabel_domains_id_validate__response >({
        id: 'POST_whitelabel_domains_id_validate',
        path: '/whitelabel/domains/{id}/validate',
        verb: 'POST',
        parameters: [{"name":"body","in":"body"},{"name":"id","required":true,"in":"path"},{"name":"on-behalf-of","in":"header"}]
    })



export type GET_whitelabel_domains_subuser_Type = {
    'on-behalf-of'? : string
}
export const GET_whitelabel_domains_subuser
    = ApiCommon.requestMaker
    <GET_whitelabel_domains_subuser_Type, Types.whitelabel_domain_spf >({
        id: 'GET_whitelabel_domains_subuser',
        path: '/whitelabel/domains/subuser',
        verb: 'GET',
        parameters: [{"name":"on-behalf-of","in":"header"}]
    })



export type DELETE_whitelabel_domains_subuser_Type = {
    'body'? : any
    'on-behalf-of'? : string
}
export const DELETE_whitelabel_domains_subuser
    = ApiCommon.requestMaker
    <DELETE_whitelabel_domains_subuser_Type, void >({
        id: 'DELETE_whitelabel_domains_subuser',
        path: '/whitelabel/domains/subuser',
        verb: 'DELETE',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"}]
    })



export type POST_whitelabel_domains_domain_id_subuser_Type = {
    'body'? : any
    'domain_id' : string
    'on-behalf-of'? : string
}
export const POST_whitelabel_domains_domain_id_subuser
    = ApiCommon.requestMaker
    <POST_whitelabel_domains_domain_id_subuser_Type, Types.whitelabel_domain_spf >({
        id: 'POST_whitelabel_domains_domain_id_subuser',
        path: '/whitelabel/domains/{domain_id}/subuser',
        verb: 'POST',
        parameters: [{"name":"body","in":"body"},{"name":"domain_id","required":true,"in":"path"},{"name":"on-behalf-of","in":"header"}]
    })



