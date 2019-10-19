import * as Types from '../api-types'
import * as ApiCommon from '../api-common'


export type GET_whitelabel_links_Type = {
    'limit'? : number
    'on-behalf-of'? : string
}
export const GET_whitelabel_links
    = ApiCommon.requestMaker
    <GET_whitelabel_links_Type, Types.link_whitelabel[] >({
        id: 'GET_whitelabel_links',
        path: '/whitelabel/links',
        verb: 'GET',
        parameters: [{"name":"limit","in":"query"},{"name":"on-behalf-of","in":"header"}]
    })



export type POST_whitelabel_links_Type = {
    'body'? : any
    'limit'? : number
    'offset'? : number
    'on-behalf-of'? : string
}
export const POST_whitelabel_links
    = ApiCommon.requestMaker
    <POST_whitelabel_links_Type, Types.link_whitelabel >({
        id: 'POST_whitelabel_links',
        path: '/whitelabel/links',
        verb: 'POST',
        parameters: [{"name":"body","in":"body"},{"name":"limit","in":"query"},{"name":"offset","in":"query"},{"name":"on-behalf-of","in":"header"}]
    })



export type GET_whitelabel_links_id_Type = {
    'id' : number
    'on-behalf-of'? : string
}
export const GET_whitelabel_links_id
    = ApiCommon.requestMaker
    <GET_whitelabel_links_id_Type, Types.link_whitelabel >({
        id: 'GET_whitelabel_links_id',
        path: '/whitelabel/links/{id}',
        verb: 'GET',
        parameters: [{"name":"id","required":true,"in":"path"},{"name":"on-behalf-of","in":"header"}]
    })



export type PATCH_whitelabel_links_id_Type = {
    'body'? : any
    'id' : number
    'on-behalf-of'? : string
}
export const PATCH_whitelabel_links_id
    = ApiCommon.requestMaker
    <PATCH_whitelabel_links_id_Type, Types.link_whitelabel >({
        id: 'PATCH_whitelabel_links_id',
        path: '/whitelabel/links/{id}',
        verb: 'PATCH',
        parameters: [{"name":"body","in":"body"},{"name":"id","required":true,"in":"path"},{"name":"on-behalf-of","in":"header"}]
    })



export type DELETE_whitelabel_links_id_Type = {
    'body'? : any
    'id' : number
    'on-behalf-of'? : string
}
export const DELETE_whitelabel_links_id
    = ApiCommon.requestMaker
    <DELETE_whitelabel_links_id_Type, void >({
        id: 'DELETE_whitelabel_links_id',
        path: '/whitelabel/links/{id}',
        verb: 'DELETE',
        parameters: [{"name":"body","in":"body"},{"name":"id","required":true,"in":"path"},{"name":"on-behalf-of","in":"header"}]
    })



export type GET_whitelabel_links_default_Type = {
    'domain'? : string
    'on-behalf-of'? : string
}
export const GET_whitelabel_links_default
    = ApiCommon.requestMaker
    <GET_whitelabel_links_default_Type, Types.link_whitelabel >({
        id: 'GET_whitelabel_links_default',
        path: '/whitelabel/links/default',
        verb: 'GET',
        parameters: [{"name":"domain","in":"query"},{"name":"on-behalf-of","in":"header"}]
    })



export type POST_whitelabel_links_id_validate_Type = {
    'body'? : any
    'id' : number
    'on-behalf-of'? : string
}
export const POST_whitelabel_links_id_validate
    = ApiCommon.requestMaker
    <POST_whitelabel_links_id_validate_Type, Types.__POST_whitelabel_links_id_validate__response >({
        id: 'POST_whitelabel_links_id_validate',
        path: '/whitelabel/links/{id}/validate',
        verb: 'POST',
        parameters: [{"name":"body","in":"body"},{"name":"id","required":true,"in":"path"},{"name":"on-behalf-of","in":"header"}]
    })



export type GET_whitelabel_links_subuser_Type = {
    'on-behalf-of'? : string
    'username' : string
}
export const GET_whitelabel_links_subuser
    = ApiCommon.requestMaker
    <GET_whitelabel_links_subuser_Type, Types.link_whitelabel >({
        id: 'GET_whitelabel_links_subuser',
        path: '/whitelabel/links/subuser',
        verb: 'GET',
        parameters: [{"name":"on-behalf-of","in":"header"},{"name":"username","required":true,"in":"query"}]
    })



export type DELETE_whitelabel_links_subuser_Type = {
    'body'? : any
    'on-behalf-of'? : string
    'username' : string
}
export const DELETE_whitelabel_links_subuser
    = ApiCommon.requestMaker
    <DELETE_whitelabel_links_subuser_Type, void >({
        id: 'DELETE_whitelabel_links_subuser',
        path: '/whitelabel/links/subuser',
        verb: 'DELETE',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"},{"name":"username","required":true,"in":"query"}]
    })



export type POST_whitelabel_links_link_id_subuser_Type = {
    'body'? : any
    'link_id' : number
    'on-behalf-of'? : string
}
export const POST_whitelabel_links_link_id_subuser
    = ApiCommon.requestMaker
    <POST_whitelabel_links_link_id_subuser_Type, Types.link_whitelabel >({
        id: 'POST_whitelabel_links_link_id_subuser',
        path: '/whitelabel/links/{link_id}/subuser',
        verb: 'POST',
        parameters: [{"name":"body","in":"body"},{"name":"link_id","required":true,"in":"path"},{"name":"on-behalf-of","in":"header"}]
    })



