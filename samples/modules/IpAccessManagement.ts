import * as Types from '../api-types'
import * as ApiCommon from '../api-common'


export type GET_access_settings_activity_Type = {
    'limit'? : number
    'on-behalf-of'? : string
}
export const GET_access_settings_activity
    = ApiCommon.requestMaker
    <GET_access_settings_activity_Type, Types.__GET_access_settings_activity__response >({
        id: 'GET_access_settings_activity',
        path: '/access_settings/activity',
        verb: 'GET',
        parameters: [{"name":"limit","in":"query"},{"name":"on-behalf-of","in":"header"}]
    })



export type GET_access_settings_whitelist_Type = {
    'on-behalf-of'? : string
}
export const GET_access_settings_whitelist
    = ApiCommon.requestMaker
    <GET_access_settings_whitelist_Type, Types.__GET_access_settings_whitelist__response >({
        id: 'GET_access_settings_whitelist',
        path: '/access_settings/whitelist',
        verb: 'GET',
        parameters: [{"name":"on-behalf-of","in":"header"}]
    })



export type POST_access_settings_whitelist_Type = {
    'body'? : any
    'on-behalf-of'? : string
}
export const POST_access_settings_whitelist
    = ApiCommon.requestMaker
    <POST_access_settings_whitelist_Type, Types.__POST_access_settings_whitelist__response >({
        id: 'POST_access_settings_whitelist',
        path: '/access_settings/whitelist',
        verb: 'POST',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"}]
    })



export type DELETE_access_settings_whitelist_Type = {
    'body'? : any
    'on-behalf-of'? : string
}
export const DELETE_access_settings_whitelist
    = ApiCommon.requestMaker
    <DELETE_access_settings_whitelist_Type, void >({
        id: 'DELETE_access_settings_whitelist',
        path: '/access_settings/whitelist',
        verb: 'DELETE',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"}]
    })



export type GET_access_settings_whitelist_rule_id_Type = {
    'on-behalf-of'? : string
    'rule_id' : string
}
export const GET_access_settings_whitelist_rule_id
    = ApiCommon.requestMaker
    <GET_access_settings_whitelist_rule_id_Type, Types.__GET_access_settings_whitelist_rule_id__response >({
        id: 'GET_access_settings_whitelist_rule_id',
        path: '/access_settings/whitelist/{rule_id}',
        verb: 'GET',
        parameters: [{"name":"on-behalf-of","in":"header"},{"name":"rule_id","required":true,"in":"path"}]
    })



export type DELETE_access_settings_whitelist_rule_id_Type = {
    'body'? : any
    'on-behalf-of'? : string
    'rule_id' : string
}
export const DELETE_access_settings_whitelist_rule_id
    = ApiCommon.requestMaker
    <DELETE_access_settings_whitelist_rule_id_Type, void >({
        id: 'DELETE_access_settings_whitelist_rule_id',
        path: '/access_settings/whitelist/{rule_id}',
        verb: 'DELETE',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"},{"name":"rule_id","required":true,"in":"path"}]
    })



