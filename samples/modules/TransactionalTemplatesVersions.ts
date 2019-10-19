import * as Types from '../api-types'
import * as ApiCommon from '../api-common'


export type POST_templates_template_id_versions_Type = {
    'body'? : Types.transactional_template_version
    'on-behalf-of'? : string
    'template_id' : string
}
export const POST_templates_template_id_versions
    = ApiCommon.requestMaker
    <POST_templates_template_id_versions_Type, Types.__POST_templates_template_id_versions__response >({
        id: 'POST_templates_template_id_versions',
        path: '/templates/{template_id}/versions',
        verb: 'POST',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"},{"name":"template_id","required":true,"in":"path"}]
    })



export type POST_templates_template_id_versions_version_id_activate_Type = {
    'body'? : any
    'on-behalf-of'? : string
    'template_id' : string
    'version_id' : string
}
export const POST_templates_template_id_versions_version_id_activate
    = ApiCommon.requestMaker
    <POST_templates_template_id_versions_version_id_activate_Type, Types.__POST_templates_template_id_versions_version_id_activate__response >({
        id: 'POST_templates_template_id_versions_version_id_activate',
        path: '/templates/{template_id}/versions/{version_id}/activate',
        verb: 'POST',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"},{"name":"template_id","required":true,"in":"path"},{"name":"version_id","required":true,"in":"path"}]
    })



export type GET_templates_template_id_versions_version_id_Type = {
    'on-behalf-of'? : string
    'template_id' : string
    'version_id' : string
}
export const GET_templates_template_id_versions_version_id
    = ApiCommon.requestMaker
    <GET_templates_template_id_versions_version_id_Type, Types.__GET_templates_template_id_versions_version_id__response >({
        id: 'GET_templates_template_id_versions_version_id',
        path: '/templates/{template_id}/versions/{version_id}',
        verb: 'GET',
        parameters: [{"name":"on-behalf-of","in":"header"},{"name":"template_id","required":true,"in":"path"},{"name":"version_id","required":true,"in":"path"}]
    })



export type PATCH_templates_template_id_versions_version_id_Type = {
    'body'? : any
    'on-behalf-of'? : string
    'template_id' : string
    'version_id' : string
}
export const PATCH_templates_template_id_versions_version_id
    = ApiCommon.requestMaker
    <PATCH_templates_template_id_versions_version_id_Type, Types.__PATCH_templates_template_id_versions_version_id__response >({
        id: 'PATCH_templates_template_id_versions_version_id',
        path: '/templates/{template_id}/versions/{version_id}',
        verb: 'PATCH',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"},{"name":"template_id","required":true,"in":"path"},{"name":"version_id","required":true,"in":"path"}]
    })



export type DELETE_templates_template_id_versions_version_id_Type = {
    'body'? : any
    'on-behalf-of'? : string
    'template_id' : string
    'version_id' : string
}
export const DELETE_templates_template_id_versions_version_id
    = ApiCommon.requestMaker
    <DELETE_templates_template_id_versions_version_id_Type, void >({
        id: 'DELETE_templates_template_id_versions_version_id',
        path: '/templates/{template_id}/versions/{version_id}',
        verb: 'DELETE',
        parameters: [{"name":"body","in":"body"},{"name":"on-behalf-of","in":"header"},{"name":"template_id","required":true,"in":"path"},{"name":"version_id","required":true,"in":"path"}]
    })



