import * as ApiCommon from "../api-common"
import * as Types from "../api-types"

export type GET_user_profile_Type = {
  "on-behalf-of"?: string
}
export type GET_user_profile_Response = {
  address: string
  address2?: string
  city: string
  company: string
  country: string
  first_name: string
  last_name: string
  phone: string
  state: string
  website: string
  zip: string
}
/**
 * GET /user/profile
 *
 * Keeping your user profile up to date is important. This will help SendGrid to verify who you are as well as contact you should we need to.
 *
 * For more information about your user profile:
 *
 * * [SendGrid Account Settings](https://sendgrid.com/docs/User_Guide/Settings/account.html)
 **/
export const GET_user_profile = ApiCommon.requestMaker<
  GET_user_profile_Type,
  GET_user_profile_Response
>({
  id: "GET_user_profile",
  path: "/user/profile",
  verb: "GET",
  parameters: [{ name: "on-behalf-of", in: "header" }]
})

export type PATCH_user_profile_Type = {
  body?: Types.user_profile
  "on-behalf-of"?: string
}
export type PATCH_user_profile_Response = Types.user_profile
/**
 * PATCH /user/profile
 *
 * **This endpoint allows you to update your current profile details.**
 *
 * Keeping your user profile up to date is important. This will help SendGrid to verify who you are as well as contact you should we need to.
 *
 * For more information about your user profile:
 *
 * * [SendGrid Account Settings](https://sendgrid.com/docs/User_Guide/Settings/account.html)
 *
 * It should be noted that any one or more of the parameters can be updated via the PATCH /user/profile endpoint. The only requirement is that you include at least one when you PATCH.
 **/
export const PATCH_user_profile = ApiCommon.requestMaker<
  PATCH_user_profile_Type,
  PATCH_user_profile_Response
>({
  id: "PATCH_user_profile",
  path: "/user/profile",
  verb: "PATCH",
  parameters: [{ name: "body", in: "body" }, { name: "on-behalf-of", in: "header" }]
})

export type GET_user_account_Type = {
  "on-behalf-of"?: string
}
export type GET_user_account_Response = {
  type: "free" | "paid"
  reputation: number
}
/**
 * GET /user/account
 *
 * **This endpoint allows you to retrieve your user account details.**
 *
 * Your user's account information includes the user's account type and reputation.
 *
 * Keeping your user profile up to date is important. This will help SendGrid to verify who you are as well as contact you should we need to.
 *
 * For more information about your user profile:
 *
 * * [SendGrid Account Settings](https://sendgrid.com/docs/User_Guide/Settings/account.html)
 **/
export const GET_user_account = ApiCommon.requestMaker<
  GET_user_account_Type,
  GET_user_account_Response
>({
  id: "GET_user_account",
  path: "/user/account",
  verb: "GET",
  parameters: [{ name: "on-behalf-of", in: "header" }]
})

export type GET_user_email_Type = {
  "on-behalf-of"?: string
}
export type GET_user_email_Response = { email: string }
/**
 * GET /user/email
 *
 * **This endpoint allows you to retrieve the email address currently on file for your account.**
 *
 * Keeping your user profile up to date is important. This will help SendGrid to verify who you are as well as contact you should we need to.
 *
 * For more information about your user profile:
 *
 * * [SendGrid Account Settings](https://sendgrid.com/docs/User_Guide/Settings/account.html)
 **/
export const GET_user_email = ApiCommon.requestMaker<GET_user_email_Type, GET_user_email_Response>({
  id: "GET_user_email",
  path: "/user/email",
  verb: "GET",
  parameters: [{ name: "on-behalf-of", in: "header" }]
})

export type PUT_user_email_Type = {
  body?: { email?: string }
  "on-behalf-of"?: string
}
export type PUT_user_email_Response = { email: string }
/**
 * PUT /user/email
 *
 * **This endpoint allows you to update the email address currently on file for your account.**
 *
 * Keeping your user profile up to date is important. This will help SendGrid to verify who you are as well as contact you should we need to.
 *
 * For more information about your user profile:
 *
 * * [SendGrid Account Settings](https://sendgrid.com/docs/User_Guide/Settings/account.html)
 **/
