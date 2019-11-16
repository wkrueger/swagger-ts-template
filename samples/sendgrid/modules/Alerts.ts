import * as ApiCommon from "../api-common"
// @ts-ignore
import * as Types from "../api-types"

export type POST_alerts_Type = {
  body?: {
    type: "stats_notification" | "usage_limit"
    email_to: string | null
    frequency?: string
    percentage?: number
  }
  "on-behalf-of"?: string
}
export type POST_alerts_Response = {
  created_at: number
  email_to: string
  frequency?: string
  id: number
  type: string
  updated_at: number
  percentage?: number
}
/**
 * POST /alerts
 *
 * **This endpoint allows you to create a new alert.**
 *
 * Alerts allow you to specify an email address to receive notifications regarding your email usage or statistics. There are two types of alerts that can be created with this endpoint:
 *
 * * `usage_limit` allows you to set the threshold at which an alert will be sent.
 * * `stats_notification` allows you to set how frequently you would like to receive email statistics reports. For example, "daily", "weekly", or "monthly".
 *
 * For more information about alerts, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/alerts.html).
 **/
export const POST_alerts = ApiCommon.requestMaker<POST_alerts_Type, POST_alerts_Response>({
  id: "POST_alerts",
  path: "/alerts",
  verb: "POST",
  parameters: [
    { name: "Authorization", in: "header" },
    { name: "body", in: "body" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type GET_alerts_Type = {
  body?: null
  "on-behalf-of"?: string
}
export type GET_alerts_Response = {
  created_at: number
  email_to: string
  id: number
  percentage?: number
  type: "usage_limit" | "stats_notification"
  updated_at?: number
  frequency?: string
}[]
/**
 * GET /alerts
 *
 * **This endpoint allows you to retieve all of your alerts.**
 *
 * Alerts allow you to specify an email address to receive notifications regarding your email usage or statistics.
 * * Usage alerts allow you to set the threshold at which an alert will be sent.
 * * Stats notifications allow you to set how frequently you would like to receive email statistics reports. For example, "daily", "weekly", or "monthly".
 *
 * For more information about alerts, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/alerts.html).
 **/
export const GET_alerts = ApiCommon.requestMaker<GET_alerts_Type, GET_alerts_Response>({
  id: "GET_alerts",
  path: "/alerts",
  verb: "GET",
  parameters: [
    { name: "Authorization", in: "header" },
    { name: "body", in: "body" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type GET_alerts_alert_id_Type = {
  alert_id: number
  "on-behalf-of"?: string
}
export type GET_alerts_alert_id_Response = {
  created_at: number
  email_to: string
  frequency?: string
  id: number
  type: "usage_alert" | "stats_notification"
  updated_at: number
  percentage?: number
}
/**
 * GET /alerts/{alert_id}
 *
 * **This endpoint allows you to retrieve a specific alert.**
 *
 * Alerts allow you to specify an email address to receive notifications regarding your email usage or statistics.
 * * Usage alerts allow you to set the threshold at which an alert will be sent.
 * * Stats notifications allow you to set how frequently you would like to receive email statistics reports. For example, "daily", "weekly", or "monthly".
 *
 * For more information about alerts, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/alerts.html).
 **/
export const GET_alerts_alert_id = ApiCommon.requestMaker<
  GET_alerts_alert_id_Type,
  GET_alerts_alert_id_Response
>({
  id: "GET_alerts_alert_id",
  path: "/alerts/{alert_id}",
  verb: "GET",
  parameters: [
    { name: "alert_id", required: true, in: "path" },
    { name: "Authorization", in: "header" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type DELETE_alerts_alert_id_Type = {
  alert_id: number
  "on-behalf-of"?: string
}
export type DELETE_alerts_alert_id_Response = void
/**
 * DELETE /alerts/{alert_id}
 *
 * **This endpoint allows you to delete an alert.**
 *
 * Alerts allow you to specify an email address to receive notifications regarding your email usage or statistics.
 * * Usage alerts allow you to set the threshold at which an alert will be sent.
 * * Stats notifications allow you to set how frequently you would like to receive email statistics reports. For example, "daily", "weekly", or "monthly".
 *
 * For more information about alerts, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/alerts.html).
 **/
export const DELETE_alerts_alert_id = ApiCommon.requestMaker<
  DELETE_alerts_alert_id_Type,
  DELETE_alerts_alert_id_Response
>({
  id: "DELETE_alerts_alert_id",
  path: "/alerts/{alert_id}",
  verb: "DELETE",
  parameters: [
    { name: "alert_id", required: true, in: "path" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type PATCH_alerts_alert_id_Type = {
  alert_id: number
  body?: {
    email_to?: string
    frequency?: string
    percentage?: number
  }
  "on-behalf-of"?: string
}
export type PATCH_alerts_alert_id_Response = {
  created_at: number
  email_to: string
  frequency?: string
  id: number
  type: "usage_alert" | "stats_notification"
  updated_at: number
  percentage?: number
}
/**
 * PATCH /alerts/{alert_id}
 *
 * **This endpoint allows you to update an alert.**
 *
 * Alerts allow you to specify an email address to receive notifications regarding your email usage or statistics.
 * * Usage alerts allow you to set the threshold at which an alert will be sent.
 * * Stats notifications allow you to set how frequently you would like to receive email statistics reports. For example, "daily", "weekly", or "monthly".
 *
 * For more information about alerts, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/alerts.html).
 **/
export const PATCH_alerts_alert_id = ApiCommon.requestMaker<
  PATCH_alerts_alert_id_Type,
  PATCH_alerts_alert_id_Response
>({
  id: "PATCH_alerts_alert_id",
  path: "/alerts/{alert_id}",
  verb: "PATCH",
  parameters: [
    { name: "alert_id", required: true, in: "path" },
    { name: "body", in: "body" },
    { name: "on-behalf-of", in: "header" }
  ]
})
