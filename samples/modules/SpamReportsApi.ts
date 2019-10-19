import * as ApiCommon from '../api-common'


export type GET_suppression_spam_reports_Type = {
    'end_time'? : number
    'limit'? : number
    'offset'? : number
    'on-behalf-of'? : string
    'start_time'? : number
}
export const GET_suppression_spam_reports
    = ApiCommon.requestMaker
    <GET_suppression_spam_reports_Type, any[] >({
        id: 'GET_suppression_spam_reports',
        path: '/suppression/spam_reports',
        verb: 'GET',
        parameters: [{"name":"end_time","in":"query"},{"name":"limit","in":"query"},{"name":"offset","in":"query"},{"name":"on-behalf-of","in":"header"},{"name":"start_time","in":"query"}]
    })



export type DELETE_suppression_spam_reports_Type = {
    'body'? : any
    'on-behalf-of'? : string
}
export const DELETE_suppression_spam_reports
    = ApiCommon.requestMaker
    <DELETE_suppression_spam_reports_Type, void >({
        id: 'DELETE_suppression_spam_reports',
        path: '/suppression/spam_reports',
        verb: 'DELETE',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"}]
    })



export type GET_suppression_spam_reports_email_Type = {
    'email' : string
    'on-behalf-of'? : string
}
export const GET_suppression_spam_reports_email
    = ApiCommon.requestMaker
    <GET_suppression_spam_reports_email_Type, any[] >({
        id: 'GET_suppression_spam_reports_email',
        path: '/suppression/spam_reports/{email}',
        verb: 'GET',
        parameters: [{"name":"email","required":true,"in":"path"},{"name":"on-behalf-of","in":"header"}]
    })



export type DELETE_suppression_spam_reports_email_Type = {
    'body'? : any
    'email' : string
    'on-behalf-of'? : string
}
export const DELETE_suppression_spam_reports_email
    = ApiCommon.requestMaker
    <DELETE_suppression_spam_reports_email_Type, void >({
        id: 'DELETE_suppression_spam_reports_email',
        path: '/suppression/spam_reports/{email}',
        verb: 'DELETE',
        parameters: [{"name":"body","in":"body"},{"name":"email","required":true,"in":"path"},{"name":"on-behalf-of","in":"header"}]
    })



