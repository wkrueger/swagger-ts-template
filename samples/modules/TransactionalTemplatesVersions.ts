import * as ApiCommon from "../api-common"
import * as Types from "../api-types"

export type POST_templates_template_id_versions_Type = {
  body?: Types.transactional_template_version
  "on-behalf-of"?: string
  template_id: string
}
export type POST_templates_template_id_versions_Response = {
  id: string
  updated_at: string
  Transactional_Template_Version?: Types.transactional_template_version
}
/**
 * POST /templates/{template_id}/versions
 *
 * **This endpoint allows you to create a new version of a template.**
 *
 * Each transactional template can have multiple versions, each version with its own subject and content. Each user can have up to 300 versions across across all templates.
 *
 * For more information about transactional templates, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html).
 **/
export const POST_templates_template_id_versions = ApiCommon.requestMaker<
  POST_templates_template_id_versions_Type,
  POST_templates_template_id_versions_Response
>({
  id: "POST_templates_template_id_versions",
  path: "/templates/{template_id}/versions",
  verb: "POST",
  parameters: [
    { name: "body", in: "body" },
    { name: "on-behalf-of", in: "header" },
    { name: "template_id", required: true, in: "path" }
  ]
})

export type POST_templates_template_id_versions_version_id_activate_Type = {
  body?: null
  "on-behalf-of"?: string
  template_id: string
  version_id: string
}
export type POST_templates_template_id_versions_version_id_activate_Response = {
  id: string
  updated_at: string
  Transactional_Template_Version?: Types.transactional_template_version
}
/**
 * POST /templates/{template_id}/versions/{version_id}/activate
 *
 * **This endpoint allows you to activate a version of one of your templates.**
 *
 * Each transactional template can have multiple versions, each version with its own subject and content. Each user can have up to 300 versions across across all templates.
 *
 *
 * For more information about transactional templates, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html).
 *
 * ## URI Parameters
 * | URI Parameter | Type | Description |
 * |---|---|---|
 * | template_id | string | The ID of the original template |
 * | version_id | string |  The ID of the template version |
 **/
export const POST_templates_template_id_versions_version_id_activate = ApiCommon.requestMaker<
  POST_templates_template_id_versions_version_id_activate_Type,
  POST_templates_template_id_versions_version_id_activate_Response
>({
  id: "POST_templates_template_id_versions_version_id_activate",
  path: "/templates/{template_id}/versions/{version_id}/activate",
  verb: "POST",
  parameters: [
    { name: "body", in: "body" },
    { name: "on-behalf-of", in: "header" },
    { name: "template_id", required: true, in: "path" },
    { name: "version_id", required: true, in: "path" }
  ]
})

export type GET_templates_template_id_versions_version_id_Type = {
  "on-behalf-of"?: string
  template_id: string
  version_id: string
}
export type GET_templates_template_id_versions_version_id_Response = {
  id: string
  updated_at: string
  Transactional_Template_Version?: Types.transactional_template_version
}
/**
 * GET /templates/{template_id}/versions/{version_id}
 *
 * **This endpoint allows you to retrieve a specific version of a template.**
 *
 * Each transactional template can have multiple versions, each version with its own subject and content. Each user can have up to 300 versions across across all templates.
 *
 * For more information about transactional templates, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html).
 *
 * ## URI Parameters
 * | URI Parameter | Type | Description |
 * |---|---|---|
 * | template_id | string | The ID of the original template |
 * | version_id | string |  The ID of the template version |
 **/
export const GET_templates_template_id_versions_version_id = ApiCommon.requestMaker<
  GET_templates_template_id_versions_version_id_Type,
  GET_templates_template_id_versions_version_id_Response
>({
  id: "GET_templates_template_id_versions_version_id",
  path: "/templates/{template_id}/versions/{version_id}",
  verb: "GET",
  parameters: [
    { name: "on-behalf-of", in: "header" },
    { name: "template_id", required: true, in: "path" },
    { name: "version_id", required: true, in: "path" }
  ]
})

export type PATCH_templates_template_id_versions_version_id_Type = {
  body?: {
    active?: number
    name?: string
    html_content?: string
    plain_content?: string
    subject?: string
  }
  "on-behalf-of"?: string
  template_id: string
  version_id: string
}
export type PATCH_templates_template_id_versions_version_id_Response = {
  id: string
  updated_at: string
  Transactional_Template_Version?: Types.transactional_template_version
}
/**
 * PATCH /templates/{template_id}/versions/{version_id}
 *
 * **This endpoint allows you to edit a version of one of your transactional templates.**
 *
 * Each transactional template can have multiple versions, each version with its own subject and content. Each user can have up to 300 versions across across all templates.
 *
 * For more information about transactional templates, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html).
 *
 * ## URI Parameters
 * | URI Parameter | Type | Description |
 * |---|---|---|
 * | template_id | string | The ID of the original template |
 * | version_id | string | The ID of the template version |
 **/
export const PATCH_templates_template_id_versions_version_id = ApiCommon.requestMaker<
  PATCH_templates_template_id_versions_version_id_Type,
  PATCH_templates_template_id_versions_version_id_Response
>({
  id: "PATCH_templates_template_id_versions_version_id",
  path: "/templates/{template_id}/versions/{version_id}",
  verb: "PATCH",
  parameters: [
    { name: "body", in: "body" },
    { name: "on-behalf-of", in: "header" },
    { name: "template_id", required: true, in: "path" },
    { name: "version_id", required: true, in: "path" }
  ]
})

export type DELETE_templates_template_id_versions_version_id_Type = {
  body?: null
  "on-behalf-of"?: string
  template_id: string
  version_id: string
}
export type DELETE_templates_template_id_versions_version_id_Response = void
/**
 * DELETE /templates/{template_id}/versions/{version_id}
 *
 * **This endpoint allows you to delete one of your transactional template versions.**
 *
 * Each transactional template can have multiple versions, each version with its own subject and content. Each user can have up to 300 versions across across all templates.
 *
 * For more information about transactional templates, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html).
 *
 * ## URI Parameters
 * | URI Parameter | Type | Description |
 * |---|---|---|
 * | template_id | string | The ID of the original template |
 * | version_id | string | The ID of the template version |
 **/
export const DELETE_templates_template_id_versions_version_id = ApiCommon.requestMaker<
  DELETE_templates_template_id_versions_version_id_Type,
  DELETE_templates_template_id_versions_version_id_Response
>({
  id: "DELETE_templates_template_id_versions_version_id",
  path: "/templates/{template_id}/versions/{version_id}",
  verb: "DELETE",
  parameters: [
    { name: "body", in: "body" },
    { name: "on-behalf-of", in: "header" },
    { name: "template_id", required: true, in: "path" },
    { name: "version_id", required: true, in: "path" }
  ]
})
