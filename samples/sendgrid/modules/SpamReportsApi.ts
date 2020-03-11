import * as ApiCommon from "../api-common"
// @ts-ignore
import * as Types from "../api-types"

export type GET_suppression_spam_reports_Type = {
  end_time?: number
  limit?: number
  offset?: number
  "on-behalf-of"?: string
  start_time?: number
}
export type GET_suppression_spam_reports_Response = {
  created: number
  email: string
  ip: string
}[]
/**
 * GET /suppression/spam_reports
 *
 * **This endpoint allows you to retrieve all spam reports.**
 *
 * [Spam reports](https://sendgrid.com/docs/Glossary/spam_reports.html) happen when a recipient indicates that they think your email is [spam](https://sendgrid.com/docs/Glossary/spam.html) and then their email provider reports this to SendGrid.
 *
 * For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/spam_reports.html).
 **/
export const GET_suppression_spam_reports = ApiCommon.requestMaker<
  GET_suppression_spam_reports_Type,
  GET_suppression_spam_reports_Response
>({
  id: "GET_suppression_spam_reports",
  path: "/suppression/spam_reports",
  verb: "GET",
  parameters: [
    { name: "end_time", in: "query" },
    { name: "limit", in: "query" },
    { name: "offset", in: "query" },
    { name: "on-behalf-of", in: "header" },
    { name: "start_time", in: "query" }
  ]
})

export type DELETE_suppression_spam_reports_Type = {
  body?: {
    delete_all?: boolean
    emails?: string[]
  }
  "on-behalf-of"?: string
}
export type DELETE_suppression_spam_reports_Response = void
/**
 * DELETE /suppression/spam_reports
 *
 * **This endpoint allows you to delete your spam reports.**
 *
 * There are two options for deleting spam reports:
 *
 * 1) You can delete all spam reports by setting "delete_all" to true in the request body.
 * 2) You can delete some spam reports by specifying the email addresses in an array in the request body.
 *
 * [Spam reports](https://sendgrid.com/docs/Glossary/spam_reports.html) happen when a recipient indicates that they think your email is [spam](https://sendgrid.com/docs/Glossary/spam.html) and then their email provider reports this to SendGrid.
 *
 * For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/spam_reports.html).
 **/
export const DELETE_suppression_spam_reports = ApiCommon.requestMaker<
  DELETE_suppression_spam_reports_Type,
  DELETE_suppression_spam_reports_Response
>({
  id: "DELETE_suppression_spam_reports",
  path: "/suppression/spam_reports",
  verb: "DELETE",
  parameters: [
    { name: "body", in: "body" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type GET_suppression_spam_reports_email_Type = {
  email: string
  "on-behalf-of"?: string
}
export type GET_suppression_spam_reports_email_Response = {
  created: number
  email: string
  ip: string
}[]
/**
 * GET /suppression/spam_reports/{email}
 *
 * **This endpoint allows you to retrieve a specific spam report.**
 *
 * [Spam reports](https://sendgrid.com/docs/Glossary/spam_reports.html) happen when a recipient indicates that they think your email is [spam](https://sendgrid.com/docs/Glossary/spam.html) and then their email provider reports this to SendGrid.
 *
 * For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/spam_reports.html).
 **/
export const GET_suppression_spam_reports_email = ApiCommon.requestMaker<
  GET_suppression_spam_reports_email_Type,
  GET_suppression_spam_reports_email_Response
>({
  id: "GET_suppression_spam_reports_email",
  path: "/suppression/spam_reports/{email}",
  verb: "GET",
  parameters: [
    { name: "email", required: true, in: "path" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type DELETE_suppression_spam_reports_email_Type = {
  body?: null
  email: string
  "on-behalf-of"?: string
}
export type DELETE_suppression_spam_reports_email_Response = void
/**
 * DELETE /suppression/spam_reports/{email}
 *
 * **This endpoint allows you to delete a specific spam report.**
 *
 * [Spam reports](https://sendgrid.com/docs/Glossary/spam_reports.html) happen when a recipient indicates that they think your email is [spam](https://sendgrid.com/docs/Glossary/spam.html) and then their email provider reports this to SendGrid.
 *
 * For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/spam_reports.html).
 **/
export const DELETE_suppression_spam_reports_email = ApiCommon.requestMaker<
  DELETE_suppression_spam_reports_email_Type,
  DELETE_suppression_spam_reports_email_Response
>({
  id: "DELETE_suppression_spam_reports_email",
  path: "/suppression/spam_reports/{email}",
  verb: "DELETE",
  parameters: [
    { name: "body", in: "body" },
    { name: "email", required: true, in: "path" },
    { name: "on-behalf-of", in: "header" }
  ]
})
