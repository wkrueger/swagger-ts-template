import * as ApiCommon from "../api-common"
// @ts-ignore
import * as Types from "../api-types"

export type GET_user_settings_enforced_tls_Type = {
  "on-behalf-of"?: string
}
export type GET_user_settings_enforced_tls_Response = {
  require_tls: boolean
  require_valid_cert: boolean
}
/**
 * GET /user/settings/enforced_tls
 *
 * **This endpoint allows you to retrieve your current Enforced TLS settings.**
 *
 * The Enforced TLS settings specify whether or not the recipient is required to support TLS or have a valid certificate. See the [SMTP Ports User Guide](https://sendgrid.com/docs/Classroom/Basics/Email_Infrastructure/smtp_ports.html) for more information on opportunistic TLS.
 *
 * **Note:** If either setting is enabled and the recipient does not support TLS or have a valid certificate, we drop the message and send a block event with “TLS required but not supported” as the description.
 **/
export const GET_user_settings_enforced_tls = ApiCommon.requestMaker<
  GET_user_settings_enforced_tls_Type,
  GET_user_settings_enforced_tls_Response
>({
  id: "GET_user_settings_enforced_tls",
  path: "/user/settings/enforced_tls",
  verb: "GET",
  parameters: [{ name: "on-behalf-of", in: "header" }]
})

export type PATCH_user_settings_enforced_tls_Type = {
  body?: {
    require_tls?: boolean
    require_valid_cert?: boolean
  }
  "on-behalf-of"?: string
}
export type PATCH_user_settings_enforced_tls_Response = {
  require_tls: boolean
  require_valid_cert: boolean
}
/**
 * PATCH /user/settings/enforced_tls
 *
 * **This endpoint allows you to update your current Enforced TLS settings.**
 *
 * The Enforced TLS settings specify whether or not the recipient is required to support TLS or have a valid certificate. See the [SMTP Ports User Guide](https://sendgrid.com/docs/Classroom/Basics/Email_Infrastructure/smtp_ports.html) for more information on opportunistic TLS.
 *
 * **Note:** If either setting is enabled and the recipient does not support TLS or have a valid certificate, we drop the message and send a block event with “TLS required but not supported” as the description.
 **/
export const PATCH_user_settings_enforced_tls = ApiCommon.requestMaker<
  PATCH_user_settings_enforced_tls_Type,
  PATCH_user_settings_enforced_tls_Response
>({
  id: "PATCH_user_settings_enforced_tls",
  path: "/user/settings/enforced_tls",
  verb: "PATCH",
  parameters: [
    { name: "body", in: "body" },
    { name: "on-behalf-of", in: "header" }
  ]
})
