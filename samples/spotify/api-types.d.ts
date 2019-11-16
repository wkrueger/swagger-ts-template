export interface album {
  /**
   *  The type of the album: one of 'album', 'single', or 'compilation'.
   */
  album_type?: string
  /**
   *  The artists of the album. Each artist object includes a link in href to more detailed information about the artist.
   */
  artists?: artist[]
  /**
   *  The markets in which the album is available: ISO 3166-1 alpha-2 country codes. Note that an album is considered available in a market when at least 1 of its tracks is available in that market.
   */
  available_markets?: string[]
  /**
   *  The copyright statements of the album.
   */
  copyrights?: {
    /**
     *  The copyright text for this album.
     */
    text?: string
    /**
     *  The type of copyright: C = the copyright, P = the sound recording (performance) copyright.
     */
    type?: string
  }[]
  /**
   *  Known external IDs for this album.
   */
  external_ids?: {}
  /**
   *  Known external URLs for this album.
   */
  external_urls?: {}
  /**
   *  A list of the genres used to classify the album. For example: 'Prog Rock', 'Post-Grunge'. (If not yet classified, the array is empty.)
   */
  genres?: string[]
  /**
   *  A link to the Web API endpoint providing full details of the album.
   */
  href?: string
  /**
   *  The Spotify ID for the album.
   */
  id?: string
  /**
   *  The cover art for the album in various sizes, widest first.
   */
  images?: image[]
  /**
   *  The name of the album.
   */
  name?: string
  /**
   *  The popularity of the album. The value will be between 0 and 100, with 100 being the most popular. The popularity is calculated from the popularity of the album's individual tracks.
   */
  popularity?: number
  /**
   *  The date the album was first released, for example '1981-12-15'. Depending on the precision, it might be shown as '1981' or '1981-12'.
   */
  release_date?: string
  /**
   *  The precision with which release_date value is known: 'year', 'month', or 'day'.
   */
  release_date_precision?: string
  tracks?: track_simple_page
  /**
   *  The object type: 'album'.
   */
  type?: string
  /**
   *  The Spotify URI for the album.
   */
  uri?: string
}

export interface user_profile {
  /**
   *  The name displayed on the user's profile.
   */
  displayName?: string
  /**
   *  Known external URLs for this user.
   */
  external_urls?: {}
  followers?: followers
  /**
   *  A link to the Web API endpoint for this user.
   */
  href?: string
  /**
   *  The Spotify ID for this user.
   */
  id?: string
  /**
   *  The object type: 'user'
   */
  type?: string
  /**
   *  The Spotify URI for the user.
   */
  uri?: string
}

export interface album_simple_page {
  /**
   *  A link to the Web API endpoint returning the full result of the request.
   */
  href?: string
  /**
   *  The requested data.
   */
  items?: album_simple[]
  /**
   *  The maximum number of items in the response (as set in the query or by default).
   */
  limit?: number
  /**
   *  URL to the next page of items. (null if none)
   */
  next?: string
  /**
   *  The offset of the items returned (as set in the query or by default).
   */
  offset?: number
  /**
   *  URL to the previous page of items. (null if none)
   */
  previous?: string
  /**
   *  The total number of items available to return.
   */
  total?: number
}

export interface album_track_page {
  /**
   *  A link to the Web API endpoint returning the full result of the request.
   */
  href?: string
  /**
   *  The requested data.
   */
  items?: track_simple[]
  /**
   *  The maximum number of items in the response (as set in the query or by default).
   */
  limit?: number
  /**
   *  URL to the next page of items. (null if none)
   */
  next?: string
  /**
   *  The offset of the items returned (as set in the query or by default).
   */
  offset?: number
  /**
   *  URL to the previous page of items. (null if none)
   */
  previous?: string
  /**
   *  The total number of items available to return.
   */
  total?: number
}

