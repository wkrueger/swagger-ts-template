import * as Types from '../api-types'
import * as ApiCommon from '../api-common'


export type GET_tracking_settings_Type = {
    'limit'? : number
    'offset'? : number
    'on-behalf-of'? : string
}
export const GET_tracking_settings
    = ApiCommon.requestMaker
    <GET_tracking_settings_Type, Types.__GET_tracking_settings__response >({
        id: 'GET_tracking_settings',
        path: '/tracking_settings',
        verb: 'GET',
        parameters: [{"name":"limit","in":"query"},{"name":"offset","in":"query"},{"name":"on-behalf-of","in":"header"}]
    })



export type GET_tracking_settings_click_Type = {
    'on-behalf-of'? : string
}
export const GET_tracking_settings_click
    = ApiCommon.requestMaker
    <GET_tracking_settings_click_Type, Types.__GET_tracking_settings_click__response >({
        id: 'GET_tracking_settings_click',
        path: '/tracking_settings/click',
        verb: 'GET',
        parameters: [{"name":"on-behalf-of","in":"header"}]
    })



export type PATCH_tracking_settings_click_Type = {
    'body'? : any
    'on-behalf-of'? : string
}
export const PATCH_tracking_settings_click
    = ApiCommon.requestMaker
    <PATCH_tracking_settings_click_Type, Types.__PATCH_tracking_settings_click__response >({
        id: 'PATCH_tracking_settings_click',
        path: '/tracking_settings/click',
        verb: 'PATCH',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"}]
    })



export type GET_tracking_settings_google_analytics_Type = {
    'on-behalf-of'? : string
}
export const GET_tracking_settings_google_analytics
    = ApiCommon.requestMaker
    <GET_tracking_settings_google_analytics_Type, Types.google_analytics_settings >({
        id: 'GET_tracking_settings_google_analytics',
        path: '/tracking_settings/google_analytics',
        verb: 'GET',
        parameters: [{"name":"on-behalf-of","in":"header"}]
    })



export type PATCH_tracking_settings_google_analytics_Type = {
    'body'? : Types.google_analytics_settings
    'on-behalf-of'? : string
}
export const PATCH_tracking_settings_google_analytics
    = ApiCommon.requestMaker
    <PATCH_tracking_settings_google_analytics_Type, Types.google_analytics_settings >({
        id: 'PATCH_tracking_settings_google_analytics',
        path: '/tracking_settings/google_analytics',
        verb: 'PATCH',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"}]
    })



export type GET_tracking_settings_open_Type = {
    'on-behalf-of'? : string
}
export const GET_tracking_settings_open
    = ApiCommon.requestMaker
    <GET_tracking_settings_open_Type, Types.__GET_tracking_settings_open__response >({
        id: 'GET_tracking_settings_open',
        path: '/tracking_settings/open',
        verb: 'GET',
        parameters: [{"name":"on-behalf-of","in":"header"}]
    })



export type PATCH_tracking_settings_open_Type = {
    'body'? : any
    'on-behalf-of'? : string
}
export const PATCH_tracking_settings_open
    = ApiCommon.requestMaker
    <PATCH_tracking_settings_open_Type, Types.__PATCH_tracking_settings_open__response >({
        id: 'PATCH_tracking_settings_open',
        path: '/tracking_settings/open',
        verb: 'PATCH',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"}]
    })



export type GET_tracking_settings_subscription_Type = {
    'on-behalf-of'? : string
}
export const GET_tracking_settings_subscription
    = ApiCommon.requestMaker
    <GET_tracking_settings_subscription_Type, Types.subscription_tracking_settings >({
        id: 'GET_tracking_settings_subscription',
        path: '/tracking_settings/subscription',
        verb: 'GET',
        parameters: [{"name":"on-behalf-of","in":"header"}]
    })



export type PATCH_tracking_settings_subscription_Type = {
    'body'? : Types.subscription_tracking_settings
    'on-behalf-of'? : string
}
export const PATCH_tracking_settings_subscription
    = ApiCommon.requestMaker
    <PATCH_tracking_settings_subscription_Type, Types.subscription_tracking_settings >({
        id: 'PATCH_tracking_settings_subscription',
        path: '/tracking_settings/subscription',
        verb: 'PATCH',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"}]
    })



