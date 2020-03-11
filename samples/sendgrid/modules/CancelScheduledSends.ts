import * as ApiCommon from "../api-common"
// @ts-ignore
import * as Types from "../api-types"

export type POST_mail_batch_Type = {
  body?: null
}
export type POST_mail_batch_Response = Types.mail_batch_id
/**
 * POST /mail/batch
 *
 * **This endpoint allows you to generate a new batch ID. This batch ID can be associated with scheduled sends via the mail/send endpoint.**
 *
 * If you set the SMTPAPI header `batch_id`, it allows you to then associate multiple scheduled mail/send requests together with the same ID. Then at anytime up to 10 minutes before the schedule date, you can cancel all of the mail/send requests that have this batch ID by calling the Cancel Scheduled Send endpoint.
 *
 * More Information:
 *
 * * [Scheduling Parameters > Batch ID](https://sendgrid.com/docs/API_Reference/SMTP_API/scheduling_parameters.html)
 **/
export const POST_mail_batch = ApiCommon.requestMaker<
  POST_mail_batch_Type,
  POST_mail_batch_Response
>({
  id: "POST_mail_batch",
  path: "/mail/batch",
  verb: "POST",
  parameters: [{ name: "body", in: "body" }]
})

export type GET_mail_batch_batch_id_Type = {
  batch_id: string
}
export type GET_mail_batch_batch_id_Response = Types.mail_batch_id
/**
 * GET /mail/batch/{batch_id}
 *
 * **This endpoint allows you to validate a batch ID.**
 *
 * If you set the SMTPAPI header `batch_id`, it allows you to then associate multiple scheduled mail/send requests together with the same ID. Then at anytime up to 10 minutes before the schedule date, you can cancel all of the mail/send requests that have this batch ID by calling the Cancel Scheduled Send endpoint.
 *
 * More Information:
 *
 * * [Scheduling Parameters > Batch ID](https://sendgrid.com/docs/API_Reference/SMTP_API/scheduling_parameters.html)
 **/
export const GET_mail_batch_batch_id = ApiCommon.requestMaker<
  GET_mail_batch_batch_id_Type,
  GET_mail_batch_batch_id_Response
>({
  id: "GET_mail_batch_batch_id",
  path: "/mail/batch/{batch_id}",
  verb: "GET",
  parameters: [{ name: "batch_id", required: true, in: "path" }]
})

export type POST_user_scheduled_sends_Type = {
  body?: {
    batch_id: string
    status: "pause" | "cancel"
  }
}
export type POST_user_scheduled_sends_Response = Types.user_scheduled_send_status
/**
 * POST /user/scheduled_sends
 *
 * **This endpoint allows you to cancel or pause an email that has been scheduled to be sent.**
 *
 * If the maximum number of cancellations/pauses are added, HTTP 400 will
 * be returned.
 *
 * The Cancel Scheduled Sends feature allows the customer to cancel a scheduled send based on a Batch ID included in the SMTPAPI header. Scheduled sends cancelled less than 10 minutes before the scheduled time are not guaranteed to be cancelled.
 **/
export const POST_user_scheduled_sends = ApiCommon.requestMaker<
  POST_user_scheduled_sends_Type,
  POST_user_scheduled_sends_Response
>({
  id: "POST_user_scheduled_sends",
  path: "/user/scheduled_sends",
  verb: "POST",
  parameters: [{ name: "body", in: "body" }]
})

export type GET_user_scheduled_sends_Type = {}
export type GET_user_scheduled_sends_Response = Types.user_scheduled_send_status[]
/**
 * GET /user/scheduled_sends
 *
 * **This endpoint allows you to retrieve all cancel/paused scheduled send information.**
 *
 * The Cancel Scheduled Sends feature allows the customer to cancel a scheduled send based on a Batch ID included in the SMTPAPI header. Scheduled sends cancelled less than 10 minutes before the scheduled time are not guaranteed to be cancelled.
 **/
export const GET_user_scheduled_sends = ApiCommon.requestMaker<
  GET_user_scheduled_sends_Type,
  GET_user_scheduled_sends_Response
>({
  id: "GET_user_scheduled_sends",
  path: "/user/scheduled_sends",
  verb: "GET",
  parameters: []
})

export type GET_user_scheduled_sends_batch_id_Type = {
  batch_id: string
}
export type GET_user_scheduled_sends_batch_id_Response = Types.user_scheduled_send_status[]
/**
 * GET /user/scheduled_sends/{batch_id}
 *
 * **This endpoint allows you to retrieve the cancel/paused scheduled send information for a specific `batch_id`.**
 *
 * The Cancel Scheduled Sends feature allows the customer to cancel a scheduled send based on a Batch ID included in the SMTPAPI header. Scheduled sends cancelled less than 10 minutes before the scheduled time are not guaranteed to be cancelled.
 **/
export const GET_user_scheduled_sends_batch_id = ApiCommon.requestMaker<
  GET_user_scheduled_sends_batch_id_Type,
  GET_user_scheduled_sends_batch_id_Response
>({
  id: "GET_user_scheduled_sends_batch_id",
  path: "/user/scheduled_sends/{batch_id}",
  verb: "GET",
  parameters: [{ name: "batch_id", required: true, in: "path" }]
})

export type PATCH_user_scheduled_sends_batch_id_Type = {
  batch_id: string
  body?: { status: "cancel" | "pause" }
}
export type PATCH_user_scheduled_sends_batch_id_Response = void
/**
 * PATCH /user/scheduled_sends/{batch_id}
 *
 * **This endpoint allows you to update the status of a scheduled send for the given `batch_id`.**
 *
 * The Cancel Scheduled Sends feature allows the customer to cancel a scheduled send based on a Batch ID included in the SMTPAPI header. Scheduled sends cancelled less than 10 minutes before the scheduled time are not guaranteed to be cancelled.
 **/
export const PATCH_user_scheduled_sends_batch_id = ApiCommon.requestMaker<
  PATCH_user_scheduled_sends_batch_id_Type,
  PATCH_user_scheduled_sends_batch_id_Response
>({
  id: "PATCH_user_scheduled_sends_batch_id",
  path: "/user/scheduled_sends/{batch_id}",
  verb: "PATCH",
  parameters: [
    { name: "batch_id", required: true, in: "path" },
    { name: "body", in: "body" }
  ]
})

export type DELETE_user_scheduled_sends_batch_id_Type = {
  batch_id: string
  body?: null
}
export type DELETE_user_scheduled_sends_batch_id_Response = void
/**
 * DELETE /user/scheduled_sends/{batch_id}
 *
 * **This endpoint allows you to delete the cancellation/pause of a scheduled send.**
 *
 * The Cancel Scheduled Sends feature allows the customer to cancel a scheduled send based on a Batch ID included in the SMTPAPI header. Scheduled sends cancelled less than 10 minutes before the scheduled time are not guaranteed to be cancelled.
 **/
export const DELETE_user_scheduled_sends_batch_id = ApiCommon.requestMaker<
  DELETE_user_scheduled_sends_batch_id_Type,
  DELETE_user_scheduled_sends_batch_id_Response
>({
  id: "DELETE_user_scheduled_sends_batch_id",
  path: "/user/scheduled_sends/{batch_id}",
  verb: "DELETE",
  parameters: [
    { name: "batch_id", required: true, in: "path" },
    { name: "body", in: "body" }
  ]
})
