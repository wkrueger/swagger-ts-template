import * as Types from '../api-types'
import * as ApiCommon from '../api-common'


export type POST_user_webhooks_parse_settings_Type = {
    'body'? : Types.parse_setting
    'on-behalf-of'? : string
}
export const POST_user_webhooks_parse_settings
    = ApiCommon.requestMaker
    <POST_user_webhooks_parse_settings_Type, Types.parse_setting >({
        id: 'POST_user_webhooks_parse_settings',
        path: '/user/webhooks/parse/settings',
        verb: 'POST',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"}]
    })



export type GET_user_webhooks_parse_settings_Type = {
    'on-behalf-of'? : string
}
export const GET_user_webhooks_parse_settings
    = ApiCommon.requestMaker
    <GET_user_webhooks_parse_settings_Type, Types.__GET_user_webhooks_parse_settings__response >({
        id: 'GET_user_webhooks_parse_settings',
        path: '/user/webhooks/parse/settings',
        verb: 'GET',
        parameters: [{"name":"on-behalf-of","in":"header"}]
    })



export type GET_user_webhooks_parse_settings_hostname_Type = {
    'hostname' : string
    'on-behalf-of'? : string
}
export const GET_user_webhooks_parse_settings_hostname
    = ApiCommon.requestMaker
    <GET_user_webhooks_parse_settings_hostname_Type, Types.parse_setting >({
        id: 'GET_user_webhooks_parse_settings_hostname',
        path: '/user/webhooks/parse/settings/{hostname}',
        verb: 'GET',
        parameters: [{"name":"hostname","required":true,"in":"path"},{"name":"on-behalf-of","in":"header"}]
    })



export type PATCH_user_webhooks_parse_settings_hostname_Type = {
    'body'? : Types.parse_setting
    'hostname' : string
    'on-behalf-of'? : string
}
export const PATCH_user_webhooks_parse_settings_hostname
    = ApiCommon.requestMaker
    <PATCH_user_webhooks_parse_settings_hostname_Type, Types.parse_setting >({
        id: 'PATCH_user_webhooks_parse_settings_hostname',
        path: '/user/webhooks/parse/settings/{hostname}',
        verb: 'PATCH',
        parameters: [{"name":"body","in":"body"},{"name":"hostname","required":true,"in":"path"},{"name":"on-behalf-of","in":"header"}]
    })



export type DELETE_user_webhooks_parse_settings_hostname_Type = {
    'hostname' : string
    'on-behalf-of'? : string
}
export const DELETE_user_webhooks_parse_settings_hostname
    = ApiCommon.requestMaker
    <DELETE_user_webhooks_parse_settings_hostname_Type, void >({
        id: 'DELETE_user_webhooks_parse_settings_hostname',
        path: '/user/webhooks/parse/settings/{hostname}',
        verb: 'DELETE',
        parameters: [{"name":"hostname","required":true,"in":"path"},{"name":"on-behalf-of","in":"header"}]
    })



