import * as ApiCommon from "../api-common"
// @ts-ignore
import * as Types from "../api-types"

export type POST_ips_pools_Type = {
  body?: { name: string }
}
export type POST_ips_pools_Response = Types.ip_pool
/**
 * POST /ips/pools
 *
 * **This endpoint allows you to create an IP pool.**
 *
 * **Each user can create up to 10 different IP pools.**
 *
 * IP Pools allow you to group your dedicated SendGrid IP addresses together. For example, you could create separate pools for your transactional and marketing email. When sending marketing emails, specify that you want to use the marketing IP pool. This allows you to maintain separate reputations for your different email traffic.
 *
 * IP pools can only be used with whitelabeled IP addresses.
 *
 * If an IP pool is NOT specified for an email, it will use any IP available, including ones in pools.
 **/
export const POST_ips_pools = ApiCommon.requestMaker<POST_ips_pools_Type, POST_ips_pools_Response>({
  id: "POST_ips_pools",
  path: "/ips/pools",
  verb: "POST",
  parameters: [{ name: "body", in: "body" }]
})

export type GET_ips_pools_Type = {}
export type GET_ips_pools_Response = Types.ip_pool[]
/**
 * GET /ips/pools
 *
 * **This endpoint allows you to retreive all of your IP pools.**
 *
 * IP Pools allow you to group your dedicated SendGrid IP addresses together. For example, you could create separate pools for your transactional and marketing email. When sending marketing emails, specify that you want to use the marketing IP pool. This allows you to maintain separate reputations for your different email traffic.
 *
 * IP pools can only be used with whitelabeled IP addresses.
 *
 * If an IP pool is NOT specified for an email, it will use any IP available, including ones in pools.
 **/
export const GET_ips_pools = ApiCommon.requestMaker<GET_ips_pools_Type, GET_ips_pools_Response>({
  id: "GET_ips_pools",
  path: "/ips/pools",
  verb: "GET",
  parameters: []
})

export type GET_ips_pools_pool_name_Type = {
  pool_name: string
}
export type GET_ips_pools_pool_name_Response = {
  pool_name: string
  ips?: string[]
}
/**
 * GET /ips/pools/{pool_name}
 *
 * **This endpoint allows you to list all of the IP addresses that are in a specific IP pool.**
 *
 * IP Pools allow you to group your dedicated SendGrid IP addresses together. For example, you could create separate pools for your transactional and marketing email. When sending marketing emails, specify that you want to use the marketing IP pool. This allows you to maintain separate reputations for your different email traffic.
 *
 * IP pools can only be used with whitelabeled IP addresses.
 *
 * If an IP pool is NOT specified for an email, it will use any IP available, including ones in pools.
 **/
export const GET_ips_pools_pool_name = ApiCommon.requestMaker<
  GET_ips_pools_pool_name_Type,
  GET_ips_pools_pool_name_Response
>({
  id: "GET_ips_pools_pool_name",
  path: "/ips/pools/{pool_name}",
  verb: "GET",
  parameters: [{ name: "pool_name", required: true, in: "path" }]
})

export type PUT_ips_pools_pool_name_Type = {
  body?: { name?: string }
  pool_name: string
}
export type PUT_ips_pools_pool_name_Response = Types.ip_pool
/**
 * PUT /ips/pools/{pool_name}
 *
 * **This endpoint allows you to update the name of an IP pool.**
 *
 * IP Pools allow you to group your dedicated SendGrid IP addresses together. For example, you could create separate pools for your transactional and marketing email. When sending marketing emails, specify that you want to use the marketing IP pool. This allows you to maintain separate reputations for your different email traffic.
 *
 * IP pools can only be used with whitelabeled IP addresses.
 *
 * If an IP pool is NOT specified for an email, it will use any IP available, including ones in pools.
 **/
export const PUT_ips_pools_pool_name = ApiCommon.requestMaker<
  PUT_ips_pools_pool_name_Type,
  PUT_ips_pools_pool_name_Response
>({
  id: "PUT_ips_pools_pool_name",
  path: "/ips/pools/{pool_name}",
  verb: "PUT",
  parameters: [{ name: "body", in: "body" }, { name: "pool_name", required: true, in: "path" }]
})

export type DELETE_ips_pools_pool_name_Type = {
  body?: null
  pool_name: string
}
export type DELETE_ips_pools_pool_name_Response = void
/**
 * DELETE /ips/pools/{pool_name}
 *
 * **This endpoint allows you to delete an IP pool.**
 *
 * IP Pools allow you to group your dedicated SendGrid IP addresses together. For example, you could create separate pools for your transactional and marketing email. When sending marketing emails, specify that you want to use the marketing IP pool. This allows you to maintain separate reputations for your different email traffic.
 *
 * IP pools can only be used with whitelabeled IP addresses.
 *
 * If an IP pool is NOT specified for an email, it will use any IP available, including ones in pools.
 **/
export const DELETE_ips_pools_pool_name = ApiCommon.requestMaker<
  DELETE_ips_pools_pool_name_Type,
  DELETE_ips_pools_pool_name_Response
>({
  id: "DELETE_ips_pools_pool_name",
  path: "/ips/pools/{pool_name}",
  verb: "DELETE",
  parameters: [{ name: "body", in: "body" }, { name: "pool_name", required: true, in: "path" }]
})

export type POST_ips_pools_pool_name_ips_Type = {
  body?: { ip?: string }
  pool_name: string
}
export type POST_ips_pools_pool_name_ips_Response = {
  ip: string
  pools: string[]
  start_date: number
  warmup: boolean
}
/**
 * POST /ips/pools/{pool_name}/ips
 *
 * **This endpoint allows you to add an IP address to an IP pool.**
 *
 * You can add the same IP address to multiple pools. It may take up to 60 seconds for your IP address to be added to a pool after your request is made.
 *
 * A single IP address or a range of IP addresses may be dedicated to an account in order to send email for multiple domains. The reputation of this IP is based on the aggregate performance of all the senders who use it.
 **/
export const POST_ips_pools_pool_name_ips = ApiCommon.requestMaker<
  POST_ips_pools_pool_name_ips_Type,
  POST_ips_pools_pool_name_ips_Response
>({
  id: "POST_ips_pools_pool_name_ips",
  path: "/ips/pools/{pool_name}/ips",
  verb: "POST",
  parameters: [{ name: "body", in: "body" }, { name: "pool_name", required: true, in: "path" }]
})

export type DELETE_ips_pools_pool_name_ips_ip_Type = {
  body?: null
  ip: string
  pool_name: string
}
export type DELETE_ips_pools_pool_name_ips_ip_Response = void
/**
 * DELETE /ips/pools/{pool_name}/ips/{ip}
 *
 * **This endpoint allows you to remove an IP address from an IP pool.**
 *
 * The same IP address can be added to multiple IP pools.
 *
 * A single IP address or a range of IP addresses may be dedicated to an account in order to send email for multiple domains. The reputation of this IP is based on the aggregate performance of all the senders who use it.
 **/
export const DELETE_ips_pools_pool_name_ips_ip = ApiCommon.requestMaker<
  DELETE_ips_pools_pool_name_ips_ip_Type,
  DELETE_ips_pools_pool_name_ips_ip_Response
>({
  id: "DELETE_ips_pools_pool_name_ips_ip",
  path: "/ips/pools/{pool_name}/ips/{ip}",
  verb: "DELETE",
  parameters: [
    { name: "body", in: "body" },
    { name: "ip", required: true, in: "path" },
    { name: "pool_name", required: true, in: "path" }
  ]
})
