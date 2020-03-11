import * as ApiCommon from "../api-common"
// @ts-ignore
import * as Types from "../api-types"

export type GET_partner_settings_Type = {
  limit?: number
  offset?: number
}
export type GET_partner_settings_Response = {
  result?: {
    title: string
    enabled: boolean
    name: string
    description: string
  }[]
}
/**
 * GET /partner_settings
 *
 * **This endpoint allows you to retrieve a list of all partner settings that you can enable.**
 *
 * Our partner settings allow you to integrate your SendGrid account with our partners to increase your SendGrid experience and functionality. For more information about our partners, and how you can begin integrating with them, please visit our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/partners.html).
 **/
export const GET_partner_settings = ApiCommon.requestMaker<
  GET_partner_settings_Type,
  GET_partner_settings_Response
>({
  id: "GET_partner_settings",
  path: "/partner_settings",
  verb: "GET",
  parameters: [
    { name: "limit", in: "query" },
    { name: "offset", in: "query" }
  ]
})

export type GET_partner_settings_new_relic_Type = {}
export type GET_partner_settings_new_relic_Response = Types.partner_settings_new_relic
/**
 * GET /partner_settings/new_relic
 *
 * **This endpoint allows you to retrieve your current New Relic partner settings.**
 *
 * Our partner settings allow you to integrate your SendGrid account with our partners to increase your SendGrid experience and functionality. For more information about our partners, and how you can begin integrating with them, please visit our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/partners.html).
 *
 * By integrating with New Relic, you can send your SendGrid email statistics to your New Relic Dashboard. If you enable this setting, your stats will be sent to New Relic every 5 minutes. You will need your New Relic License Key to enable this setting. For more information, please see our [Classroom](https://sendgrid.com/docs/Classroom/Track/Collecting_Data/new_relic.html).
 **/
export const GET_partner_settings_new_relic = ApiCommon.requestMaker<
  GET_partner_settings_new_relic_Type,
  GET_partner_settings_new_relic_Response
>({
  id: "GET_partner_settings_new_relic",
  path: "/partner_settings/new_relic",
  verb: "GET",
  parameters: []
})

export type PATCH_partner_settings_new_relic_Type = {
  body?: {
    license_key?: string
    enabled?: boolean
    enable_subuser_statistics?: boolean
  }
}
export type PATCH_partner_settings_new_relic_Response = Types.partner_settings_new_relic
/**
 * PATCH /partner_settings/new_relic
 *
 * **This endpoint allows you to update or change your New Relic partner settings.**
 *
 * Our partner settings allow you to integrate your SendGrid account with our partners to increase your SendGrid experience and functionality. For more information about our partners, and how you can begin integrating with them, please visit our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/partners.html).
 *
 * By integrating with New Relic, you can send your SendGrid email statistics to your New Relic Dashboard. If you enable this setting, your stats will be sent to New Relic every 5 minutes. You will need your New Relic License Key to enable this setting. For more information, please see our [Classroom](https://sendgrid.com/docs/Classroom/Track/Collecting_Data/new_relic.html).
 **/
export const PATCH_partner_settings_new_relic = ApiCommon.requestMaker<
  PATCH_partner_settings_new_relic_Type,
  PATCH_partner_settings_new_relic_Response
>({
  id: "PATCH_partner_settings_new_relic",
  path: "/partner_settings/new_relic",
  verb: "PATCH",
  parameters: [{ name: "body", in: "body" }]
})
