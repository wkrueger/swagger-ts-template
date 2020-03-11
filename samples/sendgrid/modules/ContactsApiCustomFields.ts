import * as ApiCommon from "../api-common"
// @ts-ignore
import * as Types from "../api-types"

export type POST_contactdb_custom_fields_Type = {
  body?: {
    name?: string
    type?: string
  }
  "on-behalf-of"?: string
}
export type POST_contactdb_custom_fields_Response = {
  id?: number
  name?: string
  type?: string
}
/**
 * POST /contactdb/custom_fields
 *
 * **This endpoint allows you to create a custom field.**
 *
 * The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).
 **/
export const POST_contactdb_custom_fields = ApiCommon.requestMaker<
  POST_contactdb_custom_fields_Type,
  POST_contactdb_custom_fields_Response
>({
  id: "POST_contactdb_custom_fields",
  path: "/contactdb/custom_fields",
  verb: "POST",
  parameters: [
    { name: "body", in: "body" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type GET_contactdb_custom_fields_Type = {
  "on-behalf-of"?: string
}
export type GET_contactdb_custom_fields_Response = {
  custom_fields: Types.contactdb_custom_field_with_id[]
}
/**
 * GET /contactdb/custom_fields
 *
 * **This endpoint allows you to retrieve all custom fields.**
 *
 * The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).
 **/
export const GET_contactdb_custom_fields = ApiCommon.requestMaker<
  GET_contactdb_custom_fields_Type,
  GET_contactdb_custom_fields_Response
>({
  id: "GET_contactdb_custom_fields",
  path: "/contactdb/custom_fields",
  verb: "GET",
  parameters: [{ name: "on-behalf-of", in: "header" }]
})

export type GET_contactdb_custom_fields_custom_field_id_Type = {
  custom_field_id: number
  "on-behalf-of"?: string
}
export type GET_contactdb_custom_fields_custom_field_id_Response = Types.contactdb_custom_field_with_id
/**
 * GET /contactdb/custom_fields/{custom_field_id}
 *
 * **This endpoint allows you to retrieve a custom field by ID.**
 *
 * The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).
 **/
export const GET_contactdb_custom_fields_custom_field_id = ApiCommon.requestMaker<
  GET_contactdb_custom_fields_custom_field_id_Type,
  GET_contactdb_custom_fields_custom_field_id_Response
>({
  id: "GET_contactdb_custom_fields_custom_field_id",
  path: "/contactdb/custom_fields/{custom_field_id}",
  verb: "GET",
  parameters: [
    { name: "custom_field_id", required: true, in: "path" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type DELETE_contactdb_custom_fields_custom_field_id_Type = {
  body?: null
  custom_field_id: number
  "on-behalf-of"?: string
}
export type DELETE_contactdb_custom_fields_custom_field_id_Response = void
/**
 * DELETE /contactdb/custom_fields/{custom_field_id}
 *
 * **This endpoint allows you to delete a custom field by ID.**
 *
 * The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).
 **/
export const DELETE_contactdb_custom_fields_custom_field_id = ApiCommon.requestMaker<
  DELETE_contactdb_custom_fields_custom_field_id_Type,
  DELETE_contactdb_custom_fields_custom_field_id_Response
>({
  id: "DELETE_contactdb_custom_fields_custom_field_id",
  path: "/contactdb/custom_fields/{custom_field_id}",
  verb: "DELETE",
  parameters: [
    { name: "body", in: "body" },
    { name: "custom_field_id", required: true, in: "path" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type GET_contactdb_reserved_fields_Type = {
  "on-behalf-of"?: string
}
export type GET_contactdb_reserved_fields_Response = {
  reserved_fields: Types.contactdb_custom_field[]
}
/**
 * GET /contactdb/reserved_fields
 *
 * **This endpoint allows you to list all fields that are reserved and can't be used for custom field names.**
 *
 * The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).
 **/
export const GET_contactdb_reserved_fields = ApiCommon.requestMaker<
  GET_contactdb_reserved_fields_Type,
  GET_contactdb_reserved_fields_Response
>({
  id: "GET_contactdb_reserved_fields",
  path: "/contactdb/reserved_fields",
  verb: "GET",
  parameters: [{ name: "on-behalf-of", in: "header" }]
})
