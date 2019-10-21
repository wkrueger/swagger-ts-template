import * as ApiCommon from "../api-common"
import * as Types from "../api-types"

export type POST_asm_groups_group_id_suppressions_Type = {
  body?: { recipient_emails: string[] }
  group_id: string
  "on-behalf-of"?: string
}
export type POST_asm_groups_group_id_suppressions_Response = { recipient_emails: string[] }
/**
 * POST /asm/groups/{group_id}/suppressions
 *
 * **This endpoint allows you to add email addresses to an unsubscribe group.**
 *
 * If you attempt to add suppressions to a group that has been deleted or does not exist, the suppressions will be added to the global suppressions list.
 *
 * Suppressions are recipient email addresses that are added to [unsubscribe groups](https://sendgrid.com/docs/API_Reference/Web_API_v3/Suppression_Management/groups.html). Once a recipient's address is on the suppressions list for an unsubscribe group, they will not receive any emails that are tagged with that unsubscribe group.
 **/
export const POST_asm_groups_group_id_suppressions = ApiCommon.requestMaker<
  POST_asm_groups_group_id_suppressions_Type,
  POST_asm_groups_group_id_suppressions_Response
>({
  id: "POST_asm_groups_group_id_suppressions",
  path: "/asm/groups/{group_id}/suppressions",
  verb: "POST",
  parameters: [
    { name: "body", in: "body" },
    { name: "group_id", required: true, in: "path" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type GET_asm_groups_group_id_suppressions_Type = {
  group_id: string
  "on-behalf-of"?: string
}
export type GET_asm_groups_group_id_suppressions_Response = string[]
/**
 * GET /asm/groups/{group_id}/suppressions
 *
 * **This endpoint allows you to retrieve all suppressed email addresses belonging to the given group.**
 *
 * Suppressions are recipient email addresses that are added to [unsubscribe groups](https://sendgrid.com/docs/API_Reference/Web_API_v3/Suppression_Management/groups.html). Once a recipient's address is on the suppressions list for an unsubscribe group, they will not receive any emails that are tagged with that unsubscribe group.
 **/
export const GET_asm_groups_group_id_suppressions = ApiCommon.requestMaker<
  GET_asm_groups_group_id_suppressions_Type,
  GET_asm_groups_group_id_suppressions_Response
>({
  id: "GET_asm_groups_group_id_suppressions",
  path: "/asm/groups/{group_id}/suppressions",
  verb: "GET",
  parameters: [
    { name: "group_id", required: true, in: "path" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type DELETE_asm_groups_group_id_suppressions_email_Type = {
  body?: null
  email: string
  group_id: string
  "on-behalf-of"?: string
}
export type DELETE_asm_groups_group_id_suppressions_email_Response = void
/**
 * DELETE /asm/groups/{group_id}/suppressions/{email}
 *
 * **This endpoint allows you to remove a suppressed email address from the given suppression group.**
 *
 * Suppressions are recipient email addresses that are added to [unsubscribe groups](https://sendgrid.com/docs/API_Reference/Web_API_v3/Suppression_Management/groups.html). Once a recipient's address is on the suppressions list for an unsubscribe group, they will not receive any emails that are tagged with that unsubscribe group.
 **/
export const DELETE_asm_groups_group_id_suppressions_email = ApiCommon.requestMaker<
  DELETE_asm_groups_group_id_suppressions_email_Type,
  DELETE_asm_groups_group_id_suppressions_email_Response
>({
  id: "DELETE_asm_groups_group_id_suppressions_email",
  path: "/asm/groups/{group_id}/suppressions/{email}",
  verb: "DELETE",
  parameters: [
    { name: "body", in: "body" },
    { name: "email", required: true, in: "path" },
    { name: "group_id", required: true, in: "path" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type GET_asm_suppressions_Type = {
  "on-behalf-of"?: string
}
export type GET_asm_suppressions_Response = {
  email: string
  group_id: number
  group_name: string
  created_at: number
}[]
/**
 * GET /asm/suppressions
 *
 * **This endpoint allows you to retrieve a list of all suppressions.**
 *
 * Suppressions are a list of email addresses that will not receive content sent under a given [group](https://sendgrid.com/docs/API_Reference/Web_API_v3/Suppression_Management/groups.html).
 **/
export const GET_asm_suppressions = ApiCommon.requestMaker<
  GET_asm_suppressions_Type,
  GET_asm_suppressions_Response
>({
  id: "GET_asm_suppressions",
  path: "/asm/suppressions",
  verb: "GET",
  parameters: [{ name: "on-behalf-of", in: "header" }]
})

export type GET_asm_suppressions_email_Type = {
  email: string
  "on-behalf-of"?: string
}
export type GET_asm_suppressions_email_Response = {
  suppressions: {
    description: string
    id: number
    is_default: boolean
    name: string
    suppressed: boolean
  }[]
}
/**
 * GET /asm/suppressions/{email}
 *
 * **This endpoint returns the list of all groups that the given email address has been unsubscribed from.**
 *
 * Suppressions are a list of email addresses that will not receive content sent under a given [group](https://sendgrid.com/docs/API_Reference/Web_API_v3/Suppression_Management/groups.html).
 **/
export const GET_asm_suppressions_email = ApiCommon.requestMaker<
  GET_asm_suppressions_email_Type,
  GET_asm_suppressions_email_Response
>({
  id: "GET_asm_suppressions_email",
  path: "/asm/suppressions/{email}",
  verb: "GET",
  parameters: [
    { name: "email", required: true, in: "path" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type POST_asm_groups_group_id_suppressions_search_Type = {
  body?: { recipient_emails: string[] }
  group_id: string
  "on-behalf-of"?: string
}
export type POST_asm_groups_group_id_suppressions_search_Response = { recipient_emails: string[] }
/**
 * POST /asm/groups/{group_id}/suppressions/search
 *
 * **This endpoint allows you to search a suppression group for multiple suppressions.**
 *
 * When given a list of email addresses and a group ID, this endpoint will return only the email addresses that have been unsubscribed from the given group.
 *
 * Suppressions are a list of email addresses that will not receive content sent under a given [group](https://sendgrid.com/docs/API_Reference/Web_API_v3/Suppression_Management/groups.html).
 **/
export const POST_asm_groups_group_id_suppressions_search = ApiCommon.requestMaker<
  POST_asm_groups_group_id_suppressions_search_Type,
  POST_asm_groups_group_id_suppressions_search_Response
>({
  id: "POST_asm_groups_group_id_suppressions_search",
  path: "/asm/groups/{group_id}/suppressions/search",
  verb: "POST",
  parameters: [
    { name: "body", in: "body" },
    { name: "group_id", required: true, in: "path" },
    { name: "on-behalf-of", in: "header" }
  ]
})
