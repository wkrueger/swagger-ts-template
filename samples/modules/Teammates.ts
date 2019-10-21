import * as ApiCommon from "../api-common"
import * as Types from "../api-types"

export type GET_v3_scopes_requests_Type = {
  limit?: number
  offset?: number
}
export type GET_v3_scopes_requests_Response = {
  id?: number
  scope_group_name?: string
  username?: string
  email?: string
  first_name?: string
  last_name?: string
}[]
/**
 * GET /scopes/requests
 *
 * This endpoint allows you to retrieve a list of all recent access requests.
 *
 * **Note:** The Response Header's 'link' parameter will include pagination info. For example:
 *
 * link: ```<https://api.sendgrid.com/v3/scopes/requests?limit=10&offset=0>; rel="first"; title="1", <https://api.sendgrid.com/v3/scopes/requests?limit=10&offset=10>; rel="last"; title="2", <https://api.sendgrid.com/v3/scopes/requests?limit=10&offset=0>; rel="prev"; title="1"```
 **/
export const GET_v3_scopes_requests = ApiCommon.requestMaker<
  GET_v3_scopes_requests_Type,
  GET_v3_scopes_requests_Response
>({
  id: "GET_v3_scopes_requests",
  path: "/scopes/requests",
  verb: "GET",
  parameters: [{ name: "limit", in: "query" }, { name: "offset", in: "query" }]
})

export type DELETE_v3_scopes_requests_request_id_Type = {
  request_id: string
}
export type DELETE_v3_scopes_requests_request_id_Response = void
/**
 * DELETE /scopes/requests/{request_id}
 *
 * This endpoint allows you to deny an attempt to access your account.
 *
 * **Note:** Only teammate admins may delete a teammate's access request.
 **/
export const DELETE_v3_scopes_requests_request_id = ApiCommon.requestMaker<
  DELETE_v3_scopes_requests_request_id_Type,
  DELETE_v3_scopes_requests_request_id_Response
>({
  id: "DELETE_v3_scopes_requests_request_id",
  path: "/scopes/requests/{request_id}",
  verb: "DELETE",
  parameters: [{ name: "request_id", required: true, in: "path" }]
})

export type PATCH_v3_scopes_requests_approve_id_Type = {
  request_id: string
}
export type PATCH_v3_scopes_requests_approve_id_Response = { scope_group_name?: string }
/**
 * PATCH /scopes/requests/{request_id}/approve
 *
 * This endpoint allows you to approve an access attempt.
 *
 * **Note:** Only teammate admins may approve another teammate’s access request.
 **/
export const PATCH_v3_scopes_requests_approve_id = ApiCommon.requestMaker<
  PATCH_v3_scopes_requests_approve_id_Type,
  PATCH_v3_scopes_requests_approve_id_Response
>({
  id: "PATCH_v3_scopes_requests_approve_id",
  path: "/scopes/requests/{request_id}/approve",
  verb: "PATCH",
  parameters: [{ name: "request_id", required: true, in: "path" }]
})

export type POST_v3_teammates_pending_token_resend_Type = {
  token: string
}
export type POST_v3_teammates_pending_token_resend_Response = {
  token?: string
  email?: string
  scopes?: string[]
  is_admin?: boolean
}
/**
 * POST /teammates/pending/{token}/resend
 *
 * This endpoint allows you to resend a teammate invite.
 *
 * **Note:** Teammate invitations will expire after 7 days. Resending an invite will reset the expiration date.
 **/
export const POST_v3_teammates_pending_token_resend = ApiCommon.requestMaker<
  POST_v3_teammates_pending_token_resend_Type,
  POST_v3_teammates_pending_token_resend_Response
>({
  id: "POST_v3_teammates_pending_token_resend",
  path: "/teammates/pending/{token}/resend",
  verb: "POST",
  parameters: [{ name: "token", required: true, in: "path" }]
})

export type GET_v3_teammates_pending_Type = {}
export type GET_v3_teammates_pending_Response = {
  result?: {
    email?: string
    scopes?: string[]
    is_admin?: boolean
    token?: string
    expiration_date?: number
  }[]
}
/**
 * GET /teammates/pending
 *
 * This endpoint allows you to retrieve a list of all pending teammate invitations.
 *
 * **Note:** Each teammate invitation is valid for 7 days. Users may resend the invite to refresh the expiration date.
 **/
export const GET_v3_teammates_pending = ApiCommon.requestMaker<
  GET_v3_teammates_pending_Type,
  GET_v3_teammates_pending_Response
>({
  id: "GET_v3_teammates_pending",
  path: "/teammates/pending",
  verb: "GET",
  parameters: []
})

export type DELETE_v3_teammates_pending_token_Type = {
  token: string
}
export type DELETE_v3_teammates_pending_token_Response = void
/**
 * DELETE /teammates/pending/{token}
 *
 * This endpoint allows you to delete a pending teammate invite.
 **/
export const DELETE_v3_teammates_pending_token = ApiCommon.requestMaker<
  DELETE_v3_teammates_pending_token_Type,
  DELETE_v3_teammates_pending_token_Response
>({
  id: "DELETE_v3_teammates_pending_token",
  path: "/teammates/pending/{token}",
  verb: "DELETE",
  parameters: [{ name: "token", required: true, in: "path" }]
})

