import * as Types from '../api-types'
import * as ApiCommon from '../api-common'


export type GET_asm_groups_Type = {
    'id'? : number
    'on-behalf-of'? : string
}
export const GET_asm_groups
    = ApiCommon.requestMaker
    <GET_asm_groups_Type, Types.suppression_group[] >({
        id: 'GET_asm_groups',
        path: '/asm/groups',
        verb: 'GET',
        parameters: [{"name":"id","in":"query"},{"name":"on-behalf-of","in":"header"}]
    })



export type POST_asm_groups_Type = {
    'body'? : any
    'on-behalf-of'? : string
}
export const POST_asm_groups
    = ApiCommon.requestMaker
    <POST_asm_groups_Type, Types.__POST_asm_groups__response >({
        id: 'POST_asm_groups',
        path: '/asm/groups',
        verb: 'POST',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"}]
    })



export type GET_asm_groups_group_id_Type = {
    'group_id' : string
    'on-behalf-of'? : string
}
export const GET_asm_groups_group_id
    = ApiCommon.requestMaker
    <GET_asm_groups_group_id_Type, Types.__GET_asm_groups_group_id__response >({
        id: 'GET_asm_groups_group_id',
        path: '/asm/groups/{group_id}',
        verb: 'GET',
        parameters: [{"name":"group_id","required":true,"in":"path"},{"name":"on-behalf-of","in":"header"}]
    })



export type PATCH_asm_groups_group_id_Type = {
    'body'? : any
    'group_id' : string
    'on-behalf-of'? : string
}
export const PATCH_asm_groups_group_id
    = ApiCommon.requestMaker
    <PATCH_asm_groups_group_id_Type, Types.suppression_group >({
        id: 'PATCH_asm_groups_group_id',
        path: '/asm/groups/{group_id}',
        verb: 'PATCH',
        parameters: [{"name":"Authorization","required":true,"in":"header"},{"name":"body","in":"body"},{"name":"group_id","required":true,"in":"path"},{"name":"on-behalf-of","in":"header"}]
    })



export type DELETE_asm_groups_group_id_Type = {
    'body'? : any
    'group_id' : string
    'on-behalf-of'? : string
}
export const DELETE_asm_groups_group_id
    = ApiCommon.requestMaker
    <DELETE_asm_groups_group_id_Type, void >({
        id: 'DELETE_asm_groups_group_id',
        path: '/asm/groups/{group_id}',
        verb: 'DELETE',
        parameters: [{"name":"body","in":"body"},{"name":"group_id","required":true,"in":"path"},{"name":"on-behalf-of","in":"header"}]
    })



