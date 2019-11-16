import * as ApiCommon from "../api-common"
// @ts-ignore
import * as Types from "../api-types"

export type GET_user_webhooks_event_settings_Type = {
  "on-behalf-of"?: string
}
export type GET_user_webhooks_event_settings_Response = Types.event_webhook_settings
/**
 * GET /user/webhooks/event/settings
 *
 * **This endpoint allows you to retrieve your current event webhook settings.**
 *
 * If an event type is marked as `true`, then the event webhook will include information about that event.
 *
 * SendGrid’s Event Webhook will notify a URL of your choice via HTTP POST with information about events that occur as SendGrid processes your email.
 *
 * Common uses of this data are to remove unsubscribes, react to spam reports, determine unengaged recipients, identify bounced email addresses, or create advanced analytics of your email program.
 **/
export const GET_user_webhooks_event_settings = ApiCommon.requestMaker<
  GET_user_webhooks_event_settings_Type,
  GET_user_webhooks_event_settings_Response
>({
  id: "GET_user_webhooks_event_settings",
  path: "/user/webhooks/event/settings",
  verb: "GET",
  parameters: [{ name: "on-behalf-of", in: "header" }]
})

export type PATCH_user_webhooks_event_settings_Type = {
  body?: Types.event_webhook_settings
  "on-behalf-of"?: string
}
export type PATCH_user_webhooks_event_settings_Response = Types.event_webhook_settings
/**
 * PATCH /user/webhooks/event/settings
 *
 * **This endpoint allows you to update your current event webhook settings.**
 *
 * If an event type is marked as `true`, then the event webhook will include information about that event.
 *
 * SendGrid’s Event Webhook will notify a URL of your choice via HTTP POST with information about events that occur as SendGrid processes your email.
 *
 * Common uses of this data are to remove unsubscribes, react to spam reports, determine unengaged recipients, identify bounced email addresses, or create advanced analytics of your email program.
 **/
export const PATCH_user_webhooks_event_settings = ApiCommon.requestMaker<
  PATCH_user_webhooks_event_settings_Type,
  PATCH_user_webhooks_event_settings_Response
>({
  id: "PATCH_user_webhooks_event_settings",
  path: "/user/webhooks/event/settings",
  verb: "PATCH",
  parameters: [{ name: "body", in: "body" }, { name: "on-behalf-of", in: "header" }]
})

export type POST_user_webhooks_event_test_Type = {
  body?: { url?: string }
  "on-behalf-of"?: string
}
export type POST_user_webhooks_event_test_Response = void
/**
 * POST /user/webhooks/event/test
 *
 * **This endpoint allows you to test your event webhook by sending a fake event notification post to the provided URL.**
 *
 * SendGrid’s Event Webhook will notify a URL of your choice via HTTP POST with information about events that occur as SendGrid processes your email.
 *
 * Common uses of this data are to remove unsubscribes, react to spam reports, determine unengaged recipients, identify bounced email addresses, or create advanced analytics of your email program.
 **/
export const POST_user_webhooks_event_test = ApiCommon.requestMaker<
  POST_user_webhooks_event_test_Type,
  POST_user_webhooks_event_test_Response
>({
  id: "POST_user_webhooks_event_test",
  path: "/user/webhooks/event/test",
  verb: "POST",
  parameters: [{ name: "body", in: "body" }, { name: "on-behalf-of", in: "header" }]
})

export type GET_user_webhooks_parse_stats_Type = {
  aggregated_by?: string
  end_date?: string
  limit?: string
  offset?: string
  "on-behalf-of"?: string
  start_date: string
}
export type GET_user_webhooks_parse_stats_Response = {
  date: string
  stats: { metrics?: { received: number } }[]
}[]
/**
 * GET /user/webhooks/parse/stats
 *
 * **This endpoint allows you to retrieve the statistics for your Parse Webhook useage.**
 *
 * SendGrid's Inbound Parse Webhook allows you to parse the contents and attachments of incomming emails. The Parse API can then POST the parsed emails to a URL that you specify. The Inbound Parse Webhook cannot parse messages greater than 20MB in size, including all attachments.
 *
 * There are a number of pre-made integrations for the SendGrid Parse Webhook which make processing events easy. You can find these integrations in the [Library Index](https://sendgrid.com/docs/Integrate/libraries.html#-Webhook-Libraries).
 **/
export const GET_user_webhooks_parse_stats = ApiCommon.requestMaker<
  GET_user_webhooks_parse_stats_Type,
  GET_user_webhooks_parse_stats_Response
>({
  id: "GET_user_webhooks_parse_stats",
  path: "/user/webhooks/parse/stats",
  verb: "GET",
  parameters: [
    { name: "aggregated_by", required: false, in: "query" },
    { name: "end_date", required: false, in: "query" },
    { name: "limit", required: false, in: "query" },
    { name: "offset", required: false, in: "query" },
    { name: "on-behalf-of", in: "header" },
    { name: "start_date", required: true, in: "query" }
  ]
})
