import * as ApiCommon from "../api-common"
// @ts-ignore
import * as Types from "../api-types"

export type GET_ips_warmup_Type = {
  "on-behalf-of"?: string
}
export type GET_ips_warmup_Response = Types.ip_warmup_response
/**
 * GET /ips/warmup
 *
 * **This endpoint allows you to retrieve all of your IP addresses that are currently warming up.**
 *
 * SendGrid can automatically warm up dedicated IP addresses by limiting the amount of mail that can be sent through them per hour, with the limit determined by how long the IP address has been in warmup. See the [warmup schedule](https://sendgrid.com/docs/API_Reference/Web_API_v3/IP_Management/ip_warmup_schedule.html) for more details on how SendGrid limits your email traffic for IPs in warmup.
 *
 * For more general information about warming up IPs, please see our [Classroom](https://sendgrid.com/docs/Classroom/Deliver/Delivery_Introduction/warming_up_ips.html).
 **/
export const GET_ips_warmup = ApiCommon.requestMaker<GET_ips_warmup_Type, GET_ips_warmup_Response>({
  id: "GET_ips_warmup",
  path: "/ips/warmup",
  verb: "GET",
  parameters: [{ name: "on-behalf-of", in: "header" }]
})

export type POST_ips_warmup_Type = {
  body?: { ip?: string }
  "on-behalf-of"?: string
}
export type POST_ips_warmup_Response = Types.ip_warmup_response
/**
 * POST /ips/warmup
 *
 * **This endpoint allows you to enter an IP address into warmup mode.**
 *
 * SendGrid can automatically warm up dedicated IP addresses by limiting the amount of mail that can be sent through them per hour, with the limit determined by how long the IP address has been in warmup. See the [warmup schedule](https://sendgrid.com/docs/API_Reference/Web_API_v3/IP_Management/ip_warmup_schedule.html) for more details on how SendGrid limits your email traffic for IPs in warmup.
 *
 * For more general information about warming up IPs, please see our [Classroom](https://sendgrid.com/docs/Classroom/Deliver/Delivery_Introduction/warming_up_ips.html).
 **/
export const POST_ips_warmup = ApiCommon.requestMaker<
  POST_ips_warmup_Type,
  POST_ips_warmup_Response
>({
  id: "POST_ips_warmup",
  path: "/ips/warmup",
  verb: "POST",
  parameters: [
    { name: "body", in: "body" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type GET_ips_warmup_ip_address_Type = {
  ip_address: string
  "on-behalf-of"?: string
}
export type GET_ips_warmup_ip_address_Response = Types.ip_warmup_response
/**
 * GET /ips/warmup/{ip_address}
 *
 * **This endpoint allows you to retrieve the warmup status for a specific IP address.**
 *
 * SendGrid can automatically warm up dedicated IP addresses by limiting the amount of mail that can be sent through them per hour, with the limit determined by how long the IP address has been in warmup. See the [warmup schedule](https://sendgrid.com/docs/API_Reference/Web_API_v3/IP_Management/ip_warmup_schedule.html) for more details on how SendGrid limits your email traffic for IPs in warmup.
 *
 * For more general information about warming up IPs, please see our [Classroom](https://sendgrid.com/docs/Classroom/Deliver/Delivery_Introduction/warming_up_ips.html).
 **/
export const GET_ips_warmup_ip_address = ApiCommon.requestMaker<
  GET_ips_warmup_ip_address_Type,
  GET_ips_warmup_ip_address_Response
>({
  id: "GET_ips_warmup_ip_address",
  path: "/ips/warmup/{ip_address}",
  verb: "GET",
  parameters: [
    { name: "ip_address", required: true, in: "path" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type DELETE_ips_warmup_ip_address_Type = {
  body?: null
  ip_address: string
  "on-behalf-of"?: string
}
export type DELETE_ips_warmup_ip_address_Response = void
/**
 * DELETE /ips/warmup/{ip_address}
 *
 * **This endpoint allows you to remove an IP address from warmup mode.**
 *
 * SendGrid can automatically warm up dedicated IP addresses by limiting the amount of mail that can be sent through them per hour, with the limit determined by how long the IP address has been in warmup. See the [warmup schedule](https://sendgrid.com/docs/API_Reference/Web_API_v3/IP_Management/ip_warmup_schedule.html) for more details on how SendGrid limits your email traffic for IPs in warmup.
 *
 * For more general information about warming up IPs, please see our [Classroom](https://sendgrid.com/docs/Classroom/Deliver/Delivery_Introduction/warming_up_ips.html).
 **/
export const DELETE_ips_warmup_ip_address = ApiCommon.requestMaker<
  DELETE_ips_warmup_ip_address_Type,
  DELETE_ips_warmup_ip_address_Response
>({
  id: "DELETE_ips_warmup_ip_address",
  path: "/ips/warmup/{ip_address}",
  verb: "DELETE",
  parameters: [
    { name: "body", in: "body" },
    { name: "ip_address", required: true, in: "path" },
    { name: "on-behalf-of", in: "header" }
  ]
})
