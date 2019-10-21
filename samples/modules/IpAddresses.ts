import * as ApiCommon from "../api-common"
import * as Types from "../api-types"

export type POST_ips_Type = {
  body?: {
    count: number
    subusers?: string[]
    warmup?: boolean
  }
}
export type POST_ips_Response = {
  ips: {
    ip: string
    subusers: string[]
  }[]
  remaining_ips: number
  warmup: boolean
}
/**
 * POST /ips
 *
 * This endpoint is for adding a(n) IP Address(es) to your account.
 **/
export const POST_ips = ApiCommon.requestMaker<POST_ips_Type, POST_ips_Response>({
  id: "POST_ips",
  path: "/ips",
  verb: "POST",
  parameters: [{ name: "body", in: "body" }]
})

export type GET_ips_Type = {
  exclude_whitelabels?: boolean
  ip?: string
  limit?: number
  offset?: number
  sort_by_direction?: string
  subuser?: string
}
export type GET_ips_Response = {
  ip: string
  subusers: string[]
  rdns?: string
  pools: string[]
  warmup: boolean
  start_date: number | null
  whitelabeled: boolean
  assigned_at: number | null
}[]
/**
 * GET /ips
 *
 * **This endpoint allows you to retrieve a list of all assigned and unassigned IPs.**
 *
 * Response includes warm up status, pools, assigned subusers, and whitelabel info. The start_date field corresponds to when warmup started for that IP.
 *
 * A single IP address or a range of IP addresses may be dedicated to an account in order to send email for multiple domains. The reputation of this IP is based on the aggregate performance of all the senders who use it.
 **/
export const GET_ips = ApiCommon.requestMaker<GET_ips_Type, GET_ips_Response>({
  id: "GET_ips",
  path: "/ips",
  verb: "GET",
  parameters: [
    { name: "exclude_whitelabels", in: "query" },
    { name: "ip", in: "query" },
    { name: "limit", in: "query" },
    { name: "offset", in: "query" },
    { name: "sort_by_direction", in: "query" },
    { name: "subuser", in: "query" }
  ]
})

export type GET_ips_remaining_Type = {}
export type GET_ips_remaining_Response = {
  results: {
    remaining: number
    period: string
    price_per_ip: number
  }[]
}
/**
 * GET /ips/remaining
 *
 * This endpoint gets amount of IP Addresses that can still be created during a given period and the price of those IPs.
 **/
export const GET_ips_remaining = ApiCommon.requestMaker<
  GET_ips_remaining_Type,
  GET_ips_remaining_Response
>({
  id: "GET_ips_remaining",
  path: "/ips/remaining",
  verb: "GET",
  parameters: []
})

export type GET_ips_assigned_Type = {}
export type GET_ips_assigned_Response = {
  ip: string
  pools: string[]
  warmup: boolean
  start_date: number
}[]
/**
 * GET /ips/assigned
 *
 * **This endpoint allows you to retrieve only assigned IP addresses.**
 *
 * A single IP address or a range of IP addresses may be dedicated to an account in order to send email for multiple domains. The reputation of this IP is based on the aggregate performance of all the senders who use it.
 **/
export const GET_ips_assigned = ApiCommon.requestMaker<
  GET_ips_assigned_Type,
  GET_ips_assigned_Response
>({
  id: "GET_ips_assigned",
  path: "/ips/assigned",
  verb: "GET",
  parameters: []
})

export type GET_ips_ip_address_Type = {
  ip_address: string
}
export type GET_ips_ip_address_Response = {
  ip: string
  subusers: string[]
  rdns: string
  pools: string[]
  warmup: boolean
  start_date: number | null
  whitelabeled: boolean
}
/**
 * GET /ips/{ip_address}
 *
 * **This endpoint allows you to see which IP pools a particular IP address has been added to.**
 *
 * The same IP address can be added to multiple IP pools.
 *
 * A single IP address or a range of IP addresses may be dedicated to an account in order to send email for multiple domains. The reputation of this IP is based on the aggregate performance of all the senders who use it.
 **/
export const GET_ips_ip_address = ApiCommon.requestMaker<
  GET_ips_ip_address_Type,
  GET_ips_ip_address_Response
>({
  id: "GET_ips_ip_address",
  path: "/ips/{ip_address}",
  verb: "GET",
  parameters: [{ name: "ip_address", required: true, in: "path" }]
})
