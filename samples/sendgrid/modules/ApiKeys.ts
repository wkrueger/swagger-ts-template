import * as ApiCommon from "../api-common"
// @ts-ignore
import * as Types from "../api-types"

export type GET_api_keys_Type = {
  limit?: number
  "on-behalf-of"?: string
}
export type GET_api_keys_Response = { result?: Types.api_key_name_id[] }
/**
 * GET /api_keys
 *
 * **This endpoint allows you to retrieve all API Keys that belong to the authenticated user.**
 *
 * The API Keys feature allows customers to be able to generate an API Key credential which can be used for authentication with the SendGrid v3 Web API or the [Mail API Endpoint](https://sendgrid.com/docs/API_Reference/Web_API/mail.html).
 **/
export const GET_api_keys = ApiCommon.requestMaker<GET_api_keys_Type, GET_api_keys_Response>({
  id: "GET_api_keys",
  path: "/api_keys",
  verb: "GET",
  parameters: [{ name: "limit", in: "query" }, { name: "on-behalf-of", in: "header" }]
})

export type create_api_keys_Type = {
  body?: {
    name: string
    scopes?: string[]
    sample?: string
  }
  "on-behalf-of"?: string
}
export type create_api_keys_Response = {
  api_key?: string
  api_key_id?: string
  name?: string
  scopes?: string[]
}
/**
 * POST /api_keys
 *
 * **This endpoint allows you to create a new random API Key for the user.**
 *
 * A JSON request body containing a "name" property is required. If number of maximum keys is reached, HTTP 403 will be returned.
 *
 * There is a limit of 100 API Keys on your account.
 *
 * The API Keys feature allows customers to be able to generate an API Key credential which can be used for authentication with the SendGrid v3 Web API or the [Mail API Endpoint](https://sendgrid.com/docs/API_Reference/Web_API/mail.html).
 *
 * See the [API Key Permissions List](https://sendgrid.com/docs/API_Reference/Web_API_v3/API_Keys/api_key_permissions_list.html) for a list of all available scopes.
 **/
export const create_api_keys = ApiCommon.requestMaker<
  create_api_keys_Type,
  create_api_keys_Response
>({
  id: "create_api_keys",
  path: "/api_keys",
  verb: "POST",
  parameters: [{ name: "body", in: "body" }, { name: "on-behalf-of", in: "header" }]
})

export type GET_api_keys_api_key_id_Type = {
  api_key_id: string
  "on-behalf-of"?: string
}
export type GET_api_keys_api_key_id_Response = { result?: Types.api_key_name_id_scopes[] }
/**
 * GET /api_keys/{api_key_id}
 *
 * **This endpoint allows you to retrieve a single api key.**
 *
 * If the API Key ID does not exist an HTTP 404 will be returned.
 **/
export const GET_api_keys_api_key_id = ApiCommon.requestMaker<
  GET_api_keys_api_key_id_Type,
  GET_api_keys_api_key_id_Response
>({
  id: "GET_api_keys_api_key_id",
  path: "/api_keys/{api_key_id}",
  verb: "GET",
  parameters: [
    { name: "api_key_id", required: true, in: "path" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type DELETE_api_keys_api_key_id_Type = {
  api_key_id: string
  "on-behalf-of"?: string
}
export type DELETE_api_keys_api_key_id_Response = void
/**
 * DELETE /api_keys/{api_key_id}
 *
 * **This endpoint allows you to revoke an existing API Key**
 *
 * Authentications using this API Key will fail after this request is made, with some small propogation delay.If the API Key ID does not exist an HTTP 404 will be returned.
 *
 * The API Keys feature allows customers to be able to generate an API Key credential which can be used for authentication with the SendGrid v3 Web API or the [Mail API Endpoint](https://sendgrid.com/docs/API_Reference/Web_API/mail.html).
 *
 * ## URI Parameters
 *
 * | URI Parameter   | Type  | Required?  | Description  |
 * |---|---|---|---|
 * |api_key_id |string | required | The ID of the API Key you are deleting.|
 **/
export const DELETE_api_keys_api_key_id = ApiCommon.requestMaker<
  DELETE_api_keys_api_key_id_Type,
  DELETE_api_keys_api_key_id_Response
>({
  id: "DELETE_api_keys_api_key_id",
  path: "/api_keys/{api_key_id}",
  verb: "DELETE",
  parameters: [
    { name: "api_key_id", required: true, in: "path" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type PATCH_api_keys_api_key_id_Type = {
  api_key_id: string
  body?: { name?: string }
  "on-behalf-of"?: string
}
export type PATCH_api_keys_api_key_id_Response = Types.api_key_name_id
/**
 * PATCH /api_keys/{api_key_id}
 *
 * **This endpoint allows you to update the name of an existing API Key.**
 *
 * A JSON request body with a "name" property is required.
 *
 * The API Keys feature allows customers to be able to generate an API Key credential which can be used for authentication with the SendGrid v3 Web API or the [Mail API Endpoint](https://sendgrid.com/docs/API_Reference/Web_API/mail.html).
 *
 * ## URI Parameters
 *
 * | URI Parameter   | Type  | Required?  | Description  |
 * |---|---|---|---|
 * |api_key_id |string | required | The ID of the API Key you are updating.|
 **/
export const PATCH_api_keys_api_key_id = ApiCommon.requestMaker<
  PATCH_api_keys_api_key_id_Type,
  PATCH_api_keys_api_key_id_Response
>({
  id: "PATCH_api_keys_api_key_id",
  path: "/api_keys/{api_key_id}",
  verb: "PATCH",
  parameters: [
    { name: "api_key_id", required: true, in: "path" },
    { name: "body", in: "body" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type PUT_api_keys_api_key_id_Type = {
  api_key_id: string
  body?: {
    name?: string
    scopes?: string[]
  }
  "on-behalf-of"?: string
}
export type PUT_api_keys_api_key_id_Response = Types.api_key_name_id_scopes
/**
 * PUT /api_keys/{api_key_id}
 *
 * **This endpoint allows you to update the name and scopes of a given API key.**
 *
 * A JSON request body with a "name" property is required.
 * Most provide the list of all the scopes an api key should have.
 *
 * The API Keys feature allows customers to be able to generate an API Key credential which can be used for authentication with the SendGrid v3 Web API or the [Mail API Endpoint](https://sendgrid.com/docs/API_Reference/Web_API/mail.html).
 **/
export const PUT_api_keys_api_key_id = ApiCommon.requestMaker<
  PUT_api_keys_api_key_id_Type,
  PUT_api_keys_api_key_id_Response
>({
  id: "PUT_api_keys_api_key_id",
  path: "/api_keys/{api_key_id}",
  verb: "PUT",
  parameters: [
    { name: "api_key_id", required: true, in: "path" },
    { name: "body", in: "body" },
    { name: "on-behalf-of", in: "header" }
  ]
})
