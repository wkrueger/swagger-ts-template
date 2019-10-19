import * as Types from '../api-types'
import * as ApiCommon from '../api-common'


export type POST_contactdb_custom_fields_Type = {
    'body'? : any
    'on-behalf-of'? : string
}
export const POST_contactdb_custom_fields
    = ApiCommon.requestMaker
    <POST_contactdb_custom_fields_Type, Types.__POST_contactdb_custom_fields__response >({
        id: 'POST_contactdb_custom_fields',
        path: '/contactdb/custom_fields',
        verb: 'POST',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"}]
    })



export type GET_contactdb_custom_fields_Type = {
    'on-behalf-of'? : string
}
export const GET_contactdb_custom_fields
    = ApiCommon.requestMaker
    <GET_contactdb_custom_fields_Type, Types.__GET_contactdb_custom_fields__response >({
        id: 'GET_contactdb_custom_fields',
        path: '/contactdb/custom_fields',
        verb: 'GET',
        parameters: [{"name":"on-behalf-of","in":"header"}]
    })



export type GET_contactdb_custom_fields_custom_field_id_Type = {
    'custom_field_id' : number
    'on-behalf-of'? : string
}
export const GET_contactdb_custom_fields_custom_field_id
    = ApiCommon.requestMaker
    <GET_contactdb_custom_fields_custom_field_id_Type, Types.contactdb_custom_field_with_id >({
        id: 'GET_contactdb_custom_fields_custom_field_id',
        path: '/contactdb/custom_fields/{custom_field_id}',
        verb: 'GET',
        parameters: [{"name":"custom_field_id","required":true,"in":"path"},{"name":"on-behalf-of","in":"header"}]
    })



export type DELETE_contactdb_custom_fields_custom_field_id_Type = {
    'body'? : any
    'custom_field_id' : number
    'on-behalf-of'? : string
}
export const DELETE_contactdb_custom_fields_custom_field_id
    = ApiCommon.requestMaker
    <DELETE_contactdb_custom_fields_custom_field_id_Type, void >({
        id: 'DELETE_contactdb_custom_fields_custom_field_id',
        path: '/contactdb/custom_fields/{custom_field_id}',
        verb: 'DELETE',
        parameters: [{"name":"body","in":"body"},{"name":"custom_field_id","required":true,"in":"path"},{"name":"on-behalf-of","in":"header"}]
    })



export type GET_contactdb_reserved_fields_Type = {
    'on-behalf-of'? : string
}
export const GET_contactdb_reserved_fields
    = ApiCommon.requestMaker
    <GET_contactdb_reserved_fields_Type, Types.__GET_contactdb_reserved_fields__response >({
        id: 'GET_contactdb_reserved_fields',
        path: '/contactdb/reserved_fields',
        verb: 'GET',
        parameters: [{"name":"on-behalf-of","in":"header"}]
    })



