import * as Types from '../api-types'
import * as ApiCommon from '../api-common'


export type GET_stats_Type = {
    'aggregated_by'? : string
    'end_date'? : string
    'limit'? : number
    'offset'? : number
    'on-behalf-of'? : string
    'start_date' : string
}
export const GET_stats
    = ApiCommon.requestMaker
    <GET_stats_Type, any[] >({
        id: 'GET_stats',
        path: '/stats',
        verb: 'GET',
        parameters: [{"name":"aggregated_by","required":false,"in":"query"},{"name":"end_date","required":false,"in":"query"},{"name":"limit","required":false,"in":"query"},{"name":"offset","required":false,"in":"query"},{"name":"on-behalf-of","in":"header"},{"name":"start_date","required":true,"in":"query"}]
    })



export type GET_geo_stats_Type = {
    'aggregated_by'? : string
    'country'? : string
    'end_date'? : string
    'limit'? : number
    'offset'? : number
    'on-behalf-of'? : string
    'start_date' : string
}
export const GET_geo_stats
    = ApiCommon.requestMaker
    <GET_geo_stats_Type, Types.advanced_stats_country[] >({
        id: 'GET_geo_stats',
        path: '/geo/stats',
        verb: 'GET',
        parameters: [{"name":"aggregated_by","required":false,"in":"query"},{"name":"Authorization","required":true,"in":"header"},{"name":"country","required":false,"in":"query"},{"name":"end_date","required":false,"in":"query"},{"name":"limit","required":false,"in":"query"},{"name":"offset","required":false,"in":"query"},{"name":"on-behalf-of","in":"header"},{"name":"start_date","required":true,"in":"query"}]
    })



export type GET_devices_stats_Type = {
    'aggregated_by'? : string
    'end_date'? : string
    'limit'? : number
    'offset'? : number
    'on-behalf-of'? : string
    'start_date' : string
}
export const GET_devices_stats
    = ApiCommon.requestMaker
    <GET_devices_stats_Type, Types.advanced_stats_opens[] >({
        id: 'GET_devices_stats',
        path: '/devices/stats',
        verb: 'GET',
        parameters: [{"name":"aggregated_by","required":false,"in":"query"},{"name":"end_date","required":false,"in":"query"},{"name":"limit","required":false,"in":"query"},{"name":"offset","required":false,"in":"query"},{"name":"on-behalf-of","in":"header"},{"name":"start_date","required":true,"in":"query"}]
    })



export type GET_clients_stats_Type = {
    'aggregated_by'? : string
    'end_date'? : string
    'on-behalf-of'? : string
    'start_date' : string
}
export const GET_clients_stats
    = ApiCommon.requestMaker
    <GET_clients_stats_Type, Types.advanced_stats_opens[] >({
        id: 'GET_clients_stats',
        path: '/clients/stats',
        verb: 'GET',
        parameters: [{"name":"aggregated_by","required":false,"in":"query"},{"name":"end_date","required":false,"in":"query"},{"name":"on-behalf-of","in":"header"},{"name":"start_date","required":true,"in":"query"}]
    })



export type GET_clients_client_type_stats_Type = {
    'aggregated_by'? : string
    'client_type' : string
    'end_date'? : string
    'on-behalf-of'? : string
    'start_date' : string
}
export const GET_clients_client_type_stats
    = ApiCommon.requestMaker
    <GET_clients_client_type_stats_Type, Types.advanced_stats_opens[] >({
        id: 'GET_clients_client_type_stats',
        path: '/clients/{client_type}/stats',
        verb: 'GET',
        parameters: [{"name":"aggregated_by","required":false,"in":"query"},{"name":"client_type","required":true,"in":"path"},{"name":"end_date","required":false,"in":"query"},{"name":"on-behalf-of","in":"header"},{"name":"start_date","required":true,"in":"query"}]
    })



export type GET_mailbox_providers_stats_Type = {
    'aggregated_by'? : string
    'end_date'? : string
    'limit'? : number
    'mailbox_providers'? : string
    'offset'? : number
    'on-behalf-of'? : string
    'start_date' : string
}
export const GET_mailbox_providers_stats
    = ApiCommon.requestMaker
    <GET_mailbox_providers_stats_Type, Types.advanced_stats_mailbox_provider[] >({
        id: 'GET_mailbox_providers_stats',
        path: '/mailbox_providers/stats',
        verb: 'GET',
        parameters: [{"name":"aggregated_by","required":false,"in":"query"},{"name":"end_date","required":false,"in":"query"},{"name":"limit","required":false,"in":"query"},{"name":"mailbox_providers","required":false,"in":"query"},{"name":"offset","required":false,"in":"query"},{"name":"on-behalf-of","in":"header"},{"name":"start_date","required":true,"in":"query"}]
    })



export type GET_browsers_stats_Type = {
    'aggregated_by'? : string
    'browsers'? : string
    'end_date'? : string
    'limit'? : string
    'offset'? : string
    'on-behalf-of'? : string
    'start_date' : string
}
export const GET_browsers_stats
    = ApiCommon.requestMaker
    <GET_browsers_stats_Type, Types.advanced_stats_clicks[] >({
        id: 'GET_browsers_stats',
        path: '/browsers/stats',
        verb: 'GET',
        parameters: [{"name":"aggregated_by","required":false,"in":"query"},{"name":"browsers","required":false,"in":"query"},{"name":"end_date","required":false,"in":"query"},{"name":"limit","required":false,"in":"query"},{"name":"offset","required":false,"in":"query"},{"name":"on-behalf-of","in":"header"},{"name":"start_date","required":true,"in":"query"}]
    })



