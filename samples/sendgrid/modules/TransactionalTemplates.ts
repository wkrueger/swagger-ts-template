import * as ApiCommon from "../api-common"
// @ts-ignore
import * as Types from "../api-types"

export type POST_templates_Type = {
  body?: { name: string }
  "on-behalf-of"?: string
}
export type POST_templates_Response = Types.transactional_template
/**
 * POST /templates
 *
 * **This endpoint allows you to create a transactional template.**
 *
 * Each user can create up to 300 different transactional templates. Transactional templates are specific to accounts and subusers. Templates created on a parent account will not be accessible from the subuser accounts.
 *
 * Transactional templates are templates created specifically for transactional email and are not to be confused with [Marketing Campaigns templates](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/templates.html). For more information about transactional templates, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html).
 **/
export const POST_templates = ApiCommon.requestMaker<POST_templates_Type, POST_templates_Response>({
  id: "POST_templates",
  path: "/templates",
  verb: "POST",
  parameters: [{ name: "body", in: "body" }, { name: "on-behalf-of", in: "header" }]
})

export type GET_templates_Type = {
  "on-behalf-of"?: string
}
export type GET_templates_Response = Types.transactional_template[]
/**
 * GET /templates
 *
 * **This endpoint allows you to retrieve all transactional templates.**
 *
 * Each user can create up to 300 different transactional templates. Transactional templates are specific to accounts and subusers. Templates created on a parent account will not be accessible from the subuser accounts.
 *
 * Transactional templates are templates created specifically for transactional email and are not to be confused with [Marketing Campaigns templates](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/templates.html). For more information about transactional templates, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html).
 **/
export const GET_templates = ApiCommon.requestMaker<GET_templates_Type, GET_templates_Response>({
  id: "GET_templates",
  path: "/templates",
  verb: "GET",
  parameters: [{ name: "on-behalf-of", in: "header" }]
})

export type GET_templates_template_id_Type = {
  "on-behalf-of"?: string
  template_id: string
}
export type GET_templates_template_id_Response = Types.transactional_template
/**
 * GET /templates/{template_id}
 *
 * **This endpoint allows you to retrieve a single transactional template.**
 *
 * Each user can create up to 300 different transactional templates. Transactional templates are specific to accounts and subusers. Templates created on a parent account will not be accessible from the subuser accounts.
 *
 * Transactional templates are templates created specifically for transactional email and are not to be confused with [Marketing Campaigns templates](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/templates.html). For more information about transactional templates, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html).
 **/
export const GET_templates_template_id = ApiCommon.requestMaker<
  GET_templates_template_id_Type,
  GET_templates_template_id_Response
>({
  id: "GET_templates_template_id",
  path: "/templates/{template_id}",
  verb: "GET",
  parameters: [
    { name: "on-behalf-of", in: "header" },
    { name: "template_id", required: true, in: "path" }
  ]
})

export type PATCH_templates_template_id_Type = {
  body?: { name?: string }
  "on-behalf-of"?: string
  template_id: string
}
export type PATCH_templates_template_id_Response = Types.transactional_template
/**
 * PATCH /templates/{template_id}
 *
 * **This endpoint allows you to edit a transactional template.**
 *
 * Each user can create up to 300 different transactional templates. Transactional templates are specific to accounts and subusers. Templates created on a parent account will not be accessible from the subuser accounts.
 *
 * Transactional templates are templates created specifically for transactional email and are not to be confused with [Marketing Campaigns templates](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/templates.html). For more information about transactional templates, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html).
 **/
export const PATCH_templates_template_id = ApiCommon.requestMaker<
  PATCH_templates_template_id_Type,
  PATCH_templates_template_id_Response
>({
  id: "PATCH_templates_template_id",
  path: "/templates/{template_id}",
  verb: "PATCH",
  parameters: [
    { name: "body", in: "body" },
    { name: "on-behalf-of", in: "header" },
    { name: "template_id", required: true, in: "path" }
  ]
})

export type DELETE_templates_template_id_Type = {
  body?: null
  "on-behalf-of"?: string
  template_id: string
}
export type DELETE_templates_template_id_Response = void
/**
 * DELETE /templates/{template_id}
 *
 * **This endpoint allows you to delete a transactional template.**
 *
 * Each user can create up to 300 different transactional templates. Transactional templates are specific to accounts and subusers. Templates created on a parent account will not be accessible from the subuser accounts.
 *
 * Transactional templates are templates created specifically for transactional email and are not to be confused with [Marketing Campaigns templates](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/templates.html). For more information about transactional templates, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html).
 **/
export const DELETE_templates_template_id = ApiCommon.requestMaker<
  DELETE_templates_template_id_Type,
  DELETE_templates_template_id_Response
>({
  id: "DELETE_templates_template_id",
  path: "/templates/{template_id}",
  verb: "DELETE",
  parameters: [
    { name: "body", in: "body" },
    { name: "on-behalf-of", in: "header" },
    { name: "template_id", required: true, in: "path" }
  ]
})
