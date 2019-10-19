import * as Types from '../api-types'
import * as ApiCommon from '../api-common'


export type POST_campaigns_Type = {
    'body'? : Types.campaign_request
}
export const POST_campaigns
    = ApiCommon.requestMaker
    <POST_campaigns_Type, Types.campaign_response >({
        id: 'POST_campaigns',
        path: '/campaigns',
        verb: 'POST',
        parameters: [{"name":"body","in":"body"}]
    })



export type GET_campaigns_Type = {
    'limit'? : number
    'offset'? : number
}
export const GET_campaigns
    = ApiCommon.requestMaker
    <GET_campaigns_Type, Types.__GET_campaigns__response >({
        id: 'GET_campaigns',
        path: '/campaigns',
        verb: 'GET',
        parameters: [{"name":"limit","in":"query"},{"name":"offset","in":"query"}]
    })



export type GET_campaigns_campaign_id_Type = {
    'campaign_id' : number
}
export const GET_campaigns_campaign_id
    = ApiCommon.requestMaker
    <GET_campaigns_campaign_id_Type, Types.__GET_campaigns_campaign_id__response >({
        id: 'GET_campaigns_campaign_id',
        path: '/campaigns/{campaign_id}',
        verb: 'GET',
        parameters: [{"name":"campaign_id","required":true,"in":"path"}]
    })



export type DELETE_campaigns_campaign_id_Type = {
    'body'? : any
    'campaign_id' : number
}
export const DELETE_campaigns_campaign_id
    = ApiCommon.requestMaker
    <DELETE_campaigns_campaign_id_Type, void >({
        id: 'DELETE_campaigns_campaign_id',
        path: '/campaigns/{campaign_id}',
        verb: 'DELETE',
        parameters: [{"name":"body","in":"body"},{"name":"campaign_id","required":true,"in":"path"}]
    })



export type PATCH_campaigns_campaign_id_Type = {
    'body'? : any
    'campaign_id' : number
}
export const PATCH_campaigns_campaign_id
    = ApiCommon.requestMaker
    <PATCH_campaigns_campaign_id_Type, Types.campaign_response >({
        id: 'PATCH_campaigns_campaign_id',
        path: '/campaigns/{campaign_id}',
        verb: 'PATCH',
        parameters: [{"name":"body","in":"body"},{"name":"campaign_id","required":true,"in":"path"}]
    })



export type POST_campaigns_campaign_id_schedules_now_Type = {
    'body'? : any
    'campaign_id' : number
}
export const POST_campaigns_campaign_id_schedules_now
    = ApiCommon.requestMaker
    <POST_campaigns_campaign_id_schedules_now_Type, Types.__POST_campaigns_campaign_id_schedules_now__response >({
        id: 'POST_campaigns_campaign_id_schedules_now',
        path: '/campaigns/{campaign_id}/schedules/now',
        verb: 'POST',
        parameters: [{"name":"body","in":"body"},{"name":"campaign_id","required":true,"in":"path"}]
    })



export type POST_campaigns_campaign_id_schedules_Type = {
    'body'? : any
    'campaign_id' : number
}
export const POST_campaigns_campaign_id_schedules
    = ApiCommon.requestMaker
    <POST_campaigns_campaign_id_schedules_Type, Types.__POST_campaigns_campaign_id_schedules__response >({
        id: 'POST_campaigns_campaign_id_schedules',
        path: '/campaigns/{campaign_id}/schedules',
        verb: 'POST',
        parameters: [{"name":"body","in":"body"},{"name":"campaign_id","required":true,"in":"path"}]
    })



export type PATCH_campaigns_campaign_id_schedules_Type = {
    'body'? : any
    'campaign_id' : number
}
export const PATCH_campaigns_campaign_id_schedules
    = ApiCommon.requestMaker
    <PATCH_campaigns_campaign_id_schedules_Type, Types.__PATCH_campaigns_campaign_id_schedules__response >({
        id: 'PATCH_campaigns_campaign_id_schedules',
        path: '/campaigns/{campaign_id}/schedules',
        verb: 'PATCH',
        parameters: [{"name":"body","in":"body"},{"name":"campaign_id","required":true,"in":"path"}]
    })



export type GET_campaigns_campaign_id_schedules_Type = {
    'campaign_id' : number
}
export const GET_campaigns_campaign_id_schedules
    = ApiCommon.requestMaker
    <GET_campaigns_campaign_id_schedules_Type, Types.__GET_campaigns_campaign_id_schedules__response >({
        id: 'GET_campaigns_campaign_id_schedules',
        path: '/campaigns/{campaign_id}/schedules',
        verb: 'GET',
        parameters: [{"name":"campaign_id","required":true,"in":"path"}]
    })



export type DELETE_campaigns_campaign_id_schedules_Type = {
    'body'? : any
    'campaign_id' : number
}
export const DELETE_campaigns_campaign_id_schedules
    = ApiCommon.requestMaker
    <DELETE_campaigns_campaign_id_schedules_Type, void >({
        id: 'DELETE_campaigns_campaign_id_schedules',
        path: '/campaigns/{campaign_id}/schedules',
        verb: 'DELETE',
        parameters: [{"name":"body","in":"body"},{"name":"campaign_id","required":true,"in":"path"}]
    })



export type POST_campaigns_campaign_id_schedules_test_Type = {
    'body'? : any
    'campaign_id' : number
}
export const POST_campaigns_campaign_id_schedules_test
    = ApiCommon.requestMaker
    <POST_campaigns_campaign_id_schedules_test_Type, void >({
        id: 'POST_campaigns_campaign_id_schedules_test',
        path: '/campaigns/{campaign_id}/schedules/test',
        verb: 'POST',
        parameters: [{"name":"body","in":"body"},{"name":"campaign_id","required":true,"in":"path"}]
    })



