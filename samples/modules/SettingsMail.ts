import * as Types from '../api-types'
import * as ApiCommon from '../api-common'


export type GET_mail_settings_Type = {
    'limit'? : number
    'offset'? : number
    'on-behalf-of'? : string
}
export const GET_mail_settings
    = ApiCommon.requestMaker
    <GET_mail_settings_Type, Types.__GET_mail_settings__response >({
        id: 'GET_mail_settings',
        path: '/mail_settings',
        verb: 'GET',
        parameters: [{"name":"limit","in":"query"},{"name":"offset","in":"query"},{"name":"on-behalf-of","in":"header"}]
    })



export type GET_mail_settings_bcc_Type = {
    'on-behalf-of'? : string
}
export const GET_mail_settings_bcc
    = ApiCommon.requestMaker
    <GET_mail_settings_bcc_Type, Types.mail_settings_bcc >({
        id: 'GET_mail_settings_bcc',
        path: '/mail_settings/bcc',
        verb: 'GET',
        parameters: [{"name":"on-behalf-of","in":"header"}]
    })



export type PATCH_mail_settings_bcc_Type = {
    'body'? : Types.mail_settings_patch
    'on-behalf-of'? : string
}
export const PATCH_mail_settings_bcc
    = ApiCommon.requestMaker
    <PATCH_mail_settings_bcc_Type, Types.mail_settings_patch >({
        id: 'PATCH_mail_settings_bcc',
        path: '/mail_settings/bcc',
        verb: 'PATCH',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"}]
    })



export type GET_mail_settings_address_whitelist_Type = {
    'on-behalf-of'? : string
}
export const GET_mail_settings_address_whitelist
    = ApiCommon.requestMaker
    <GET_mail_settings_address_whitelist_Type, Types.mail_settings_address_whitelabel >({
        id: 'GET_mail_settings_address_whitelist',
        path: '/mail_settings/address_whitelist',
        verb: 'GET',
        parameters: [{"name":"on-behalf-of","in":"header"}]
    })



export type PATCH_mail_settings_address_whitelist_Type = {
    'body'? : any
    'on-behalf-of'? : string
}
export const PATCH_mail_settings_address_whitelist
    = ApiCommon.requestMaker
    <PATCH_mail_settings_address_whitelist_Type, Types.mail_settings_address_whitelabel >({
        id: 'PATCH_mail_settings_address_whitelist',
        path: '/mail_settings/address_whitelist',
        verb: 'PATCH',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"}]
    })



export type GET_mail_settings_footer_Type = {
    'on-behalf-of'? : string
}
export const GET_mail_settings_footer
    = ApiCommon.requestMaker
    <GET_mail_settings_footer_Type, Types.mail_settings_footer >({
        id: 'GET_mail_settings_footer',
        path: '/mail_settings/footer',
        verb: 'GET',
        parameters: [{"name":"on-behalf-of","in":"header"}]
    })



export type PATCH_mail_settings_footer_Type = {
    'body'? : Types.mail_settings_footer
    'on-behalf-of'? : string
}
export const PATCH_mail_settings_footer
    = ApiCommon.requestMaker
    <PATCH_mail_settings_footer_Type, Types.mail_settings_footer >({
        id: 'PATCH_mail_settings_footer',
        path: '/mail_settings/footer',
        verb: 'PATCH',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"}]
    })



export type GET_mail_settings_forward_spam_Type = {
    'on-behalf-of'? : string
}
export const GET_mail_settings_forward_spam
    = ApiCommon.requestMaker
    <GET_mail_settings_forward_spam_Type, Types.mail_settings_forward_spam >({
        id: 'GET_mail_settings_forward_spam',
        path: '/mail_settings/forward_spam',
        verb: 'GET',
        parameters: [{"name":"on-behalf-of","in":"header"}]
    })



export type PATCH_mail_settings_forward_spam_Type = {
    'body'? : Types.mail_settings_forward_spam
    'on-behalf-of'? : string
}
export const PATCH_mail_settings_forward_spam
    = ApiCommon.requestMaker
    <PATCH_mail_settings_forward_spam_Type, Types.mail_settings_forward_spam >({
        id: 'PATCH_mail_settings_forward_spam',
        path: '/mail_settings/forward_spam',
        verb: 'PATCH',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"}]
    })



