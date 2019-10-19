import * as Types from '../api-types'
import * as ApiCommon from '../api-common'


export type POST_templates_Type = {
    'body'? : any
    'on-behalf-of'? : string
}
export const POST_templates
    = ApiCommon.requestMaker
    <POST_templates_Type, Types.transactional_template >({
        id: 'POST_templates',
        path: '/templates',
        verb: 'POST',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"}]
    })



export type GET_templates_Type = {
    'on-behalf-of'? : string
}
export const GET_templates
    = ApiCommon.requestMaker
    <GET_templates_Type, Types.transactional_template[] >({
        id: 'GET_templates',
        path: '/templates',
        verb: 'GET',
        parameters: [{"name":"on-behalf-of","in":"header"}]
    })



export type GET_templates_template_id_Type = {
    'on-behalf-of'? : string
    'template_id' : string
}
export const GET_templates_template_id
    = ApiCommon.requestMaker
    <GET_templates_template_id_Type, Types.transactional_template >({
        id: 'GET_templates_template_id',
        path: '/templates/{template_id}',
        verb: 'GET',
        parameters: [{"name":"on-behalf-of","in":"header"},{"name":"template_id","required":true,"in":"path"}]
    })



export type PATCH_templates_template_id_Type = {
    'body'? : any
    'on-behalf-of'? : string
    'template_id' : string
}
export const PATCH_templates_template_id
    = ApiCommon.requestMaker
    <PATCH_templates_template_id_Type, Types.transactional_template >({
        id: 'PATCH_templates_template_id',
        path: '/templates/{template_id}',
        verb: 'PATCH',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"},{"name":"template_id","required":true,"in":"path"}]
    })



export type DELETE_templates_template_id_Type = {
    'body'? : any
    'on-behalf-of'? : string
    'template_id' : string
}
export const DELETE_templates_template_id
    = ApiCommon.requestMaker
    <DELETE_templates_template_id_Type, void >({
        id: 'DELETE_templates_template_id',
        path: '/templates/{template_id}',
        verb: 'DELETE',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"},{"name":"template_id","required":true,"in":"path"}]
    })



