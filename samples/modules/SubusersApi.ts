import * as ApiCommon from "../api-common"
import * as Types from "../api-types"

export type GET_subusers_Type = {
  limit?: number
  offset?: number
  username?: string
}
export type GET_subusers_Response = Types.subuser[]
/**
 * GET /subusers
 *
 * This endpoint allows you to retrieve a list of all of your subusers. You can choose to retrieve specific subusers as well as limit the results that come back from the API.
 *
 * For more information about Subusers:
 *
 * * [User Guide > Subusers](https://sendgrid.com/docs/User_Guide/Settings/Subusers/index.html)
 * * [Classroom > How do I add more subusers to my account?](https://sendgrid.com/docs/Classroom/Basics/Account/how_do_i_add_more_subusers_to_my_account.html)
 **/
export const GET_subusers = ApiCommon.requestMaker<GET_subusers_Type, GET_subusers_Response>({
  id: "GET_subusers",
  path: "/subusers",
  verb: "GET",
  parameters: [
    { name: "limit", in: "query" },
    { name: "offset", in: "query" },
    { name: "username", in: "query" }
  ]
})

export type POST_subusers_Type = {
  body?: {
    username: string
    email: string
    password: string
    ips: string[]
  }
}
export type POST_subusers_Response = Types.subuser_post
/**
 * POST /subusers
 *
 * This endpoint allows you to retrieve a list of all of your subusers. You can choose to retrieve specific subusers as well as limit the results that come back from the API.
 *
 * For more information about Subusers:
 *
 * * [User Guide > Subusers](https://sendgrid.com/docs/User_Guide/Settings/Subusers/index.html)
 * * [Classroom > How do I add more subusers to my account?](https://sendgrid.com/docs/Classroom/Basics/Account/how_do_i_add_more_subusers_to_my_account.html)
 **/
export const POST_subusers = ApiCommon.requestMaker<POST_subusers_Type, POST_subusers_Response>({
  id: "POST_subusers",
  path: "/subusers",
  verb: "POST",
  parameters: [{ name: "body", in: "body" }]
})

export type PATCH_subusers_subuser_name_Type = {
  body?: { disabled?: boolean }
  subuser_name: string
}
export type PATCH_subusers_subuser_name_Response = void
/**
 * PATCH /subusers/{subuser_name}
 *
 * This endpoint allows you to enable or disable a subuser.
 *
 * For more information about Subusers:
 *
 * * [User Guide > Subusers](https://sendgrid.com/docs/User_Guide/Settings/Subusers/index.html)
 * * [Classroom > How do I add more subusers to my account?](https://sendgrid.com/docs/Classroom/Basics/Account/how_do_i_add_more_subusers_to_my_account.html)
 **/
export const PATCH_subusers_subuser_name = ApiCommon.requestMaker<
  PATCH_subusers_subuser_name_Type,
  PATCH_subusers_subuser_name_Response
>({
  id: "PATCH_subusers_subuser_name",
  path: "/subusers/{subuser_name}",
  verb: "PATCH",
  parameters: [{ name: "body", in: "body" }, { name: "subuser_name", required: true, in: "path" }]
})

export type DELETE_subusers_subuser_name_Type = {
  body?: null
  subuser_name: string
}
export type DELETE_subusers_subuser_name_Response = void
/**
 * DELETE /subusers/{subuser_name}
 *
 * This endpoint allows you to delete a subuser. This is a permanent action, once deleted a subuser cannot be retrieved.
 *
 * For more information about Subusers:
 *
 * * [User Guide > Subusers](https://sendgrid.com/docs/User_Guide/Settings/Subusers/index.html)
 * * [Classroom > How do I add more subusers to my account?](https://sendgrid.com/docs/Classroom/Basics/Account/how_do_i_add_more_subusers_to_my_account.html)
 **/
export const DELETE_subusers_subuser_name = ApiCommon.requestMaker<
  DELETE_subusers_subuser_name_Type,
  DELETE_subusers_subuser_name_Response
