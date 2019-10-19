import * as Types from '../api-types'
import * as ApiCommon from '../api-common'


export type POST_asm_groups_group_id_suppressions_Type = {
    'body'? : any
    'group_id' : string
    'on-behalf-of'? : string
}
export const POST_asm_groups_group_id_suppressions
    = ApiCommon.requestMaker
    <POST_asm_groups_group_id_suppressions_Type, Types.__POST_asm_groups_group_id_suppressions__response >({
        id: 'POST_asm_groups_group_id_suppressions',
        path: '/asm/groups/{group_id}/suppressions',
        verb: 'POST',
        parameters: [{"name":"body","in":"body"},{"name":"group_id","required":true,"in":"path"},{"name":"on-behalf-of","in":"header"}]
    })



export type GET_asm_groups_group_id_suppressions_Type = {
    'group_id' : string
    'on-behalf-of'? : string
}
export const GET_asm_groups_group_id_suppressions
    = ApiCommon.requestMaker
    <GET_asm_groups_group_id_suppressions_Type, any[] >({
        id: 'GET_asm_groups_group_id_suppressions',
        path: '/asm/groups/{group_id}/suppressions',
        verb: 'GET',
        parameters: [{"name":"group_id","required":true,"in":"path"},{"name":"on-behalf-of","in":"header"}]
    })



export type DELETE_asm_groups_group_id_suppressions_email_Type = {
    'body'? : any
    'email' : string
    'group_id' : string
    'on-behalf-of'? : string
}
export const DELETE_asm_groups_group_id_suppressions_email
    = ApiCommon.requestMaker
    <DELETE_asm_groups_group_id_suppressions_email_Type, void >({
        id: 'DELETE_asm_groups_group_id_suppressions_email',
        path: '/asm/groups/{group_id}/suppressions/{email}',
        verb: 'DELETE',
        parameters: [{"name":"body","in":"body"},{"name":"email","required":true,"in":"path"},{"name":"group_id","required":true,"in":"path"},{"name":"on-behalf-of","in":"header"}]
    })



export type GET_asm_suppressions_Type = {
    'on-behalf-of'? : string
}
export const GET_asm_suppressions
    = ApiCommon.requestMaker
    <GET_asm_suppressions_Type, any[] >({
        id: 'GET_asm_suppressions',
        path: '/asm/suppressions',
        verb: 'GET',
        parameters: [{"name":"on-behalf-of","in":"header"}]
    })



export type GET_asm_suppressions_email_Type = {
    'email' : string
    'on-behalf-of'? : string
}
export const GET_asm_suppressions_email
    = ApiCommon.requestMaker
    <GET_asm_suppressions_email_Type, Types.__GET_asm_suppressions_email__response >({
        id: 'GET_asm_suppressions_email',
        path: '/asm/suppressions/{email}',
        verb: 'GET',
        parameters: [{"name":"email","required":true,"in":"path"},{"name":"on-behalf-of","in":"header"}]
    })



export type POST_asm_groups_group_id_suppressions_search_Type = {
    'body'? : any
    'group_id' : string
    'on-behalf-of'? : string
}
export const POST_asm_groups_group_id_suppressions_search
    = ApiCommon.requestMaker
    <POST_asm_groups_group_id_suppressions_search_Type, Types.__POST_asm_groups_group_id_suppressions_search__response >({
        id: 'POST_asm_groups_group_id_suppressions_search',
        path: '/asm/groups/{group_id}/suppressions/search',
        verb: 'POST',
        parameters: [{"name":"body","in":"body"},{"name":"group_id","required":true,"in":"path"},{"name":"on-behalf-of","in":"header"}]
    })



