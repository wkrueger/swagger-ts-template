import * as ApiCommon from "../api-common"
// @ts-ignore
import * as Types from "../api-types"

export type GET_asm_groups_Type = {
  id?: number
  "on-behalf-of"?: string
}
export type GET_asm_groups_Response = Types.suppression_group[]
/**
 * GET /asm/groups
 *
 * **This endpoint allows you to retrieve information about multiple suppression groups.**
 *
 * This endpoint will return information for each group ID that you include in your request. To add a group ID to your request, simply append `&id=` followed by the group ID.
 *
 * Suppressions are a list of email addresses that will not receive content sent under a given [group](https://sendgrid.com/docs/API_Reference/Web_API_v3/Suppression_Management/groups.html).
 *
 * Suppression groups, or [unsubscribe groups](https://sendgrid.com/docs/API_Reference/Web_API_v3/Suppression_Management/groups.html), allow you to label a category of content that you regularly send. This gives your recipients the ability to opt out of a specific set of your email. For example, you might define a group for your transactional email, and one for your marketing email so that your users can continue recieving your transactional email witout having to receive your marketing content.
 **/
export const GET_asm_groups = ApiCommon.requestMaker<GET_asm_groups_Type, GET_asm_groups_Response>({
  id: "GET_asm_groups",
  path: "/asm/groups",
  verb: "GET",
  parameters: [
    { name: "id", in: "query" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type POST_asm_groups_Type = {
  body?: {
    name: string
    description: string
    is_default?: boolean
  }
  "on-behalf-of"?: string
}
export type POST_asm_groups_Response = {
  id: number
  name: string
  description: string
  is_default: boolean
}
/**
 * POST /asm/groups
 *
 * **This endpoint allows you to create a new suppression group.**
 *
 * Suppression groups, or unsubscribe groups, are specific types or categories of email that you would like your recipients to be able to unsubscribe from. For example: Daily Newsletters, Invoices, System Alerts.
 *
 * The **name** and **description** of the unsubscribe group will be visible by recipients when they are managing their subscriptions.
 *
 * Each user can create up to 25 different suppression groups.
 **/
export const POST_asm_groups = ApiCommon.requestMaker<
  POST_asm_groups_Type,
  POST_asm_groups_Response
>({
  id: "POST_asm_groups",
  path: "/asm/groups",
  verb: "POST",
  parameters: [
    { name: "body", in: "body" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type GET_asm_groups_group_id_Type = {
  group_id: string
  "on-behalf-of"?: string
}
export type GET_asm_groups_group_id_Response = {
  description?: string
  id?: number
  is_default?: boolean
  last_email_sent_at?: null
  name?: string
  unsubscribes?: number
}
/**
 * GET /asm/groups/{group_id}
 *
 * **This endpoint allows you to retrieve a single suppression group.**
 *
 * Suppression groups, or unsubscribe groups, are specific types or categories of email that you would like your recipients to be able to unsubscribe from. For example: Daily Newsletters, Invoices, System Alerts.
 *
 * The **name** and **description** of the unsubscribe group will be visible by recipients when they are managing their subscriptions.
 *
 * Each user can create up to 25 different suppression groups.
 **/
export const GET_asm_groups_group_id = ApiCommon.requestMaker<
  GET_asm_groups_group_id_Type,
  GET_asm_groups_group_id_Response
>({
  id: "GET_asm_groups_group_id",
  path: "/asm/groups/{group_id}",
  verb: "GET",
  parameters: [
    { name: "group_id", required: true, in: "path" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type PATCH_asm_groups_group_id_Type = {
  body?: {
    id?: number
    name: string
    description?: string
    is_default?: boolean
  }
  group_id: string
  "on-behalf-of"?: string
}
export type PATCH_asm_groups_group_id_Response = Types.suppression_group
/**
 * PATCH /asm/groups/{group_id}
 *
 * **This endpoint allows you to update or change a suppression group.**
 *
 * Suppression groups, or unsubscribe groups, are specific types or categories of email that you would like your recipients to be able to unsubscribe from. For example: Daily Newsletters, Invoices, System Alerts.
 *
 * The **name** and **description** of the unsubscribe group will be visible by recipients when they are managing their subscriptions.
 *
 * Each user can create up to 25 different suppression groups.
 **/
export const PATCH_asm_groups_group_id = ApiCommon.requestMaker<
  PATCH_asm_groups_group_id_Type,
  PATCH_asm_groups_group_id_Response
>({
  id: "PATCH_asm_groups_group_id",
  path: "/asm/groups/{group_id}",
  verb: "PATCH",
  parameters: [
    { name: "Authorization", required: true, in: "header" },
    { name: "body", in: "body" },
    { name: "group_id", required: true, in: "path" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type DELETE_asm_groups_group_id_Type = {
  body?: null
  group_id: string
  "on-behalf-of"?: string
}
export type DELETE_asm_groups_group_id_Response = void
/**
 * DELETE /asm/groups/{group_id}
 *
 * **This endpoint allows you to delete a suppression group.**
 *
 * You can only delete groups that have not been attached to sent mail in the last 60 days. If a recipient uses the "one-click unsubscribe" option on an email associated with a deleted group, that recipient will be added to the global suppression list.
 *
 * Suppression groups, or unsubscribe groups, are specific types or categories of email that you would like your recipients to be able to unsubscribe from. For example: Daily Newsletters, Invoices, System Alerts.
 *
 * The **name** and **description** of the unsubscribe group will be visible by recipients when they are managing their subscriptions.
 *
 * Each user can create up to 25 different suppression groups.
 **/
export const DELETE_asm_groups_group_id = ApiCommon.requestMaker<
  DELETE_asm_groups_group_id_Type,
  DELETE_asm_groups_group_id_Response
>({
  id: "DELETE_asm_groups_group_id",
  path: "/asm/groups/{group_id}",
  verb: "DELETE",
  parameters: [
    { name: "body", in: "body" },
    { name: "group_id", required: true, in: "path" },
    { name: "on-behalf-of", in: "header" }
  ]
})
