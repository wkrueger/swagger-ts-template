import * as ApiCommon from '../api-common'


export type GET_suppression_bounces_Type = {
    'Accept' : string
    'end_time'? : number
    'on-behalf-of'? : string
    'start_time'? : number
}
export const GET_suppression_bounces
    = ApiCommon.requestMaker
    <GET_suppression_bounces_Type, any[] >({
        id: 'GET_suppression_bounces',
        path: '/suppression/bounces',
        verb: 'GET',
        parameters: [{"name":"Accept","required":true,"in":"header"},{"name":"end_time","in":"query"},{"name":"on-behalf-of","in":"header"},{"name":"start_time","in":"query"}]
    })



export type DELETE_suppression_bounces_Type = {
    'body'? : any
    'on-behalf-of'? : string
}
export const DELETE_suppression_bounces
    = ApiCommon.requestMaker
    <DELETE_suppression_bounces_Type, void >({
        id: 'DELETE_suppression_bounces',
        path: '/suppression/bounces',
        verb: 'DELETE',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"}]
    })



export type GET_suppression_bounces_email_Type = {
    'email' : string
    'on-behalf-of'? : string
}
export const GET_suppression_bounces_email
    = ApiCommon.requestMaker
    <GET_suppression_bounces_email_Type, any[] >({
        id: 'GET_suppression_bounces_email',
        path: '/suppression/bounces/{email}',
        verb: 'GET',
        parameters: [{"name":"email","required":true,"in":"path"},{"name":"on-behalf-of","in":"header"}]
    })



export type DELETE_suppression_bounces_email_Type = {
    'body'? : any
    'email' : string
    'email_address' : string
    'on-behalf-of'? : string
}
export const DELETE_suppression_bounces_email
    = ApiCommon.requestMaker
    <DELETE_suppression_bounces_email_Type, void >({
        id: 'DELETE_suppression_bounces_email',
        path: '/suppression/bounces/{email}',
        verb: 'DELETE',
        parameters: [{"name":"body","in":"body"},{"name":"email","required":true,"in":"path"},{"name":"email_address","required":true,"in":"query"},{"name":"on-behalf-of","in":"header"}]
    })



