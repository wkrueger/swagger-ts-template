import * as ApiCommon from "../api-common"
// @ts-ignore
import * as Types from "../api-types"

export type getAlbums_Type = {
  ids: string
  market?: string
}
export type getAlbums_Response = { albums?: Types.album[] }
/**
 * GET /albums
 *
 * [Get Several Albums](https://developer.spotify.com/web-api/get-several-albums/)
 *
 **/
export const getAlbums = ApiCommon.requestMaker<getAlbums_Type, getAlbums_Response>({
  id: "getAlbums",
  path: "/albums",
  verb: "GET",
  parameters: [
    { name: "ids", required: true, in: "query" },
    { name: "market", required: false, in: "query" }
  ]
})

export type getAlbum_Type = {
  id: string
  market?: string
}
export type getAlbum_Response = Types.album
/**
 * GET /albums/{id}
 *
 * [Get an Album](https://developer.spotify.com/web-api/get-album/)
 *
 **/
export const getAlbum = ApiCommon.requestMaker<getAlbum_Type, getAlbum_Response>({
  id: "getAlbum",
  path: "/albums/{id}",
  verb: "GET",
  parameters: [
    { name: "id", required: true, in: "path" },
    { name: "market", required: false, in: "query" }
  ]
})

export type getAlbumTracks_Type = {
  id: string
  limit?: number
  market?: string
  offset?: number
}
export type getAlbumTracks_Response = Types.track_simple_page
/**
 * GET /albums/{id}/tracks
 *
 * [Get an Album's Tracks](https://developer.spotify.com/web-api/get-albums-tracks/)
 *
 **/
export const getAlbumTracks = ApiCommon.requestMaker<getAlbumTracks_Type, getAlbumTracks_Response>({
  id: "getAlbumTracks",
  path: "/albums/{id}/tracks",
  verb: "GET",
  parameters: [
    { name: "id", required: true, in: "path" },
    { name: "limit", required: false, in: "query" },
    { name: "market", required: false, in: "query" },
    { name: "offset", required: false, in: "query" }
  ]
})