>({
  id: "DELETE_subusers_subuser_name",
  path: "/subusers/{subuser_name}",
  verb: "DELETE",
  parameters: [{ name: "body", in: "body" }, { name: "subuser_name", required: true, in: "path" }]
})

export type GET_subusers_subuser_name_monitor_Type = {
  subuser_name: string
}
export type GET_subusers_subuser_name_monitor_Response = Types.monitor
/**
 * GET /subusers/{subuser_name}/monitor
 *
 * Subuser monitor settings allow you to receive a sample of an outgoing message by a specific customer at a specific frequency of emails.
 **/
export const GET_subusers_subuser_name_monitor = ApiCommon.requestMaker<
  GET_subusers_subuser_name_monitor_Type,
  GET_subusers_subuser_name_monitor_Response
>({
  id: "GET_subusers_subuser_name_monitor",
  path: "/subusers/{subuser_name}/monitor",
  verb: "GET",
  parameters: [{ name: "subuser_name", required: true, in: "path" }]
})

export type POST_subusers_subuser_name_monitor_Type = {
  body?: Types.monitor
  subuser_name: string
}
export type POST_subusers_subuser_name_monitor_Response = Types.monitor
/**
 * POST /subusers/{subuser_name}/monitor
 *
 * Subuser monitor settings allow you to receive a sample of an outgoing message by a specific customer at a specific frequency of emails.
 **/
export const POST_subusers_subuser_name_monitor = ApiCommon.requestMaker<
  POST_subusers_subuser_name_monitor_Type,
  POST_subusers_subuser_name_monitor_Response
>({
  id: "POST_subusers_subuser_name_monitor",
  path: "/subusers/{subuser_name}/monitor",
  verb: "POST",
  parameters: [{ name: "body", in: "body" }, { name: "subuser_name", required: true, in: "path" }]
})

export type PUT_subusers_subuser_name_monitor_Type = {
  body?: Types.monitor
  subuser_name: string
}
export type PUT_subusers_subuser_name_monitor_Response = Types.monitor
/**
 * PUT /subusers/{subuser_name}/monitor
 *
 * Subuser monitor settings allow you to receive a sample of an outgoing message by a specific customer at a specific frequency of emails.
 **/
export const PUT_subusers_subuser_name_monitor = ApiCommon.requestMaker<
  PUT_subusers_subuser_name_monitor_Type,
  PUT_subusers_subuser_name_monitor_Response
>({
  id: "PUT_subusers_subuser_name_monitor",
  path: "/subusers/{subuser_name}/monitor",
  verb: "PUT",
  parameters: [{ name: "body", in: "body" }, { name: "subuser_name", required: true, in: "path" }]
})

export type DELETE_subusers_subuser_name_monitor_Type = {
  body?: null
  subuser_name: string
}
export type DELETE_subusers_subuser_name_monitor_Response = void
/**
 * DELETE /subusers/{subuser_name}/monitor
 *
 * Subuser monitor settings allow you to receive a sample of an outgoing message by a specific customer at a specific frequency of emails.
 **/
export const DELETE_subusers_subuser_name_monitor = ApiCommon.requestMaker<
  DELETE_subusers_subuser_name_monitor_Type,
  DELETE_subusers_subuser_name_monitor_Response
>({
  id: "DELETE_subusers_subuser_name_monitor",
  path: "/subusers/{subuser_name}/monitor",
  verb: "DELETE",
  parameters: [
    { name: "Authorization", required: true, in: "header" },
    { name: "body", in: "body" },
    { name: "subuser_name", required: true, in: "path" }
  ]
})

export type GET_subusers_reputations_Type = {
  usernames?: string
}
export type GET_subusers_reputations_Response = {
  reputation: number
  username: string
}[]
/**
 * GET /subusers/reputations
 *
 * Subuser sender reputations give a good idea how well a sender is doing with regards to how recipients and recipient servers react to the mail that is being received. When a bounce, spam report, or other negative action happens on a sent email, it will effect your sender rating.
 *
 * This endpoint allows you to request the reputations for your subusers.
 **/
