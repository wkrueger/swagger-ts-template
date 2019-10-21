import * as ApiCommon from "../api-common"
import * as Types from "../api-types"

export type GET_tracking_settings_Type = {
  limit?: number
  offset?: number
  "on-behalf-of"?: string
}
export type GET_tracking_settings_Response = {
  result?: {
    name?: string
    title?: string
    description?: string
    enabled?: boolean
  }[]
}
/**
 * GET /tracking_settings
 *
 * **This endpoint allows you to retrieve a list of all tracking settings that you can enable on your account.**
 *
 * You can track a variety of the actions your recipients may take when interacting with your emails including opening your emails, clicking on links in your emails, and subscribing to (or unsubscribing from) your emails.
 *
 * For more information about tracking, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/tracking.html).
 **/
export const GET_tracking_settings = ApiCommon.requestMaker<
  GET_tracking_settings_Type,
  GET_tracking_settings_Response
>({
  id: "GET_tracking_settings",
  path: "/tracking_settings",
  verb: "GET",
  parameters: [
    { name: "limit", in: "query" },
    { name: "offset", in: "query" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type GET_tracking_settings_click_Type = {
  "on-behalf-of"?: string
}
export type GET_tracking_settings_click_Response = {
  enable_text: boolean
  enabled: boolean
}
/**
 * GET /tracking_settings/click
 *
 * **This endpoint allows you to retrieve your current click tracking setting.**
 *
 * You can track a variety of the actions your recipients may take when interacting with your emails including opening your emails, clicking on links in your emails, and subscribing to (or unsubscribing from) your emails.
 *
 * For more information about tracking, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/tracking.html).
 **/
export const GET_tracking_settings_click = ApiCommon.requestMaker<
  GET_tracking_settings_click_Type,
  GET_tracking_settings_click_Response
>({
  id: "GET_tracking_settings_click",
  path: "/tracking_settings/click",
  verb: "GET",
  parameters: [{ name: "on-behalf-of", in: "header" }]
})

export type PATCH_tracking_settings_click_Type = {
  body?: { enabled?: boolean }
  "on-behalf-of"?: string
}
export type PATCH_tracking_settings_click_Response = {
  enable_text: boolean
  enabled: boolean
}
/**
 * PATCH /tracking_settings/click
 *
 * **This endpoint allows you to change your current click tracking setting. You can enable, or disable, click tracking using this endpoint.**
 *
 * You can track a variety of the actions your recipients may take when interacting with your emails including opening your emails, clicking on links in your emails, and subscribing to (or unsubscribing from) your emails.
 *
 * For more information about tracking, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/tracking.html).
 **/
export const PATCH_tracking_settings_click = ApiCommon.requestMaker<
  PATCH_tracking_settings_click_Type,
  PATCH_tracking_settings_click_Response
>({
  id: "PATCH_tracking_settings_click",
  path: "/tracking_settings/click",
  verb: "PATCH",
  parameters: [{ name: "body", in: "body" }, { name: "on-behalf-of", in: "header" }]
})

export type GET_tracking_settings_google_analytics_Type = {
  "on-behalf-of"?: string
}
export type GET_tracking_settings_google_analytics_Response = Types.google_analytics_settings
/**
 * GET /tracking_settings/google_analytics
 *
 * **This endpoint allows you to retrieve your current setting for Google Analytics.**
 *
 * For more information about using Google Analytics, please refer to [Google’s URL Builder](https://support.google.com/analytics/answer/1033867?hl=en) and their article on ["Best Practices for Campaign Building"](https://support.google.com/analytics/answer/1037445).
 *
 * We default the settings to Google’s recommendations. For more information, see [Google Analytics Demystified](https://sendgrid.com/docs/Classroom/Track/Collecting_Data/google_analytics_demystified_ga_statistics_vs_sg_statistics.html).
 *
 * You can track a variety of the actions your recipients may take when interacting with your emails including opening your emails, clicking on links in your emails, and subscribing to (or unsubscribing from) your emails.
 *
 * For more information about tracking, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/tracking.html).
 **/
export const GET_tracking_settings_google_analytics = ApiCommon.requestMaker<
  GET_tracking_settings_google_analytics_Type,
  GET_tracking_settings_google_analytics_Response
>({
  id: "GET_tracking_settings_google_analytics",
  path: "/tracking_settings/google_analytics",
  verb: "GET",
  parameters: [{ name: "on-behalf-of", in: "header" }]
})

export type PATCH_tracking_settings_google_analytics_Type = {
  body?: Types.google_analytics_settings
  "on-behalf-of"?: string
}
export type PATCH_tracking_settings_google_analytics_Response = Types.google_analytics_settings
/**
 * PATCH /tracking_settings/google_analytics
 *
 * **This endpoint allows you to update your current setting for Google Analytics.**
 *
 * For more information about using Google Analytics, please refer to [Google’s URL Builder](https://support.google.com/analytics/answer/1033867?hl=en) and their article on ["Best Practices for Campaign Building"](https://support.google.com/analytics/answer/1037445).
 *
 * We default the settings to Google’s recommendations. For more information, see [Google Analytics Demystified](https://sendgrid.com/docs/Classroom/Track/Collecting_Data/google_analytics_demystified_ga_statistics_vs_sg_statistics.html).
 *
 * You can track a variety of the actions your recipients may take when interacting with your emails including opening your emails, clicking on links in your emails, and subscribing to (or unsubscribing from) your emails.
 *
 * For more information about tracking, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/tracking.html).
 **/
export const PATCH_tracking_settings_google_analytics = ApiCommon.requestMaker<
  PATCH_tracking_settings_google_analytics_Type,
  PATCH_tracking_settings_google_analytics_Response
>({
  id: "PATCH_tracking_settings_google_analytics",
  path: "/tracking_settings/google_analytics",
  verb: "PATCH",
  parameters: [{ name: "body", in: "body" }, { name: "on-behalf-of", in: "header" }]
})

export type GET_tracking_settings_open_Type = {
  "on-behalf-of"?: string
}
export type GET_tracking_settings_open_Response = { enabled: boolean }
/**
 * GET /tracking_settings/open
 *
 * **This endpoint allows you to retrieve your current settings for open tracking.**
 *
 * Open Tracking adds an invisible image at the end of the email which can track email opens. If the email recipient has images enabled on their email client, a request to SendGrid’s server for the invisible image is executed and an open event is logged. These events are logged in the Statistics portal, Email Activity interface, and are reported by the Event Webhook.
 *
 * You can track a variety of the actions your recipients may take when interacting with your emails including opening your emails, clicking on links in your emails, and subscribing to (or unsubscribing from) your emails.
 *
 * For more information about tracking, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/tracking.html).
 **/
export const GET_tracking_settings_open = ApiCommon.requestMaker<
  GET_tracking_settings_open_Type,
  GET_tracking_settings_open_Response
>({
  id: "GET_tracking_settings_open",
  path: "/tracking_settings/open",
  verb: "GET",
  parameters: [{ name: "on-behalf-of", in: "header" }]
})

export type PATCH_tracking_settings_open_Type = {
  body?: { enabled?: boolean }
  "on-behalf-of"?: string
}
export type PATCH_tracking_settings_open_Response = { enabled: boolean }
/**
 * PATCH /tracking_settings/open
 *
 * **This endpoint allows you to update your current settings for open tracking.**
 *
 * Open Tracking adds an invisible image at the end of the email which can track email opens. If the email recipient has images enabled on their email client, a request to SendGrid’s server for the invisible image is executed and an open event is logged. These events are logged in the Statistics portal, Email Activity interface, and are reported by the Event Webhook.
 *
 * You can track a variety of the actions your recipients may take when interacting with your emails including opening your emails, clicking on links in your emails, and subscribing to (or unsubscribing from) your emails.
 *
 * For more information about tracking, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/tracking.html).
 **/
export const PATCH_tracking_settings_open = ApiCommon.requestMaker<
  PATCH_tracking_settings_open_Type,
  PATCH_tracking_settings_open_Response
>({
  id: "PATCH_tracking_settings_open",
  path: "/tracking_settings/open",
  verb: "PATCH",
  parameters: [{ name: "body", in: "body" }, { name: "on-behalf-of", in: "header" }]
})

export type GET_tracking_settings_subscription_Type = {
  "on-behalf-of"?: string
}
export type GET_tracking_settings_subscription_Response = Types.subscription_tracking_settings
/**
 * GET /tracking_settings/subscription
 *
 * **This endpoint allows you to retrieve your current settings for subscription tracking.**
 *
 * Subscription tracking adds links to the bottom of your emails that allows your recipients to subscribe to, or unsubscribe from, your emails.
 *
 * You can track a variety of the actions your recipients may take when interacting with your emails including opening your emails, clicking on links in your emails, and subscribing to (or unsubscribing from) your emails.
 *
 * For more information about tracking, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/tracking.html).
 **/
export const GET_tracking_settings_subscription = ApiCommon.requestMaker<
  GET_tracking_settings_subscription_Type,
  GET_tracking_settings_subscription_Response
>({
  id: "GET_tracking_settings_subscription",
  path: "/tracking_settings/subscription",
  verb: "GET",
  parameters: [{ name: "on-behalf-of", in: "header" }]
})

export type PATCH_tracking_settings_subscription_Type = {
  body?: Types.subscription_tracking_settings
  "on-behalf-of"?: string
}
export type PATCH_tracking_settings_subscription_Response = Types.subscription_tracking_settings
/**
 * PATCH /tracking_settings/subscription
 *
 * **This endpoint allows you to update your current settings for subscription tracking.**
 *
 * Subscription tracking adds links to the bottom of your emails that allows your recipients to subscribe to, or unsubscribe from, your emails.
 *
 * You can track a variety of the actions your recipients may take when interacting with your emails including opening your emails, clicking on links in your emails, and subscribing to (or unsubscribing from) your emails.
 *
 * For more information about tracking, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/tracking.html).
 **/
export const PATCH_tracking_settings_subscription = ApiCommon.requestMaker<
  PATCH_tracking_settings_subscription_Type,
  PATCH_tracking_settings_subscription_Response
>({
  id: "PATCH_tracking_settings_subscription",
  path: "/tracking_settings/subscription",
  verb: "PATCH",
  parameters: [{ name: "body", in: "body" }, { name: "on-behalf-of", in: "header" }]
})
