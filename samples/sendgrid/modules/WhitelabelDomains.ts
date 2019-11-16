import * as ApiCommon from "../api-common"
// @ts-ignore
import * as Types from "../api-types"

export type GET_whitelabel_domains_Type = {
  domain?: string
  exclude_subusers?: boolean
  limit?: number
  offset?: number
  "on-behalf-of"?: string
  username?: string
}
export type GET_whitelabel_domains_Response = {
  id: number
  user_id: number
  subdomain: string
  domain: string
  username: string
  ips: string[]
  custom_spf: boolean
  default: boolean
  legacy: boolean
  automatic_security: boolean
  valid: boolean
  dns: {
    mail_server?: {
      valid?: boolean
      type?: string
      host?: string
      data?: string
    }
    subdomain_spf?: {
      valid?: boolean
      type?: string
      host?: string
      data?: string
    }
    dkim?: {
      valid?: boolean
      type?: "cname" | "mx" | "txt"
      host?: string
      data?: string
    }
  }
}[]
/**
 * GET /whitelabel/domains
 *
 * **This endpoint allows you to retrieve a list of all domain whitelabels you have created.**
 *
 * A domain whitelabel allows you to remove the “via” or “sent on behalf of” message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.
 *
 * For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)
 **/
export const GET_whitelabel_domains = ApiCommon.requestMaker<
  GET_whitelabel_domains_Type,
  GET_whitelabel_domains_Response
>({
  id: "GET_whitelabel_domains",
  path: "/whitelabel/domains",
  verb: "GET",
  parameters: [
    { name: "domain", in: "query" },
    { name: "exclude_subusers", in: "query" },
    { name: "limit", in: "query" },
    { name: "offset", in: "query" },
    { name: "on-behalf-of", in: "header" },
    { name: "username", in: "query" }
  ]
})

export type POST_whitelabel_domains_Type = {
  body?: {
    domain: string
    subdomain: string
    username?: string
    ips?: string[]
    custom_spf?: boolean
    default?: boolean
    automatic_security?: boolean
  }
  "on-behalf-of"?: string
}
export type POST_whitelabel_domains_Response = Types.whitelabel__domain
/**
 * POST /whitelabel/domains
 *
 * **This endpoint allows you to create a whitelabel for one of your domains.**
 *
 * If you are creating a domain whitelabel that you would like a subuser to use, you have two options:
 * 1. Use the "username" parameter. This allows you to create a whitelabel on behalf of your subuser. This means the subuser is able to see and modify the created whitelabel.
 * 2. Use the Association workflow (see Associate Domain section). This allows you to assign a whitelabel created by the parent to a subuser. This means the subuser will default to the assigned whitelabel, but will not be able to see or modify that whitelabel. However, if the subuser creates their own whitelabel it will overwrite the assigned whitelabel.
 *
 * A domain whitelabel allows you to remove the “via” or “sent on behalf of” message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.
 *
 * For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)
 **/
export const POST_whitelabel_domains = ApiCommon.requestMaker<
  POST_whitelabel_domains_Type,
  POST_whitelabel_domains_Response
>({
  id: "POST_whitelabel_domains",
  path: "/whitelabel/domains",
  verb: "POST",
  parameters: [{ name: "body", in: "body" }, { name: "on-behalf-of", in: "header" }]
})

export type GET_whitelabel_domains_domain_id_Type = {
  domain_id: string
  "on-behalf-of"?: string
}
export type GET_whitelabel_domains_domain_id_Response = Types.whitelabel__domain
/**
 * GET /whitelabel/domains/{domain_id}
 *
 * **This endpoint allows you to retrieve a specific domain whitelabel.**
 *
 * A domain whitelabel allows you to remove the “via” or “sent on behalf of” message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.
 *
 * For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)
 **/
export const GET_whitelabel_domains_domain_id = ApiCommon.requestMaker<
  GET_whitelabel_domains_domain_id_Type,
  GET_whitelabel_domains_domain_id_Response
