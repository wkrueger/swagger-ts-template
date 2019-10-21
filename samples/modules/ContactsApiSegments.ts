import * as ApiCommon from "../api-common"
import * as Types from "../api-types"

export type POST_contactdb_segments_Type = {
  body?: Types.contactdb_segments
  "on-behalf-of"?: string
}
export type POST_contactdb_segments_Response = Types.contactdb_segments_with_id
/**
 * POST /contactdb/segments
 *
 * **This endpoint allows you to create a segment.**
 *
 * All recipients in your contactdb will be added or removed automatically depending on whether they match the criteria for this segment.
 *
 * List Id:
 *
 * * Send this to segment from an existing list
 * * Don't send this in order to segment from your entire contactdb.
 *
 * Valid operators for create and update depend on the type of the field you are segmenting:
 *
 * * **Dates:** "eq", "ne", "lt" (before), "gt" (after)
 * * **Text:** "contains", "eq" (is - matches the full field), "ne" (is not - matches any field where the entire field is not the condition value)
 * * **Numbers:** "eq", "lt", "gt"
 * * **Email Clicks and Opens:** "eq" (opened), "ne" (not opened)
 *
 * Segment conditions using "eq" or "ne" for email clicks and opens should provide a "field" of either *clicks.campaign_identifier* or *opens.campaign_identifier*. The condition value should be a string containing the id of a completed campaign.
 *
 * Segments may contain multiple condtions, joined by an "and" or "or" in the "and_or" field. The first condition in the conditions list must have an empty "and_or", and subsequent conditions must all specify an "and_or".
 *
 * The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.
 *
 * For more information about segments in Marketing Campaigns, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/lists.html#-Create-a-Segment).
 **/
export const POST_contactdb_segments = ApiCommon.requestMaker<
  POST_contactdb_segments_Type,
  POST_contactdb_segments_Response
>({
  id: "POST_contactdb_segments",
  path: "/contactdb/segments",
  verb: "POST",
  parameters: [{ name: "body", in: "body" }, { name: "on-behalf-of", in: "header" }]
})

export type GET_contactdb_segments_Type = {
  "on-behalf-of"?: string
}
export type GET_contactdb_segments_Response = { segments: Types.contactdb_segments[] }
/**
 * GET /contactdb/segments
 *
 * **This endpoint allows you to retrieve all of your segments.**
 *
 * The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.
 *
 * For more information about segments in Marketing Campaigns, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/lists.html#-Create-a-Segment).
 **/
export const GET_contactdb_segments = ApiCommon.requestMaker<
  GET_contactdb_segments_Type,
  GET_contactdb_segments_Response
>({
  id: "GET_contactdb_segments",
  path: "/contactdb/segments",
  verb: "GET",
  parameters: [{ name: "on-behalf-of", in: "header" }]
})

export type GET_contactdb_segments_segment_id_Type = {
  "on-behalf-of"?: string
  segment_id: number
}
export type GET_contactdb_segments_segment_id_Response = Types.contactdb_segments
/**
 * GET /contactdb/segments/{segment_id}
 *
 * **This endpoint allows you to retrieve a single segment with the given ID.**
 *
 * The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.
 *
 * For more information about segments in Marketing Campaigns, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/lists.html#-Create-a-Segment).
 **/
export const GET_contactdb_segments_segment_id = ApiCommon.requestMaker<
  GET_contactdb_segments_segment_id_Type,
  GET_contactdb_segments_segment_id_Response
>({
  id: "GET_contactdb_segments_segment_id",
  path: "/contactdb/segments/{segment_id}",
  verb: "GET",
  parameters: [
    { name: "on-behalf-of", in: "header" },
    { name: "segment_id", required: true, in: "query" }
  ]
})

export type PATCH_contactdb_segments_segment_id_Type = {
  body?: {
    name: string
    list_id?: number
    conditions?: Types.contactdb_segments_conditions[]
  }
  "on-behalf-of"?: string
  segment_id?: string
}
export type PATCH_contactdb_segments_segment_id_Response = Types.contactdb_segments
/**
 * PATCH /contactdb/segments/{segment_id}
 *
 * **This endpoint allows you to update a segment.**
 *
 * The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.
 *
 * For more information about segments in Marketing Campaigns, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/lists.html#-Create-a-Segment).
 **/
export const PATCH_contactdb_segments_segment_id = ApiCommon.requestMaker<
  PATCH_contactdb_segments_segment_id_Type,
  PATCH_contactdb_segments_segment_id_Response
>({
  id: "PATCH_contactdb_segments_segment_id",
  path: "/contactdb/segments/{segment_id}",
  verb: "PATCH",
  parameters: [
    { name: "body", in: "body" },
    { name: "on-behalf-of", in: "header" },
    { name: "segment_id", in: "query" }
  ]
})

export type DELETE_contactdb_segments_segment_id_Type = {
  body?: null
  delete_contacts?: boolean
  "on-behalf-of"?: string
  segment_id: string
}
export type DELETE_contactdb_segments_segment_id_Response = void
/**
 * DELETE /contactdb/segments/{segment_id}
 *
 * **This endpoint allows you to delete a segment from your recipients database.**
 *
 * You also have the option to delete all the contacts from your Marketing Campaigns recipient database who were in this segment.
 *
 * The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.
 *
 * For more information about segments in Marketing Campaigns, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/lists.html#-Create-a-Segment).
 **/
export const DELETE_contactdb_segments_segment_id = ApiCommon.requestMaker<
  DELETE_contactdb_segments_segment_id_Type,
  DELETE_contactdb_segments_segment_id_Response
>({
  id: "DELETE_contactdb_segments_segment_id",
  path: "/contactdb/segments/{segment_id}",
  verb: "DELETE",
  parameters: [
    { name: "body", in: "body" },
    { name: "delete_contacts", in: "query" },
    { name: "on-behalf-of", in: "header" },
    { name: "segment_id", required: true, in: "path" }
  ]
})

export type GET_contactdb_segments_segment_id_recipients_Type = {
  "on-behalf-of"?: string
  page?: number
  page_size?: number
  segment_id: number
}
export type GET_contactdb_segments_segment_id_recipients_Response = {
  recipients: Types.contactdb_recipient[]
}
/**
 * GET /contactdb/segments/{segment_id}/recipients
 *
 * **This endpoint allows you to retrieve all of the recipients in a segment with the given ID.**
 *
 * The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.
 *
 * For more information about segments in Marketing Campaigns, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/lists.html#-Create-a-Segment).
 **/
export const GET_contactdb_segments_segment_id_recipients = ApiCommon.requestMaker<
  GET_contactdb_segments_segment_id_recipients_Type,
  GET_contactdb_segments_segment_id_recipients_Response
>({
  id: "GET_contactdb_segments_segment_id_recipients",
  path: "/contactdb/segments/{segment_id}/recipients",
  verb: "GET",
  parameters: [
    { name: "on-behalf-of", in: "header" },
    { name: "page", in: "query" },
    { name: "page_size", in: "query" },
    { name: "segment_id", required: true, in: "path" }
  ]
})
