import * as ApiCommon from "../api-common"
import * as Types from "../api-types"

export type GET_stats_Type = {
  aggregated_by?: string
  end_date?: string
  limit?: number
  offset?: number
  "on-behalf-of"?: string
  start_date: string
}
export type GET_stats_Response = {
  date: string
  stats: {
    metrics?: {
      blocks?: number
      bounce_drops?: number
      bounces?: number
      clicks?: number
      deferred?: number
      delivered?: number
      invalid_emails?: number
      opens?: number
      processed?: number
      requests?: number
      spam_report_drops?: number
      spam_reports?: number
      unique_clicks?: number
      unique_opens?: number
      unsubscribe_drops?: number
      unsubscribes?: number
    }
  }[]
}[]
/**
 * GET /stats
 *
 * **This endpoint allows you to retrieve all of your global email statistics between a given date range.**
 *
 * Parent accounts will see aggregated stats for their account and all subuser accounts. Subuser accounts will only see their own stats.
 **/
export const GET_stats = ApiCommon.requestMaker<GET_stats_Type, GET_stats_Response>({
  id: "GET_stats",
  path: "/stats",
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

export type GET_geo_stats_Type = {
  aggregated_by?: string
  country?: string
  end_date?: string
  limit?: number
  offset?: number
  "on-behalf-of"?: string
  start_date: string
}
export type GET_geo_stats_Response = Types.advanced_stats_country[]
/**
 * GET /geo/stats
 *
 * **This endpoint allows you to retrieve your email statistics segmented by country and state/province.**
 *
 * **We only store up to 7 days of email activity in our database.** By default, 500 items will be returned per request via the Advanced Stats API endpoints.
 *
 * Advanced Stats provide a more in-depth view of your email statistics and the actions taken by your recipients. You can segment these statistics by geographic location, device type, client type, browser, and mailbox provider. For more information about statistics, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Statistics/index.html).
 **/
export const GET_geo_stats = ApiCommon.requestMaker<GET_geo_stats_Type, GET_geo_stats_Response>({
  id: "GET_geo_stats",
  path: "/geo/stats",
  verb: "GET",
  parameters: [
    { name: "aggregated_by", required: false, in: "query" },
    { name: "Authorization", required: true, in: "header" },
    { name: "country", required: false, in: "query" },
    { name: "end_date", required: false, in: "query" },
    { name: "limit", required: false, in: "query" },
    { name: "offset", required: false, in: "query" },
    { name: "on-behalf-of", in: "header" },
    { name: "start_date", required: true, in: "query" }
  ]
})

export type GET_devices_stats_Type = {
  aggregated_by?: string
  end_date?: string
  limit?: number
  offset?: number
  "on-behalf-of"?: string
  start_date: string
}
export type GET_devices_stats_Response = Types.advanced_stats_opens[]
/**
 * GET /devices/stats
 *
 * **This endpoint allows you to retrieve your email statistics segmented by the device type.**
 *
 * **We only store up to 7 days of email activity in our database.** By default, 500 items will be returned per request via the Advanced Stats API endpoints.
 *
 * ## Available Device Types
 * | **Device** | **Description** | **Example** |
 * |---|---|---|
 * | Desktop | Email software on desktop computer. | I.E., Outlook, Sparrow, or Apple Mail. |
 * | Webmail |	A web-based email client. | I.E., Yahoo, Google, AOL, or Outlook.com. |
 * | Phone | A smart phone. | iPhone, Android, Blackberry, etc.
 * | Tablet | A tablet computer. | iPad, android based tablet, etc. |
 * | Other | An unrecognized device. |
 *
 * Advanced Stats provide a more in-depth view of your email statistics and the actions taken by your recipients. You can segment these statistics by geographic location, device type, client type, browser, and mailbox provider. For more information about statistics, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Statistics/index.html).
 **/
export const GET_devices_stats = ApiCommon.requestMaker<
  GET_devices_stats_Type,
  GET_devices_stats_Response
>({
  id: "GET_devices_stats",
  path: "/devices/stats",
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

export type GET_clients_stats_Type = {
  aggregated_by?: string
  end_date?: string
  "on-behalf-of"?: string
  start_date: string
}
export type GET_clients_stats_Response = Types.advanced_stats_opens[]
/**
 * GET /clients/stats
 *
 * **This endpoint allows you to retrieve your email statistics segmented by client type.**
 *
 * **We only store up to 7 days of email activity in our database.** By default, 500 items will be returned per request via the Advanced Stats API endpoints.
 *
 * Advanced Stats provide a more in-depth view of your email statistics and the actions taken by your recipients. You can segment these statistics by geographic location, device type, client type, browser, and mailbox provider. For more information about statistics, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Statistics/index.html).
 **/
export const GET_clients_stats = ApiCommon.requestMaker<
  GET_clients_stats_Type,
  GET_clients_stats_Response
>({
  id: "GET_clients_stats",
  path: "/clients/stats",
  verb: "GET",
  parameters: [
    { name: "aggregated_by", required: false, in: "query" },
    { name: "end_date", required: false, in: "query" },
    { name: "on-behalf-of", in: "header" },
    { name: "start_date", required: true, in: "query" }
  ]
})

export type GET_clients_client_type_stats_Type = {
  aggregated_by?: string
  client_type: string
  end_date?: string
  "on-behalf-of"?: string
  start_date: string
}
export type GET_clients_client_type_stats_Response = Types.advanced_stats_opens[]
/**
 * GET /clients/{client_type}/stats
 *
 * **This endpoint allows you to retrieve your email statistics segmented by a specific client type.**
 *
 * **We only store up to 7 days of email activity in our database.** By default, 500 items will be returned per request via the Advanced Stats API endpoints.
 *
 * ## Available Client Types
 * - phone
 * - tablet
 * - webmail
 * - desktop
 *
 * Advanced Stats provide a more in-depth view of your email statistics and the actions taken by your recipients. You can segment these statistics by geographic location, device type, client type, browser, and mailbox provider. For more information about statistics, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Statistics/index.html).
 **/
export const GET_clients_client_type_stats = ApiCommon.requestMaker<
  GET_clients_client_type_stats_Type,
  GET_clients_client_type_stats_Response
>({
  id: "GET_clients_client_type_stats",
  path: "/clients/{client_type}/stats",
  verb: "GET",
  parameters: [
    { name: "aggregated_by", required: false, in: "query" },
    { name: "client_type", required: true, in: "path" },
    { name: "end_date", required: false, in: "query" },
    { name: "on-behalf-of", in: "header" },
    { name: "start_date", required: true, in: "query" }
  ]
})

export type GET_mailbox_providers_stats_Type = {
  aggregated_by?: string
  end_date?: string
  limit?: number
  mailbox_providers?: string
  offset?: number
  "on-behalf-of"?: string
  start_date: string
}
export type GET_mailbox_providers_stats_Response = Types.advanced_stats_mailbox_provider[]
/**
 * GET /mailbox_providers/stats
 *
 * **This endpoint allows you to retrieve your email statistics segmented by recipient mailbox provider.**
 *
 * **We only store up to 7 days of email activity in our database.** By default, 500 items will be returned per request via the Advanced Stats API endpoints.
 *
 * Advanced Stats provide a more in-depth view of your email statistics and the actions taken by your recipients. You can segment these statistics by geographic location, device type, client type, browser, and mailbox provider. For more information about statistics, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Statistics/index.html).
 **/
export const GET_mailbox_providers_stats = ApiCommon.requestMaker<
  GET_mailbox_providers_stats_Type,
  GET_mailbox_providers_stats_Response
>({
  id: "GET_mailbox_providers_stats",
  path: "/mailbox_providers/stats",
  verb: "GET",
  parameters: [
    { name: "aggregated_by", required: false, in: "query" },
    { name: "end_date", required: false, in: "query" },
    { name: "limit", required: false, in: "query" },
    { name: "mailbox_providers", required: false, in: "query" },
    { name: "offset", required: false, in: "query" },
    { name: "on-behalf-of", in: "header" },
    { name: "start_date", required: true, in: "query" }
  ]
})

export type GET_browsers_stats_Type = {
  aggregated_by?: string
  browsers?: string
  end_date?: string
  limit?: string
  offset?: string
  "on-behalf-of"?: string
  start_date: string
}
export type GET_browsers_stats_Response = Types.advanced_stats_clicks[]
/**
 * GET /browsers/stats
 *
 * **This endpoint allows you to retrieve your email statistics segmented by browser type.**
 *
 * **We only store up to 7 days of email activity in our database.** By default, 500 items will be returned per request via the Advanced Stats API endpoints.
 *
 * Advanced Stats provide a more in-depth view of your email statistics and the actions taken by your recipients. You can segment these statistics by geographic location, device type, client type, browser, and mailbox provider. For more information about statistics, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Statistics/index.html).
 **/
export const GET_browsers_stats = ApiCommon.requestMaker<
  GET_browsers_stats_Type,
  GET_browsers_stats_Response
>({
  id: "GET_browsers_stats",
  path: "/browsers/stats",
  verb: "GET",
  parameters: [
    { name: "aggregated_by", required: false, in: "query" },
    { name: "browsers", required: false, in: "query" },
    { name: "end_date", required: false, in: "query" },
    { name: "limit", required: false, in: "query" },
    { name: "offset", required: false, in: "query" },
    { name: "on-behalf-of", in: "header" },
    { name: "start_date", required: true, in: "query" }
  ]
})
