import * as ApiCommon from "../api-common"
// @ts-ignore
import * as Types from "../api-types"

export type POST_campaigns_Type = {
  body?: Types.campaign_request
}
export type POST_campaigns_Response = Types.campaign_response
/**
 * POST /campaigns
 *
 * **This endpoint allows you to create a campaign.**
 *
 * Our Marketing Campaigns API lets you create, manage, send, and schedule campaigns.
 *
 * Note: In order to send or schedule the campaign, you will be required to provide a subject, sender ID, content (we suggest both html and plain text), and at least one list or segment ID. This information is not required when you create a campaign.
 *
 * For more information:
 *
 * * [User Guide > Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html)
 **/
export const POST_campaigns = ApiCommon.requestMaker<POST_campaigns_Type, POST_campaigns_Response>({
  id: "POST_campaigns",
  path: "/campaigns",
  verb: "POST",
  parameters: [{ name: "body", in: "body" }]
})

export type GET_campaigns_Type = {
  limit?: number
  offset?: number
}
export type GET_campaigns_Response = {
  result?: {
    categories?: string[]
    custom_unsubscribe_url?: string
    html_content?: string
    id?: number
    ip_pool?: string
    list_ids?: number[]
    plain_content?: string
    segment_ids?: number[]
    sender_id?: number
    status?: string
    subject?: string
    suppression_group_id?: number
    title?: string
  }[]
}
/**
 * GET /campaigns
 *
 * **This endpoint allows you to retrieve a list of all of your campaigns.**
 *
 * Returns campaigns in reverse order they were created (newest first).
 *
 * Returns an empty array if no campaigns exist.
 *
 * For more information:
 *
 * * [User Guide > Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html)
 **/
export const GET_campaigns = ApiCommon.requestMaker<GET_campaigns_Type, GET_campaigns_Response>({
  id: "GET_campaigns",
  path: "/campaigns",
  verb: "GET",
  parameters: [
    { name: "limit", in: "query" },
    { name: "offset", in: "query" }
  ]
})

export type GET_campaigns_campaign_id_Type = {
  campaign_id: number
}
export type GET_campaigns_campaign_id_Response = {
  categories?: string[]
  custom_unsubscribe_url?: string
  html_content?: string
  id?: number
  ip_pool?: string
  list_ids?: number[]
  plain_content?: string
  segment_ids?: number[]
  sender_id?: number
  status?: string
  subject?: string
  suppression_group_id?: number
  title?: string
}
/**
 * GET /campaigns/{campaign_id}
 *
 * **This endpoint allows you to retrieve a specific campaign.**
 *
 * Our Marketing Campaigns API lets you create, manage, send, and schedule campaigns.
 *
 * For more information:
 *
 * * [User Guide > Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html)
 **/
export const GET_campaigns_campaign_id = ApiCommon.requestMaker<
  GET_campaigns_campaign_id_Type,
  GET_campaigns_campaign_id_Response
>({
  id: "GET_campaigns_campaign_id",
  path: "/campaigns/{campaign_id}",
  verb: "GET",
  parameters: [{ name: "campaign_id", required: true, in: "path" }]
})

export type DELETE_campaigns_campaign_id_Type = {
  body?: null
  campaign_id: number
}
export type DELETE_campaigns_campaign_id_Response = void
/**
 * DELETE /campaigns/{campaign_id}
 *
 * **This endpoint allows you to delete a specific campaign.**
 *
 * Our Marketing Campaigns API lets you create, manage, send, and schedule campaigns.
 *
 * For more information:
 *
 * * [User Guide > Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html)
 **/
export const DELETE_campaigns_campaign_id = ApiCommon.requestMaker<
  DELETE_campaigns_campaign_id_Type,
  DELETE_campaigns_campaign_id_Response
>({
  id: "DELETE_campaigns_campaign_id",
  path: "/campaigns/{campaign_id}",
  verb: "DELETE",
  parameters: [
    { name: "body", in: "body" },
    { name: "campaign_id", required: true, in: "path" }
  ]
})

export type PATCH_campaigns_campaign_id_Type = {
  body?: {
    title: string
    subject: string
    categories: string[]
    html_content: string
    plain_content: string
  }
  campaign_id: number
}
export type PATCH_campaigns_campaign_id_Response = Types.campaign_response
/**
 * PATCH /campaigns/{campaign_id}
 *
 * Update a campaign. This is especially useful if you only set up the campaign using POST /campaigns, but didn't set many of the parameters.
 *
 * For more information:
 *
 * * [User Guide > Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html)
 **/
export const PATCH_campaigns_campaign_id = ApiCommon.requestMaker<
  PATCH_campaigns_campaign_id_Type,
  PATCH_campaigns_campaign_id_Response
>({
  id: "PATCH_campaigns_campaign_id",
  path: "/campaigns/{campaign_id}",
  verb: "PATCH",
  parameters: [
    { name: "body", in: "body" },
    { name: "campaign_id", required: true, in: "path" }
  ]
})

export type POST_campaigns_campaign_id_schedules_now_Type = {
  body?: null
  campaign_id: number
}
export type POST_campaigns_campaign_id_schedules_now_Response = {
  id: number
  status: string
}
/**
 * POST /campaigns/{campaign_id}/schedules/now
 *
 * **This endpoint allows you to immediately send a campaign at the time you make the API call.**
 *
 * Normally a POST would have a request body, but since this endpoint is telling us to send a resource that is already created, a request body is not needed.
 *
 * For more information:
 *
 * * [User Guide > Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html)
 **/
