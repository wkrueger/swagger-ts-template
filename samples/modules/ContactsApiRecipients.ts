import * as Types from '../api-types'
import * as ApiCommon from '../api-common'


export type GET_contactdb_status_Type = {
    'on-behalf-of'? : string
}
export const GET_contactdb_status
    = ApiCommon.requestMaker
    <GET_contactdb_status_Type, Types.__GET_contactdb_status__response >({
        id: 'GET_contactdb_status',
        path: '/contactdb/status',
        verb: 'GET',
        parameters: [{"name":"Authorization","required":true,"in":"header"},{"name":"on-behalf-of","in":"header"}]
    })



export type POST_contactdb_recipients_Type = {
    'body'? : any
    'on-behalf-of'? : string
}
export const POST_contactdb_recipients
    = ApiCommon.requestMaker
    <POST_contactdb_recipients_Type, Types.contactdb_recipient_response >({
        id: 'POST_contactdb_recipients',
        path: '/contactdb/recipients',
        verb: 'POST',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"}]
    })



export type PATCH_contactdb_recipients_Type = {
    'body'? : any
    'on-behalf-of'? : string
}
export const PATCH_contactdb_recipients
    = ApiCommon.requestMaker
    <PATCH_contactdb_recipients_Type, Types.contactdb_recipient_response >({
        id: 'PATCH_contactdb_recipients',
        path: '/contactdb/recipients',
        verb: 'PATCH',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"}]
    })



export type DELETE_contactdb_recipients_Type = {
    'body'? : any
    'on-behalf-of'? : string
}
export const DELETE_contactdb_recipients
    = ApiCommon.requestMaker
    <DELETE_contactdb_recipients_Type, Types.__DELETE_contactdb_recipients__response >({
        id: 'DELETE_contactdb_recipients',
        path: '/contactdb/recipients',
        verb: 'DELETE',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"}]
    })



export type GET_contactdb_recipients_Type = {
    'on-behalf-of'? : string
    'page'? : number
    'page_size'? : number
}
export const GET_contactdb_recipients
    = ApiCommon.requestMaker
    <GET_contactdb_recipients_Type, Types.__GET_contactdb_recipients__response >({
        id: 'GET_contactdb_recipients',
        path: '/contactdb/recipients',
        verb: 'GET',
        parameters: [{"name":"on-behalf-of","in":"header"},{"name":"page","in":"query"},{"name":"page_size","in":"query"}]
    })



export type GET_contactdb_recipients_recipient_id_Type = {
    'on-behalf-of'? : string
    'recipient_id' : string
}
export const GET_contactdb_recipients_recipient_id
    = ApiCommon.requestMaker
    <GET_contactdb_recipients_recipient_id_Type, Types.contactdb_recipient >({
        id: 'GET_contactdb_recipients_recipient_id',
        path: '/contactdb/recipients/{recipient_id}',
        verb: 'GET',
        parameters: [{"name":"on-behalf-of","in":"header"},{"name":"recipient_id","required":true,"in":"path"}]
    })



export type DELETE_contactdb_recipients_recipient_id_Type = {
    'body'? : any
    'on-behalf-of'? : string
    'recipient_id' : string
}
export const DELETE_contactdb_recipients_recipient_id
    = ApiCommon.requestMaker
    <DELETE_contactdb_recipients_recipient_id_Type, void >({
        id: 'DELETE_contactdb_recipients_recipient_id',
        path: '/contactdb/recipients/{recipient_id}',
        verb: 'DELETE',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"},{"name":"recipient_id","required":true,"in":"path"}]
    })



export type GET_contactdb_recipients_recipient_id_lists_Type = {
    'on-behalf-of'? : string
    'recipient_id' : string
}
export const GET_contactdb_recipients_recipient_id_lists
    = ApiCommon.requestMaker
    <GET_contactdb_recipients_recipient_id_lists_Type, Types.__GET_contactdb_recipients_recipient_id_lists__response >({
        id: 'GET_contactdb_recipients_recipient_id_lists',
        path: '/contactdb/recipients/{recipient_id}/lists',
        verb: 'GET',
        parameters: [{"name":"on-behalf-of","in":"header"},{"name":"recipient_id","required":true,"in":"path"}]
    })



export type GET_contactdb_recipients_billable_count_Type = {
    'on-behalf-of'? : string
}
export const GET_contactdb_recipients_billable_count
    = ApiCommon.requestMaker
    <GET_contactdb_recipients_billable_count_Type, Types.contactdb_recipient_count >({
        id: 'GET_contactdb_recipients_billable_count',
        path: '/contactdb/recipients/billable_count',
        verb: 'GET',
        parameters: [{"name":"on-behalf-of","in":"header"}]
    })



export type GET_contactdb_recipients_count_Type = {
    'on-behalf-of'? : string
}
export const GET_contactdb_recipients_count
    = ApiCommon.requestMaker
    <GET_contactdb_recipients_count_Type, Types.contactdb_recipient_count >({
        id: 'GET_contactdb_recipients_count',
        path: '/contactdb/recipients/count',
        verb: 'GET',
        parameters: [{"name":"on-behalf-of","in":"header"}]
    })



export type GET_contactdb_recipients_search_Type = {
    'on-behalf-of'? : string
    '{field_name}'? : string
}
export const GET_contactdb_recipients_search
    = ApiCommon.requestMaker
    <GET_contactdb_recipients_search_Type, Types.__GET_contactdb_recipients_search__response >({
        id: 'GET_contactdb_recipients_search',
        path: '/contactdb/recipients/search',
        verb: 'GET',
        parameters: [{"name":"on-behalf-of","in":"header"},{"name":"{field_name}","in":"query"}]
    })



