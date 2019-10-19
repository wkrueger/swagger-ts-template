import * as Types from '../api-types'
import * as ApiCommon from '../api-common'


export type GET_user_webhooks_event_settings_Type = {
    'on-behalf-of'? : string
}
export const GET_user_webhooks_event_settings
    = ApiCommon.requestMaker
    <GET_user_webhooks_event_settings_Type, Types.event_webhook_settings >({
        id: 'GET_user_webhooks_event_settings',
        path: '/user/webhooks/event/settings',
        verb: 'GET',
        parameters: [{"name":"on-behalf-of","in":"header"}]
    })



export type PATCH_user_webhooks_event_settings_Type = {
    'body'? : Types.event_webhook_settings
    'on-behalf-of'? : string
}
export const PATCH_user_webhooks_event_settings
    = ApiCommon.requestMaker
    <PATCH_user_webhooks_event_settings_Type, Types.event_webhook_settings >({
        id: 'PATCH_user_webhooks_event_settings',
        path: '/user/webhooks/event/settings',
        verb: 'PATCH',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"}]
    })



export type POST_user_webhooks_event_test_Type = {
    'body'? : any
    'on-behalf-of'? : string
}
export const POST_user_webhooks_event_test
    = ApiCommon.requestMaker
    <POST_user_webhooks_event_test_Type, void >({
        id: 'POST_user_webhooks_event_test',
        path: '/user/webhooks/event/test',
        verb: 'POST',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"}]
    })



export type GET_user_webhooks_parse_stats_Type = {
    'aggregated_by'? : string
    'end_date'? : string
    'limit'? : string
    'offset'? : string
    'on-behalf-of'? : string
    'start_date' : string
}
export const GET_user_webhooks_parse_stats
    = ApiCommon.requestMaker
    <GET_user_webhooks_parse_stats_Type, any[] >({
        id: 'GET_user_webhooks_parse_stats',
        path: '/user/webhooks/parse/stats',
        verb: 'GET',
        parameters: [{"name":"aggregated_by","required":false,"in":"query"},{"name":"end_date","required":false,"in":"query"},{"name":"limit","required":false,"in":"query"},{"name":"offset","required":false,"in":"query"},{"name":"on-behalf-of","in":"header"},{"name":"start_date","required":true,"in":"query"}]
    })



