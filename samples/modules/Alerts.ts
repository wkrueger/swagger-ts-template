import * as Types from '../api-types'
import * as ApiCommon from '../api-common'


export type POST_alerts_Type = {
    'body'? : any
    'on-behalf-of'? : string
}
export const POST_alerts
    = ApiCommon.requestMaker
    <POST_alerts_Type, Types.__POST_alerts__response >({
        id: 'POST_alerts',
        path: '/alerts',
        verb: 'POST',
        parameters: [{"name":"Authorization","in":"header"},{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"}]
    })



export type GET_alerts_Type = {
    'body'? : any
    'on-behalf-of'? : string
}
export const GET_alerts
    = ApiCommon.requestMaker
    <GET_alerts_Type, any[] >({
        id: 'GET_alerts',
        path: '/alerts',
        verb: 'GET',
        parameters: [{"name":"Authorization","in":"header"},{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"}]
    })



export type GET_alerts_alert_id_Type = {
    'alert_id' : number
    'on-behalf-of'? : string
}
export const GET_alerts_alert_id
    = ApiCommon.requestMaker
    <GET_alerts_alert_id_Type, Types.__GET_alerts_alert_id__response >({
        id: 'GET_alerts_alert_id',
        path: '/alerts/{alert_id}',
        verb: 'GET',
        parameters: [{"name":"alert_id","required":true,"in":"path"},{"name":"Authorization","in":"header"},{"name":"on-behalf-of","in":"header"}]
    })



export type DELETE_alerts_alert_id_Type = {
    'alert_id' : number
    'on-behalf-of'? : string
}
export const DELETE_alerts_alert_id
    = ApiCommon.requestMaker
    <DELETE_alerts_alert_id_Type, void >({
        id: 'DELETE_alerts_alert_id',
        path: '/alerts/{alert_id}',
        verb: 'DELETE',
        parameters: [{"name":"alert_id","required":true,"in":"path"},{"name":"on-behalf-of","in":"header"}]
    })



export type PATCH_alerts_alert_id_Type = {
    'alert_id' : number
    'body'? : any
    'on-behalf-of'? : string
}
export const PATCH_alerts_alert_id
    = ApiCommon.requestMaker
    <PATCH_alerts_alert_id_Type, Types.__PATCH_alerts_alert_id__response >({
        id: 'PATCH_alerts_alert_id',
        path: '/alerts/{alert_id}',
        verb: 'PATCH',
        parameters: [{"name":"alert_id","required":true,"in":"path"},{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"}]
    })



