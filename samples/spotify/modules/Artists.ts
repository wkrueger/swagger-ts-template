import * as ApiCommon from "../api-common"
// @ts-ignore
import * as Types from "../api-types"

export type getArtists_Type = {
  ids: string
}
export type getArtists_Response = { artists?: Types.artist[] }
/**
 * GET /artists
 *
 * [Get Several Artists](https://developer.spotify.com/web-api/get-several-artists/)
 *
 **/
export const getArtists = ApiCommon.requestMaker<getArtists_Type, getArtists_Response>({
  id: "getArtists",
  path: "/artists",
  verb: "GET",
  parameters: [{ name: "ids", required: true, in: "query" }]
})

export type getArtist_Type = {
  id: string
}
export type getArtist_Response = Types.artist
/**
 * GET /artists/{id}
 *
 * [Get an Artist](https://developer.spotify.com/web-api/get-artist/)
 *
 **/
export const getArtist = ApiCommon.requestMaker<getArtist_Type, getArtist_Response>({
  id: "getArtist",
  path: "/artists/{id}",
  verb: "GET",
  parameters: [{ name: "id", required: true, in: "path" }]
})

export type getArtistAlbums_Type = {
  album_type?: string
  id: string
  limit?: number
  market?: string
  offset?: number
}
export type getArtistAlbums_Response = Types.album_simple_page
/**
 * GET /artists/{id}/albums
 *
 * [Get an Artist's Albums](https://developer.spotify.com/web-api/get-artists-albums/)
 *
 **/
export const getArtistAlbums = ApiCommon.requestMaker<
  getArtistAlbums_Type,
  getArtistAlbums_Response
>({
  id: "getArtistAlbums",
  path: "/artists/{id}/albums",
  verb: "GET",
  parameters: [
    { name: "album_type", required: false, in: "query" },
    { name: "id", required: true, in: "path" },
    { name: "limit", required: false, in: "query" },
    { name: "market", required: false, in: "query" },
    { name: "offset", required: false, in: "query" }
  ]
})

export type getArtistRelatedArtists_Type = {
  id: string
}
export type getArtistRelatedArtists_Response = { artists?: Types.artist[] }
/**
 * GET /artists/{id}/related-artists
 *
 * [Get an Artist's Related Artists](https://developer.spotify.com/web-api/get-related-artists/)
 *
 **/
export const getArtistRelatedArtists = ApiCommon.requestMaker<
  getArtistRelatedArtists_Type,
  getArtistRelatedArtists_Response
>({
  id: "getArtistRelatedArtists",
  path: "/artists/{id}/related-artists",
  verb: "GET",
  parameters: [{ name: "id", required: true, in: "path" }]
})

export type getArtistTopTracks_Type = {
  country: string
  id: string
}
export type getArtistTopTracks_Response = { tracks?: Types.track[] }
/**
 * GET /artists/{id}/top-tracks
 *
 * [Get an Artist's Top Tracks](https://developer.spotify.com/web-api/get-artists-top-tracks/)
 *
 **/
export const getArtistTopTracks = ApiCommon.requestMaker<
  getArtistTopTracks_Type,
  getArtistTopTracks_Response
>({
  id: "getArtistTopTracks",
  path: "/artists/{id}/top-tracks",
  verb: "GET",
  parameters: [
    { name: "country", required: true, in: "query" },
    { name: "id", required: true, in: "path" }
  ]
})
