import * as ApiCommon from "../api-common"
import * as Types from "../api-types"

export type GET_categories_Type = {
  category?: string
  limit?: number
  offset?: number
  "on-behalf-of"?: string
}
export type GET_categories_Response = { category: string }[]
/**
 * GET /categories
 *
 * **This endpoint allows you to retrieve a list of all of your categories.**
 *
 * Categories can help organize your email analytics by enabling you to “tag” emails by type or broad topic. You can define your own custom categories. For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Statistics/categories.html).
 **/
export const GET_categories = ApiCommon.requestMaker<GET_categories_Type, GET_categories_Response>({
  id: "GET_categories",
  path: "/categories",
  verb: "GET",
  parameters: [
    { name: "category", in: "query" },
    { name: "limit", in: "query" },
    { name: "offset", in: "query" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type GET_categories_stats_sums_Type = {
  aggregated_by?: string
  end_date?: string
  limit?: number
  offset?: number
  "on-behalf-of"?: string
  sort_by_direction?: string
  sort_by_metric?: string
  start_date: string
}
export type GET_categories_stats_sums_Response = Types.category_stats
/**
 * GET /categories/stats/sums
 *
 * **This endpoint allows you to retrieve the total sum of each email statistic for every category over the given date range.**
 *
 * If you do not define any query parameters, this endpoint will return a sum for each category in groups of 10.
 *
 * Categories allow you to group your emails together according to broad topics that you define. For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Statistics/categories.html).
 **/
export const GET_categories_stats_sums = ApiCommon.requestMaker<
  GET_categories_stats_sums_Type,
  GET_categories_stats_sums_Response
>({
  id: "GET_categories_stats_sums",
  path: "/categories/stats/sums",
  verb: "GET",
  parameters: [
    { name: "aggregated_by", required: false, in: "query" },
    { name: "end_date", required: false, in: "query" },
    { name: "limit", required: false, in: "query" },
    { name: "offset", required: false, in: "query" },
    { name: "on-behalf-of", in: "header" },
    { name: "sort_by_direction", required: false, in: "query" },
    { name: "sort_by_metric", required: false, in: "query" },
    { name: "start_date", required: true, in: "query" }
  ]
})

export type GET_categories_stats_Type = {
  aggregated_by?: string
  categories: string
  end_date?: string
  limit?: number
  offset?: number
  "on-behalf-of"?: string
  start_date: string
}
export type GET_categories_stats_Response = Types.category_stats[]
/**
 * GET /categories/stats
 *
 * **This endpoint allows you to retrieve all of your email statistics for each of your categories.**
 *
 * If you do not define any query parameters, this endpoint will return a sum for each category in groups of 10.
 *
 * Categories allow you to group your emails together according to broad topics that you define. For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Statistics/categories.html).
 **/
export const GET_categories_stats = ApiCommon.requestMaker<
  GET_categories_stats_Type,
  GET_categories_stats_Response
>({
  id: "GET_categories_stats",
  path: "/categories/stats",
  verb: "GET",
  parameters: [
    { name: "aggregated_by", required: false, in: "query" },
    { name: "categories", required: true, in: "query" },
    { name: "end_date", required: false, in: "query" },
    { name: "limit", required: false, in: "query" },
    { name: "offset", required: false, in: "query" },
    { name: "on-behalf-of", in: "header" },
    { name: "start_date", required: true, in: "query" }
  ]
})
