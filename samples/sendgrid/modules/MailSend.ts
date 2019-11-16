import * as ApiCommon from "../api-common"
// @ts-ignore
import * as Types from "../api-types"

export type POST_mail_send_Type = {
  body?: {
    personalizations: {
      to: Types.email_object[]
      cc?: Types.email_object[]
      bcc?: Types.email_object[]
      subject?: string
      headers?: {}
      substitutions?: {}
      custom_args?: {}
      send_at?: number
    }[]
    from: Types.email_object
    reply_to?: Types.email_object
    subject: string
    content: {
      type: string
      value: string
    }[]
    attachments?: {
      content: string
      type?: string
      filename: string
      disposition?: "inline" | "attachment"
      content_id?: string
    }[]
    template_id?: string
    sections?: {}
    headers?: {}
    categories?: string[]
    custom_args?: {}
    send_at?: number
    batch_id?: string
    asm?: {
      group_id: number
      groups_to_display?: number[]
    }
    ip_pool_name?: string
    mail_settings?: {
      bcc?: {
        enable?: boolean
        email?: string
      }
      bypass_list_management?: { enable?: boolean }
      footer?: {
        enable?: boolean
        text?: string
        html?: string
      }
      sandbox_mode?: { enable?: boolean }
      spam_check?: {
        enable?: boolean
        threshold?: number
        post_to_url?: string
      }
    }
    tracking_settings?: {
      click_tracking?: {
        enable?: boolean
        enable_text?: boolean
      }
      open_tracking?: {
        enable?: boolean
        substitution_tag?: string
      }
      subscription_tracking?: {
        enable?: boolean
        text?: string
        html?: string
        substitution_tag?: string
      }
      ganalytics?: {
        enable?: boolean
        utm_source?: string
        utm_medium?: string
        utm_term?: string
        utm_content?: string
        utm_campaign?: string
      }
    }
  }
}
export type POST_mail_send_Response = void
/**
 * POST /mail/send
 *
 * This endpoint allows you to send email over SendGrid’s v3 Web API, the most recent version of our API. If you are looking for documentation about the v2 Mail Send endpoint, please see our [v2 API Reference](https://sendgrid.com/docs/API_Reference/Web_API/mail.html).
 *
 * * Top level parameters are referred to as "global".
 * * Individual fields within the personalizations array will override any other global, or “message level”, parameters that are defined outside of personalizations.
 *
 * **SendGrid provides libraries to help you quickly and easily integrate with the v3 Web API in 7 different languages: [C#](https://github.com/sendgrid/sendgrid-csharp), [Go](https://github.com/sendgrid/sendgrid-go), [Java](https://github.com/sendgrid/sendgrid-java), [Node JS](https://github.com/sendgrid/sendgrid-nodejs), [PHP](https://github.com/sendgrid/sendgrid-php), [Python](https://github.com/sendgrid/sendgrid-python), and [Ruby](https://github.com/sendgrid/sendgrid-ruby).**
 *
 *
 * For more detailed information about how to use the v3 Mail Send endpoint, please visit our [Classroom](https://sendgrid.com/docs/Classroom/Send/v3_Mail_Send/index.html).
 **/
export const POST_mail_send = ApiCommon.requestMaker<POST_mail_send_Type, POST_mail_send_Response>({
  id: "POST_mail_send",
  path: "/mail/send",
  verb: "POST",
  parameters: [{ name: "body", in: "body" }]
})
