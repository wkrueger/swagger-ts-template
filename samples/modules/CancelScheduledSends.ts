import * as Types from '../api-types'
import * as ApiCommon from '../api-common'


export type POST_mail_batch_Type = {
    'body'? : any
}
export const POST_mail_batch
    = ApiCommon.requestMaker
    <POST_mail_batch_Type, Types.mail_batch_id >({
        id: 'POST_mail_batch',
        path: '/mail/batch',
        verb: 'POST',
        parameters: [{"name":"body","in":"body"}]
    })



export type GET_mail_batch_batch_id_Type = {
    'batch_id' : string
}
export const GET_mail_batch_batch_id
    = ApiCommon.requestMaker
    <GET_mail_batch_batch_id_Type, Types.mail_batch_id >({
        id: 'GET_mail_batch_batch_id',
        path: '/mail/batch/{batch_id}',
        verb: 'GET',
        parameters: [{"name":"batch_id","required":true,"in":"path"}]
    })



export type POST_user_scheduled_sends_Type = {
    'body'? : any
}
export const POST_user_scheduled_sends
    = ApiCommon.requestMaker
    <POST_user_scheduled_sends_Type, Types.user_scheduled_send_status >({
        id: 'POST_user_scheduled_sends',
        path: '/user/scheduled_sends',
        verb: 'POST',
        parameters: [{"name":"body","in":"body"}]
    })



export type GET_user_scheduled_sends_Type = {}
export const GET_user_scheduled_sends
    = ApiCommon.requestMaker
    <GET_user_scheduled_sends_Type, Types.user_scheduled_send_status[] >({
        id: 'GET_user_scheduled_sends',
        path: '/user/scheduled_sends',
        verb: 'GET',
        parameters: []
    })



export type GET_user_scheduled_sends_batch_id_Type = {
    'batch_id' : string
}
export const GET_user_scheduled_sends_batch_id
    = ApiCommon.requestMaker
    <GET_user_scheduled_sends_batch_id_Type, Types.user_scheduled_send_status[] >({
        id: 'GET_user_scheduled_sends_batch_id',
        path: '/user/scheduled_sends/{batch_id}',
        verb: 'GET',
        parameters: [{"name":"batch_id","required":true,"in":"path"}]
    })



export type PATCH_user_scheduled_sends_batch_id_Type = {
    'batch_id' : string
    'body'? : any
}
export const PATCH_user_scheduled_sends_batch_id
    = ApiCommon.requestMaker
    <PATCH_user_scheduled_sends_batch_id_Type, void >({
        id: 'PATCH_user_scheduled_sends_batch_id',
        path: '/user/scheduled_sends/{batch_id}',
        verb: 'PATCH',
        parameters: [{"name":"batch_id","required":true,"in":"path"},{"name":"body","in":"body"}]
    })



export type DELETE_user_scheduled_sends_batch_id_Type = {
    'batch_id' : string
    'body'? : any
}
export const DELETE_user_scheduled_sends_batch_id
    = ApiCommon.requestMaker
    <DELETE_user_scheduled_sends_batch_id_Type, void >({
        id: 'DELETE_user_scheduled_sends_batch_id',
        path: '/user/scheduled_sends/{batch_id}',
        verb: 'DELETE',
        parameters: [{"name":"batch_id","required":true,"in":"path"},{"name":"body","in":"body"}]
    })



