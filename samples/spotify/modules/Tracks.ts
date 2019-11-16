import * as ApiCommon from "../api-common"
// @ts-ignore
import * as Types from "../api-types"

export type getTracks_Type = {
  ids: string
  market?: string
}
export type getTracks_Response = { tracks?: Types.track[] }
/**
 * GET /tracks
 *
 * [Get Several Tracks](https://developer.spotify.com/web-api/get-several-tracks/)
 *
 **/
export const getTracks = ApiCommon.requestMaker<getTracks_Type, getTracks_Response>({
  id: "getTracks",
  path: "/tracks",
  verb: "GET",
  parameters: [
    { name: "ids", required: true, in: "query" },
    { name: "market", required: false, in: "query" }
  ]
})

export type getTrack_Type = {
  id: string
  market?: string
}
export type getTrack_Response = Types.track
/**
 * GET /tracks/{id}
 *
 * [Get a Track](https://developer.spotify.com/web-api/get-track/)
 *
 **/
export const getTrack = ApiCommon.requestMaker<getTrack_Type, getTrack_Response>({
  id: "getTrack",
  path: "/tracks/{id}",
  verb: "GET",
  parameters: [
    { name: "id", required: true, in: "path" },
    { name: "market", required: false, in: "query" }
  ]
})
