import * as Types from '../api-types'
import * as ApiCommon from '../api-common'


export type GET_subusers_Type = {
    'limit'? : number
    'offset'? : number
    'username'? : string
}
export const GET_subusers
    = ApiCommon.requestMaker
    <GET_subusers_Type, Types.subuser[] >({
        id: 'GET_subusers',
        path: '/subusers',
        verb: 'GET',
        parameters: [{"name":"limit","in":"query"},{"name":"offset","in":"query"},{"name":"username","in":"query"}]
    })



export type POST_subusers_Type = {
    'body'? : any
}
export const POST_subusers
    = ApiCommon.requestMaker
    <POST_subusers_Type, Types.subuser_post >({
        id: 'POST_subusers',
        path: '/subusers',
        verb: 'POST',
        parameters: [{"name":"body","in":"body"}]
    })



export type PATCH_subusers_subuser_name_Type = {
    'body'? : any
    'subuser_name' : string
}
export const PATCH_subusers_subuser_name
    = ApiCommon.requestMaker
    <PATCH_subusers_subuser_name_Type, void >({
        id: 'PATCH_subusers_subuser_name',
        path: '/subusers/{subuser_name}',
        verb: 'PATCH',
        parameters: [{"name":"body","in":"body"},{"name":"subuser_name","required":true,"in":"path"}]
    })



export type DELETE_subusers_subuser_name_Type = {
    'body'? : any
    'subuser_name' : string
}
export const DELETE_subusers_subuser_name
    = ApiCommon.requestMaker
    <DELETE_subusers_subuser_name_Type, void >({
        id: 'DELETE_subusers_subuser_name',
        path: '/subusers/{subuser_name}',
        verb: 'DELETE',
        parameters: [{"name":"body","in":"body"},{"name":"subuser_name","required":true,"in":"path"}]
    })



export type GET_subusers_subuser_name_monitor_Type = {
    'subuser_name' : string
}
export const GET_subusers_subuser_name_monitor
    = ApiCommon.requestMaker
    <GET_subusers_subuser_name_monitor_Type, Types.monitor >({
        id: 'GET_subusers_subuser_name_monitor',
        path: '/subusers/{subuser_name}/monitor',
        verb: 'GET',
        parameters: [{"name":"subuser_name","required":true,"in":"path"}]
    })



export type POST_subusers_subuser_name_monitor_Type = {
    'body'? : Types.monitor
    'subuser_name' : string
}
export const POST_subusers_subuser_name_monitor
    = ApiCommon.requestMaker
    <POST_subusers_subuser_name_monitor_Type, Types.monitor >({
        id: 'POST_subusers_subuser_name_monitor',
        path: '/subusers/{subuser_name}/monitor',
        verb: 'POST',
        parameters: [{"name":"body","in":"body"},{"name":"subuser_name","required":true,"in":"path"}]
    })



export type PUT_subusers_subuser_name_monitor_Type = {
    'body'? : Types.monitor
    'subuser_name' : string
}
export const PUT_subusers_subuser_name_monitor
    = ApiCommon.requestMaker
    <PUT_subusers_subuser_name_monitor_Type, Types.monitor >({
        id: 'PUT_subusers_subuser_name_monitor',
        path: '/subusers/{subuser_name}/monitor',
        verb: 'PUT',
        parameters: [{"name":"body","in":"body"},{"name":"subuser_name","required":true,"in":"path"}]
    })



export type DELETE_subusers_subuser_name_monitor_Type = {
    'body'? : any
    'subuser_name' : string
}
export const DELETE_subusers_subuser_name_monitor
    = ApiCommon.requestMaker
    <DELETE_subusers_subuser_name_monitor_Type, void >({
        id: 'DELETE_subusers_subuser_name_monitor',
        path: '/subusers/{subuser_name}/monitor',
        verb: 'DELETE',
        parameters: [{"name":"Authorization","required":true,"in":"header"},{"name":"body","in":"body"},{"name":"subuser_name","required":true,"in":"path"}]
    })



export type GET_subusers_reputations_Type = {
    'usernames'? : string
}
export const GET_subusers_reputations
    = ApiCommon.requestMaker
    <GET_subusers_reputations_Type, any[] >({
        id: 'GET_subusers_reputations',
        path: '/subusers/reputations',
        verb: 'GET',
        parameters: [{"name":"usernames","in":"query"}]
    })



