import * as Types from '../api-types'
import * as ApiCommon from '../api-common'


export type GET_user_profile_Type = {
    'on-behalf-of'? : string
}
export const GET_user_profile
    = ApiCommon.requestMaker
    <GET_user_profile_Type, Types.__GET_user_profile__response >({
        id: 'GET_user_profile',
        path: '/user/profile',
        verb: 'GET',
        parameters: [{"name":"on-behalf-of","in":"header"}]
    })



export type PATCH_user_profile_Type = {
    'body'? : Types.user_profile
    'on-behalf-of'? : string
}
export const PATCH_user_profile
    = ApiCommon.requestMaker
    <PATCH_user_profile_Type, Types.user_profile >({
        id: 'PATCH_user_profile',
        path: '/user/profile',
        verb: 'PATCH',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"}]
    })



export type GET_user_account_Type = {
    'on-behalf-of'? : string
}
export const GET_user_account
    = ApiCommon.requestMaker
    <GET_user_account_Type, Types.__GET_user_account__response >({
        id: 'GET_user_account',
        path: '/user/account',
        verb: 'GET',
        parameters: [{"name":"on-behalf-of","in":"header"}]
    })



export type GET_user_email_Type = {
    'on-behalf-of'? : string
}
export const GET_user_email
    = ApiCommon.requestMaker
    <GET_user_email_Type, Types.__GET_user_email__response >({
        id: 'GET_user_email',
        path: '/user/email',
        verb: 'GET',
        parameters: [{"name":"on-behalf-of","in":"header"}]
    })



export type PUT_user_email_Type = {
    'body'? : any
    'on-behalf-of'? : string
}
export const PUT_user_email
    = ApiCommon.requestMaker
    <PUT_user_email_Type, Types.__PUT_user_email__response >({
        id: 'PUT_user_email',
        path: '/user/email',
        verb: 'PUT',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"}]
    })



export type GET_user_username_Type = {
    'on-behalf-of'? : string
}
export const GET_user_username
    = ApiCommon.requestMaker
    <GET_user_username_Type, Types.__GET_user_username__response >({
        id: 'GET_user_username',
        path: '/user/username',
        verb: 'GET',
        parameters: [{"name":"on-behalf-of","in":"header"}]
    })



export type PUT_user_username_Type = {
    'body'? : any
    'on-behalf-of'? : string
}
export const PUT_user_username
    = ApiCommon.requestMaker
    <PUT_user_username_Type, Types.__PUT_user_username__response >({
        id: 'PUT_user_username',
        path: '/user/username',
        verb: 'PUT',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"}]
    })



export type GET_user_credits_Type = {
    'on-behalf-of'? : string
}
export const GET_user_credits
    = ApiCommon.requestMaker
    <GET_user_credits_Type, Types.__GET_user_credits__response >({
        id: 'GET_user_credits',
        path: '/user/credits',
        verb: 'GET',
        parameters: [{"name":"on-behalf-of","in":"header"}]
    })



export type PUT_user_password_Type = {
    'body'? : any
    'on-behalf-of'? : string
}
export const PUT_user_password
    = ApiCommon.requestMaker
    <PUT_user_password_Type, Types.__PUT_user_password__response >({
        id: 'PUT_user_password',
        path: '/user/password',
        verb: 'PUT',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"}]
    })



