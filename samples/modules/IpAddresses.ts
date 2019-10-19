import * as Types from '../api-types'
import * as ApiCommon from '../api-common'


export type POST_ips_Type = {
    'body'? : any
}
export const POST_ips
    = ApiCommon.requestMaker
    <POST_ips_Type, Types.__POST_ips__response >({
        id: 'POST_ips',
        path: '/ips',
        verb: 'POST',
        parameters: [{"name":"body","in":"body"}]
    })



export type GET_ips_Type = {
    'exclude_whitelabels'? : boolean
    'ip'? : string
    'limit'? : number
    'offset'? : number
    'sort_by_direction'? : string
    'subuser'? : string
}
export const GET_ips
    = ApiCommon.requestMaker
    <GET_ips_Type, any[] >({
        id: 'GET_ips',
        path: '/ips',
        verb: 'GET',
        parameters: [{"name":"exclude_whitelabels","in":"query"},{"name":"ip","in":"query"},{"name":"limit","in":"query"},{"name":"offset","in":"query"},{"name":"sort_by_direction","in":"query"},{"name":"subuser","in":"query"}]
    })



export type GET_ips_remaining_Type = {}
export const GET_ips_remaining
    = ApiCommon.requestMaker
    <GET_ips_remaining_Type, Types.__GET_ips_remaining__response >({
        id: 'GET_ips_remaining',
        path: '/ips/remaining',
        verb: 'GET',
        parameters: []
    })



export type GET_ips_assigned_Type = {}
export const GET_ips_assigned
    = ApiCommon.requestMaker
    <GET_ips_assigned_Type, any[] >({
        id: 'GET_ips_assigned',
        path: '/ips/assigned',
        verb: 'GET',
        parameters: []
    })



export type GET_ips_ip_address_Type = {
    'ip_address' : string
}
export const GET_ips_ip_address
    = ApiCommon.requestMaker
    <GET_ips_ip_address_Type, Types.__GET_ips_ip_address__response >({
        id: 'GET_ips_ip_address',
        path: '/ips/{ip_address}',
        verb: 'GET',
        parameters: [{"name":"ip_address","required":true,"in":"path"}]
    })



