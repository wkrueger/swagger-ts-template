import * as ApiCommon from "../api-common"
// @ts-ignore
import * as Types from "../api-types"

export type POST_contactdb_lists_Type = {
  body?: { name: string }
  "on-behalf-of"?: string
}
export type POST_contactdb_lists_Response = Types.contactdb_list
/**
 * POST /contactdb/lists
 *
 * **This endpoint allows you to create a list for your recipients.**
 *
 * The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.
 **/
export const POST_contactdb_lists = ApiCommon.requestMaker<
  POST_contactdb_lists_Type,
  POST_contactdb_lists_Response
>({
  id: "POST_contactdb_lists",
  path: "/contactdb/lists",
  verb: "POST",
  parameters: [
    { name: "body", in: "body" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type GET_contactdb_lists_Type = {
  "on-behalf-of"?: string
}
export type GET_contactdb_lists_Response = { lists: Types.contactdb_list[] }
/**
 * GET /contactdb/lists
 *
 * **This endpoint allows you to retrieve all of your recipient lists. If you don't have any lists, an empty array will be returned.**
 *
 * The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.
 **/
export const GET_contactdb_lists = ApiCommon.requestMaker<
  GET_contactdb_lists_Type,
  GET_contactdb_lists_Response
>({
  id: "GET_contactdb_lists",
  path: "/contactdb/lists",
  verb: "GET",
  parameters: [{ name: "on-behalf-of", in: "header" }]
})

export type DELETE_contactdb_lists_Type = {
  body?: number[]
  "on-behalf-of"?: string
}
export type DELETE_contactdb_lists_Response = void
/**
 * DELETE /contactdb/lists
 *
 * **This endpoint allows you to delete multiple recipient lists.**
 *
 * The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.
 **/
export const DELETE_contactdb_lists = ApiCommon.requestMaker<
  DELETE_contactdb_lists_Type,
  DELETE_contactdb_lists_Response
>({
  id: "DELETE_contactdb_lists",
  path: "/contactdb/lists",
  verb: "DELETE",
  parameters: [
    { name: "body", in: "body" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type GET_contactdb_lists_list_id_Type = {
  list_id?: number
  "on-behalf-of"?: string
}
export type GET_contactdb_lists_list_id_Response = Types.contactdb_list
/**
 * GET /contactdb/lists/{list_id}
 *
 * This endpoint allows you to retrieve a single recipient list.
 *
 * The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.
 **/
export const GET_contactdb_lists_list_id = ApiCommon.requestMaker<
  GET_contactdb_lists_list_id_Type,
  GET_contactdb_lists_list_id_Response
>({
  id: "GET_contactdb_lists_list_id",
  path: "/contactdb/lists/{list_id}",
  verb: "GET",
  parameters: [
    { name: "list_id", in: "query" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type PATCH_contactdb_lists_list_id_Type = {
  body?: { name: string }
  list_id: number
  "on-behalf-of"?: string
}
export type PATCH_contactdb_lists_list_id_Response = {
  id?: number
  name?: string
  recipient_count?: number
}
/**
 * PATCH /contactdb/lists/{list_id}
 *
 * **This endpoint allows you to update the name of one of your recipient lists.**
 *
 *
 * The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.
 **/
export const PATCH_contactdb_lists_list_id = ApiCommon.requestMaker<
  PATCH_contactdb_lists_list_id_Type,
  PATCH_contactdb_lists_list_id_Response
>({
  id: "PATCH_contactdb_lists_list_id",
  path: "/contactdb/lists/{list_id}",
  verb: "PATCH",
  parameters: [
    { name: "body", in: "body" },
    { name: "list_id", required: true, in: "query" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type DELETE_contactdb_lists_list_id_Type = {
  body?: null
  delete_contacts?: boolean
  list_id: string
  "on-behalf-of"?: string
}
export type DELETE_contactdb_lists_list_id_Response = void
/**
 * DELETE /contactdb/lists/{list_id}
 *
 * **This endpoint allows you to delete a specific recipient list with the given ID.**
 *
 * The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.
 **/
export const DELETE_contactdb_lists_list_id = ApiCommon.requestMaker<
  DELETE_contactdb_lists_list_id_Type,
  DELETE_contactdb_lists_list_id_Response
>({
  id: "DELETE_contactdb_lists_list_id",
  path: "/contactdb/lists/{list_id}",
  verb: "DELETE",
  parameters: [
    { name: "body", in: "body" },
    { name: "delete_contacts", in: "query" },
    { name: "list_id", required: true, in: "path" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type GET_contactdb_lists_list_id_recipients_Type = {
  list_id: number
  "on-behalf-of"?: string
  page?: number
  page_size?: number
}
export type GET_contactdb_lists_list_id_recipients_Response = {
  recipients?: Types.contactdb_recipient[]
}
/**
 * GET /contactdb/lists/{list_id}/recipients
 *
 * **This endpoint allows you to retrieve all recipients on the list with the given ID.**
 *
 * The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.
 **/
export const GET_contactdb_lists_list_id_recipients = ApiCommon.requestMaker<
  GET_contactdb_lists_list_id_recipients_Type,
  GET_contactdb_lists_list_id_recipients_Response
>({
  id: "GET_contactdb_lists_list_id_recipients",
  path: "/contactdb/lists/{list_id}/recipients",
  verb: "GET",
  parameters: [
    { name: "list_id", required: true, in: "query" },
    { name: "on-behalf-of", in: "header" },
    { name: "page", required: false, in: "query" },
    { name: "page_size", required: false, in: "query" }
  ]
})

export type POST_contactdb_lists_list_id_recipients_Type = {
  body?: string[]
  list_id: number
  "on-behalf-of"?: string
}
export type POST_contactdb_lists_list_id_recipients_Response = null
/**
 * POST /contactdb/lists/{list_id}/recipients
 *
 * **This endpoint allows you to add multiple recipients to a list.**
 *
 * Adds existing recipients to a list, passing in the recipient IDs to add. Recipient IDs should be passed exactly as they are returned from recipient endpoints.
 *
 * The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.
 **/
export const POST_contactdb_lists_list_id_recipients = ApiCommon.requestMaker<
  POST_contactdb_lists_list_id_recipients_Type,
  POST_contactdb_lists_list_id_recipients_Response
>({
  id: "POST_contactdb_lists_list_id_recipients",
  path: "/contactdb/lists/{list_id}/recipients",
  verb: "POST",
  parameters: [
    { name: "body", in: "body" },
    { name: "list_id", required: true, in: "path" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type POST_contactdb_lists_list_id_recipients_recipient_id_Type = {
  body?: null
  list_id: number
  "on-behalf-of"?: string
  recipient_id: string
}
export type POST_contactdb_lists_list_id_recipients_recipient_id_Response = null
/**
 * POST /contactdb/lists/{list_id}/recipients/{recipient_id}
 *
 * **This endpoint allows you to add a single recipient to a list.**
 *
 * The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.
 **/
export const POST_contactdb_lists_list_id_recipients_recipient_id = ApiCommon.requestMaker<
  POST_contactdb_lists_list_id_recipients_recipient_id_Type,
  POST_contactdb_lists_list_id_recipients_recipient_id_Response
>({
  id: "POST_contactdb_lists_list_id_recipients_recipient_id",
  path: "/contactdb/lists/{list_id}/recipients/{recipient_id}",
  verb: "POST",
  parameters: [
    { name: "body", in: "body" },
    { name: "list_id", required: true, in: "path" },
    { name: "on-behalf-of", in: "header" },
    { name: "recipient_id", required: true, in: "path" }
  ]
})

export type DELETE_contactdb_lists_list_id_recipients_recipient_id_Type = {
  body?: null
  list_id: number
  "on-behalf-of"?: string
  recipient_id: number
}
export type DELETE_contactdb_lists_list_id_recipients_recipient_id_Response = void
/**
 * DELETE /contactdb/lists/{list_id}/recipients/{recipient_id}
 *
 * **This endpoint allows you to delete a single recipient from a list.**
 *
 * The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.
 **/
export const DELETE_contactdb_lists_list_id_recipients_recipient_id = ApiCommon.requestMaker<
  DELETE_contactdb_lists_list_id_recipients_recipient_id_Type,
  DELETE_contactdb_lists_list_id_recipients_recipient_id_Response
>({
  id: "DELETE_contactdb_lists_list_id_recipients_recipient_id",
  path: "/contactdb/lists/{list_id}/recipients/{recipient_id}",
  verb: "DELETE",
  parameters: [
    { name: "body", in: "body" },
    { name: "list_id", required: true, in: "query" },
    { name: "on-behalf-of", in: "header" },
    { name: "recipient_id", required: true, in: "query" }
  ]
})
