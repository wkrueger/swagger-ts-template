import * as Types from '../api-types'
import * as ApiCommon from '../api-common'


export type GET_partner_settings_Type = {
    'limit'? : number
    'offset'? : number
}
export const GET_partner_settings
    = ApiCommon.requestMaker
    <GET_partner_settings_Type, Types.__GET_partner_settings__response >({
        id: 'GET_partner_settings',
        path: '/partner_settings',
        verb: 'GET',
        parameters: [{"name":"limit","in":"query"},{"name":"offset","in":"query"}]
    })



export type GET_partner_settings_new_relic_Type = {}
export const GET_partner_settings_new_relic
    = ApiCommon.requestMaker
    <GET_partner_settings_new_relic_Type, Types.partner_settings_new_relic >({
        id: 'GET_partner_settings_new_relic',
        path: '/partner_settings/new_relic',
        verb: 'GET',
        parameters: []
    })



export type PATCH_partner_settings_new_relic_Type = {
    'body'? : any
}
export const PATCH_partner_settings_new_relic
    = ApiCommon.requestMaker
    <PATCH_partner_settings_new_relic_Type, Types.partner_settings_new_relic >({
        id: 'PATCH_partner_settings_new_relic',
        path: '/partner_settings/new_relic',
        verb: 'PATCH',
        parameters: [{"name":"body","in":"body"}]
    })



