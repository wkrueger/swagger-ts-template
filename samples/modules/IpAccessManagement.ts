import * as ApiCommon from "../api-common"
import * as Types from "../api-types"

export type GET_access_settings_activity_Type = {
  limit?: number
  "on-behalf-of"?: string
}
export type GET_access_settings_activity_Response = {
  result?: {
    allowed?: boolean
    auth_method?: string
    first_at?: number
    ip?: string
    last_at?: number
    location?: string
  }[]
}
/**
 * GET /access_settings/activity
 *
 * **This endpoint allows you to retrieve a list of all of the IP addresses that recently attempted to access your account either through the User Interface or the API.**
 *
 * IP Access Management allows you to control which IP addresses can be used to access your account, either through the User Interface or the API. There is no limit to the number of IP addresses that you can add to your whitelist. It is possible to remove your own IP address from the whitelist, thus preventing yourself from accessing your account.
 *
 * For more information, please see our [User Guide](http://sendgrid.com/docs/User_Guide/Settings/ip_access_management.html).
 **/
export const GET_access_settings_activity = ApiCommon.requestMaker<
  GET_access_settings_activity_Type,
  GET_access_settings_activity_Response
>({
  id: "GET_access_settings_activity",
  path: "/access_settings/activity",
  verb: "GET",
  parameters: [{ name: "limit", in: "query" }, { name: "on-behalf-of", in: "header" }]
})

export type GET_access_settings_whitelist_Type = {
  "on-behalf-of"?: string
}
export type GET_access_settings_whitelist_Response = {
  result: {
    id: number
    ip: string
    created_at: number
    updated_at: number
  }[]
}
/**
 * GET /access_settings/whitelist
 *
 * **This endpoint allows you to retrieve a list of IP addresses that are currently whitelisted.**
 *
 * IP Access Management allows you to control which IP addresses can be used to access your account, either through the User Interface or the API. There is no limit to the number of IP addresses that you can add to your whitelist. It is possible to remove your own IP address from the whitelist, thus preventing yourself from accessing your account.
 *
 * For more information, please see our [User Guide](http://sendgrid.com/docs/User_Guide/Settings/ip_access_management.html).
 **/
export const GET_access_settings_whitelist = ApiCommon.requestMaker<
  GET_access_settings_whitelist_Type,
  GET_access_settings_whitelist_Response
>({
  id: "GET_access_settings_whitelist",
  path: "/access_settings/whitelist",
  verb: "GET",
  parameters: [{ name: "on-behalf-of", in: "header" }]
})

export type POST_access_settings_whitelist_Type = {
  body?: { ips: { ip: string }[] }
  "on-behalf-of"?: string
}
export type POST_access_settings_whitelist_Response = {
  result: {
    id: number
    ip: string
    created_at: number
    updated_at: number
  }[]
}
/**
 * POST /access_settings/whitelist
 *
 * **This endpoint allows you to add one or more IP addresses to your IP whitelist.**
 *
 * When adding an IP to your whitelist, include the IP address in an array. You can whitelist one IP at a time, or you can whitelist multiple IPs at once.
 *
 * IP Access Management allows you to control which IP addresses can be used to access your account, either through the User Interface or the API. There is no limit to the number of IP addresses that you can add to your whitelist. It is possible to remove your own IP address from the whitelist, thus preventing yourself from accessing your account.
 *
 * For more information, please see our [User Guide](http://sendgrid.com/docs/User_Guide/Settings/ip_access_management.html).
 **/
export const POST_access_settings_whitelist = ApiCommon.requestMaker<
  POST_access_settings_whitelist_Type,
  POST_access_settings_whitelist_Response
>({
  id: "POST_access_settings_whitelist",
  path: "/access_settings/whitelist",
  verb: "POST",
  parameters: [{ name: "body", in: "body" }, { name: "on-behalf-of", in: "header" }]
})

