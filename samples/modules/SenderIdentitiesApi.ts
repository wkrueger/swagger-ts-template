import * as Types from '../api-types'
import * as ApiCommon from '../api-common'


export type POST_senders_Type = {
    'body'? : any
    'on-behalf-of'? : string
}
export const POST_senders
    = ApiCommon.requestMaker
    <POST_senders_Type, Types.senderID >({
        id: 'POST_senders',
        path: '/senders',
        verb: 'POST',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"}]
    })



export type GET_v3_senders_Type = {
    'on-behalf-of'? : string
}
export const GET_v3_senders
    = ApiCommon.requestMaker
    <GET_v3_senders_Type, Types.__GET_v3_senders__response >({
        id: 'GET_v3_senders',
        path: '/senders',
        verb: 'GET',
        parameters: [{"name":"on-behalf-of","in":"header"}]
    })



export type PATCH_v3_senders_sender_id_Type = {
    'body'? : any
    'on-behalf-of'? : string
    'sender_id' : number
}
export const PATCH_v3_senders_sender_id
    = ApiCommon.requestMaker
    <PATCH_v3_senders_sender_id_Type, Types.senderID >({
        id: 'PATCH_v3_senders_sender_id',
        path: '/senders/{sender_id}',
        verb: 'PATCH',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"},{"name":"sender_id","required":true,"in":"path"}]
    })



export type DELETE_v3_senders_sender_id_Type = {
    'on-behalf-of'? : string
    'sender_id' : number
}
export const DELETE_v3_senders_sender_id
    = ApiCommon.requestMaker
    <DELETE_v3_senders_sender_id_Type, void >({
        id: 'DELETE_v3_senders_sender_id',
        path: '/senders/{sender_id}',
        verb: 'DELETE',
        parameters: [{"name":"on-behalf-of","in":"header"},{"name":"sender_id","required":true,"in":"path"}]
    })



export type GET_v3_senders_sender_id_Type = {
    'on-behalf-of'? : string
    'sender_id' : number
}
export const GET_v3_senders_sender_id
    = ApiCommon.requestMaker
    <GET_v3_senders_sender_id_Type, Types.senderID >({
        id: 'GET_v3_senders_sender_id',
        path: '/senders/{sender_id}',
        verb: 'GET',
        parameters: [{"name":"on-behalf-of","in":"header"},{"name":"sender_id","required":true,"in":"path"}]
    })



export type POST_v3_senders_sender_id_resend_verification_Type = {
    'on-behalf-of'? : string
    'sender_id' : number
}
export const POST_v3_senders_sender_id_resend_verification
    = ApiCommon.requestMaker
    <POST_v3_senders_sender_id_resend_verification_Type, void >({
        id: 'POST_v3_senders_sender_id_resend_verification',
        path: '/senders/{sender_id}/resend_verification',
        verb: 'POST',
        parameters: [{"name":"on-behalf-of","in":"header"},{"name":"sender_id","required":true,"in":"path"}]
    })



