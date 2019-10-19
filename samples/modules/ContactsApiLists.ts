import * as Types from '../api-types'
import * as ApiCommon from '../api-common'


export type POST_contactdb_lists_Type = {
    'body'? : any
    'on-behalf-of'? : string
}
export const POST_contactdb_lists
    = ApiCommon.requestMaker
    <POST_contactdb_lists_Type, Types.contactdb_list >({
        id: 'POST_contactdb_lists',
        path: '/contactdb/lists',
        verb: 'POST',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"}]
    })



export type GET_contactdb_lists_Type = {
    'on-behalf-of'? : string
}
export const GET_contactdb_lists
    = ApiCommon.requestMaker
    <GET_contactdb_lists_Type, Types.__GET_contactdb_lists__response >({
        id: 'GET_contactdb_lists',
        path: '/contactdb/lists',
        verb: 'GET',
        parameters: [{"name":"on-behalf-of","in":"header"}]
    })



export type DELETE_contactdb_lists_Type = {
    'body'? : any
    'on-behalf-of'? : string
}
export const DELETE_contactdb_lists
    = ApiCommon.requestMaker
    <DELETE_contactdb_lists_Type, void >({
        id: 'DELETE_contactdb_lists',
        path: '/contactdb/lists',
        verb: 'DELETE',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"}]
    })



export type GET_contactdb_lists_list_id_Type = {
    'list_id'? : number
    'on-behalf-of'? : string
}
export const GET_contactdb_lists_list_id
    = ApiCommon.requestMaker
    <GET_contactdb_lists_list_id_Type, Types.contactdb_list >({
        id: 'GET_contactdb_lists_list_id',
        path: '/contactdb/lists/{list_id}',
        verb: 'GET',
        parameters: [{"name":"list_id","in":"query"},{"name":"on-behalf-of","in":"header"}]
    })



export type PATCH_contactdb_lists_list_id_Type = {
    'body'? : any
    'list_id' : number
    'on-behalf-of'? : string
}
export const PATCH_contactdb_lists_list_id
    = ApiCommon.requestMaker
    <PATCH_contactdb_lists_list_id_Type, Types.__PATCH_contactdb_lists_list_id__response >({
        id: 'PATCH_contactdb_lists_list_id',
        path: '/contactdb/lists/{list_id}',
        verb: 'PATCH',
        parameters: [{"name":"body","in":"body"},{"name":"list_id","required":true,"in":"query"},{"name":"on-behalf-of","in":"header"}]
    })



export type DELETE_contactdb_lists_list_id_Type = {
    'body'? : any
    'delete_contacts'? : boolean
    'list_id' : string
    'on-behalf-of'? : string
}
export const DELETE_contactdb_lists_list_id
    = ApiCommon.requestMaker
    <DELETE_contactdb_lists_list_id_Type, void >({
        id: 'DELETE_contactdb_lists_list_id',
        path: '/contactdb/lists/{list_id}',
        verb: 'DELETE',
        parameters: [{"name":"body","in":"body"},{"name":"delete_contacts","in":"query"},{"name":"list_id","required":true,"in":"path"},{"name":"on-behalf-of","in":"header"}]
    })



export type GET_contactdb_lists_list_id_recipients_Type = {
    'list_id' : number
    'on-behalf-of'? : string
    'page'? : number
    'page_size'? : number
}
export const GET_contactdb_lists_list_id_recipients
    = ApiCommon.requestMaker
    <GET_contactdb_lists_list_id_recipients_Type, Types.__GET_contactdb_lists_list_id_recipients__response >({
        id: 'GET_contactdb_lists_list_id_recipients',
        path: '/contactdb/lists/{list_id}/recipients',
        verb: 'GET',
        parameters: [{"name":"list_id","required":true,"in":"query"},{"name":"on-behalf-of","in":"header"},{"name":"page","required":false,"in":"query"},{"name":"page_size","required":false,"in":"query"}]
    })



export type POST_contactdb_lists_list_id_recipients_Type = {
    'body'? : any
    'list_id' : number
    'on-behalf-of'? : string
}
export const POST_contactdb_lists_list_id_recipients
    = ApiCommon.requestMaker
    <POST_contactdb_lists_list_id_recipients_Type, Types.__POST_contactdb_lists_list_id_recipients__response >({
        id: 'POST_contactdb_lists_list_id_recipients',
        path: '/contactdb/lists/{list_id}/recipients',
        verb: 'POST',
        parameters: [{"name":"body","in":"body"},{"name":"list_id","required":true,"in":"path"},{"name":"on-behalf-of","in":"header"}]
    })



export type POST_contactdb_lists_list_id_recipients_recipient_id_Type = {
    'body'? : any
    'list_id' : number
    'on-behalf-of'? : string
    'recipient_id' : string
}
export const POST_contactdb_lists_list_id_recipients_recipient_id
    = ApiCommon.requestMaker
    <POST_contactdb_lists_list_id_recipients_recipient_id_Type, Types.__POST_contactdb_lists_list_id_recipients_recipient_id__response >({
        id: 'POST_contactdb_lists_list_id_recipients_recipient_id',
        path: '/contactdb/lists/{list_id}/recipients/{recipient_id}',
        verb: 'POST',
        parameters: [{"name":"body","in":"body"},{"name":"list_id","required":true,"in":"path"},{"name":"on-behalf-of","in":"header"},{"name":"recipient_id","required":true,"in":"path"}]
    })



export type DELETE_contactdb_lists_list_id_recipients_recipient_id_Type = {
    'body'? : any
    'list_id' : number
    'on-behalf-of'? : string
    'recipient_id' : number
}
export const DELETE_contactdb_lists_list_id_recipients_recipient_id
    = ApiCommon.requestMaker
    <DELETE_contactdb_lists_list_id_recipients_recipient_id_Type, void >({
        id: 'DELETE_contactdb_lists_list_id_recipients_recipient_id',
        path: '/contactdb/lists/{list_id}/recipients/{recipient_id}',
        verb: 'DELETE',
        parameters: [{"name":"body","in":"body"},{"name":"list_id","required":true,"in":"query"},{"name":"on-behalf-of","in":"header"},{"name":"recipient_id","required":true,"in":"query"}]
    })



