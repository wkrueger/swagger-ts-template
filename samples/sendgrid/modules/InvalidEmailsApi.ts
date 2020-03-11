import * as ApiCommon from "../api-common"
// @ts-ignore
import * as Types from "../api-types"

export type GET_suppression_invalid_emails_Type = {
  end_time?: number
  limit?: number
  offset?: number
  "on-behalf-of"?: string
  start_time?: number
}
export type GET_suppression_invalid_emails_Response = {
  created: number
  email: string
  reason: string
}[]
/**
 * GET /suppression/invalid_emails
 *
 * **This endpoint allows you to retrieve a list of all invalid email addresses.**
 *
 * An invalid email occurs when you attempt to send email to an address that is formatted in a manner that does not meet internet email format standards or the email does not exist at the recipient’s mail server.
 *
 * Examples include addresses without the “@” sign or addresses that include certain special characters and/or spaces. This response can come from our own server or the recipient mail server.
 *
 * For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/invalid_emails.html).
 **/
export const GET_suppression_invalid_emails = ApiCommon.requestMaker<
  GET_suppression_invalid_emails_Type,
  GET_suppression_invalid_emails_Response
>({
  id: "GET_suppression_invalid_emails",
  path: "/suppression/invalid_emails",
  verb: "GET",
  parameters: [
    { name: "end_time", in: "query" },
    { name: "limit", in: "query" },
    { name: "offset", in: "query" },
    { name: "on-behalf-of", in: "header" },
    { name: "start_time", in: "query" }
  ]
})

export type DELETE_suppression_invalid_emails_Type = {
  body?: {
    delete_all?: boolean
    emails?: string[]
  }
  "on-behalf-of"?: string
}
export type DELETE_suppression_invalid_emails_Response = void
/**
 * DELETE /suppression/invalid_emails
 *
 * **This endpoint allows you to remove email addresses from your invalid email address list.**
 *
 * There are two options for deleting invalid email addresses:
 *
 * 1) You can delete all invalid email addresses by setting `delete_all` to true in the request body.
 * 2) You can delete some invalid email addresses by specifying certain addresses in an array in the request body.
 *
 * An invalid email occurs when you attempt to send email to an address that is formatted in a manner that does not meet internet email format standards or the email does not exist at the recipient’s mail server.
 *
 * Examples include addresses without the “@” sign or addresses that include certain special characters and/or spaces. This response can come from our own server or the recipient mail server.
 *
 * For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/invalid_emails.html).
 **/
export const DELETE_suppression_invalid_emails = ApiCommon.requestMaker<
  DELETE_suppression_invalid_emails_Type,
  DELETE_suppression_invalid_emails_Response
>({
  id: "DELETE_suppression_invalid_emails",
  path: "/suppression/invalid_emails",
  verb: "DELETE",
  parameters: [
    { name: "body", in: "body" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type GET_suppression_invalid_emails_email_Type = {
  email: string
  "on-behalf-of"?: string
}
export type GET_suppression_invalid_emails_email_Response = {
  created: number
  email: string
  reason: string
}[]
/**
 * GET /suppression/invalid_emails/{email}
 *
 * **This endpoint allows you to retrieve a specific invalid email addresses.**
 *
 * An invalid email occurs when you attempt to send email to an address that is formatted in a manner that does not meet internet email format standards or the email does not exist at the recipient’s mail server.
 *
 * Examples include addresses without the “@” sign or addresses that include certain special characters and/or spaces. This response can come from our own server or the recipient mail server.
 *
 * For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/invalid_emails.html).
 **/
export const GET_suppression_invalid_emails_email = ApiCommon.requestMaker<
  GET_suppression_invalid_emails_email_Type,
  GET_suppression_invalid_emails_email_Response
>({
  id: "GET_suppression_invalid_emails_email",
  path: "/suppression/invalid_emails/{email}",
  verb: "GET",
  parameters: [
    { name: "Authorization", required: true, in: "header" },
    { name: "email", required: true, in: "path" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type DELETE_suppression_invalid_emails_email_Type = {
  body?: null
  email: string
  "on-behalf-of"?: string
}
export type DELETE_suppression_invalid_emails_email_Response = void
/**
 * DELETE /suppression/invalid_emails/{email}
 *
 * **This endpoint allows you to remove a specific email address from the invalid email address list.**
 *
 * An invalid email occurs when you attempt to send email to an address that is formatted in a manner that does not meet internet email format standards or the email does not exist at the recipient’s mail server.
 *
 * Examples include addresses without the “@” sign or addresses that include certain special characters and/or spaces. This response can come from our own server or the recipient mail server.
 *
 * For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/invalid_emails.html).
 **/
export const DELETE_suppression_invalid_emails_email = ApiCommon.requestMaker<
  DELETE_suppression_invalid_emails_email_Type,
  DELETE_suppression_invalid_emails_email_Response
>({
  id: "DELETE_suppression_invalid_emails_email",
  path: "/suppression/invalid_emails/{email}",
  verb: "DELETE",
  parameters: [
    { name: "Authorization", required: true, in: "header" },
    { name: "body", in: "body" },
    { name: "email", required: true, in: "path" },
    { name: "on-behalf-of", in: "header" }
  ]
})