export type DELETE_access_settings_whitelist_Type = {
  body?: { ids?: number[] }
  "on-behalf-of"?: string
}
export type DELETE_access_settings_whitelist_Response = void
/**
 * DELETE /access_settings/whitelist
 *
 * **This endpoint allows you to remove one or more IPs from your IP whitelist.**
 *
 * You can remove one IP at a time, or you can remove multiple IP addresses.
 *
 * IP Access Management allows you to control which IP addresses can be used to access your account, either through the User Interface or the API. There is no limit to the number of IP addresses that you can add to your whitelist. It is possible to remove your own IP address from the whitelist, thus preventing yourself from accessing your account.
 *
 * For more information, please see our [User Guide](http://sendgrid.com/docs/User_Guide/Settings/ip_access_management.html).
 **/
export const DELETE_access_settings_whitelist = ApiCommon.requestMaker<
  DELETE_access_settings_whitelist_Type,
  DELETE_access_settings_whitelist_Response
>({
  id: "DELETE_access_settings_whitelist",
  path: "/access_settings/whitelist",
  verb: "DELETE",
  parameters: [{ name: "body", in: "body" }, { name: "on-behalf-of", in: "header" }]
})

export type GET_access_settings_whitelist_rule_id_Type = {
  "on-behalf-of"?: string
  rule_id: string
}
export type GET_access_settings_whitelist_rule_id_Response = {
  id: number
  ip: string
  created_at: number
  updated_at: number
}
/**
 * GET /access_settings/whitelist/{rule_id}
 *
 * **This endpoint allows you to retreive a specific IP address that has been whitelisted.**
 *
 * You must include the ID for the specific IP address you want to retrieve in your call.
 *
 * IP Access Management allows you to control which IP addresses can be used to access your account, either through the User Interface or the API. There is no limit to the number of IP addresses that you can add to your whitelist. It is possible to remove your own IP address from the whitelist, thus preventing yourself from accessing your account.
 *
 * For more information, please see our [User Guide](http://sendgrid.com/docs/User_Guide/Settings/ip_access_management.html).
 **/
export const GET_access_settings_whitelist_rule_id = ApiCommon.requestMaker<
  GET_access_settings_whitelist_rule_id_Type,
  GET_access_settings_whitelist_rule_id_Response
>({
  id: "GET_access_settings_whitelist_rule_id",
  path: "/access_settings/whitelist/{rule_id}",
  verb: "GET",
  parameters: [
    { name: "on-behalf-of", in: "header" },
    { name: "rule_id", required: true, in: "path" }
  ]
})

export type DELETE_access_settings_whitelist_rule_id_Type = {
  body?: null
  "on-behalf-of"?: string
  rule_id: string
}
export type DELETE_access_settings_whitelist_rule_id_Response = void
/**
 * DELETE /access_settings/whitelist/{rule_id}
 *
 * **This endpoint allows you to remove a specific IP address from your IP whitelist.**
 *
 * When removing a specific IP address from your whitelist, you must include the ID in your call.
 *
 * IP Access Management allows you to control which IP addresses can be used to access your account, either through the User Interface or the API. There is no limit to the number of IP addresses that you can add to your whitelist. It is possible to remove your own IP address from the whitelist, thus preventing yourself from accessing your account.
 *
 * For more information, please see our [User Guide](http://sendgrid.com/docs/User_Guide/Settings/ip_access_management.html).
 **/
export const DELETE_access_settings_whitelist_rule_id = ApiCommon.requestMaker<
  DELETE_access_settings_whitelist_rule_id_Type,
  DELETE_access_settings_whitelist_rule_id_Response
>({
  id: "DELETE_access_settings_whitelist_rule_id",
  path: "/access_settings/whitelist/{rule_id}",
  verb: "DELETE",
  parameters: [
    { name: "body", in: "body" },
    { name: "on-behalf-of", in: "header" },
    { name: "rule_id", required: true, in: "path" }
  ]
})
