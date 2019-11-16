import * as ApiCommon from "../api-common"
// @ts-ignore
import * as Types from "../api-types"

export type GET_whitelabel_ips_Type = {
  ip?: string
  limit?: number
  offset?: number
  "on-behalf-of"?: string
}
export type GET_whitelabel_ips_Response = Types.ip_whitelabel[]
/**
 * GET /whitelabel/ips
 *
 * **This endpoint allows you to retrieve all of the IP whitelabels that have been createdy by this account.**
 *
 * You may include a search key by using the "ip" parameter. This enables you to perform a prefix search for a given IP segment (e.g. "192.").
 *
 * A IP whitelabel consists of a subdomain and domain that will be used to generate a reverse DNS record for a given IP. Once SendGrid has verified that the appropriate A record for the IP has been created, the appropriate reverse DNS record for the IP is generated.
 *
 * For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/ips.html).
 **/
export const GET_whitelabel_ips = ApiCommon.requestMaker<
  GET_whitelabel_ips_Type,
  GET_whitelabel_ips_Response
>({
  id: "GET_whitelabel_ips",
  path: "/whitelabel/ips",
  verb: "GET",
  parameters: [
    { name: "ip", in: "query" },
    { name: "limit", in: "query" },
    { name: "offset", in: "query" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type POST_whitelabel_ips_Type = {
  body?: {
    ip: string
    subdomain: string
    domain: string
  }
  "on-behalf-of"?: string
}
export type POST_whitelabel_ips_Response = Types.ip_whitelabel
/**
 * POST /whitelabel/ips
 *
 * **This endpoint allows you to create an IP whitelabel.**
 *
 * When creating an IP whitelable, you should use the same subdomain that you used when you created a domain whitelabel.
 *
 * A IP whitelabel consists of a subdomain and domain that will be used to generate a reverse DNS record for a given IP. Once SendGrid has verified that the appropriate A record for the IP has been created, the appropriate reverse DNS record for the IP is generated.
 *
 * For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/ips.html).
 **/
export const POST_whitelabel_ips = ApiCommon.requestMaker<
  POST_whitelabel_ips_Type,
  POST_whitelabel_ips_Response
>({
  id: "POST_whitelabel_ips",
  path: "/whitelabel/ips",
  verb: "POST",
  parameters: [{ name: "body", in: "body" }, { name: "on-behalf-of", in: "header" }]
})

export type GET_whitelabel_ips_id_Type = {
  id: string
  "on-behalf-of"?: string
}
export type GET_whitelabel_ips_id_Response = Types.ip_whitelabel
/**
 * GET /whitelabel/ips/{id}
 *
 * **This endpoint allows you to retrieve an IP whitelabel.**
 *
 * A IP whitelabel consists of a subdomain and domain that will be used to generate a reverse DNS record for a given IP. Once SendGrid has verified that the appropriate A record for the IP has been created, the appropriate reverse DNS record for the IP is generated.
 *
 * For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/ips.html).
 **/
export const GET_whitelabel_ips_id = ApiCommon.requestMaker<
  GET_whitelabel_ips_id_Type,
  GET_whitelabel_ips_id_Response
>({
  id: "GET_whitelabel_ips_id",
  path: "/whitelabel/ips/{id}",
  verb: "GET",
  parameters: [{ name: "id", required: true, in: "path" }, { name: "on-behalf-of", in: "header" }]
})

export type DELETE_whitelabel_ips_id_Type = {
  body?: null
  id: string
  "on-behalf-of"?: string
}
export type DELETE_whitelabel_ips_id_Response = void
/**
 * DELETE /whitelabel/ips/{id}
 *
 * **This endpoint allows you to delete an IP whitelabel.**
 *
 * A IP whitelabel consists of a subdomain and domain that will be used to generate a reverse DNS record for a given IP. Once SendGrid has verified that the appropriate A record for the IP has been created, the appropriate reverse DNS record for the IP is generated.
 *
 * For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/ips.html).
 **/
export const DELETE_whitelabel_ips_id = ApiCommon.requestMaker<
  DELETE_whitelabel_ips_id_Type,
  DELETE_whitelabel_ips_id_Response
>({
  id: "DELETE_whitelabel_ips_id",
  path: "/whitelabel/ips/{id}",
  verb: "DELETE",
  parameters: [
    { name: "body", in: "body" },
    { name: "id", required: true, in: "path" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type POST_whitelabel_ips_id_validate_Type = {
  body?: null
  id: number
  "on-behalf-of"?: string
}
export type POST_whitelabel_ips_id_validate_Response = {
  id: number
  valid: true | false
  validation_results: {
    a_record?: {
      valid: true | false
      reason: null | string
    }
  }
}
/**
 * POST /whitelabel/ips/{id}/validate
 *
 * **This endpoint allows you to validate an IP whitelabel.**
 *
 * A IP whitelabel consists of a subdomain and domain that will be used to generate a reverse DNS record for a given IP. Once SendGrid has verified that the appropriate A record for the IP has been created, the appropriate reverse DNS record for the IP is generated.
 *
 * For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/ips.html).
 **/
export const POST_whitelabel_ips_id_validate = ApiCommon.requestMaker<
  POST_whitelabel_ips_id_validate_Type,
  POST_whitelabel_ips_id_validate_Response
>({
  id: "POST_whitelabel_ips_id_validate",
  path: "/whitelabel/ips/{id}/validate",
  verb: "POST",
  parameters: [
    { name: "body", in: "body" },
    { name: "id", required: true, in: "path" },
    { name: "on-behalf-of", in: "header" }
  ]
})
