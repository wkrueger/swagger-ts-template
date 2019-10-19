import * as Types from '../api-types'
import * as ApiCommon from '../api-common'


export type POST_ips_pools_Type = {
    'body'? : any
}
export const POST_ips_pools
    = ApiCommon.requestMaker
    <POST_ips_pools_Type, Types.ip_pool >({
        id: 'POST_ips_pools',
        path: '/ips/pools',
        verb: 'POST',
        parameters: [{"name":"body","in":"body"}]
    })



export type GET_ips_pools_Type = {}
export const GET_ips_pools
    = ApiCommon.requestMaker
    <GET_ips_pools_Type, Types.ip_pool[] >({
        id: 'GET_ips_pools',
        path: '/ips/pools',
        verb: 'GET',
        parameters: []
    })



export type GET_ips_pools_pool_name_Type = {
    'pool_name' : string
}
export const GET_ips_pools_pool_name
    = ApiCommon.requestMaker
    <GET_ips_pools_pool_name_Type, Types.__GET_ips_pools_pool_name__response >({
        id: 'GET_ips_pools_pool_name',
        path: '/ips/pools/{pool_name}',
        verb: 'GET',
        parameters: [{"name":"pool_name","required":true,"in":"path"}]
    })



export type PUT_ips_pools_pool_name_Type = {
    'body'? : any
    'pool_name' : string
}
export const PUT_ips_pools_pool_name
    = ApiCommon.requestMaker
    <PUT_ips_pools_pool_name_Type, Types.ip_pool >({
        id: 'PUT_ips_pools_pool_name',
        path: '/ips/pools/{pool_name}',
        verb: 'PUT',
        parameters: [{"name":"body","in":"body"},{"name":"pool_name","required":true,"in":"path"}]
    })



export type DELETE_ips_pools_pool_name_Type = {
    'body'? : any
    'pool_name' : string
}
export const DELETE_ips_pools_pool_name
    = ApiCommon.requestMaker
    <DELETE_ips_pools_pool_name_Type, void >({
        id: 'DELETE_ips_pools_pool_name',
        path: '/ips/pools/{pool_name}',
        verb: 'DELETE',
        parameters: [{"name":"body","in":"body"},{"name":"pool_name","required":true,"in":"path"}]
    })



export type POST_ips_pools_pool_name_ips_Type = {
    'body'? : any
    'pool_name' : string
}
export const POST_ips_pools_pool_name_ips
    = ApiCommon.requestMaker
    <POST_ips_pools_pool_name_ips_Type, Types.__POST_ips_pools_pool_name_ips__response >({
        id: 'POST_ips_pools_pool_name_ips',
        path: '/ips/pools/{pool_name}/ips',
        verb: 'POST',
        parameters: [{"name":"body","in":"body"},{"name":"pool_name","required":true,"in":"path"}]
    })



export type DELETE_ips_pools_pool_name_ips_ip_Type = {
    'body'? : any
    'ip' : string
    'pool_name' : string
}
export const DELETE_ips_pools_pool_name_ips_ip
    = ApiCommon.requestMaker
    <DELETE_ips_pools_pool_name_ips_ip_Type, void >({
        id: 'DELETE_ips_pools_pool_name_ips_ip',
        path: '/ips/pools/{pool_name}/ips/{ip}',
        verb: 'DELETE',
        parameters: [{"name":"body","in":"body"},{"name":"ip","required":true,"in":"path"},{"name":"pool_name","required":true,"in":"path"}]
    })