export const PUT_user_email = ApiCommon.requestMaker<PUT_user_email_Type, PUT_user_email_Response>({
  id: "PUT_user_email",
  path: "/user/email",
  verb: "PUT",
  parameters: [{ name: "body", in: "body" }, { name: "on-behalf-of", in: "header" }]
})

export type GET_user_username_Type = {
  "on-behalf-of"?: string
}
export type GET_user_username_Response = {
  username: string
  user_id: number
}
/**
 * GET /user/username
 *
 * **This endpoint allows you to retrieve your current account username.**
 *
 * Keeping your user profile up to date is important. This will help SendGrid to verify who you are as well as contact you should we need to.
 *
 * For more information about your user profile:
 *
 * * [SendGrid Account Settings](https://sendgrid.com/docs/User_Guide/Settings/account.html)
 **/
export const GET_user_username = ApiCommon.requestMaker<
  GET_user_username_Type,
  GET_user_username_Response
>({
  id: "GET_user_username",
  path: "/user/username",
  verb: "GET",
  parameters: [{ name: "on-behalf-of", in: "header" }]
})

export type PUT_user_username_Type = {
  body?: { username?: string }
  "on-behalf-of"?: string
}
export type PUT_user_username_Response = { username: string }
/**
 * PUT /user/username
 *
 * **This endpoint allows you to update the username for your account.**
 *
 * Keeping your user profile up to date is important. This will help SendGrid to verify who you are as well as contact you should we need to.
 *
 * For more information about your user profile:
 *
 * * [SendGrid Account Settings](https://sendgrid.com/docs/User_Guide/Settings/account.html)
 **/
export const PUT_user_username = ApiCommon.requestMaker<
  PUT_user_username_Type,
  PUT_user_username_Response
>({
  id: "PUT_user_username",
  path: "/user/username",
  verb: "PUT",
  parameters: [{ name: "body", in: "body" }, { name: "on-behalf-of", in: "header" }]
})

export type GET_user_credits_Type = {
  "on-behalf-of"?: string
}
export type GET_user_credits_Response = {
  remain: number
  total: number
  overage: number
  used: number
  last_reset: string
  next_reset: string
  reset_frequency: string
}
/**
 * GET /user/credits
 *
 * **This endpoint allows you to retrieve the current credit balance for your account.**
 *
 * Your monthly credit allotment limits the number of emails you may send before incurring overage charges. For more information about credits and billing, please visit our [Clssroom](https://sendgrid.com/docs/Classroom/Basics/Billing/billing_info_and_faqs.html).
 **/
export const GET_user_credits = ApiCommon.requestMaker<
  GET_user_credits_Type,
  GET_user_credits_Response
>({
  id: "GET_user_credits",
  path: "/user/credits",
  verb: "GET",
  parameters: [{ name: "on-behalf-of", in: "header" }]
})

export type PUT_user_password_Type = {
  body?: {
    new_password: string
    old_password: string
  }
  "on-behalf-of"?: string
}
export type PUT_user_password_Response = {}
/**
 * PUT /user/password
 *
 * **This endpoint allows you to update your password.**
 *
 * Keeping your user profile up to date is important. This will help SendGrid to verify who you are as well as contact you should we need to.
 *
 * For more information about your user profile:
 *
 * * [SendGrid Account Settings](https://sendgrid.com/docs/User_Guide/Settings/account.html)
 **/
export const PUT_user_password = ApiCommon.requestMaker<
  PUT_user_password_Type,
  PUT_user_password_Response
>({
  id: "PUT_user_password",
  path: "/user/password",
  verb: "PUT",
  parameters: [{ name: "body", in: "body" }, { name: "on-behalf-of", in: "header" }]
})