export interface artist {
  /**
   *  Known external URLs for this artist.
   */
  external_urls?: {}
  followers?: followers
  /**
   *  A list of the genres the artist is associated with. For example: 'Prog Rock', 'Post-Grunge'. (If not yet classified, the array is empty.)
   */
  genres?: string[]
  /**
   *  A link to the Web API endpoint providing full details of the artist.
   */
  href?: string
  /**
   *  The Spotify ID for the artist.
   */
  id?: string
  /**
   *  Images of the artist in various sizes, widest first.
   */
  images?: image[]
  /**
   *  The name of the artist.
   */
  name?: string
  /**
   *  The popularity of the artist. The value will be between 0 and 100, with 100 being the most popular. The artist's popularity is calculated from the popularity of all the artist's tracks.
   */
  popularity?: number
  /**
   *  The object type: 'artist'
   */
  type?: string
  /**
   *  The Spotify URI for the artist.
   */
  uri?: string
}

export interface artist_simple {
  /**
   *  Known external URLs for this artist.
   */
  external_urls?: {}
  /**
   *  A link to the Web API endpoint providing full details of the artist.
   */
  href?: string
  /**
   *  The Spotify ID for the artist.
   */
  id?: string
  /**
   *  The name of the artist.
   */
  name?: string
  /**
   *  The object type: 'artist'
   */
  type?: string
  /**
   *  The Spotify URI for the artist.
   */
  uri?: string
}

export interface category {
  /**
   *  A link to the Web API endpoint returning full details of the category.
   */
  href?: string
  icons?: image[]
  /**
   *  The Spotify category ID of the category.
   */
  id?: string
  /**
   *  The name of the category.
   */
  name?: string
}

export interface category_page {
  /**
   *  A link to the Web API endpoint returning the full result of the request.
   */
  href?: string
  /**
   *  The requested data.
   */
  items?: category[]
  /**
   *  The maximum number of items in the response (as set in the query or by default).
   */
  limit?: number
  /**
   *  URL to the next page of items. (null if none)
   */
  next?: string
  /**
   *  The offset of the items returned (as set in the query or by default).
   */
  offset?: number
  /**
   *  URL to the previous page of items. (null if none)
   */
  previous?: string
  /**
   *  The total number of items available to return.
   */
  total?: number
}

export interface current_user_profile {
  /**
   *  The user's date-of-birth. This field is only available when the current user has granted access to the user-read-birthdate scope.
   */
  birthdate?: string
  /**
   *  The country of the user, as set in the user's account profile. An ISO 3166-1 alpha-2 country code. This field is only available when the current user has granted access to the user-read-private scope.
   */
  country?: string
  /**
   *  The name displayed on the user's profile.
   */
  displayName?: string
  /**
   *  The user's email address, as entered by the user when creating their account. This email address is unverified; there is no proof that it actually belongs to the user. This field is only available when the current user has granted access to the user-read-email scope.
   */
  email?: string
  /**
   *  Known external URLs for this user.
   */
  external_urls?: {}
  followers?: followers
  /**
   *  A link to the Web API endpoint for this user.
   */
  href?: string
  /**
   *  The Spotify ID for this user.
   */
  id?: string
  /**
   *  The user's Spotify subscription level: 'premium', 'free', etc. (The subscription level 'open' can be considered the same as 'free'.) This field is only available when the current user has granted access to the user-read-private scope.
   */
  product?: string
  /**
   *  The object type: 'user'
   */
  type?: string
  /**
   *  The Spotify URI for the user.
   */
  uri?: string
}

export interface featured_playlists {
  /**
   *  A sentence describing the context for the featured playlists.
   */
  message?: string
  playlists?: playlist_simple_page
}

export interface followers {
  /**
   *  A link to the Web API endpoint providing full details of the followers; null if not available.
   */
  href?: string
  /**
   *  The total number of followers.
   */
  total?: number
}

export interface image {
  /**
   *  The image height in pixels. If unknown: null or not returned.
   */
  height?: number
  /**
   *  The source URL of the image.
   */
  url?: string
  /**
   *  The image width in pixels. If unknown: null or not returned.
   */
  width?: number
}

