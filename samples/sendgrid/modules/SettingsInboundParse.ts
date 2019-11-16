import * as ApiCommon from "../api-common"
// @ts-ignore
import * as Types from "../api-types"

export type POST_user_webhooks_parse_settings_Type = {
  body?: Types.parse_setting
  "on-behalf-of"?: string
}
export type POST_user_webhooks_parse_settings_Response = Types.parse_setting
/**
 * POST /user/webhooks/parse/settings
 *
 * **This endpoint allows you to create a new inbound parse setting.**
 *
 * The inbound parse webhook allows you to have incoming emails parsed, extracting some or all of the content, and then have that content POSTed by SendGrid to a URL of your choosing. For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Webhooks/parse.html).
 **/
export const POST_user_webhooks_parse_settings = ApiCommon.requestMaker<
  POST_user_webhooks_parse_settings_Type,
  POST_user_webhooks_parse_settings_Response
>({
  id: "POST_user_webhooks_parse_settings",
  path: "/user/webhooks/parse/settings",
  verb: "POST",
  parameters: [{ name: "body", in: "body" }, { name: "on-behalf-of", in: "header" }]
})

export type GET_user_webhooks_parse_settings_Type = {
  "on-behalf-of"?: string
}
export type GET_user_webhooks_parse_settings_Response = { result?: Types.parse_setting[] }
/**
 * GET /user/webhooks/parse/settings
 *
 * **This endpoint allows you to retrieve all of your current inbound parse settings.**
 *
 * The inbound parse webhook allows you to have incoming emails parsed, extracting some or all of the contnet, and then have that content POSTed by SendGrid to a URL of your choosing. For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Webhooks/parse.html).
 **/
export const GET_user_webhooks_parse_settings = ApiCommon.requestMaker<
  GET_user_webhooks_parse_settings_Type,
  GET_user_webhooks_parse_settings_Response
>({
  id: "GET_user_webhooks_parse_settings",
  path: "/user/webhooks/parse/settings",
  verb: "GET",
  parameters: [{ name: "on-behalf-of", in: "header" }]
})

export type GET_user_webhooks_parse_settings_hostname_Type = {
  hostname: string
  "on-behalf-of"?: string
}
export type GET_user_webhooks_parse_settings_hostname_Response = Types.parse_setting
/**
 * GET /user/webhooks/parse/settings/{hostname}
 *
 * **This endpoint allows you to retrieve a specific inbound parse setting.**
 *
 * The inbound parse webhook allows you to have incoming emails parsed, extracting some or all of the contnet, and then have that content POSTed by SendGrid to a URL of your choosing. For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Webhooks/parse.html).
 **/
export const GET_user_webhooks_parse_settings_hostname = ApiCommon.requestMaker<
  GET_user_webhooks_parse_settings_hostname_Type,
  GET_user_webhooks_parse_settings_hostname_Response
>({
  id: "GET_user_webhooks_parse_settings_hostname",
  path: "/user/webhooks/parse/settings/{hostname}",
  verb: "GET",
  parameters: [
    { name: "hostname", required: true, in: "path" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type PATCH_user_webhooks_parse_settings_hostname_Type = {
  body?: Types.parse_setting
  hostname: string
  "on-behalf-of"?: string
}
export type PATCH_user_webhooks_parse_settings_hostname_Response = Types.parse_setting
/**
 * PATCH /user/webhooks/parse/settings/{hostname}
 *
 * **This endpoint allows you to update a specific inbound parse setting.**
 *
 * The inbound parse webhook allows you to have incoming emails parsed, extracting some or all of the contnet, and then have that content POSTed by SendGrid to a URL of your choosing. For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Webhooks/parse.html).
 **/
export const PATCH_user_webhooks_parse_settings_hostname = ApiCommon.requestMaker<
  PATCH_user_webhooks_parse_settings_hostname_Type,
  PATCH_user_webhooks_parse_settings_hostname_Response
>({
  id: "PATCH_user_webhooks_parse_settings_hostname",
  path: "/user/webhooks/parse/settings/{hostname}",
  verb: "PATCH",
  parameters: [
    { name: "body", in: "body" },
    { name: "hostname", required: true, in: "path" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type DELETE_user_webhooks_parse_settings_hostname_Type = {
  hostname: string
  "on-behalf-of"?: string
}
export type DELETE_user_webhooks_parse_settings_hostname_Response = void
/**
 * DELETE /user/webhooks/parse/settings/{hostname}
 *
 * **This endpoint allows you to delete a specific inbound parse setting.**
 *
 * The inbound parse webhook allows you to have incoming emails parsed, extracting some or all of the contnet, and then have that content POSTed by SendGrid to a URL of your choosing. For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Webhooks/parse.html).
 **/
export const DELETE_user_webhooks_parse_settings_hostname = ApiCommon.requestMaker<
  DELETE_user_webhooks_parse_settings_hostname_Type,
  DELETE_user_webhooks_parse_settings_hostname_Response
>({
  id: "DELETE_user_webhooks_parse_settings_hostname",
  path: "/user/webhooks/parse/settings/{hostname}",
  verb: "DELETE",
  parameters: [
    { name: "hostname", required: true, in: "path" },
    { name: "on-behalf-of", in: "header" }
  ]
})
