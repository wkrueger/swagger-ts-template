import * as Types from '../api-types'
import * as ApiCommon from '../api-common'


export type POST_contactdb_segments_Type = {
    'body'? : Types.contactdb_segments
    'on-behalf-of'? : string
}
export const POST_contactdb_segments
    = ApiCommon.requestMaker
    <POST_contactdb_segments_Type, Types.contactdb_segments_with_id >({
        id: 'POST_contactdb_segments',
        path: '/contactdb/segments',
        verb: 'POST',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"}]
    })



export type GET_contactdb_segments_Type = {
    'on-behalf-of'? : string
}
export const GET_contactdb_segments
    = ApiCommon.requestMaker
    <GET_contactdb_segments_Type, Types.__GET_contactdb_segments__response >({
        id: 'GET_contactdb_segments',
        path: '/contactdb/segments',
        verb: 'GET',
        parameters: [{"name":"on-behalf-of","in":"header"}]
    })



export type GET_contactdb_segments_segment_id_Type = {
    'on-behalf-of'? : string
    'segment_id' : number
}
export const GET_contactdb_segments_segment_id
    = ApiCommon.requestMaker
    <GET_contactdb_segments_segment_id_Type, Types.contactdb_segments >({
        id: 'GET_contactdb_segments_segment_id',
        path: '/contactdb/segments/{segment_id}',
        verb: 'GET',
        parameters: [{"name":"on-behalf-of","in":"header"},{"name":"segment_id","required":true,"in":"query"}]
    })



export type PATCH_contactdb_segments_segment_id_Type = {
    'body'? : any
    'on-behalf-of'? : string
    'segment_id'? : string
}
export const PATCH_contactdb_segments_segment_id
    = ApiCommon.requestMaker
    <PATCH_contactdb_segments_segment_id_Type, Types.contactdb_segments >({
        id: 'PATCH_contactdb_segments_segment_id',
        path: '/contactdb/segments/{segment_id}',
        verb: 'PATCH',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"},{"name":"segment_id","in":"query"}]
    })



export type DELETE_contactdb_segments_segment_id_Type = {
    'body'? : any
    'delete_contacts'? : boolean
    'on-behalf-of'? : string
    'segment_id' : string
}
export const DELETE_contactdb_segments_segment_id
    = ApiCommon.requestMaker
    <DELETE_contactdb_segments_segment_id_Type, void >({
        id: 'DELETE_contactdb_segments_segment_id',
        path: '/contactdb/segments/{segment_id}',
        verb: 'DELETE',
        parameters: [{"name":"body","in":"body"},{"name":"delete_contacts","in":"query"},{"name":"on-behalf-of","in":"header"},{"name":"segment_id","required":true,"in":"path"}]
    })



export type GET_contactdb_segments_segment_id_recipients_Type = {
    'on-behalf-of'? : string
    'page'? : number
    'page_size'? : number
    'segment_id' : number
}
export const GET_contactdb_segments_segment_id_recipients
    = ApiCommon.requestMaker
    <GET_contactdb_segments_segment_id_recipients_Type, Types.__GET_contactdb_segments_segment_id_recipients__response >({
        id: 'GET_contactdb_segments_segment_id_recipients',
        path: '/contactdb/segments/{segment_id}/recipients',
        verb: 'GET',
        parameters: [{"name":"on-behalf-of","in":"header"},{"name":"page","in":"query"},{"name":"page_size","in":"query"},{"name":"segment_id","required":true,"in":"path"}]
    })