export type PUT_subusers_subuser_name_ips_Type = {
    'body'? : any
    'subuser_name' : string
}
export const PUT_subusers_subuser_name_ips
    = ApiCommon.requestMaker
    <PUT_subusers_subuser_name_ips_Type, Types.__PUT_subusers_subuser_name_ips__response >({
        id: 'PUT_subusers_subuser_name_ips',
        path: '/subusers/{subuser_name}/ips',
        verb: 'PUT',
        parameters: [{"name":"Authorization","required":true,"in":"header"},{"name":"body","in":"body"},{"name":"subuser_name","required":true,"in":"path"}]
    })



export type GET_subusers_subuser_name_stats_monthly_Type = {
    'date' : string
    'limit'? : number
    'offset'? : number
    'sort_by_direction'? : string
    'sort_by_metric'? : string
    'subuser_name' : string
}
export const GET_subusers_subuser_name_stats_monthly
    = ApiCommon.requestMaker
    <GET_subusers_subuser_name_stats_monthly_Type, Types.subuser_stats >({
        id: 'GET_subusers_subuser_name_stats_monthly',
        path: '/subusers/{subuser_name}/stats/monthly',
        verb: 'GET',
        parameters: [{"name":"date","required":true,"in":"query"},{"name":"limit","required":false,"in":"query"},{"name":"offset","required":false,"in":"query"},{"name":"sort_by_direction","required":false,"in":"query"},{"name":"sort_by_metric","required":false,"in":"query"},{"name":"subuser_name","required":true,"in":"path"}]
    })



export type GET_subusers_stats_monthly_Type = {
    'date' : string
    'limit'? : number
    'offset'? : number
    'sort_by_direction'? : string
    'sort_by_metric'? : string
    'subuser'? : string
}
export const GET_subusers_stats_monthly
    = ApiCommon.requestMaker
    <GET_subusers_stats_monthly_Type, Types.subuser_stats >({
        id: 'GET_subusers_stats_monthly',
        path: '/subusers/stats/monthly',
        verb: 'GET',
        parameters: [{"name":"date","required":true,"in":"query"},{"name":"limit","required":false,"in":"query"},{"name":"offset","required":false,"in":"query"},{"name":"sort_by_direction","required":false,"in":"query"},{"name":"sort_by_metric","required":false,"in":"query"},{"name":"subuser","required":false,"in":"query"}]
    })



export type GET_subusers_stats_sums_Type = {
    'aggregated_by'? : string
    'end_date'? : string
    'limit'? : number
    'offset'? : number
    'sort_by_direction'? : string
    'sort_by_metric'? : string
    'start_date' : string
}
export const GET_subusers_stats_sums
    = ApiCommon.requestMaker
    <GET_subusers_stats_sums_Type, Types.category_stats >({
        id: 'GET_subusers_stats_sums',
        path: '/subusers/stats/sums',
        verb: 'GET',
        parameters: [{"name":"aggregated_by","required":false,"in":"query"},{"name":"end_date","required":false,"in":"query"},{"name":"limit","required":false,"in":"query"},{"name":"offset","required":false,"in":"query"},{"name":"sort_by_direction","required":false,"in":"query"},{"name":"sort_by_metric","required":false,"in":"query"},{"name":"start_date","required":true,"in":"query"}]
    })



export type GET_subusers_stats_Type = {
    'aggregated_by'? : string
    'end_date'? : string
    'limit'? : number
    'offset'? : number
    'start_date' : string
    'subusers' : string
}
export const GET_subusers_stats
    = ApiCommon.requestMaker
    <GET_subusers_stats_Type, Types.stats >({
        id: 'GET_subusers_stats',
        path: '/subusers/stats',
        verb: 'GET',
        parameters: [{"name":"aggregated_by","required":false,"in":"query"},{"name":"end_date","required":false,"in":"query"},{"name":"limit","required":false,"in":"query"},{"name":"offset","required":false,"in":"query"},{"name":"start_date","required":true,"in":"query"},{"name":"subusers","required":true,"in":"query"}]
    })



