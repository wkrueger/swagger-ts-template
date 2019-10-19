import * as Types from '../api-types'
import * as ApiCommon from '../api-common'


export type GET_categories_Type = {
    'category'? : string
    'limit'? : number
    'offset'? : number
    'on-behalf-of'? : string
}
export const GET_categories
    = ApiCommon.requestMaker
    <GET_categories_Type, any[] >({
        id: 'GET_categories',
        path: '/categories',
        verb: 'GET',
        parameters: [{"name":"category","in":"query"},{"name":"limit","in":"query"},{"name":"offset","in":"query"},{"name":"on-behalf-of","in":"header"}]
    })



export type GET_categories_stats_sums_Type = {
    'aggregated_by'? : string
    'end_date'? : string
    'limit'? : number
    'offset'? : number
    'on-behalf-of'? : string
    'sort_by_direction'? : string
    'sort_by_metric'? : string
    'start_date' : string
}
export const GET_categories_stats_sums
    = ApiCommon.requestMaker
    <GET_categories_stats_sums_Type, Types.category_stats >({
        id: 'GET_categories_stats_sums',
        path: '/categories/stats/sums',
        verb: 'GET',
        parameters: [{"name":"aggregated_by","required":false,"in":"query"},{"name":"end_date","required":false,"in":"query"},{"name":"limit","required":false,"in":"query"},{"name":"offset","required":false,"in":"query"},{"name":"on-behalf-of","in":"header"},{"name":"sort_by_direction","required":false,"in":"query"},{"name":"sort_by_metric","required":false,"in":"query"},{"name":"start_date","required":true,"in":"query"}]
    })



export type GET_categories_stats_Type = {
    'aggregated_by'? : string
    'categories' : string
    'end_date'? : string
    'limit'? : number
    'offset'? : number
    'on-behalf-of'? : string
    'start_date' : string
}
export const GET_categories_stats
    = ApiCommon.requestMaker
    <GET_categories_stats_Type, Types.category_stats[] >({
        id: 'GET_categories_stats',
        path: '/categories/stats',
        verb: 'GET',
        parameters: [{"name":"aggregated_by","required":false,"in":"query"},{"name":"categories","required":true,"in":"query"},{"name":"end_date","required":false,"in":"query"},{"name":"limit","required":false,"in":"query"},{"name":"offset","required":false,"in":"query"},{"name":"on-behalf-of","in":"header"},{"name":"start_date","required":true,"in":"query"}]
    })