export interface playlist {
  /**
   *  True if the owner allows other users to modify the playlist.
   */
  collaborative?: boolean
  /**
   *  The playlist description. Only returned for modified, verified playlists, otherwise null.
   */
  description?: string
  /**
   *  Known external URLs for this album.
   */
  external_urls?: {}
  /**
   *  Information about the followers of the playlist.
   */
  followers?: {
    /**
     *  A link to the Web API endpoint providing full details of the followers; null if not available.
     */
    href?: string
    /**
     *  The total number of followers.
     */
    total?: number
  }
  /**
   *  A link to the Web API endpoint providing full details of the playlist.
   */
  href?: string
  /**
   *  The Spotify ID of the playlist.
   */
  id?: string
  /**
   *  The cover art for the album in various sizes, widest first.
   */
  images?: image[]
  /**
   *  The name of the playlist.
   */
  name?: string
  owner?: user_profile
  /**
   *  The playlist's public/private status: true the playlist is public, false the playlist is private, null the playlist status is not relevant. For more about public/private status, see Working with Playlists.
   */
  public?: boolean
  /**
   *  The version identifier for the current playlist. Can be supplied in other requests to target a specific playlist version
   */
  snapshot_id?: string
  tracks?: playlist_track_page
  /**
   *  The object type: 'playlist'.
   */
  type?: string
  /**
   *  Spotify URI of the playlist.
   */
  uri?: string
}

export interface album_simple {
  /**
   *  The type of the album: one of 'album', 'single', or 'compilation'.
   */
  album_type?: string
  /**
   *  The markets in which the album is available: ISO 3166-1 alpha-2 country codes. Note that an album is considered available in a market when at least 1 of its tracks is available in that market.
   */
  available_markets?: string[]
  /**
   *  Known external URLs for this album.
   */
  external_urls?: {}
  /**
   *  A link to the Web API endpoint providing full details of the album.
   */
  href?: string
  /**
   *  The Spotify ID for the album.
   */
  id?: string
  /**
   *  The cover art for the album in various sizes, widest first.
   */
  images?: image[]
  /**
   *  The name of the album.
   */
  name?: string
  /**
   *  The object type: 'album'.
   */
  type?: string
  /**
   *  The Spotify URI for the album.
   */
  uri?: string
}

export interface playlist_simple_page {
  /**
   *  A link to the Web API endpoint returning the full result of the request.
   */
  href?: string
  /**
   *  The requested data.
   */
  items?: playlist_simple[]
  /**
   *  The maximum number of items in the response (as set in the query or by default).
   */
  limit?: number
  /**
   *  URL to the next page of items. (null if none)
   */
  next?: string
  /**
   *  The offset of the items returned (as set in the query or by default).
   */
  offset?: number
  /**
   *  URL to the previous page of items. (null if none)
   */
  previous?: string
  /**
   *  The total number of items available to return.
   */
  total?: number
}

export interface playlist_snapshot {
  /**
   *  The version identifier for the modified playlist. Can be supplied in other requests to target a specific playlist version.
   */
  snapshot_id?: string
}

export interface playlist_track {
  /**
   *  The date and time the track was added in ISO 8601 format. Note that some very old playlists may return null in this field.
   */
  added_at?: string
  added_by?: user_profile
  /**
   *  Whether this track is a [local file](https://developer.spotify.com/web-api/local-files-spotify-playlists/) or not.
   */
  is_local?: boolean
  track?: track
}

export interface playlist_track_page {
  /**
   *  A link to the Web API endpoint returning the full result of the request.
   */
  href?: string
  /**
   *  The requested data.
   */
  items?: playlist_track[]
  /**
   *  The maximum number of items in the response (as set in the query or by default).
   */
  limit?: number
  /**
   *  URL to the next page of items. (null if none)
   */
  next?: string
  /**
   *  The offset of the items returned (as set in the query or by default).
   */
  offset?: number
  /**
   *  URL to the previous page of items. (null if none)
   */
  previous?: string
  /**
   *  The total number of items available to return.
   */
  total?: number
}

export interface saved_track {
  /**
   *  The date and time the track was added in ISO 8601 format. Note that some very old playlists may return null in this field.
   */
  added_at?: string
  track?: track
}

export interface saved_track_page {
  /**
   *  A link to the Web API endpoint returning the full result of the request.
   */
  href?: string
  /**
   *  The requested data.
   */
  items?: saved_track[]
  /**
   *  The maximum number of items in the response (as set in the query or by default).
   */
  limit?: number
  /**
   *  URL to the next page of items. (null if none)
   */
  next?: string
  /**
   *  The offset of the items returned (as set in the query or by default).
   */
  offset?: number
  /**
   *  URL to the previous page of items. (null if none)
   */
  previous?: string
  /**
   *  The total number of items available to return.
   */
  total?: number
}