>({
  id: "GET_whitelabel_domains_domain_id",
  path: "/whitelabel/domains/{domain_id}",
  verb: "GET",
  parameters: [
    { name: "domain_id", required: true, in: "path" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type PATCH_whitelabel_domains_domain_id_Type = {
  body?: {
    default?: boolean
    custom_spf?: boolean
  }
  domain_id: string
  "on-behalf-of"?: string
}
export type PATCH_whitelabel_domains_domain_id_Response = {
  default_false?: boolean
  custom_spf_false?: boolean
}
/**
 * PATCH /whitelabel/domains/{domain_id}
 *
 * **This endpoint allows you to update the settings for a domain whitelabel.**
 *
 * A domain whitelabel allows you to remove the “via” or “sent on behalf of” message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.
 *
 * For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)
 **/
export const PATCH_whitelabel_domains_domain_id = ApiCommon.requestMaker<
  PATCH_whitelabel_domains_domain_id_Type,
  PATCH_whitelabel_domains_domain_id_Response
>({
  id: "PATCH_whitelabel_domains_domain_id",
  path: "/whitelabel/domains/{domain_id}",
  verb: "PATCH",
  parameters: [
    { name: "body", in: "body" },
    { name: "domain_id", required: true, in: "path" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type DELETE_whitelabel_domains_domain_id_Type = {
  body?: null
  domain_id: string
  "on-behalf-of"?: string
}
export type DELETE_whitelabel_domains_domain_id_Response = void
/**
 * DELETE /whitelabel/domains/{domain_id}
 *
 * **This endpoint allows you to delete a domain whitelabel.**
 *
 * A domain whitelabel allows you to remove the “via” or “sent on behalf of” message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.
 *
 * For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)
 **/
export const DELETE_whitelabel_domains_domain_id = ApiCommon.requestMaker<
  DELETE_whitelabel_domains_domain_id_Type,
  DELETE_whitelabel_domains_domain_id_Response
>({
  id: "DELETE_whitelabel_domains_domain_id",
  path: "/whitelabel/domains/{domain_id}",
  verb: "DELETE",
  parameters: [
    { name: "body", in: "body" },
    { name: "domain_id", required: true, in: "path" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type GET_whitelabel_domains_default_Type = {
  "on-behalf-of"?: string
}
export type GET_whitelabel_domains_default_Response = Types.whitelabel_domain_spf
/**
 * GET /whitelabel/domains/default
 *
 * **This endpoint allows you to retrieve the default whitelabel for a domain.**
 *
 * A domain whitelabel allows you to remove the “via” or “sent on behalf of” message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.
 *
 * For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)
 *
 * ## URI Parameters
 * | URI Parameter   | Type   | Description  |
 * |---|---|---|
 * | domain | string  |The domain to find a default domain whitelabel for. |
 **/
export const GET_whitelabel_domains_default = ApiCommon.requestMaker<
  GET_whitelabel_domains_default_Type,
  GET_whitelabel_domains_default_Response
>({
  id: "GET_whitelabel_domains_default",
  path: "/whitelabel/domains/default",
  verb: "GET",
  parameters: [{ name: "on-behalf-of", in: "header" }]
})

export type POST_whitelabel_domains_id_ips_Type = {
  body?: { ip: string }
  id: string
  "on-behalf-of"?: string
}
export type POST_whitelabel_domains_id_ips_Response = Types.whitelabel_domain_spf
/**
 * POST /whitelabel/domains/{id}/ips
 *
 * **This endpoint allows you to add an IP address to a domain whitelabel.**
 *
 * A domain whitelabel allows you to remove the “via” or “sent on behalf of” message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.
 *
 * For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)
 *
 * ## URI Parameters
 * | URI Parameter   | Type  |  Description  |
 * |---|---|---|
 * | id | integer  | ID of the domain to which you are adding an IP |
 **/
export const POST_whitelabel_domains_id_ips = ApiCommon.requestMaker<
  POST_whitelabel_domains_id_ips_Type,
  POST_whitelabel_domains_id_ips_Response
>({
  id: "POST_whitelabel_domains_id_ips",
  path: "/whitelabel/domains/{id}/ips",
  verb: "POST",
  parameters: [
    { name: "body", in: "body" },
    { name: "id", required: true, in: "path" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type DELETE_whitelabel_domains_id_ips_ip_Type = {
  body?: null
  id: string
  ip: string
  "on-behalf-of"?: string
}
export type DELETE_whitelabel_domains_id_ips_ip_Response = Types.whitelabel_domain_spf
/**
 * DELETE /whitelabel/domains/{id}/ips/{ip}
 *
 * **This endpoint allows you to remove a domain's IP address from that domain's whitelabel.**
 *
 * A domain whitelabel allows you to remove the “via” or “sent on behalf of” message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.
 *
 * For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)
 *
 * ## URI Parameters
 * | URI Parameter   | Type  | Description  |
 * |---|---|---|
 * | id | integer  | ID of the domain whitelabel to delete the IP from. |
 * | ip | string | IP to remove from the domain whitelabel. |
 **/
export const DELETE_whitelabel_domains_id_ips_ip = ApiCommon.requestMaker<
  DELETE_whitelabel_domains_id_ips_ip_Type,
  DELETE_whitelabel_domains_id_ips_ip_Response
>({
  id: "DELETE_whitelabel_domains_id_ips_ip",
  path: "/whitelabel/domains/{id}/ips/{ip}",
  verb: "DELETE",
  parameters: [
    { name: "body", in: "body" },
    { name: "id", required: true, in: "path" },
    { name: "ip", required: true, in: "path" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type POST_whitelabel_domains_id_validate_Type = {
  body?: null
  id: string
  "on-behalf-of"?: string
}
export type POST_whitelabel_domains_id_validate_Response = {
  id?: number
  valid?: boolean
  validation_results?: {
    mail_cname?: {
      valid?: boolean
      reason?: string
    }
    dkim1?: {
      valid?: boolean
      reason?: null
    }
    dkim2?: {
      valid?: boolean
      reason?: null
    }
    spf?: {
      valid?: boolean
      reason?: null
    }
  }
}
/**
 * POST /whitelabel/domains/{id}/validate
 *
 * **This endpoint allows you to validate a domain whitelabel. If it fails, it will return an error message describing why the whitelabel could not be validated.**
 *
 * A domain whitelabel allows you to remove the “via” or “sent on behalf of” message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.
 *
 * For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)
 *
 * ## URI Parameters
 * | URI Parameter   | Type   | Description  |
 * |---|---|---|
 * | id | integer  |ID of the domain whitelabel to validate. |
 **/
export const POST_whitelabel_domains_id_validate = ApiCommon.requestMaker<
  POST_whitelabel_domains_id_validate_Type,
  POST_whitelabel_domains_id_validate_Response
>({
  id: "POST_whitelabel_domains_id_validate",
  path: "/whitelabel/domains/{id}/validate",
  verb: "POST",
  parameters: [
    { name: "body", in: "body" },
    { name: "id", required: true, in: "path" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type GET_whitelabel_domains_subuser_Type = {
  "on-behalf-of"?: string
}
export type GET_whitelabel_domains_subuser_Response = Types.whitelabel_domain_spf
/**
 * GET /whitelabel/domains/subuser
 *
 * **This endpoint allows you to retrieve all of the whitelabels that have been assigned to a specific subuser.**
 *
 * A domain whitelabel allows you to remove the “via” or “sent on behalf of” message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.
 *
 * Domain whitelabels can be associated with (i.e. assigned to) subusers from a parent account. This functionality allows subusers to send mail using their parent's whitelabels. To associate a whitelabel with a subuser, the parent account must first create the whitelabel and validate it. The the parent may then associate the whitelabel via the subuser management tools.
 *
 * For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)
 *
 * ## URI Parameters
 * | URI Parameter   | Type  | Description  |
 * |---|---|---|
 * | username | string  | Username of the subuser to find associated whitelabels for. |
 **/
export const GET_whitelabel_domains_subuser = ApiCommon.requestMaker<
  GET_whitelabel_domains_subuser_Type,
  GET_whitelabel_domains_subuser_Response
>({
  id: "GET_whitelabel_domains_subuser",
  path: "/whitelabel/domains/subuser",
  verb: "GET",
  parameters: [{ name: "on-behalf-of", in: "header" }]
})

export type DELETE_whitelabel_domains_subuser_Type = {
  body?: null
  "on-behalf-of"?: string
}
export type DELETE_whitelabel_domains_subuser_Response = void
/**
 * DELETE /whitelabel/domains/subuser
 *
 * **This endpoint allows you to disassociate a specific whitelabel from a subuser.**
 *
 * A domain whitelabel allows you to remove the “via” or “sent on behalf of” message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.
 *
 * Domain whitelabels can be associated with (i.e. assigned to) subusers from a parent account. This functionality allows subusers to send mail using their parent's whitelabels. To associate a whitelabel with a subuser, the parent account must first create the whitelabel and validate it. The the parent may then associate the whitelabel via the subuser management tools.
 *
 * For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)
 *
 * ## URI Parameters
 * | URI Parameter   | Type  | Required?  | Description  |
 * |---|---|---|---|
 * | username | string  | required  | Username for the subuser to find associated whitelabels for. |
 **/
export const DELETE_whitelabel_domains_subuser = ApiCommon.requestMaker<
  DELETE_whitelabel_domains_subuser_Type,
  DELETE_whitelabel_domains_subuser_Response
>({
  id: "DELETE_whitelabel_domains_subuser",
  path: "/whitelabel/domains/subuser",
  verb: "DELETE",
  parameters: [{ name: "body", in: "body" }, { name: "on-behalf-of", in: "header" }]
})

export type POST_whitelabel_domains_domain_id_subuser_Type = {
  body?: { username: string }
  domain_id: string
  "on-behalf-of"?: string
}
export type POST_whitelabel_domains_domain_id_subuser_Response = Types.whitelabel_domain_spf
/**
 * POST /whitelabel/domains/{domain_id}/subuser
 *
 * **This endpoint allows you to associate a specific domain whitelabel with a subuser.**
 *
 * A domain whitelabel allows you to remove the “via” or “sent on behalf of” message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.
 *
 * Domain whitelabels can be associated with (i.e. assigned to) subusers from a parent account. This functionality allows subusers to send mail using their parent's whitelabels. To associate a whitelabel with a subuser, the parent account must first create the whitelabel and validate it. The the parent may then associate the whitelabel via the subuser management tools.
 *
 * For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)
 *
 * ## URI Parameters
 * | URI Parameter   | Type   | Description  |
 * |---|---|---|
 * | domain_id | integer   | ID of the domain whitelabel to associate with the subuser. |
 **/
export const POST_whitelabel_domains_domain_id_subuser = ApiCommon.requestMaker<
  POST_whitelabel_domains_domain_id_subuser_Type,
  POST_whitelabel_domains_domain_id_subuser_Response
>({
  id: "POST_whitelabel_domains_domain_id_subuser",
  path: "/whitelabel/domains/{domain_id}/subuser",
  verb: "POST",
  parameters: [
    { name: "body", in: "body" },
    { name: "domain_id", required: true, in: "path" },
    { name: "on-behalf-of", in: "header" }
  ]
})
