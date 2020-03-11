import * as ApiCommon from "../api-common"
// @ts-ignore
import * as Types from "../api-types"

export type GET_suppression_unsubscribes_Type = {
  end_time?: number
  limit?: number
  offset?: number
  "on-behalf-of"?: string
  start_time?: number
}
export type GET_suppression_unsubscribes_Response = {
  created: number
  email: string
}[]
/**
 * GET /suppression/unsubscribes
 *
 * **This endpoint allows you to retrieve a list of all email address that are globally suppressed.**
 *
 * A global suppression (or global unsubscribe) is an email address of a recipient who does not want to receive any of your messages. A globally suppressed recipient will be removed from any email you send. For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/global_unsubscribes.html).
 **/
export const GET_suppression_unsubscribes = ApiCommon.requestMaker<
  GET_suppression_unsubscribes_Type,
  GET_suppression_unsubscribes_Response
>({
  id: "GET_suppression_unsubscribes",
  path: "/suppression/unsubscribes",
  verb: "GET",
  parameters: [
    { name: "end_time", in: "query" },
    { name: "limit", in: "query" },
    { name: "offset", in: "query" },
    { name: "on-behalf-of", in: "header" },
    { name: "start_time", in: "query" }
  ]
})

export type POST_asm_suppressions_global_Type = {
  body?: { recipient_emails?: string[] }
  "on-behalf-of"?: string
}
export type POST_asm_suppressions_global_Response = { recipient_emails: string[] }
/**
 * POST /asm/suppressions/global
 *
 * **This endpoint allows you to add one or more email addresses to the global suppressions group.**
 *
 * A global suppression (or global unsubscribe) is an email address of a recipient who does not want to receive any of your messages. A globally suppressed recipient will be removed from any email you send. For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/global_unsubscribes.html).
 **/
export const POST_asm_suppressions_global = ApiCommon.requestMaker<
  POST_asm_suppressions_global_Type,
  POST_asm_suppressions_global_Response
>({
  id: "POST_asm_suppressions_global",
  path: "/asm/suppressions/global",
  verb: "POST",
  parameters: [
    { name: "body", in: "body" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type GET_asm_suppressions_global_email_Type = {
  email: string
  "on-behalf-of"?: string
}
export type GET_asm_suppressions_global_email_Response = { recipient_email: string }
/**
 * GET /asm/suppressions/global/{email}
 *
 * **This endpoint allows you to retrieve a global suppression. You can also use this endpoint to confirm if an email address is already globally suppresed.**
 *
 * If the email address you include in the URL path parameter `{email}` is alreayd globally suppressed, the response will include that email address. If the address you enter for `{email}` is not globally suppressed, an empty JSON object `{}` will be returned.
 *
 * A global suppression (or global unsubscribe) is an email address of a recipient who does not want to receive any of your messages. A globally suppressed recipient will be removed from any email you send. For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/global_unsubscribes.html).
 **/
export const GET_asm_suppressions_global_email = ApiCommon.requestMaker<
  GET_asm_suppressions_global_email_Type,
  GET_asm_suppressions_global_email_Response
>({
  id: "GET_asm_suppressions_global_email",
  path: "/asm/suppressions/global/{email}",
  verb: "GET",
  parameters: [
    { name: "email", required: true, in: "path" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type DELETE_asm_suppressions_global_email_Type = {
  body?: null
  email: string
  "on-behalf-of"?: string
}
export type DELETE_asm_suppressions_global_email_Response = void
/**
 * DELETE /asm/suppressions/global/{email}
 *
 * **This endpoint allows you to remove an email address from the global suppressions group.**
 *
 * A global suppression (or global unsubscribe) is an email address of a recipient who does not want to receive any of your messages. A globally suppressed recipient will be removed from any email you send. For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/global_unsubscribes.html).
 **/
export const DELETE_asm_suppressions_global_email = ApiCommon.requestMaker<
  DELETE_asm_suppressions_global_email_Type,
  DELETE_asm_suppressions_global_email_Response
>({
  id: "DELETE_asm_suppressions_global_email",
  path: "/asm/suppressions/global/{email}",
  verb: "DELETE",
  parameters: [
    { name: "body", in: "body" },
    { name: "email", required: true, in: "path" },
    { name: "on-behalf-of", in: "header" }
  ]
})
