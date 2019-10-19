import * as Types from '../api-types'
import * as ApiCommon from '../api-common'


export type GET_user_settings_enforced_tls_Type = {
    'on-behalf-of'? : string
}
export const GET_user_settings_enforced_tls
    = ApiCommon.requestMaker
    <GET_user_settings_enforced_tls_Type, Types.__GET_user_settings_enforced_tls__response >({
        id: 'GET_user_settings_enforced_tls',
        path: '/user/settings/enforced_tls',
        verb: 'GET',
        parameters: [{"name":"on-behalf-of","in":"header"}]
    })



export type PATCH_user_settings_enforced_tls_Type = {
    'body'? : any
    'on-behalf-of'? : string
}
export const PATCH_user_settings_enforced_tls
    = ApiCommon.requestMaker
    <PATCH_user_settings_enforced_tls_Type, Types.__PATCH_user_settings_enforced_tls__response >({
        id: 'PATCH_user_settings_enforced_tls',
        path: '/user/settings/enforced_tls',
        verb: 'PATCH',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"}]
    })