export const GET_subusers_reputations = ApiCommon.requestMaker<
  GET_subusers_reputations_Type,
  GET_subusers_reputations_Response
>({
  id: "GET_subusers_reputations",
  path: "/subusers/reputations",
  verb: "GET",
  parameters: [{ name: "usernames", in: "query" }]
})

export type PUT_subusers_subuser_name_ips_Type = {
  body?: string[]
  subuser_name: string
}
export type PUT_subusers_subuser_name_ips_Response = { ips?: string[] }
/**
 * PUT /subusers/{subuser_name}/ips
 *
 * Each subuser should be assigned to an IP address, from which all of this subuser's mail will be sent. Often, this is the same IP as the parent account, but each subuser can have their own, or multiple, IP addresses as well.
 *
 * More information:
 *
 * * [How to request more IPs](https://sendgrid.com/docs/Classroom/Basics/Account/adding_an_additional_dedicated_ip_to_your_account.html)
 * * [IPs can be whitelabeled](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/ips.html)
 **/
export const PUT_subusers_subuser_name_ips = ApiCommon.requestMaker<
  PUT_subusers_subuser_name_ips_Type,
  PUT_subusers_subuser_name_ips_Response
>({
  id: "PUT_subusers_subuser_name_ips",
  path: "/subusers/{subuser_name}/ips",
  verb: "PUT",
  parameters: [
    { name: "Authorization", required: true, in: "header" },
    { name: "body", in: "body" },
    { name: "subuser_name", required: true, in: "path" }
  ]
})

export type GET_subusers_subuser_name_stats_monthly_Type = {
  date: string
  limit?: number
  offset?: number
  sort_by_direction?: string
  sort_by_metric?: string
  subuser_name: string
}
export type GET_subusers_subuser_name_stats_monthly_Response = Types.subuser_stats
/**
 * GET /subusers/{subuser_name}/stats/monthly
 *
 * **This endpoint allows you to retrive the monthly email statistics for a specific subuser.**
 *
 * While you can always view the statistics for all email activity on your account, subuser statistics enable you to view specific segments of your stats for your subusers. Emails sent, bounces, and spam reports are always tracked for subusers. Unsubscribes, clicks, and opens are tracked if you have enabled the required settings.
 *
 * When using the `sort_by_metric` to sort your stats by a specific metric, you can not sort by the following metrics:
 * `bounce_drops`, `deferred`, `invalid_emails`, `processed`, `spam_report_drops`, `spam_reports`, or `unsubscribe_drops`.
 *
 * For more information, see our [User Guide](https://sendgrid.com/docs/User_Guide/Statistics/subuser.html).
 **/
export const GET_subusers_subuser_name_stats_monthly = ApiCommon.requestMaker<
  GET_subusers_subuser_name_stats_monthly_Type,
  GET_subusers_subuser_name_stats_monthly_Response
>({
  id: "GET_subusers_subuser_name_stats_monthly",
  path: "/subusers/{subuser_name}/stats/monthly",
  verb: "GET",
  parameters: [
    { name: "date", required: true, in: "query" },
    { name: "limit", required: false, in: "query" },
    { name: "offset", required: false, in: "query" },
    { name: "sort_by_direction", required: false, in: "query" },
    { name: "sort_by_metric", required: false, in: "query" },
    { name: "subuser_name", required: true, in: "path" }
  ]
})

export type GET_subusers_stats_monthly_Type = {
  date: string
  limit?: number
  offset?: number
  sort_by_direction?: string
  sort_by_metric?: string
  subuser?: string
}
export type GET_subusers_stats_monthly_Response = Types.subuser_stats
/**
 * GET /subusers/stats/monthly
 *
 * **This endpoint allows you to retrieve the monthly email statistics for all subusers over the given date range.**
 *
 * While you can always view the statistics for all email activity on your account, subuser statistics enable you to view specific segments of your stats for your subusers. Emails sent, bounces, and spam reports are always tracked for subusers. Unsubscribes, clicks, and opens are tracked if you have enabled the required settings.
 *
 * When using the `sort_by_metric` to sort your stats by a specific metric, you can not sort by the following metrics:
 * `bounce_drops`, `deferred`, `invalid_emails`, `processed`, `spam_report_drops`, `spam_reports`, or `unsubscribe_drops`.
 *
 * For more information, see our [User Guide](https://sendgrid.com/docs/User_Guide/Statistics/subuser.html).
 **/
