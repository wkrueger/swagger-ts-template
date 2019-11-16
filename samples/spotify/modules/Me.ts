import * as ApiCommon from "../api-common"
// @ts-ignore
import * as Types from "../api-types"

export type getMe_Type = {}
export type getMe_Response = Types.current_user_profile
/**
 * GET /me
 *
 * [Get Current User's Profile](https://developer.spotify.com/web-api/get-current-users-profile/)
 *
 **/
export const getMe = ApiCommon.requestMaker<getMe_Type, getMe_Response>({
  id: "getMe",
  path: "/me",
  verb: "GET",
  parameters: []
})

export type deleteMeFollowing_Type = {
  ids: string
  type: string
}
export type deleteMeFollowing_Response = void
/**
 * DELETE /me/following
 *
 * [Unfollow Artists or Users](https://developer.spotify.com/web-api/unfollow-artists-users/)
 *
 **/
export const deleteMeFollowing = ApiCommon.requestMaker<
  deleteMeFollowing_Type,
  deleteMeFollowing_Response
>({
  id: "deleteMeFollowing",
  path: "/me/following",
  verb: "DELETE",
  parameters: [
    { name: "ids", required: true, in: "query" },
    { name: "type", required: true, in: "query" }
  ]
})

export type getMeFollowing_Type = {
  after?: string
  limit?: number
  type: string
}
export type getMeFollowing_Response = Types.user_followed
/**
 * GET /me/following
 *
 * [Get User's Followed Artists](https://developer.spotify.com/web-api/get-followed-artists/)
 *
 **/
export const getMeFollowing = ApiCommon.requestMaker<getMeFollowing_Type, getMeFollowing_Response>({
  id: "getMeFollowing",
  path: "/me/following",
  verb: "GET",
  parameters: [
    { name: "after", required: false, in: "query" },
    { name: "limit", required: false, in: "query" },
    { name: "type", required: true, in: "query" }
  ]
})

export type putMeFollowing_Type = {
  ids: string
  type: string
}
export type putMeFollowing_Response = void
/**
 * PUT /me/following
 *
 * [Follow Artists or Users](https://developer.spotify.com/web-api/follow-artists-users/)
 *
 **/
export const putMeFollowing = ApiCommon.requestMaker<putMeFollowing_Type, putMeFollowing_Response>({
  id: "putMeFollowing",
  path: "/me/following",
  verb: "PUT",
  parameters: [
    { name: "ids", required: true, in: "query" },
    { name: "type", required: true, in: "query" }
  ]
})

export type getMeFollowingContains_Type = {
  ids: string
  type: string
}
export type getMeFollowingContains_Response = boolean[]
/**
 * GET /me/following/contains
 *
 * [Check if Current User Follows Artists or Users](https://developer.spotify.com/web-api/check-current-user-follows/)
 *
 **/
export const getMeFollowingContains = ApiCommon.requestMaker<
  getMeFollowingContains_Type,
  getMeFollowingContains_Response
>({
  id: "getMeFollowingContains",
  path: "/me/following/contains",
  verb: "GET",
  parameters: [
    { name: "ids", required: true, in: "query" },
    { name: "type", required: true, in: "query" }
  ]
})

export type deleteMeTracks_Type = {
  Accept?: string
  ids: string
}
export type deleteMeTracks_Response = void
/**
 * DELETE /me/tracks
 *
 * [Remove Tracks for Current User](https://developer.spotify.com/web-api/remove-tracks-user/)
 *
 **/
export const deleteMeTracks = ApiCommon.requestMaker<deleteMeTracks_Type, deleteMeTracks_Response>({
  id: "deleteMeTracks",
  path: "/me/tracks",
  verb: "DELETE",
  parameters: [{ name: "Accept", in: "header" }, { name: "ids", required: true, in: "query" }]
})

export type getMeTracks_Type = {
  Accept?: string
  limit?: number
  market?: string
  offset?: number
}
export type getMeTracks_Response = Types.saved_track_page
/**
 * GET /me/tracks
 *
 * [Get Current User's Saved Tracks](https://developer.spotify.com/web-api/get-users-saved-tracks/)
 *
 **/
export const getMeTracks = ApiCommon.requestMaker<getMeTracks_Type, getMeTracks_Response>({
  id: "getMeTracks",
  path: "/me/tracks",
  verb: "GET",
  parameters: [
    { name: "Accept", in: "header" },
    { name: "limit", required: false, in: "query" },
    { name: "market", required: false, in: "query" },
    { name: "offset", required: false, in: "query" }
  ]
})

export type putMeTracks_Type = {
  Accept?: string
  ids: string
}
export type putMeTracks_Response = void
/**
 * PUT /me/tracks
 *
 * [Save Tracks for Current User](https://developer.spotify.com/web-api/save-tracks-user/)
 *
 **/
export const putMeTracks = ApiCommon.requestMaker<putMeTracks_Type, putMeTracks_Response>({
  id: "putMeTracks",
  path: "/me/tracks",
  verb: "PUT",
  parameters: [{ name: "Accept", in: "header" }, { name: "ids", required: true, in: "query" }]
})

export type getMeTracksContains_Type = {
  ids: string
}
export type getMeTracksContains_Response = boolean[]
/**
 * GET /me/tracks/contains
 *
 * [Check Current User's Saved Tracks](https://developer.spotify.com/web-api/check-users-saved-tracks/)
 *
 **/
export const getMeTracksContains = ApiCommon.requestMaker<
  getMeTracksContains_Type,
  getMeTracksContains_Response
>({
  id: "getMeTracksContains",
  path: "/me/tracks/contains",
  verb: "GET",
  parameters: [{ name: "ids", required: true, in: "query" }]
})
