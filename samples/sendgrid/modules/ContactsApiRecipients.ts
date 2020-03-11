import * as ApiCommon from "../api-common"
// @ts-ignore
import * as Types from "../api-types"

export type GET_contactdb_status_Type = {
  "on-behalf-of"?: string
}
export type GET_contactdb_status_Response = {
  status?: {
    id?: string
    value?: string
  }[]
}
/**
 * GET /contactdb/status
 *
 **/
export const GET_contactdb_status = ApiCommon.requestMaker<
  GET_contactdb_status_Type,
  GET_contactdb_status_Response
>({
  id: "GET_contactdb_status",
  path: "/contactdb/status",
  verb: "GET",
  parameters: [
    { name: "Authorization", required: true, in: "header" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type POST_contactdb_recipients_Type = {
  body?: {
    email: string
    first_name?: string
    last_name?: string
    age?: number
  }[]
  "on-behalf-of"?: string
}
export type POST_contactdb_recipients_Response = Types.contactdb_recipient_response
/**
 * POST /contactdb/recipients
 *
 * **This endpoint allows you to add a Marketing Campaigns recipient.**
 *
 * You can add custom field data as a parameter on this endpoint. We have provided an example using some of the default custom fields SendGrid provides.
 *
 * The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.
 **/
export const POST_contactdb_recipients = ApiCommon.requestMaker<
  POST_contactdb_recipients_Type,
  POST_contactdb_recipients_Response
>({
  id: "POST_contactdb_recipients",
  path: "/contactdb/recipients",
  verb: "POST",
  parameters: [
    { name: "body", in: "body" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type PATCH_contactdb_recipients_Type = {
  body?: {
    email: string
    last_name?: string
    first_name?: string
  }[]
  "on-behalf-of"?: string
}
export type PATCH_contactdb_recipients_Response = Types.contactdb_recipient_response
/**
 * PATCH /contactdb/recipients
 *
 * **This endpoint allows you to update one or more recipients.**
 *
 * The body of an API call to this endpoint must include an array of one or more recipient objects.
 *
 * It is of note that you can add custom field data as parameters on recipient objects. We have provided an example using some of the default custom fields SendGrid provides.
 *
 * The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).
 **/
export const PATCH_contactdb_recipients = ApiCommon.requestMaker<
  PATCH_contactdb_recipients_Type,
  PATCH_contactdb_recipients_Response
>({
  id: "PATCH_contactdb_recipients",
  path: "/contactdb/recipients",
  verb: "PATCH",
  parameters: [
    { name: "body", in: "body" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type DELETE_contactdb_recipients_Type = {
  body?: string[]
  "on-behalf-of"?: string
}
export type DELETE_contactdb_recipients_Response = {}
/**
 * DELETE /contactdb/recipients
 *
 * **This endpoint allows you to deletes one or more recipients.**
 *
 * The body of an API call to this endpoint must include an array of recipient IDs of the recipients you want to delete.
 *
 * The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).
 **/
export const DELETE_contactdb_recipients = ApiCommon.requestMaker<
  DELETE_contactdb_recipients_Type,
  DELETE_contactdb_recipients_Response
>({
  id: "DELETE_contactdb_recipients",
  path: "/contactdb/recipients",
  verb: "DELETE",
  parameters: [
    { name: "body", in: "body" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type GET_contactdb_recipients_Type = {
  "on-behalf-of"?: string
  page?: number
  page_size?: number
}
export type GET_contactdb_recipients_Response = {
  recipients: {}[]
}
/**
 * GET /contactdb/recipients
 *
 * **This endpoint allows you to retrieve all of your Marketing Campaigns recipients.**
 *
 * Batch deletion of a page makes it possible to receive an empty page of recipients before reaching the end of
 * the list of recipients. To avoid this issue; iterate over pages until a 404 is retrieved.
 *
 * The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.
 **/
export const GET_contactdb_recipients = ApiCommon.requestMaker<
  GET_contactdb_recipients_Type,
  GET_contactdb_recipients_Response
>({
  id: "GET_contactdb_recipients",
  path: "/contactdb/recipients",
  verb: "GET",
  parameters: [
    { name: "on-behalf-of", in: "header" },
    { name: "page", in: "query" },
    { name: "page_size", in: "query" }
  ]
})

export type GET_contactdb_recipients_recipient_id_Type = {
  "on-behalf-of"?: string
  recipient_id: string
}
export type GET_contactdb_recipients_recipient_id_Response = Types.contactdb_recipient
/**
 * GET /contactdb/recipients/{recipient_id}
 *
 * **This endpoint allows you to retrieve a single recipient by ID from your contact database.**
 *
 * The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.
 **/
export const GET_contactdb_recipients_recipient_id = ApiCommon.requestMaker<
  GET_contactdb_recipients_recipient_id_Type,
  GET_contactdb_recipients_recipient_id_Response
>({
  id: "GET_contactdb_recipients_recipient_id",
  path: "/contactdb/recipients/{recipient_id}",
  verb: "GET",
  parameters: [
    { name: "on-behalf-of", in: "header" },
    { name: "recipient_id", required: true, in: "path" }
  ]
})

export type DELETE_contactdb_recipients_recipient_id_Type = {
  body?: null
  "on-behalf-of"?: string
  recipient_id: string
}
export type DELETE_contactdb_recipients_recipient_id_Response = void
/**
 * DELETE /contactdb/recipients/{recipient_id}
 *
 * **This endpoint allows you to delete a single recipient with the given ID from your contact database.**
 *
 * The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.
 **/
export const DELETE_contactdb_recipients_recipient_id = ApiCommon.requestMaker<
  DELETE_contactdb_recipients_recipient_id_Type,
  DELETE_contactdb_recipients_recipient_id_Response
>({
  id: "DELETE_contactdb_recipients_recipient_id",
  path: "/contactdb/recipients/{recipient_id}",
  verb: "DELETE",
  parameters: [
    { name: "body", in: "body" },
    { name: "on-behalf-of", in: "header" },
    { name: "recipient_id", required: true, in: "path" }
  ]
})

export type GET_contactdb_recipients_recipient_id_lists_Type = {
  "on-behalf-of"?: string
  recipient_id: string
}
export type GET_contactdb_recipients_recipient_id_lists_Response = {
  lists?: Types.contactdb_list[]
}
/**
 * GET /contactdb/recipients/{recipient_id}/lists
 *
 * **This endpoint allows you to retrieve the lists that a given recipient belongs to.**
 *
 * Each recipient can be on many lists. This endpoint gives you all of the lists that any one recipient has been added to.
 *
 * The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.
 **/
export const GET_contactdb_recipients_recipient_id_lists = ApiCommon.requestMaker<
  GET_contactdb_recipients_recipient_id_lists_Type,
  GET_contactdb_recipients_recipient_id_lists_Response
>({
  id: "GET_contactdb_recipients_recipient_id_lists",
  path: "/contactdb/recipients/{recipient_id}/lists",
  verb: "GET",
  parameters: [
    { name: "on-behalf-of", in: "header" },
    { name: "recipient_id", required: true, in: "path" }
  ]
})

export type GET_contactdb_recipients_billable_count_Type = {
  "on-behalf-of"?: string
}
export type GET_contactdb_recipients_billable_count_Response = Types.contactdb_recipient_count
/**
 * GET /contactdb/recipients/billable_count
 *
 * **This endpoint allows you to retrieve the number of Marketing Campaigns recipients that you will be billed for.**
 *
 * You are billed for marketing campaigns based on the highest number of recipients you have had in your account at one time. This endpoint will allow you to know the current billable count value.
 *
 * The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.
 **/
export const GET_contactdb_recipients_billable_count = ApiCommon.requestMaker<
  GET_contactdb_recipients_billable_count_Type,
  GET_contactdb_recipients_billable_count_Response
>({
  id: "GET_contactdb_recipients_billable_count",
  path: "/contactdb/recipients/billable_count",
  verb: "GET",
  parameters: [{ name: "on-behalf-of", in: "header" }]
})

export type GET_contactdb_recipients_count_Type = {
  "on-behalf-of"?: string
}
export type GET_contactdb_recipients_count_Response = Types.contactdb_recipient_count
/**
 * GET /contactdb/recipients/count
 *
 * **This endpoint allows you to retrieve the total number of Marketing Campaigns recipients.**
 *
 * The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).
 **/
export const GET_contactdb_recipients_count = ApiCommon.requestMaker<
  GET_contactdb_recipients_count_Type,
  GET_contactdb_recipients_count_Response
>({
  id: "GET_contactdb_recipients_count",
  path: "/contactdb/recipients/count",
  verb: "GET",
  parameters: [{ name: "on-behalf-of", in: "header" }]
})

export type GET_contactdb_recipients_search_Type = {
  "on-behalf-of"?: string
  "{field_name}"?: string
}
export type GET_contactdb_recipients_search_Response = { recipients?: Types.contactdb_recipient[] }
/**
 * GET /contactdb/recipients/search
 *
 * **This endpoint allows you to perform a search on all of your Marketing Campaigns recipients.**
 *
 * field_name:
 *
 * * is a variable that is substituted for your actual custom field name from your recipient.
 * * Text fields must be url-encoded. Date fields are searchable only by unix timestamp (e.g. 2/2/2015 becomes 1422835200)
 * * If field_name is a 'reserved' date field, such as created_at or updated_at, the system will internally convert
 * your epoch time to a date range encompassing the entire day. For example, an epoch time of 1422835600 converts to
 * Mon, 02 Feb 2015 00:06:40 GMT, but internally the system will search from Mon, 02 Feb 2015 00:00:00 GMT through
 * Mon, 02 Feb 2015 23:59:59 GMT.
 *
 * The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).
 **/
export const GET_contactdb_recipients_search = ApiCommon.requestMaker<
  GET_contactdb_recipients_search_Type,
  GET_contactdb_recipients_search_Response
>({
  id: "GET_contactdb_recipients_search",
  path: "/contactdb/recipients/search",
  verb: "GET",
  parameters: [
    { name: "on-behalf-of", in: "header" },
    { name: "{field_name}", in: "query" }
  ]
})
