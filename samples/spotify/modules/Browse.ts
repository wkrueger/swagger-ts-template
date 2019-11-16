import * as ApiCommon from "../api-common"
// @ts-ignore
import * as Types from "../api-types"

export type getBrowseCategories_Type = {
  Accept?: string
  country?: string
  limit?: number
  locale?: string
  offset?: number
}
export type getBrowseCategories_Response = Types.category_page
/**
 * GET /browse/categories
 *
 * [Get a List of Browse Categories](https://developer.spotify.com/web-api/get-list-categories/)
 *
 **/
export const getBrowseCategories = ApiCommon.requestMaker<
  getBrowseCategories_Type,
  getBrowseCategories_Response
>({
  id: "getBrowseCategories",
  path: "/browse/categories",
  verb: "GET",
  parameters: [
    { name: "Accept", in: "header" },
    { name: "country", required: false, in: "query" },
    { name: "limit", required: false, in: "query" },
    { name: "locale", required: false, in: "query" },
    { name: "offset", required: false, in: "query" }
  ]
})

export type getBrowseCategorie_Type = {
  Accept?: string
  category_id: string
  country?: string
  locale?: string
}
export type getBrowseCategorie_Response = Types.category
/**
 * GET /browse/categories/{category_id}
 *
 * [Get a Single Browse Category](https://developer.spotify.com/web-api/get-category/)
 *
 **/
export const getBrowseCategorie = ApiCommon.requestMaker<
  getBrowseCategorie_Type,
  getBrowseCategorie_Response
>({
  id: "getBrowseCategorie",
  path: "/browse/categories/{category_id}",
  verb: "GET",
  parameters: [
    { name: "Accept", in: "header" },
    { name: "category_id", required: true, in: "path" },
    { name: "country", required: false, in: "query" },
    { name: "locale", required: false, in: "query" }
  ]
})

export type getBrowseCategoriePlaylists_Type = {
  Accept?: string
  category_id: string
  country?: string
  limit?: number
  offset?: number
}
export type getBrowseCategoriePlaylists_Response = { playlists?: Types.playlist_simple_page }
/**
 * GET /browse/categories/{category_id}/playlists
 *
 * [Get a Category's playlists](https://developer.spotify.com/web-api/get-categorys-playlists/)
 *
 **/
export const getBrowseCategoriePlaylists = ApiCommon.requestMaker<
  getBrowseCategoriePlaylists_Type,
  getBrowseCategoriePlaylists_Response
>({
  id: "getBrowseCategoriePlaylists",
  path: "/browse/categories/{category_id}/playlists",
  verb: "GET",
  parameters: [
    { name: "Accept", in: "header" },
    { name: "category_id", required: true, in: "path" },
    { name: "country", required: false, in: "query" },
    { name: "limit", required: false, in: "query" },
    { name: "offset", required: false, in: "query" }
  ]
})

export type getBrowseFeaturedPlaylists_Type = {
  Accept?: string
  country?: string
  limit?: number
  locale?: string
  offset?: number
  timestamp?: string
}
export type getBrowseFeaturedPlaylists_Response = Types.featured_playlists
/**
 * GET /browse/featured-playlists
 *
 * [Get a List of Featured Playlists](https://developer.spotify.com/web-api/get-list-featured-playlists/)
 *
 **/
export const getBrowseFeaturedPlaylists = ApiCommon.requestMaker<
  getBrowseFeaturedPlaylists_Type,
  getBrowseFeaturedPlaylists_Response
>({
  id: "getBrowseFeaturedPlaylists",
  path: "/browse/featured-playlists",
  verb: "GET",
  parameters: [
    { name: "Accept", in: "header" },
    { name: "country", required: false, in: "query" },
    { name: "limit", required: false, in: "query" },
    { name: "locale", required: false, in: "query" },
    { name: "offset", required: false, in: "query" },
    { name: "timestamp", required: false, in: "query" }
  ]
})

export type getBrowseNewReleases_Type = {
  Accept?: string
  country?: string
  limit?: number
  offset?: number
}
export type getBrowseNewReleases_Response = Types.album_simple_page
/**
 * GET /browse/new-releases
 *
 * [Get a List of New Releases](https://developer.spotify.com/web-api/get-list-new-releases/)
 *
 **/
export const getBrowseNewReleases = ApiCommon.requestMaker<
  getBrowseNewReleases_Type,
  getBrowseNewReleases_Response
>({
  id: "getBrowseNewReleases",
  path: "/browse/new-releases",
  verb: "GET",
  parameters: [
    { name: "Accept", in: "header" },
    { name: "country", required: false, in: "query" },
    { name: "limit", required: false, in: "query" },
    { name: "offset", required: false, in: "query" }
  ]
})
