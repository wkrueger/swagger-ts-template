import * as Types from '../api-types'
import * as ApiCommon from '../api-common'


export type GET_v3_scopes_requests_Type = {
    'limit'? : number
    'offset'? : number
}
export const GET_v3_scopes_requests
    = ApiCommon.requestMaker
    <GET_v3_scopes_requests_Type, any[] >({
        id: 'GET_v3_scopes_requests',
        path: '/scopes/requests',
        verb: 'GET',
        parameters: [{"name":"limit","in":"query"},{"name":"offset","in":"query"}]
    })



export type DELETE_v3_scopes_requests_request_id_Type = {
    'request_id' : string
}
export const DELETE_v3_scopes_requests_request_id
    = ApiCommon.requestMaker
    <DELETE_v3_scopes_requests_request_id_Type, void >({
        id: 'DELETE_v3_scopes_requests_request_id',
        path: '/scopes/requests/{request_id}',
        verb: 'DELETE',
        parameters: [{"name":"request_id","required":true,"in":"path"}]
    })



export type PATCH_v3_scopes_requests_approve_id_Type = {
    'request_id' : string
}
export const PATCH_v3_scopes_requests_approve_id
    = ApiCommon.requestMaker
    <PATCH_v3_scopes_requests_approve_id_Type, Types.__PATCH_v3_scopes_requests_approve_id__response >({
        id: 'PATCH_v3_scopes_requests_approve_id',
        path: '/scopes/requests/{request_id}/approve',
        verb: 'PATCH',
        parameters: [{"name":"request_id","required":true,"in":"path"}]
    })



export type POST_v3_teammates_pending_token_resend_Type = {
    'token' : string
}
export const POST_v3_teammates_pending_token_resend
    = ApiCommon.requestMaker
    <POST_v3_teammates_pending_token_resend_Type, Types.__POST_v3_teammates_pending_token_resend__response >({
        id: 'POST_v3_teammates_pending_token_resend',
        path: '/teammates/pending/{token}/resend',
        verb: 'POST',
        parameters: [{"name":"token","required":true,"in":"path"}]
    })



export type GET_v3_teammates_pending_Type = {}
export const GET_v3_teammates_pending
    = ApiCommon.requestMaker
    <GET_v3_teammates_pending_Type, Types.__GET_v3_teammates_pending__response >({
        id: 'GET_v3_teammates_pending',
        path: '/teammates/pending',
        verb: 'GET',
        parameters: []
    })



export type DELETE_v3_teammates_pending_token_Type = {
    'token' : string
}
export const DELETE_v3_teammates_pending_token
    = ApiCommon.requestMaker
    <DELETE_v3_teammates_pending_token_Type, void >({
        id: 'DELETE_v3_teammates_pending_token',
        path: '/teammates/pending/{token}',
        verb: 'DELETE',
        parameters: [{"name":"token","required":true,"in":"path"}]
    })



export type POST_v3_teammates_Type = {
    'body'? : any
}
export const POST_v3_teammates
    = ApiCommon.requestMaker
    <POST_v3_teammates_Type, Types.__POST_v3_teammates__response >({
        id: 'POST_v3_teammates',
        path: '/teammates',
        verb: 'POST',
        parameters: [{"name":"body","in":"body"}]
    })



export type GET_v3_teammates_Type = {
    'limit'? : number
    'offset'? : number
}
export const GET_v3_teammates
    = ApiCommon.requestMaker
    <GET_v3_teammates_Type, Types.__GET_v3_teammates__response >({
        id: 'GET_v3_teammates',
        path: '/teammates',
        verb: 'GET',
        parameters: [{"name":"limit","in":"query"},{"name":"offset","in":"query"}]
    })



export type GET_v3_teammates_username_Type = {
    'username' : string
}
export const GET_v3_teammates_username
    = ApiCommon.requestMaker
    <GET_v3_teammates_username_Type, Types.__GET_v3_teammates_username__response >({
        id: 'GET_v3_teammates_username',
        path: '/teammates/{username}',
        verb: 'GET',
        parameters: [{"name":"username","required":true,"in":"path"}]
    })



export type PATCH_v3_teammates_username_Type = {
    'body'? : any
    'username' : string
}
export const PATCH_v3_teammates_username
    = ApiCommon.requestMaker
    <PATCH_v3_teammates_username_Type, Types.__PATCH_v3_teammates_username__response >({
        id: 'PATCH_v3_teammates_username',
        path: '/teammates/{username}',
        verb: 'PATCH',
        parameters: [{"name":"body","in":"body"},{"name":"username","required":true,"in":"path"}]
    })



export type DELETE_v3_teammates_username_Type = {
    'username' : string
}
export const DELETE_v3_teammates_username
    = ApiCommon.requestMaker
    <DELETE_v3_teammates_username_Type, void >({
        id: 'DELETE_v3_teammates_username',
        path: '/teammates/{username}',
        verb: 'DELETE',
        parameters: [{"name":"username","required":true,"in":"path"}]
    })