export type GET_mail_settings_plain_content_Type = {
    'on-behalf-of'? : string
}
export const GET_mail_settings_plain_content
    = ApiCommon.requestMaker
    <GET_mail_settings_plain_content_Type, Types.__GET_mail_settings_plain_content__response >({
        id: 'GET_mail_settings_plain_content',
        path: '/mail_settings/plain_content',
        verb: 'GET',
        parameters: [{"name":"on-behalf-of","in":"header"}]
    })



export type PATCH_mail_settings_plain_content_Type = {
    'body'? : any
    'on-behalf-of'? : string
}
export const PATCH_mail_settings_plain_content
    = ApiCommon.requestMaker
    <PATCH_mail_settings_plain_content_Type, Types.__PATCH_mail_settings_plain_content__response >({
        id: 'PATCH_mail_settings_plain_content',
        path: '/mail_settings/plain_content',
        verb: 'PATCH',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"}]
    })



export type GET_mail_settings_spam_check_Type = {
    'on-behalf-of'? : string
}
export const GET_mail_settings_spam_check
    = ApiCommon.requestMaker
    <GET_mail_settings_spam_check_Type, Types.mail_settings_spam_check >({
        id: 'GET_mail_settings_spam_check',
        path: '/mail_settings/spam_check',
        verb: 'GET',
        parameters: [{"name":"on-behalf-of","in":"header"}]
    })



export type PATCH_mail_settings_spam_check_Type = {
    'body'? : any
    'on-behalf-of'? : string
}
export const PATCH_mail_settings_spam_check
    = ApiCommon.requestMaker
    <PATCH_mail_settings_spam_check_Type, Types.mail_settings_spam_check >({
        id: 'PATCH_mail_settings_spam_check',
        path: '/mail_settings/spam_check',
        verb: 'PATCH',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"}]
    })



export type GET_mail_settings_template_Type = {
    'on-behalf-of'? : string
}
export const GET_mail_settings_template
    = ApiCommon.requestMaker
    <GET_mail_settings_template_Type, Types.mail_settings_template >({
        id: 'GET_mail_settings_template',
        path: '/mail_settings/template',
        verb: 'GET',
        parameters: [{"name":"on-behalf-of","in":"header"}]
    })



export type PATCH_mail_settings_template_Type = {
    'body'? : any
    'on-behalf-of'? : string
}
export const PATCH_mail_settings_template
    = ApiCommon.requestMaker
    <PATCH_mail_settings_template_Type, Types.__PATCH_mail_settings_template__response >({
        id: 'PATCH_mail_settings_template',
        path: '/mail_settings/template',
        verb: 'PATCH',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"}]
    })



export type GET_mail_settings_bounce_purge_Type = {
    'on-behalf-of'? : string
}
export const GET_mail_settings_bounce_purge
    = ApiCommon.requestMaker
    <GET_mail_settings_bounce_purge_Type, Types.mail_settings_bounce_purge >({
        id: 'GET_mail_settings_bounce_purge',
        path: '/mail_settings/bounce_purge',
        verb: 'GET',
        parameters: [{"name":"on-behalf-of","in":"header"}]
    })



export type PATCH_mail_settings_bounce_purge_Type = {
    'body'? : Types.mail_settings_bounce_purge
    'on-behalf-of'? : string
}
export const PATCH_mail_settings_bounce_purge
    = ApiCommon.requestMaker
    <PATCH_mail_settings_bounce_purge_Type, Types.mail_settings_bounce_purge >({
        id: 'PATCH_mail_settings_bounce_purge',
        path: '/mail_settings/bounce_purge',
        verb: 'PATCH',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"}]
    })



export type GET_mail_settings_forward_bounce_Type = {
    'on-behalf-of'? : string
}
export const GET_mail_settings_forward_bounce
    = ApiCommon.requestMaker
    <GET_mail_settings_forward_bounce_Type, Types.mail_settings_forward_bounce >({
        id: 'GET_mail_settings_forward_bounce',
        path: '/mail_settings/forward_bounce',
        verb: 'GET',
        parameters: [{"name":"on-behalf-of","in":"header"}]
    })



export type PATCH_mail_settings_forward_bounce_Type = {
    'body'? : Types.mail_settings_forward_bounce
    'on-behalf-of'? : string
}
export const PATCH_mail_settings_forward_bounce
    = ApiCommon.requestMaker
    <PATCH_mail_settings_forward_bounce_Type, Types.mail_settings_forward_bounce >({
        id: 'PATCH_mail_settings_forward_bounce',
        path: '/mail_settings/forward_bounce',
        verb: 'PATCH',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"}]
    })