export interface search {
  /**
   *  Present if the type of search includes 'album'.
   */
  albums?: {
    /**
     *  A link to the Web API endpoint returning the full result of the request.
     */
    href?: string
    /**
     *  The requested data.
     */
    items?: album_simple[]
    /**
     *  The maximum number of items in the response (as set in the query or by default).
     */
    limit?: number
    /**
     *  URL to the next page of items. (null if none)
     */
    next?: string
    /**
     *  The offset of the items returned (as set in the query or by default).
     */
    offset?: number
    /**
     *  URL to the previous page of items. (null if none)
     */
    previous?: string
    /**
     *  The total number of items available to return.
     */
    total?: number
  }
  /**
   *  Present if the type of search includes 'artist'.
   */
  artists?: {
    /**
     *  A link to the Web API endpoint returning the full result of the request.
     */
    href?: string
    /**
     *  The requested data.
     */
    items?: artist[]
    /**
     *  The maximum number of items in the response (as set in the query or by default).
     */
    limit?: number
    /**
     *  URL to the next page of items. (null if none)
     */
    next?: string
    /**
     *  The offset of the items returned (as set in the query or by default).
     */
    offset?: number
    /**
     *  URL to the previous page of items. (null if none)
     */
    previous?: string
    /**
     *  The total number of items available to return.
     */
    total?: number
  }
  /**
   *  Present if the type of search includes 'track'.
   */
  tracks?: {
    /**
     *  A link to the Web API endpoint returning the full result of the request.
     */
    href?: string
    /**
     *  The requested data.
     */
    items?: track[]
    /**
     *  The maximum number of items in the response (as set in the query or by default).
     */
    limit?: number
    /**
     *  URL to the next page of items. (null if none)
     */
    next?: string
    /**
     *  The offset of the items returned (as set in the query or by default).
     */
    offset?: number
    /**
     *  URL to the previous page of items. (null if none)
     */
    previous?: string
    /**
     *  The total number of items available to return.
     */
    total?: number
  }
}

export interface track {
  album?: album_simple
  /**
   *  The artists who performed the track. Each artist object includes a link in href to more detailed information about the artist.
   */
  artists?: artist_simple[]
  /**
   *  A list of the countries in which the track can be played, identified by their ISO 3166-1 alpha-2 code.
   */
  available_markets?: string[]
  /**
   *  The disc number (usually 1 unless the album consists of more than one disc).
   */
  disc_number?: number
  /**
   *  The track length in milliseconds.
   */
  duration_ms?: number
  /**
   *  Whether or not the track has explicit lyrics (true = yes it does; false = no it does not OR unknown).
   */
  explicit?: boolean
  /**
   *  Known external IDs for the track.
   */
  external_ids?: {}
  /**
   *  Known external URLs for this track.
   */
  external_urls?: {}
  /**
   *  A link to the Web API endpoint providing full details of the track.
   */
  href?: string
  /**
   *  The Spotify ID for the track.
   */
  id?: string
  /**
   *  Part of the response when Track Relinking is applied. If true, the track is playable in the given market. Otherwise false.
   */
  is_playable?: boolean
  /**
   *  Part of the response when Track Relinking is applied, and the requested track has been replaced with different track. The track in the linked_from object contains information about the originally requested track.
   */
  linked_from?: {
    /**
     *  Known external URLs for this track.
     */
    external_urls?: {}
    /**
     *  A link to the Web API endpoint providing full details of the track.
     */
    href?: string
    /**
     *  The Spotify ID for the track.
     */
    id?: string
    /**
     *  The object type: 'track'.
     */
    type?: string
    /**
     *  The Spotify URI for the track.
     */
    uri?: string
  }
  /**
   *  The name of the track.
   */
  name?: string
  /**
   *  A URL to a 30 second preview (MP3 format) of the track.
   */
  preview_url?: string
  /**
   *  The number of the track. If an album has several discs, the track number is the number on the specified disc.
   */
  track_number?: number
  /**
   *  The object type: 'track'.
   */
  type?: string
  /**
   *  The Spotify URI for the track.
   */
  uri?: string
}

