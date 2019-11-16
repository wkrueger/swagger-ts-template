import * as ApiCommon from "../api-common"
// @ts-ignore
import * as Types from "../api-types"

export type GET_suppression_blocks_Type = {
  end_time?: number
  limit?: number
  offset?: number
  "on-behalf-of"?: string
  start_time?: number
}
export type GET_suppression_blocks_Response = {
  created: number
  email: string
  reason: string
  status: string
}[]
/**
 * GET /suppression/blocks
 *
 * **This endpoint allows you to retrieve a list of all email addresses that are currently on your blocks list.**
 *
 * There are several causes for [blocked](https://sendgrid.com/docs/Glossary/blocks.html) emails: for example, your mail server IP address is on an ISP blacklist, or blocked by an ISP, or if the receiving server flags the message content.
 *
 * For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/blocks.html).
 **/
export const GET_suppression_blocks = ApiCommon.requestMaker<
  GET_suppression_blocks_Type,
  GET_suppression_blocks_Response
>({
  id: "GET_suppression_blocks",
  path: "/suppression/blocks",
  verb: "GET",
  parameters: [
    { name: "end_time", in: "query" },
    { name: "limit", in: "query" },
    { name: "offset", in: "query" },
    { name: "on-behalf-of", in: "header" },
    { name: "start_time", in: "query" }
  ]
})

export type DELETE_suppression_blocks_Type = {
  body?: {
    delete_all?: boolean
    emails?: string[]
  }
  "on-behalf-of"?: string
}
export type DELETE_suppression_blocks_Response = void
/**
 * DELETE /suppression/blocks
 *
 * **This endpoint allows you to delete all email addresses on your blocks list.**
 *
 * There are two options for deleting blocked emails:
 *
 * 1. You can delete all blocked emails by setting `delete_all` to true in the request body.
 * 2. You can delete some blocked emails by specifying the email addresses in an array in the request body.
 *
 * [Blocks](https://sendgrid.com/docs/Glossary/blocks.html) happen when your message was rejected for a reason related to the message, not the recipient address. This can happen when your mail server IP address has been added to a blacklist or blocked by an ISP, or if the message content is flagged by a filter on the receiving server.
 *
 * For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/blocks.html).
 **/
export const DELETE_suppression_blocks = ApiCommon.requestMaker<
  DELETE_suppression_blocks_Type,
  DELETE_suppression_blocks_Response
>({
  id: "DELETE_suppression_blocks",
  path: "/suppression/blocks",
  verb: "DELETE",
  parameters: [{ name: "body", in: "body" }, { name: "on-behalf-of", in: "header" }]
})

export type GET_suppression_blocks_email_Type = {
  email: string
  "on-behalf-of"?: string
}
export type GET_suppression_blocks_email_Response = {
  created: number
  email: string
  reason: string
  status?: string
}[]
/**
 * GET /suppression/blocks/{email}
 *
 * **This endpoint allows you to retrieve a specific email address from your blocks list.**
 *
 * [Blocks](https://sendgrid.com/docs/Glossary/blocks.html) happen when your message was rejected for a reason related to the message, not the recipient address. This can happen when your mail server IP address has been added to a blacklist or blocked by an ISP, or if the message content is flagged by a filter on the receiving server.
 *
 * For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/blocks.html).
 **/
export const GET_suppression_blocks_email = ApiCommon.requestMaker<
  GET_suppression_blocks_email_Type,
  GET_suppression_blocks_email_Response
>({
  id: "GET_suppression_blocks_email",
  path: "/suppression/blocks/{email}",
  verb: "GET",
  parameters: [
    { name: "email", required: true, in: "path" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type DELETE_suppression_blocks_email_Type = {
  body?: null
  email: string
  "on-behalf-of"?: string
}
export type DELETE_suppression_blocks_email_Response = void
/**
 * DELETE /suppression/blocks/{email}
 *
 * **This endpoint allows you to delete a specific email address from your blocks list.**
 *
 * [Blocks](https://sendgrid.com/docs/Glossary/blocks.html) happen when your message was rejected for a reason related to the message, not the recipient address. This can happen when your mail server IP address has been added to a blacklist or blocked by an ISP, or if the message content is flagged by a filter on the receiving server.
 *
 * For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/blocks.html).
 **/
export const DELETE_suppression_blocks_email = ApiCommon.requestMaker<
  DELETE_suppression_blocks_email_Type,
  DELETE_suppression_blocks_email_Response
>({
  id: "DELETE_suppression_blocks_email",
  path: "/suppression/blocks/{email}",
  verb: "DELETE",
  parameters: [
    { name: "Authorization", required: true, in: "header" },
    { name: "body", in: "body" },
    { name: "email", required: true, in: "path" },
    { name: "on-behalf-of", in: "header" }
  ]
})