export const POST_campaigns_campaign_id_schedules_now = ApiCommon.requestMaker<
  POST_campaigns_campaign_id_schedules_now_Type,
  POST_campaigns_campaign_id_schedules_now_Response
>({
  id: "POST_campaigns_campaign_id_schedules_now",
  path: "/campaigns/{campaign_id}/schedules/now",
  verb: "POST",
  parameters: [
    { name: "body", in: "body" },
    { name: "campaign_id", required: true, in: "path" }
  ]
})

export type POST_campaigns_campaign_id_schedules_Type = {
  body?: { send_at: number }
  campaign_id: number
}
export type POST_campaigns_campaign_id_schedules_Response = {
  id: number
  send_at: number
  status: "Scheduled"
}
/**
 * POST /campaigns/{campaign_id}/schedules
 *
 * **This endpoint allows you to schedule a specific date and time for your campaign to be sent.**
 *
 * For more information:
 *
 * * [User Guide > Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html)
 **/
export const POST_campaigns_campaign_id_schedules = ApiCommon.requestMaker<
  POST_campaigns_campaign_id_schedules_Type,
  POST_campaigns_campaign_id_schedules_Response
>({
  id: "POST_campaigns_campaign_id_schedules",
  path: "/campaigns/{campaign_id}/schedules",
  verb: "POST",
  parameters: [
    { name: "body", in: "body" },
    { name: "campaign_id", required: true, in: "path" }
  ]
})

export type PATCH_campaigns_campaign_id_schedules_Type = {
  body?: { send_at: number }
  campaign_id: number
}
export type PATCH_campaigns_campaign_id_schedules_Response = {
  id: number
  send_at: number
  status: string
}
/**
 * PATCH /campaigns/{campaign_id}/schedules
 *
 * **This endpoint allows to you change the scheduled time and date for a campaign to be sent.**
 *
 * For more information:
 *
 * * [User Guide > Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html)
 **/
export const PATCH_campaigns_campaign_id_schedules = ApiCommon.requestMaker<
  PATCH_campaigns_campaign_id_schedules_Type,
  PATCH_campaigns_campaign_id_schedules_Response
>({
  id: "PATCH_campaigns_campaign_id_schedules",
  path: "/campaigns/{campaign_id}/schedules",
  verb: "PATCH",
  parameters: [
    { name: "body", in: "body" },
    { name: "campaign_id", required: true, in: "path" }
  ]
})

export type GET_campaigns_campaign_id_schedules_Type = {
  campaign_id: number
}
export type GET_campaigns_campaign_id_schedules_Response = { send_at: number }
/**
 * GET /campaigns/{campaign_id}/schedules
 *
 * **This endpoint allows you to retrieve the date and time that the given campaign has been scheduled to be sent.**
 *
 * For more information:
 *
 * * [User Guide > Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html)
 **/
export const GET_campaigns_campaign_id_schedules = ApiCommon.requestMaker<
  GET_campaigns_campaign_id_schedules_Type,
  GET_campaigns_campaign_id_schedules_Response
>({
  id: "GET_campaigns_campaign_id_schedules",
  path: "/campaigns/{campaign_id}/schedules",
  verb: "GET",
  parameters: [{ name: "campaign_id", required: true, in: "path" }]
})

export type DELETE_campaigns_campaign_id_schedules_Type = {
  body?: null
  campaign_id: number
}
export type DELETE_campaigns_campaign_id_schedules_Response = void
/**
 * DELETE /campaigns/{campaign_id}/schedules
 *
 * **This endpoint allows you to unschedule a campaign that has already been scheduled to be sent.**
 *
 * A successful unschedule will return a 204.
 * If the specified campaign is in the process of being sent, the only option is to cancel (a different method).
 *
 * For more information:
 *
 * * [User Guide > Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html)
 **/
export const DELETE_campaigns_campaign_id_schedules = ApiCommon.requestMaker<
  DELETE_campaigns_campaign_id_schedules_Type,
  DELETE_campaigns_campaign_id_schedules_Response
>({
  id: "DELETE_campaigns_campaign_id_schedules",
  path: "/campaigns/{campaign_id}/schedules",
  verb: "DELETE",
  parameters: [
    { name: "body", in: "body" },
    { name: "campaign_id", required: true, in: "path" }
  ]
})

export type POST_campaigns_campaign_id_schedules_test_Type = {
  body?: { to: string }
  campaign_id: number
}
export type POST_campaigns_campaign_id_schedules_test_Response = void
/**
 * POST /campaigns/{campaign_id}/schedules/test
 *
 * **This endpoint allows you to send a test campaign.**
 *
 * To send to multiple addresses, use an array for the JSON "to" value ["one@address","two@address"]
 *
 * For more information:
 *
 * * [User Guide > Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html)
 **/
export const POST_campaigns_campaign_id_schedules_test = ApiCommon.requestMaker<
  POST_campaigns_campaign_id_schedules_test_Type,
  POST_campaigns_campaign_id_schedules_test_Response
>({
  id: "POST_campaigns_campaign_id_schedules_test",
  path: "/campaigns/{campaign_id}/schedules/test",
  verb: "POST",
  parameters: [
    { name: "body", in: "body" },
    { name: "campaign_id", required: true, in: "path" }
  ]
})