export interface track_simple {
  /**
   *  The artists who performed the track. Each artist object includes a link in href to more detailed information about the artist.
   */
  artists?: artist_simple[]
  /**
   *  A list of the countries in which the track can be played, identified by their ISO 3166-1 alpha-2 code.
   */
  available_markets?: string[]
  /**
   *  The disc number (usually 1 unless the album consists of more than one disc).
   */
  disc_number?: number
  /**
   *  The track length in milliseconds.
   */
  duration_ms?: number
  /**
   *  Whether or not the track has explicit lyrics (true = yes it does; false = no it does not OR unknown).
   */
  explicit?: boolean
  /**
   *  Known external URLs for this track.
   */
  external_urls?: {}
  /**
   *  A link to the Web API endpoint providing full details of the track.
   */
  href?: string
  /**
   *  The Spotify ID for the track.
   */
  id?: string
  /**
   *  Part of the response when Track Relinking is applied. If true, the track is playable in the given market. Otherwise false.
   */
  is_playable?: boolean
  /**
   *  Part of the response when Track Relinking is applied, and the requested track has been replaced with different track. The track in the linked_from object contains information about the originally requested track.
   */
  linked_from?: {
    /**
     *  Known external URLs for this track.
     */
    external_urls?: {}
    /**
     *  A link to the Web API endpoint providing full details of the track.
     */
    href?: string
    /**
     *  The Spotify ID for the track.
     */
    id?: string
    /**
     *  The object type: 'track'.
     */
    type?: string
    /**
     *  The Spotify URI for the track.
     */
    uri?: string
  }
  /**
   *  The name of the track.
   */
  name?: string
  /**
   *  A URL to a 30 second preview (MP3 format) of the track.
   */
  preview_url?: string
  /**
   *  The number of the track. If an album has several discs, the track number is the number on the specified disc.
   */
  track_number?: number
  /**
   *  The object type: 'track'.
   */
  type?: string
  /**
   *  The Spotify URI for the track.
   */
  uri?: string
}

export interface track_simple_page {
  /**
   *  A link to the Web API endpoint returning the full result of the request.
   */
  href?: string
  /**
   *  The requested data.
   */
  items?: track_simple[]
  /**
   *  The maximum number of items in the response (as set in the query or by default).
   */
  limit?: number
  /**
   *  URL to the next page of items. (null if none)
   */
  next?: string
  /**
   *  The offset of the items returned (as set in the query or by default).
   */
  offset?: number
  /**
   *  URL to the previous page of items. (null if none)
   */
  previous?: string
  /**
   *  The total number of items available to return.
   */
  total?: number
}

export interface user_followed {
  /**
   *  Present if the type of followe items is 'artist'.
   */
  artists?: {
    /**
     *  The cursors used to find the next set of items.
     */
    cursor?: {
      /**
       *  The cursor to use as key to find the next page of items.
       */
      after?: string
    }
    /**
     *  A link to the Web API endpoint returning the full result of the request.
     */
    href?: string
    /**
     *  The requested data.
     */
    items?: artist[]
    /**
     *  The maximum number of items in the response (as set in the query or by default).
     */
    limit?: number
    /**
     *  URL to the next page of items. (null if none)
     */
    next?: string
    /**
     *  The total number of items available to return.
     */
    total?: number
  }
}

export interface playlist_simple {
  /**
   *  True if the owner allows other users to modify the playlist.
   */
  collaborative?: boolean
  /**
   *  Known external URLs for this album.
   */
  external_urls?: {}
  /**
   *  A link to the Web API endpoint providing full details of the playlist.
   */
  href?: string
  /**
   *  The Spotify ID of the playlist.
   */
  id?: string
  /**
   *  The cover art for the album in various sizes, widest first.
   */
  images?: image[]
  /**
   *  The name of the playlist.
   */
  name?: string
  owner?: user_profile
  /**
   *  The playlist's public/private status: true the playlist is public, false the playlist is private, null the playlist status is not relevant. For more about public/private status, see Working with Playlists.
   */
  public?: boolean
  /**
   *  The version identifier for the current playlist. Can be supplied in other requests to target a specific playlist version
   */
  snapshot_id?: string
  tracks?: {
    /**
     *  A link to the Web API endpoint returning the full result of the request.
     */
    href?: string
    /**
     *  The total number of tracks available to return.
     */
    total?: number
  }
  /**
   *  The object type: 'playlist'.
   */
  type?: string
  /**
   *  Spotify URI of the playlist.
   */
  uri?: string
}
