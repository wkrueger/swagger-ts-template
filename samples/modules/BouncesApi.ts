import * as ApiCommon from "../api-common"
import * as Types from "../api-types"

export type GET_suppression_bounces_Type = {
  Accept: string
  end_time?: number
  "on-behalf-of"?: string
  start_time?: number
}
export type GET_suppression_bounces_Response = {
  created?: number
  email?: string
  reason?: string
  status?: string
}[]
/**
 * GET /suppression/bounces
 *
 * **This endpoint allows you to retrieve all of your bounces.**
 *
 * A bounced email is when the message is undeliverable and then returned to the server that sent it.
 *
 * For more information see:
 *
 * * [User Guide > Bounces](https://sendgrid.com/docs/User_Guide/Suppressions/bounces.html) for more information
 * * [Glossary > Bounces](https://sendgrid.com/docs/Glossary/Bounces.html)
 **/
export const GET_suppression_bounces = ApiCommon.requestMaker<
  GET_suppression_bounces_Type,
  GET_suppression_bounces_Response
>({
  id: "GET_suppression_bounces",
  path: "/suppression/bounces",
  verb: "GET",
  parameters: [
    { name: "Accept", required: true, in: "header" },
    { name: "end_time", in: "query" },
    { name: "on-behalf-of", in: "header" },
    { name: "start_time", in: "query" }
  ]
})

export type DELETE_suppression_bounces_Type = {
  body?: {
    delete_all?: boolean
    emails?: string[]
  }
  "on-behalf-of"?: string
}
export type DELETE_suppression_bounces_Response = void
/**
 * DELETE /suppression/bounces
 *
 * **This endpoint allows you to delete all of your bounces. You can also use this endpoint to remove a specific email address from your bounce list.**
 *
 * A bounced email is when the message is undeliverable and then returned to the server that sent it.
 *
 * For more information see:
 *
 * * [User Guide > Bounces](https://sendgrid.com/docs/User_Guide/Suppressions/bounces.html) for more information
 * * [Glossary > Bounces](https://sendgrid.com/docs/Glossary/Bounces.html)
 * * [Classroom > List Scrubbing Guide](https://sendgrid.com/docs/Classroom/Deliver/list_scrubbing.html)
 *
 * Note: the `delete_all` and `emails` parameters should be used independently of each other as they have different purposes.
 **/
export const DELETE_suppression_bounces = ApiCommon.requestMaker<
  DELETE_suppression_bounces_Type,
  DELETE_suppression_bounces_Response
>({
  id: "DELETE_suppression_bounces",
  path: "/suppression/bounces",
  verb: "DELETE",
  parameters: [{ name: "body", in: "body" }, { name: "on-behalf-of", in: "header" }]
})

export type GET_suppression_bounces_email_Type = {
  email: string
  "on-behalf-of"?: string
}
export type GET_suppression_bounces_email_Response = {
  created?: number
  email?: string
  reason?: string
  status?: string
}[]
/**
 * GET /suppression/bounces/{email}
 *
 * **This endpoint allows you to retrieve a specific bounce for a given email address.**
 *
 * A bounced email is when the message is undeliverable and then returned to the server that sent it.
 *
 * For more information see:
 *
 * * [User Guide > Bounces](https://sendgrid.com/docs/User_Guide/Suppressions/bounces.html) for more information
 * * [Glossary > Bounces](https://sendgrid.com/docs/Glossary/Bounces.html)
 * * [Classroom > List Scrubbing Guide](https://sendgrid.com/docs/Classroom/Deliver/list_scrubbing.html)
 **/
export const GET_suppression_bounces_email = ApiCommon.requestMaker<
  GET_suppression_bounces_email_Type,
  GET_suppression_bounces_email_Response
>({
  id: "GET_suppression_bounces_email",
  path: "/suppression/bounces/{email}",
  verb: "GET",
  parameters: [
    { name: "email", required: true, in: "path" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type DELETE_suppression_bounces_email_Type = {
  body?: null
  email: string
  email_address: string
  "on-behalf-of"?: string
}
export type DELETE_suppression_bounces_email_Response = void
/**
 * DELETE /suppression/bounces/{email}
 *
 * **This endpoint allows you to remove an email address from your bounce list.**
 *
 * A bounced email is when the message is undeliverable and then returned to the server that sent it. This endpoint allows you to delete a single email addresses from your bounce list.
 *
 * For more information see:
 *
 * * [User Guide > Bounces](https://sendgrid.com/docs/User_Guide/Suppressions/bounces.html) for more information
 * * [Glossary > Bounces](https://sendgrid.com/docs/Glossary/Bounces.html)
 * * [Classroom > List Scrubbing Guide](https://sendgrid.com/docs/Classroom/Deliver/list_scrubbing.html)
 **/
export const DELETE_suppression_bounces_email = ApiCommon.requestMaker<
  DELETE_suppression_bounces_email_Type,
  DELETE_suppression_bounces_email_Response
>({
  id: "DELETE_suppression_bounces_email",
  path: "/suppression/bounces/{email}",
  verb: "DELETE",
  parameters: [
    { name: "body", in: "body" },
    { name: "email", required: true, in: "path" },
    { name: "email_address", required: true, in: "query" },
    { name: "on-behalf-of", in: "header" }
  ]
})
