import * as ApiCommon from "../api-common"
// @ts-ignore
import * as Types from "../api-types"

export type GET_mail_settings_Type = {
  limit?: number
  offset?: number
  "on-behalf-of"?: string
}
export type GET_mail_settings_Response = {
  result: {
    title: string
    enabled: boolean
    name: string
    description: string
  }[]
}
/**
 * GET /mail_settings
 *
 * **This endpoint allows you to retrieve a list of all mail settings.**
 *
 * Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).
 **/
export const GET_mail_settings = ApiCommon.requestMaker<
  GET_mail_settings_Type,
  GET_mail_settings_Response
>({
  id: "GET_mail_settings",
  path: "/mail_settings",
  verb: "GET",
  parameters: [
    { name: "limit", in: "query" },
    { name: "offset", in: "query" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type GET_mail_settings_bcc_Type = {
  "on-behalf-of"?: string
}
export type GET_mail_settings_bcc_Response = Types.mail_settings_bcc
/**
 * GET /mail_settings/bcc
 *
 * **This endpoint allows you to retrieve your current BCC mail settings.**
 *
 * When the BCC mail setting is enabled, SendGrid will automatically send a blind carbon copy (BCC) to an address for every email sent without adding that address to the header. Please note that only one email address may be entered in this field, if you wish to distribute BCCs to multiple addresses you will need to create a distribution group or use forwarding rules.
 *
 * Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).
 **/
export const GET_mail_settings_bcc = ApiCommon.requestMaker<
  GET_mail_settings_bcc_Type,
  GET_mail_settings_bcc_Response
>({
  id: "GET_mail_settings_bcc",
  path: "/mail_settings/bcc",
  verb: "GET",
  parameters: [{ name: "on-behalf-of", in: "header" }]
})

export type PATCH_mail_settings_bcc_Type = {
  body?: Types.mail_settings_patch
  "on-behalf-of"?: string
}
export type PATCH_mail_settings_bcc_Response = Types.mail_settings_patch
/**
 * PATCH /mail_settings/bcc
 *
 * **This endpoint allows you to update your current BCC mail settings.**
 *
 * When the BCC mail setting is enabled, SendGrid will automatically send a blind carbon copy (BCC) to an address for every email sent without adding that address to the header. Please note that only one email address may be entered in this field, if you wish to distribute BCCs to multiple addresses you will need to create a distribution group or use forwarding rules.
 *
 * Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).
 **/
export const PATCH_mail_settings_bcc = ApiCommon.requestMaker<
  PATCH_mail_settings_bcc_Type,
  PATCH_mail_settings_bcc_Response
>({
  id: "PATCH_mail_settings_bcc",
  path: "/mail_settings/bcc",
  verb: "PATCH",
  parameters: [{ name: "body", in: "body" }, { name: "on-behalf-of", in: "header" }]
})

export type GET_mail_settings_address_whitelist_Type = {
  "on-behalf-of"?: string
}
export type GET_mail_settings_address_whitelist_Response = Types.mail_settings_address_whitelabel
/**
 * GET /mail_settings/address_whitelist
 *
 * **This endpoint allows you to retrieve your current email address whitelist settings.**
 *
 * The address whitelist setting whitelists a specified email address or domain for which mail should never be suppressed. For example, you own the domain “example.com,” and one or more of your recipients use email@example.com addresses, by placing example.com in the address whitelist setting, all bounces, blocks, and unsubscribes logged for that domain will be ignored and sent as if under normal sending conditions.
 *
 * Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).
 **/
export const GET_mail_settings_address_whitelist = ApiCommon.requestMaker<
  GET_mail_settings_address_whitelist_Type,
  GET_mail_settings_address_whitelist_Response
>({
  id: "GET_mail_settings_address_whitelist",
  path: "/mail_settings/address_whitelist",
  verb: "GET",
  parameters: [{ name: "on-behalf-of", in: "header" }]
})

export type PATCH_mail_settings_address_whitelist_Type = {
  body?: {
    enabled?: boolean
    list?: string[]
  }
  "on-behalf-of"?: string
}
export type PATCH_mail_settings_address_whitelist_Response = Types.mail_settings_address_whitelabel
/**
 * PATCH /mail_settings/address_whitelist
 *
 * **This endpoint allows you to update your current email address whitelist settings.**
 *
 * The address whitelist setting whitelists a specified email address or domain for which mail should never be suppressed. For example, you own the domain “example.com,” and one or more of your recipients use email@example.com addresses, by placing example.com in the address whitelist setting, all bounces, blocks, and unsubscribes logged for that domain will be ignored and sent as if under normal sending conditions.
 *
 * Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).
 **/
export const PATCH_mail_settings_address_whitelist = ApiCommon.requestMaker<
  PATCH_mail_settings_address_whitelist_Type,
  PATCH_mail_settings_address_whitelist_Response
>({
  id: "PATCH_mail_settings_address_whitelist",
  path: "/mail_settings/address_whitelist",
  verb: "PATCH",
  parameters: [{ name: "body", in: "body" }, { name: "on-behalf-of", in: "header" }]
})

export type GET_mail_settings_footer_Type = {
  "on-behalf-of"?: string
}
export type GET_mail_settings_footer_Response = Types.mail_settings_footer
/**
 * GET /mail_settings/footer
 *
 * **This endpoint allows you to retrieve your current Footer mail settings.**
 *
 * The footer setting will insert a custom footer at the bottom of the text and HTML bodies. Use the embedded HTML editor and plain text entry fields to create the content of the footers to be inserted into your emails.
 *
 * Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).
 **/
export const GET_mail_settings_footer = ApiCommon.requestMaker<
  GET_mail_settings_footer_Type,
  GET_mail_settings_footer_Response
>({
  id: "GET_mail_settings_footer",
  path: "/mail_settings/footer",
  verb: "GET",
  parameters: [{ name: "on-behalf-of", in: "header" }]
})

export type PATCH_mail_settings_footer_Type = {
  body?: Types.mail_settings_footer
  "on-behalf-of"?: string
}
export type PATCH_mail_settings_footer_Response = Types.mail_settings_footer
/**
 * PATCH /mail_settings/footer
 *
 * **This endpoint allows you to update your current Footer mail settings.**
 *
 * The footer setting will insert a custom footer at the bottom of the text and HTML bodies. Use the embedded HTML editor and plain text entry fields to create the content of the footers to be inserted into your emails.
 *
 * Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).
 **/
export const PATCH_mail_settings_footer = ApiCommon.requestMaker<
  PATCH_mail_settings_footer_Type,
  PATCH_mail_settings_footer_Response
>({
  id: "PATCH_mail_settings_footer",
  path: "/mail_settings/footer",
  verb: "PATCH",
  parameters: [{ name: "body", in: "body" }, { name: "on-behalf-of", in: "header" }]
})

export type GET_mail_settings_forward_spam_Type = {
  "on-behalf-of"?: string
}
export type GET_mail_settings_forward_spam_Response = Types.mail_settings_forward_spam
/**
 * GET /mail_settings/forward_spam
 *
 * **This endpoint allows you to retrieve your current Forward Spam mail settings.**
 *
 * Enabling the forward spam setting allows you to specify an email address to which spam reports will be forwarded.
 *
 * Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).
 **/
export const GET_mail_settings_forward_spam = ApiCommon.requestMaker<
  GET_mail_settings_forward_spam_Type,
  GET_mail_settings_forward_spam_Response
>({
  id: "GET_mail_settings_forward_spam",
  path: "/mail_settings/forward_spam",
  verb: "GET",
  parameters: [{ name: "on-behalf-of", in: "header" }]
})

export type PATCH_mail_settings_forward_spam_Type = {
  body?: Types.mail_settings_forward_spam
  "on-behalf-of"?: string
}
export type PATCH_mail_settings_forward_spam_Response = Types.mail_settings_forward_spam
/**
 * PATCH /mail_settings/forward_spam
 *
 * **This endpoint allows you to update your current Forward Spam mail settings.**
 *
 * Enabling the forward spam setting allows you to specify an email address to which spam reports will be forwarded.
 *
 * Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).
 **/
export const PATCH_mail_settings_forward_spam = ApiCommon.requestMaker<
  PATCH_mail_settings_forward_spam_Type,
  PATCH_mail_settings_forward_spam_Response
>({
  id: "PATCH_mail_settings_forward_spam",
  path: "/mail_settings/forward_spam",
  verb: "PATCH",
  parameters: [{ name: "body", in: "body" }, { name: "on-behalf-of", in: "header" }]
})

export type GET_mail_settings_plain_content_Type = {
  "on-behalf-of"?: string
}
export type GET_mail_settings_plain_content_Response = { enabled?: boolean }
/**
 * GET /mail_settings/plain_content
 *
 * **This endpoint allows you to retrieve your current Plain Content mail settings.**
 *
 * The plain content setting will automatically convert any plain text emails that you send to HTML before sending.
 *
 * Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).
 **/
export const GET_mail_settings_plain_content = ApiCommon.requestMaker<
  GET_mail_settings_plain_content_Type,
  GET_mail_settings_plain_content_Response
>({
  id: "GET_mail_settings_plain_content",
  path: "/mail_settings/plain_content",
  verb: "GET",
  parameters: [{ name: "on-behalf-of", in: "header" }]
})

export type PATCH_mail_settings_plain_content_Type = {
  body?: { enabled?: boolean }
  "on-behalf-of"?: string
}
export type PATCH_mail_settings_plain_content_Response = { enabled?: boolean }
/**
 * PATCH /mail_settings/plain_content
 *
 * **This endpoint allows you to update your current Plain Content mail settings.**
 *
 * The plain content setting will automatically convert any plain text emails that you send to HTML before sending.
 *
 * Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).
 **/
export const PATCH_mail_settings_plain_content = ApiCommon.requestMaker<
  PATCH_mail_settings_plain_content_Type,
  PATCH_mail_settings_plain_content_Response
>({
  id: "PATCH_mail_settings_plain_content",
  path: "/mail_settings/plain_content",
  verb: "PATCH",
  parameters: [{ name: "body", in: "body" }, { name: "on-behalf-of", in: "header" }]
})

export type GET_mail_settings_spam_check_Type = {
  "on-behalf-of"?: string
}
export type GET_mail_settings_spam_check_Response = Types.mail_settings_spam_check
/**
 * GET /mail_settings/spam_check
 *
 * **This endpoint allows you to retrieve your current Spam Checker mail settings.**
 *
 * The spam checker filter notifies you when emails are detected that exceed a predefined spam threshold.
 *
 * Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).
 **/
export const GET_mail_settings_spam_check = ApiCommon.requestMaker<
  GET_mail_settings_spam_check_Type,
  GET_mail_settings_spam_check_Response
>({
  id: "GET_mail_settings_spam_check",
  path: "/mail_settings/spam_check",
  verb: "GET",
  parameters: [{ name: "on-behalf-of", in: "header" }]
})

export type PATCH_mail_settings_spam_check_Type = {
  body?: {
    enabled?: boolean
    url?: string
    max_score?: number
  }
  "on-behalf-of"?: string
}
export type PATCH_mail_settings_spam_check_Response = Types.mail_settings_spam_check
/**
 * PATCH /mail_settings/spam_check
 *
 * **This endpoint allows you to update your current spam checker mail settings.**
 *
 * The spam checker filter notifies you when emails are detected that exceed a predefined spam threshold.
 *
 * Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).
 **/
export const PATCH_mail_settings_spam_check = ApiCommon.requestMaker<
  PATCH_mail_settings_spam_check_Type,
  PATCH_mail_settings_spam_check_Response
>({
  id: "PATCH_mail_settings_spam_check",
  path: "/mail_settings/spam_check",
  verb: "PATCH",
  parameters: [{ name: "body", in: "body" }, { name: "on-behalf-of", in: "header" }]
})

export type GET_mail_settings_template_Type = {
  "on-behalf-of"?: string
}
export type GET_mail_settings_template_Response = Types.mail_settings_template
/**
 * GET /mail_settings/template
 *
 * **This endpoint allows you to retrieve your current legacy email template settings.**
 *
 * This setting refers to our original email templates. We currently support more fully featured [transactional templates](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html).
 *
 * The legacy email template setting wraps an HTML template around your email content. This can be useful for sending out marketing email and/or other HTML formatted messages.
 *
 * Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).
 **/
export const GET_mail_settings_template = ApiCommon.requestMaker<
  GET_mail_settings_template_Type,
  GET_mail_settings_template_Response
>({
  id: "GET_mail_settings_template",
  path: "/mail_settings/template",
  verb: "GET",
  parameters: [{ name: "on-behalf-of", in: "header" }]
})

export type PATCH_mail_settings_template_Type = {
  body?: {
    enabled?: boolean
    html_content?: string
  }
  "on-behalf-of"?: string
}
export type PATCH_mail_settings_template_Response = {
  enabled: boolean
  html_content: string
}
/**
 * PATCH /mail_settings/template
 *
 * **This endpoint allows you to update your current legacy email template settings.**
 *
 * This setting refers to our original email templates. We currently support more fully featured [transactional templates](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html).
 *
 * The legacy email template setting wraps an HTML template around your email content. This can be useful for sending out marketing email and/or other HTML formatted messages.
 *
 * Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).
 **/
export const PATCH_mail_settings_template = ApiCommon.requestMaker<
  PATCH_mail_settings_template_Type,
  PATCH_mail_settings_template_Response
>({
  id: "PATCH_mail_settings_template",
  path: "/mail_settings/template",
  verb: "PATCH",
  parameters: [{ name: "body", in: "body" }, { name: "on-behalf-of", in: "header" }]
})

export type GET_mail_settings_bounce_purge_Type = {
  "on-behalf-of"?: string
}
export type GET_mail_settings_bounce_purge_Response = Types.mail_settings_bounce_purge
/**
 * GET /mail_settings/bounce_purge
 *
 * **This endpoint allows you to retrieve your current bounce purge settings.**
 *
 * This setting allows you to set a schedule for SendGrid to automatically delete contacts from your soft and hard bounce suppression lists.
 *
 * Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).
 **/
export const GET_mail_settings_bounce_purge = ApiCommon.requestMaker<
  GET_mail_settings_bounce_purge_Type,
  GET_mail_settings_bounce_purge_Response
>({
  id: "GET_mail_settings_bounce_purge",
  path: "/mail_settings/bounce_purge",
  verb: "GET",
  parameters: [{ name: "on-behalf-of", in: "header" }]
})

export type PATCH_mail_settings_bounce_purge_Type = {
  body?: Types.mail_settings_bounce_purge
  "on-behalf-of"?: string
}
export type PATCH_mail_settings_bounce_purge_Response = Types.mail_settings_bounce_purge
/**
 * PATCH /mail_settings/bounce_purge
 *
 * **This endpoint allows you to update your current bounce purge settings.**
 *
 * This setting allows you to set a schedule for SendGrid to automatically delete contacts from your soft and hard bounce suppression lists.
 *
 * Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).
 **/
export const PATCH_mail_settings_bounce_purge = ApiCommon.requestMaker<
  PATCH_mail_settings_bounce_purge_Type,
  PATCH_mail_settings_bounce_purge_Response
>({
  id: "PATCH_mail_settings_bounce_purge",
  path: "/mail_settings/bounce_purge",
  verb: "PATCH",
  parameters: [{ name: "body", in: "body" }, { name: "on-behalf-of", in: "header" }]
})

export type GET_mail_settings_forward_bounce_Type = {
  "on-behalf-of"?: string
}
export type GET_mail_settings_forward_bounce_Response = Types.mail_settings_forward_bounce
/**
 * GET /mail_settings/forward_bounce
 *
 * **This endpoint allows you to retrieve your current bounce forwarding mail settings.**
 *
 * Activating this setting allows you to specify an email address to which bounce reports are forwarded.
 *
 * Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).
 **/
export const GET_mail_settings_forward_bounce = ApiCommon.requestMaker<
  GET_mail_settings_forward_bounce_Type,
  GET_mail_settings_forward_bounce_Response
>({
  id: "GET_mail_settings_forward_bounce",
  path: "/mail_settings/forward_bounce",
  verb: "GET",
  parameters: [{ name: "on-behalf-of", in: "header" }]
})

export type PATCH_mail_settings_forward_bounce_Type = {
  body?: Types.mail_settings_forward_bounce
  "on-behalf-of"?: string
}
export type PATCH_mail_settings_forward_bounce_Response = Types.mail_settings_forward_bounce
/**
 * PATCH /mail_settings/forward_bounce
 *
 * **This endpoint allows you to update your current bounce forwarding mail settings.**
 *
 * Activating this setting allows you to specify an email address to which bounce reports are forwarded.
 *
 * Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).
 **/
export const PATCH_mail_settings_forward_bounce = ApiCommon.requestMaker<
  PATCH_mail_settings_forward_bounce_Type,
  PATCH_mail_settings_forward_bounce_Response
>({
  id: "PATCH_mail_settings_forward_bounce",
  path: "/mail_settings/forward_bounce",
  verb: "PATCH",
  parameters: [{ name: "body", in: "body" }, { name: "on-behalf-of", in: "header" }]
})
