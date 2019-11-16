import * as ApiCommon from "../api-common"
// @ts-ignore
import * as Types from "../api-types"

export type getUser_Type = {
  user_id: string
}
export type getUser_Response = Types.user_profile
/**
 * GET /users/{user_id}
 *
 * [Get a User's Profile](https://developer.spotify.com/web-api/get-users-profile/)
 *
 **/
export const getUser = ApiCommon.requestMaker<getUser_Type, getUser_Response>({
  id: "getUser",
  path: "/users/{user_id}",
  verb: "GET",
  parameters: [{ name: "user_id", required: true, in: "path" }]
})

export type getUserPlaylists_Type = {
  Accept?: string
  limit?: number
  offset?: number
  user_id: string
}
export type getUserPlaylists_Response = Types.playlist_simple_page
/**
 * GET /users/{user_id}/playlists
 *
 * [Get a List of a User's Playlists](https://developer.spotify.com/web-api/get-list-users-playlists/)
 *
 **/
export const getUserPlaylists = ApiCommon.requestMaker<
  getUserPlaylists_Type,
  getUserPlaylists_Response
>({
  id: "getUserPlaylists",
  path: "/users/{user_id}/playlists",
  verb: "GET",
  parameters: [
    { name: "Accept", in: "header" },
    { name: "limit", required: false, in: "query" },
    { name: "offset", required: false, in: "query" },
    { name: "user_id", required: true, in: "path" }
  ]
})

export type postUserPlaylists_Type = {
  Accept?: string
  body: {
    name: string
    public?: boolean
  }
  user_id: string
}
export type postUserPlaylists_Response = Types.playlist
/**
 * POST /users/{user_id}/playlists
 *
 * [Create a Playlist](https://developer.spotify.com/web-api/create-playlist/)
 *
 **/
export const postUserPlaylists = ApiCommon.requestMaker<
  postUserPlaylists_Type,
  postUserPlaylists_Response
>({
  id: "postUserPlaylists",
  path: "/users/{user_id}/playlists",
  verb: "POST",
  parameters: [
    { name: "Accept", in: "header" },
    { name: "body", required: true, in: "body" },
    { name: "user_id", required: true, in: "path" }
  ]
})

export type getUserPlaylist_Type = {
  Accept?: string
  fields?: string
  market?: string
  playlist_id: string
  user_id: string
}
export type getUserPlaylist_Response = Types.playlist
/**
 * GET /users/{user_id}/playlists/{playlist_id}
 *
 * [Get a Playlist](https://developer.spotify.com/web-api/get-playlist/)
 *
 **/
export const getUserPlaylist = ApiCommon.requestMaker<
  getUserPlaylist_Type,
  getUserPlaylist_Response
>({
  id: "getUserPlaylist",
  path: "/users/{user_id}/playlists/{playlist_id}",
  verb: "GET",
  parameters: [
    { name: "Accept", in: "header" },
    { name: "fields", in: "query" },
    { name: "market", required: false, in: "query" },
    { name: "playlist_id", required: true, in: "path" },
    { name: "user_id", required: true, in: "path" }
  ]
})

export type putUserPlaylist_Type = {
  Accept?: string
  body: {
    name?: string
    public?: boolean
  }
  playlist_id: string
  user_id: string
}
export type putUserPlaylist_Response = void
/**
 * PUT /users/{user_id}/playlists/{playlist_id}
 *
 * [Change a Playlist's Details](https://developer.spotify.com/web-api/change-playlist-details/)
 *
 **/
export const putUserPlaylist = ApiCommon.requestMaker<
  putUserPlaylist_Type,
  putUserPlaylist_Response
>({
  id: "putUserPlaylist",
  path: "/users/{user_id}/playlists/{playlist_id}",
  verb: "PUT",
  parameters: [
    { name: "Accept", in: "header" },
    { name: "body", required: true, in: "body" },
    { name: "playlist_id", required: true, in: "path" },
    { name: "user_id", required: true, in: "path" }
  ]
})

export type deleteUserPlaylistFollowers_Type = {
  playlist_id: string
  user_id: string
}
export type deleteUserPlaylistFollowers_Response = void
/**
 * DELETE /users/{user_id}/playlists/{playlist_id}/followers
 *
 * [Unfollow a Playlist](https://developer.spotify.com/web-api/unfollow-playlist/)
 *
 **/
export const deleteUserPlaylistFollowers = ApiCommon.requestMaker<
  deleteUserPlaylistFollowers_Type,
  deleteUserPlaylistFollowers_Response
>({
  id: "deleteUserPlaylistFollowers",
  path: "/users/{user_id}/playlists/{playlist_id}/followers",
  verb: "DELETE",
  parameters: [
    { name: "playlist_id", required: true, in: "path" },
    { name: "user_id", required: true, in: "path" }
  ]
})

export type putUserPlaylistFollowers_Type = {
  body: { public?: boolean }
  playlist_id: string
  user_id: string
}
export type putUserPlaylistFollowers_Response = void
/**
 * PUT /users/{user_id}/playlists/{playlist_id}/followers
 *
 * [Follow a Playlist](https://developer.spotify.com/web-api/follow-playlist/)
 *
 **/
export const putUserPlaylistFollowers = ApiCommon.requestMaker<
  putUserPlaylistFollowers_Type,
  putUserPlaylistFollowers_Response