export const GET_subusers_stats_monthly = ApiCommon.requestMaker<
  GET_subusers_stats_monthly_Type,
  GET_subusers_stats_monthly_Response
>({
  id: "GET_subusers_stats_monthly",
  path: "/subusers/stats/monthly",
  verb: "GET",
  parameters: [
    { name: "date", required: true, in: "query" },
    { name: "limit", required: false, in: "query" },
    { name: "offset", required: false, in: "query" },
    { name: "sort_by_direction", required: false, in: "query" },
    { name: "sort_by_metric", required: false, in: "query" },
    { name: "subuser", required: false, in: "query" }
  ]
})

export type GET_subusers_stats_sums_Type = {
  aggregated_by?: string
  end_date?: string
  limit?: number
  offset?: number
  sort_by_direction?: string
  sort_by_metric?: string
  start_date: string
}
export type GET_subusers_stats_sums_Response = Types.category_stats
/**
 * GET /subusers/stats/sums
 *
 * **This endpoint allows you to retrieve the total sums of each email statistic metric for all subusers over the given date range.**
 *
 *
 * While you can always view the statistics for all email activity on your account, subuser statistics enable you to view specific segments of your stats. Emails sent, bounces, and spam reports are always tracked for subusers. Unsubscribes, clicks, and opens are tracked if you have enabled the required settings.
 *
 * For more information, see our [User Guide](https://sendgrid.com/docs/User_Guide/Statistics/subuser.html).
 **/
export const GET_subusers_stats_sums = ApiCommon.requestMaker<
  GET_subusers_stats_sums_Type,
  GET_subusers_stats_sums_Response
>({
  id: "GET_subusers_stats_sums",
  path: "/subusers/stats/sums",
  verb: "GET",
  parameters: [
    { name: "aggregated_by", required: false, in: "query" },
    { name: "end_date", required: false, in: "query" },
    { name: "limit", required: false, in: "query" },
    { name: "offset", required: false, in: "query" },
    { name: "sort_by_direction", required: false, in: "query" },
    { name: "sort_by_metric", required: false, in: "query" },
    { name: "start_date", required: true, in: "query" }
  ]
})

export type GET_subusers_stats_Type = {
  aggregated_by?: string
  end_date?: string
  limit?: number
  offset?: number
  start_date: string
  subusers: string
}
export type GET_subusers_stats_Response = Types.stats
/**
 * GET /subusers/stats
 *
 * **This endpoint allows you to retrieve the email statistics for the given subusers.**
 *
 * You may retrieve statistics for up to 10 different subusers by including an additional _subusers_ parameter for each additional subuser.
 *
 * While you can always view the statistics for all email activity on your account, subuser statistics enable you to view specific segments of your stats. Emails sent, bounces, and spam reports are always tracked for subusers. Unsubscribes, clicks, and opens are tracked if you have enabled the required settings.
 *
 * For more information, see our [User Guide](https://sendgrid.com/docs/User_Guide/Statistics/subuser.html).
 **/
export const GET_subusers_stats = ApiCommon.requestMaker<
  GET_subusers_stats_Type,
  GET_subusers_stats_Response
>({
  id: "GET_subusers_stats",
  path: "/subusers/stats",
  verb: "GET",
  parameters: [
    { name: "aggregated_by", required: false, in: "query" },
    { name: "end_date", required: false, in: "query" },
    { name: "limit", required: false, in: "query" },
    { name: "offset", required: false, in: "query" },
    { name: "start_date", required: true, in: "query" },
    { name: "subusers", required: true, in: "query" }
  ]
})
