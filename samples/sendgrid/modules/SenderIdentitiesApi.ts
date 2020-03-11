import * as ApiCommon from "../api-common"
// @ts-ignore
import * as Types from "../api-types"

export type POST_senders_Type = {
  body?: {
    nickname: string
    from?: {
      email: string
      name?: string
    }
    reply_to?: {
      email: string
      name?: string
    }
    address: string
    address_2?: string
    city: string
    state?: string
    zip?: string
    country: string
  }
  "on-behalf-of"?: string
}
export type POST_senders_Response = Types.senderID
/**
 * POST /senders
 *
 * **This endpoint allows you to create a new sender identity.**
 *
 * *You may create up to 100 unique sender identities.*
 *
 * Sender Identities are required to be verified before use. If your domain has been whitelabeled it will auto verify on creation. Otherwise an email will be sent to the `from.email`.
 **/
export const POST_senders = ApiCommon.requestMaker<POST_senders_Type, POST_senders_Response>({
  id: "POST_senders",
  path: "/senders",
  verb: "POST",
  parameters: [
    { name: "body", in: "body" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type GET_v3_senders_Type = {
  "on-behalf-of"?: string
}
export type GET_v3_senders_Response = { result?: Types.senderID[] }
/**
 * GET /senders
 *
 * **This endpoint allows you to retrieve a list of all sender identities that have been created for your account.**
 *
 * Sender Identities are required to be verified before use. If your domain has been whitelabeled it will auto verify on creation. Otherwise an email will be sent to the `from.email`.
 **/
export const GET_v3_senders = ApiCommon.requestMaker<GET_v3_senders_Type, GET_v3_senders_Response>({
  id: "GET_v3_senders",
  path: "/senders",
  verb: "GET",
  parameters: [{ name: "on-behalf-of", in: "header" }]
})

export type PATCH_v3_senders_sender_id_Type = {
  body?: {
    nickname?: string
    from?: {
      email?: string
      name?: string
    }
    reply_to?: {
      email?: string
      name?: string
    }
    address?: string
    address_2?: string
    city?: string
    state?: string
    zip?: string
    country?: string
  }
  "on-behalf-of"?: string
  sender_id: number
}
export type PATCH_v3_senders_sender_id_Response = Types.senderID
/**
 * PATCH /senders/{sender_id}
 *
 * **This endpoint allows you to update a sender identity.**
 *
 * Updates to `from.email` require re-verification. If your domain has been whitelabeled it will auto verify on creation. Otherwise an email will be sent to the `from.email`.
 *
 * Partial updates are allowed, but fields that are marked as "required" in the POST (create) endpoint must not be nil if that field is included in the PATCH request.
 **/
export const PATCH_v3_senders_sender_id = ApiCommon.requestMaker<
  PATCH_v3_senders_sender_id_Type,
  PATCH_v3_senders_sender_id_Response
>({
  id: "PATCH_v3_senders_sender_id",
  path: "/senders/{sender_id}",
  verb: "PATCH",
  parameters: [
    { name: "body", in: "body" },
    { name: "on-behalf-of", in: "header" },
    { name: "sender_id", required: true, in: "path" }
  ]
})

export type DELETE_v3_senders_sender_id_Type = {
  "on-behalf-of"?: string
  sender_id: number
}
export type DELETE_v3_senders_sender_id_Response = void
/**
 * DELETE /senders/{sender_id}
 *
 * **This endoint allows you to delete one of your sender identities.**
 *
 * Sender Identities are required to be verified before use. If your domain has been whitelabeled it will auto verify on creation. Otherwise an email will be sent to the `from.email`.
 **/
export const DELETE_v3_senders_sender_id = ApiCommon.requestMaker<
  DELETE_v3_senders_sender_id_Type,
  DELETE_v3_senders_sender_id_Response
>({
  id: "DELETE_v3_senders_sender_id",
  path: "/senders/{sender_id}",
  verb: "DELETE",
  parameters: [
    { name: "on-behalf-of", in: "header" },
    { name: "sender_id", required: true, in: "path" }
  ]
})

export type GET_v3_senders_sender_id_Type = {
  "on-behalf-of"?: string
  sender_id: number
}
export type GET_v3_senders_sender_id_Response = Types.senderID
/**
 * GET /senders/{sender_id}
 *
 * **This endpoint allows you to retrieve a specific sender identity.**
 *
 * Sender Identities are required to be verified before use. If your domain has been whitelabeled it will auto verify on creation. Otherwise an email will be sent to the `from.email`.
 **/
export const GET_v3_senders_sender_id = ApiCommon.requestMaker<
  GET_v3_senders_sender_id_Type,
  GET_v3_senders_sender_id_Response
>({
  id: "GET_v3_senders_sender_id",
  path: "/senders/{sender_id}",
  verb: "GET",
  parameters: [
    { name: "on-behalf-of", in: "header" },
    { name: "sender_id", required: true, in: "path" }
  ]
})

export type POST_v3_senders_sender_id_resend_verification_Type = {
  "on-behalf-of"?: string
  sender_id: number
}
export type POST_v3_senders_sender_id_resend_verification_Response = void
/**
 * POST /senders/{sender_id}/resend_verification
 *
 * **This enpdoint allows you to resend a sender identity verification email.**
 *
 * Sender Identities are required to be verified before use. If your domain has been whitelabeled it will auto verify on creation. Otherwise an email will be sent to the `from.email`.
 **/
export const POST_v3_senders_sender_id_resend_verification = ApiCommon.requestMaker<
  POST_v3_senders_sender_id_resend_verification_Type,
  POST_v3_senders_sender_id_resend_verification_Response
>({
  id: "POST_v3_senders_sender_id_resend_verification",
  path: "/senders/{sender_id}/resend_verification",
  verb: "POST",
  parameters: [
    { name: "on-behalf-of", in: "header" },
    { name: "sender_id", required: true, in: "path" }
  ]
})