>({
  id: "putUserPlaylistFollowers",
  path: "/users/{user_id}/playlists/{playlist_id}/followers",
  verb: "PUT",
  parameters: [
    { name: "body", required: true, in: "body" },
    { name: "playlist_id", required: true, in: "path" },
    { name: "user_id", required: true, in: "path" }
  ]
})

export type getUserPlaylistFollowersContains_Type = {
  ids: string
  playlist_id: string
  user_id: string
}
export type getUserPlaylistFollowersContains_Response = boolean[]
/**
 * GET /users/{user_id}/playlists/{playlist_id}/followers/contains
 *
 * [Check if Users Follow a Playlist](https://developer.spotify.com/web-api/check-user-following-playlist/)
 *
 **/
export const getUserPlaylistFollowersContains = ApiCommon.requestMaker<
  getUserPlaylistFollowersContains_Type,
  getUserPlaylistFollowersContains_Response
>({
  id: "getUserPlaylistFollowersContains",
  path: "/users/{user_id}/playlists/{playlist_id}/followers/contains",
  verb: "GET",
  parameters: [
    { name: "ids", required: true, in: "query" },
    { name: "playlist_id", required: true, in: "path" },
    { name: "user_id", required: true, in: "path" }
  ]
})

export type deleteUserPlaylistTracks_Type = {
  Accept?: string
  body: { tracks: any[] }
  playlist_id: string
  user_id: string
}
export type deleteUserPlaylistTracks_Response = Types.playlist_snapshot
/**
 * DELETE /users/{user_id}/playlists/{playlist_id}/tracks
 *
 * [Remove Tracks from a Playlist](https://developer.spotify.com/web-api/remove-tracks-playlist/)
 *
 **/
export const deleteUserPlaylistTracks = ApiCommon.requestMaker<
  deleteUserPlaylistTracks_Type,
  deleteUserPlaylistTracks_Response
>({
  id: "deleteUserPlaylistTracks",
  path: "/users/{user_id}/playlists/{playlist_id}/tracks",
  verb: "DELETE",
  parameters: [
    { name: "Accept", in: "header" },
    { name: "body", required: true, in: "body" },
    { name: "playlist_id", required: true, in: "path" },
    { name: "user_id", required: true, in: "path" }
  ]
})

export type getUserPlaylistTracks_Type = {
  Accept?: string
  fields?: string
  limit?: number
  market?: string
  offset?: number
  playlist_id: string
  user_id: string
}
export type getUserPlaylistTracks_Response = Types.playlist_track_page
/**
 * GET /users/{user_id}/playlists/{playlist_id}/tracks
 *
 * [Get a Playlist's Tracks](https://developer.spotify.com/web-api/get-playlists-tracks/)
 *
 **/
export const getUserPlaylistTracks = ApiCommon.requestMaker<
  getUserPlaylistTracks_Type,
  getUserPlaylistTracks_Response
>({
  id: "getUserPlaylistTracks",
  path: "/users/{user_id}/playlists/{playlist_id}/tracks",
  verb: "GET",
  parameters: [
    { name: "Accept", in: "header" },
    { name: "fields", in: "query" },
    { name: "limit", required: false, in: "query" },
    { name: "market", required: false, in: "query" },
    { name: "offset", required: false, in: "query" },
    { name: "playlist_id", required: true, in: "path" },
    { name: "user_id", required: true, in: "path" }
  ]
})

export type postUserPlaylistTracks_Type = {
  Accept?: string
  playlist_id: string
  position?: number
  uris: string
  user_id: string
}
export type postUserPlaylistTracks_Response = Types.playlist_snapshot
/**
 * POST /users/{user_id}/playlists/{playlist_id}/tracks
 *
 * [Add Tracks to a Playlist](https://developer.spotify.com/web-api/add-tracks-to-playlist/)
 *
 **/
export const postUserPlaylistTracks = ApiCommon.requestMaker<
  postUserPlaylistTracks_Type,
  postUserPlaylistTracks_Response
>({
  id: "postUserPlaylistTracks",
  path: "/users/{user_id}/playlists/{playlist_id}/tracks",
  verb: "POST",
  parameters: [
    { name: "Accept", in: "header" },
    { name: "playlist_id", required: true, in: "path" },
    { name: "position", required: false, in: "query" },
    { name: "uris", required: true, in: "query" },
    { name: "user_id", required: true, in: "path" }
  ]
})

export type putUserPlaylistTracks_Type = {
  Accept?: string
  body: { uris: any[] }
  playlist_id: string
  user_id: string
}
export type putUserPlaylistTracks_Response = Types.playlist_snapshot
/**
 * PUT /users/{user_id}/playlists/{playlist_id}/tracks
 *
 * [Reorder or replace a Playlist's Tracks](https://developer.spotify.com/web-api/reorder-playlists-tracks/)
 *
 **/
export const putUserPlaylistTracks = ApiCommon.requestMaker<
  putUserPlaylistTracks_Type,
  putUserPlaylistTracks_Response
>({
  id: "putUserPlaylistTracks",
  path: "/users/{user_id}/playlists/{playlist_id}/tracks",
  verb: "PUT",
  parameters: [
    { name: "Accept", in: "header" },
    { name: "body", required: true, in: "body" },
    { name: "playlist_id", required: true, in: "path" },
    { name: "user_id", required: true, in: "path" }
  ]
})
