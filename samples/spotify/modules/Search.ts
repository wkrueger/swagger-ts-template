import * as ApiCommon from "../api-common"
// @ts-ignore
import * as Types from "../api-types"

export type getSearch_Type = {
  limit?: number
  market?: string
  offset?: number
  q: string
  type: string
}
export type getSearch_Response = Types.search
/**
 * GET /search
 *
 * [Search for an Item](https://developer.spotify.com/web-api/search-item/)
 *
 **/
export const getSearch = ApiCommon.requestMaker<getSearch_Type, getSearch_Response>({
  id: "getSearch",
  path: "/search",
  verb: "GET",
  parameters: [
    { name: "limit", required: false, in: "query" },
    { name: "market", in: "query" },
    { name: "offset", required: false, in: "query" },
    { name: "q", required: true, in: "query" },
    { name: "type", required: true, in: "query" }
  ]
})