export type POST_v3_teammates_Type = {
  body?: {
    email: string
    scopes: string[]
    is_admin: boolean
  }
}
export type POST_v3_teammates_Response = {
  token?: string
  email?: string
  scopes?: any[]
  is_admin?: boolean
}
/**
 * POST /teammates
 *
 * This endpoint allows you to send a teammate invitation via email with a predefined set of scopes, or permissions.
 *
 * **Note:** A teammate invite will expire after 7 days, but you may resend the invite at any time to reset the expiration date.
 *
 * Essentials, [Legacy Lite](https://sendgrid.com/docs/Classroom/Basics/Billing/legacy_lite_plan.html), and Free Trial users may create up to one teammate per account. There are no limits for how many teammates a Pro or higher account may create.
 **/
export const POST_v3_teammates = ApiCommon.requestMaker<
  POST_v3_teammates_Type,
  POST_v3_teammates_Response
>({
  id: "POST_v3_teammates",
  path: "/teammates",
  verb: "POST",
  parameters: [{ name: "body", in: "body" }]
})

export type GET_v3_teammates_Type = {
  limit?: number
  offset?: number
}
export type GET_v3_teammates_Response = {
  result?: {
    username?: string
    email?: string
    first_name?: string
    last_name?: string
    user_type?: "admin" | "owner" | "teammate"
    is_admin?: boolean
    phone?: string
    website?: string
    address?: string
    address2?: string
    city?: string
    state?: string
    zip?: string
    country?: string
  }[]
}
/**
 * GET /teammates
 *
 * This endpoint allows you to retrieve a list of all current teammates.
 *
 * **Note:** The Response Header will include pagination info. For example:
 *
 * link: ```<https://api.sendgrid.com/v3/teammates?limit=10&offset=0>; rel="first"; title="1", <https://api.sendgrid.com/v3/teammates?limit=10&offset=10>; rel="last"; title="2", <https://api.sendgrid.com/v3/teammates?limit=10&offset=0>; rel="prev"; title="1"```
 **/
export const GET_v3_teammates = ApiCommon.requestMaker<
  GET_v3_teammates_Type,
  GET_v3_teammates_Response
>({
  id: "GET_v3_teammates",
  path: "/teammates",
  verb: "GET",
  parameters: [{ name: "limit", in: "query" }, { name: "offset", in: "query" }]
})

export type GET_v3_teammates_username_Type = {
  username: string
}
export type GET_v3_teammates_username_Response = {
  username?: string
  first_name?: string
  last_name?: string
  email?: string
  scopes?: any[]
  user_type?: "admin" | "owner" | "teammate"
  is_admin?: boolean
  phone?: string
  website?: string
  address?: string
  address2?: string
  city?: string
  state?: string
  zip?: string
  country?: string
}
/**
 * GET /teammates/{username}
 *
 * This endpoint allows you to retrieve a specific teammate by username.
 **/
export const GET_v3_teammates_username = ApiCommon.requestMaker<
  GET_v3_teammates_username_Type,
  GET_v3_teammates_username_Response
>({
  id: "GET_v3_teammates_username",
  path: "/teammates/{username}",
  verb: "GET",
  parameters: [{ name: "username", required: true, in: "path" }]
})

export type PATCH_v3_teammates_username_Type = {
  body?: {
    scopes: string[]
    is_admin: boolean
  }
  username: string
}
export type PATCH_v3_teammates_username_Response = {
  username?: string
  first_name?: string
  last_name?: string
  email?: string
  scopes?: string[]
  user_type?: "admin" | "owner" | "teammate"
  is_admin?: boolean
  phone?: string
  website?: string
  address?: string
  address2?: string
  city?: string
  state?: string
  zip?: string
  country?: string
}
/**
 * PATCH /teammates/{username}
 *
 * This endpoint allows you to update a teammate’s permissions.
 *
 * To turn a teammate into an admin, the request body should contain an `is_admin` set to `true`. Otherwise, set `is_admin` to `false` and pass in all the scopes that a teammate should have.
 *
 * **Only the parent user or other admin teammates can update another teammate’s permissions.**
 *
 * **Admin users can only update permissions.**
 **/
export const PATCH_v3_teammates_username = ApiCommon.requestMaker<
  PATCH_v3_teammates_username_Type,
  PATCH_v3_teammates_username_Response
>({
  id: "PATCH_v3_teammates_username",
  path: "/teammates/{username}",
  verb: "PATCH",
  parameters: [{ name: "body", in: "body" }, { name: "username", required: true, in: "path" }]
})

export type DELETE_v3_teammates_username_Type = {
  username: string
}
export type DELETE_v3_teammates_username_Response = void
/**
 * DELETE /teammates/{username}
 *
 * This endpoint allows you to delete a teammate.
 *
 * **Only the parent user or an admin teammate can delete another teammate.**
 **/
export const DELETE_v3_teammates_username = ApiCommon.requestMaker<
  DELETE_v3_teammates_username_Type,
  DELETE_v3_teammates_username_Response
>({
  id: "DELETE_v3_teammates_username",
  path: "/teammates/{username}",
  verb: "DELETE",
  parameters: [{ name: "username", required: true, in: "path" }]
})
