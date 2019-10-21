export interface mail_settings_spam_check {
  enabled: boolean
  max_score?: number
  url?: string
}

export interface mail_batch_id {
  batch_id: string
}

export interface partner_settings_new_relic {
  enable_subuser_statistics?: boolean
  enabled: boolean
  license_key: string
}

export interface subscription_tracking_settings {
  enabled?: boolean
  html_content?: string
  landing?: string
  plain_content?: string
  replace?: string
  url?: string
}

export interface campaign_response extends campaign_request {
  status?: string
  id?: number
}

export interface contactdb_recipient_response {
  error_count: number
  error_indices?: number[]
  new_count: number
  persisted_recipients: string[]
  updated_count: number
  errors?: {
    message?: string
    error_indices?: number[]
  }[]
}

export type stats = {
  date?: string
  stats?: {
    type?: string
    name?: string
    metrics?: {
      blocks?: number
      bounce_drops?: number
      bounces?: number
      clicks?: number
      deferred?: number
      delivered?: number
      invalid_emails?: number
      opens?: number
      processed?: number
      requests?: number
      spam_report_drops?: number
      spam_reports?: number
      unique_clicks?: number
      unique_opens?: number
      unsubscribe_drops?: number
      unsubscribes?: number
    }
  }[]
}[]

export interface contactdb_segments_conditions {
  field: string
  value: string
  operator: "eq" | "ne" | "lt" | "gt" | "contains"
  and_or?: "and" | "or" | ""
}

export interface suppression_bounce {
  created?: number
  email?: string
  reason?: string
  status?: string
}

export interface ip_whitelabel {
  id: number
  ip: string
  rdns: string
  users: {
    username: string
    user_id: number
  }[]
  subdomain: string
  domain: string
  valid: boolean
  legacy: boolean
  a_record: {
    valid: boolean
    type: string
    host: string
    data: string
  }
}

export interface contacts {
  address?: string
  address2?: {}
  city?: string
  company?: string
  country?: string
  email?: string
  first_name?: string
  last_name?: string
  phone?: string
  state?: string
  zip?: string
}

export interface senderID {
  id?: number
  nickname: string
  from?: {
    email: string
    name?: string
  }
  reply_to?: {
    email?: string
    name?: string
  }
  address: string
  address_2?: string
  city: string
  state?: string
  zip?: string
  country: string
  verified?: boolean
  updated_at?: number
  created_at?: number
  locked?: boolean
}

export type global_empty_request = null

export interface contactdb_custom_field {
  name?: string
  type?: "date" | "text" | "number"
}

export interface whitelabel_domain_spf {
  id: number
  domain: string
  subdomain: string
  username: string
  user_id: number
  ips: any[]
  custom_spf: boolean
  default: boolean
  legacy: boolean
  automatic_security: boolean
  valid: boolean
  dns: {
    mail_server: {
      host: string
      type: string
      data: string
      valid: boolean
    }
    subdomain_spf: {
      host: string
      type: string
      data: string
      valid: boolean
    }
    domain_spf: {
      host: string
      type: string
      data: string
      valid: boolean
    }
    dkim: {
      host: string
      type: string
      data: string
      valid: boolean
    }
  }
}

export interface subuser {
  disabled: boolean
  id: number
  username: string
  email: string
}

export interface mail_settings_address_whitelabel {
  enabled?: boolean
  list?: string[]
}

export interface link_whitelabel {
  id: number
  domain: string
  subdomain: string
  username: string
  user_id: number
  default: true | false
  valid: true | false
  legacy: true | false
  dns: {
    domain_cname: {
      valid: true | false
      type: "cname" | "txt" | "mx"
      host: string
      data: string
    }
    owner_cname?: {
      valid: true | false
      type?: "cname" | "txt" | "mx"
      host: string
      data: string
    }
  }
}

export interface email_object {
  email: string
  name?: string
}

export interface api_key_name_id_scopes extends api_key_name_id {
  scopes?: string[]
}

export interface contactdb_segments {
  name: string
  list_id?: number
  conditions: contactdb_segments_conditions[]
  recipient_count?: number
}

export interface api_key_name_id {
  api_key_id?: string
  name?: string
}

export interface advanced_stats_opens {
  date: string
  stats: {
    type: string
    name: string
    metrics: {
      opens: number
      unique_opens: number
    }
  }[]
}

export interface mail_settings_template {
  enabled?: boolean
  html_content?: string
}

export type ip_warmup_response = {
  ip: string
  start_date: number
}[]

export interface advanced_stats_mailbox_provider {
  date: string
  stats: {
    type: string
    name: string
    metrics: {
      clicks: number
      opens: number
      unique_clicks: number
      unique_opens: number
      blocks: number
      bounces: number
      deferred: number
      delivered: number
      drops: number
      spam_reports: number
    }
  }[]
}

export interface global_ErrorResponse {
  errors?: {
    field?: string | null
    message: string
  }[]
}

export interface contactdb_custom_field_with_id extends contactdb_custom_field {
  id?: number
}

export interface monitor {
  email: string
  frequency: number
}

export interface errors {
  errors?: {
    field?: null | string
    message?: string
  }[]
}

export interface suppression_group_unsubscribes {}

export interface google_analytics_settings {
  enabled?: boolean
  utm_campaign?: string
  utm_content?: string
  utm_medium?: string
  utm_source?: string
  utm_term?: string
}

export interface event_webhook_settings {
  enabled: boolean
  url: string
  group_resubscribe: boolean
  delivered: boolean
  group_unsubscribe: boolean
  spam_report: boolean
  bounce: boolean
  deferred: boolean
  unsubscribe: boolean
  processed: boolean
  open: boolean
  click: boolean
  dropped: boolean
}

export interface user_profile {
  address?: string
  address2?: string
  city?: string
  company?: string
  country?: string
  first_name?: string
  last_name?: string
  phone?: string
  state?: string
  website?: string
  zip?: string
}

export interface mail_settings_footer {
  enabled?: boolean
  html_content?: string
  plain_content?: string
}

export interface category_stats {
  date: string
  stats?: {
    metrics?: {
      blocks: number
      bounce_drops: number
      bounces: number
      clicks: number
      deferred: number
      delivered: number
      invalid_emails: number
      opens: number
      processed: number
      requests: number
      spam_report_drops: number
      spam_reports: number
      unique_clicks: number
      unique_opens: number
      unsubscribe_drops: number
      unsubscribes: number
    }
    name?: string
    type: string
  }[]
}

export interface transactional_template {
  id: string
  name: string
  versions?: transactional_template_version[]
}

export interface parse_setting {
  url?: string
  hostname?: string
  spam_check?: boolean
  send_raw?: boolean
}

export interface contactdb_list {
  id: number
  name: string
  recipient_count: number
}

export interface suppression_group {
  id: number
  name: string
  description: string
  last_email_sent_at?: null
  is_default?: boolean
}

export interface mail_settings_bounce_purge {
  enabled?: boolean
  soft_bounces?: number | null
  hard_bounces?: number | null
}

export interface transactional_template_version {
  template_id: string
  active: 0 | 1
  name: string
  html_content: string
  plain_content: string
  subject: string
}

export interface mail_settings_bcc {
  email?: string
  enabled?: boolean
}

export type global_id = number

export interface credentials {
  permissions?: {
    api?: string
    mail?: string
    web?: string
  }
  username?: string
}

export interface subuser_stats {
  date?: string
  stats?: {
    first_name?: string
    last_name?: string
    metrics?: {
      blocks?: number
      bounce_drops?: number
      bounces?: number
      clicks?: number
      deferred?: number
      delivered?: number
      invalid_emails?: number
      opens?: number
      processed?: number
      requests?: number
      spam_report_drops?: number
      spam_reports?: number
      unique_clicks?: number
      unique_opens?: number
      unsubscribe_drops?: number
      unsubscribes?: number
    }
    name?: string
    type?: string
  }[]
}

export interface campaign_request {
  title: string
  subject?: string | null
  sender_id?: null | number
  list_ids?: number[]
  segment_ids?: number[]
  categories?: string[]
  suppression_group_id?: null | number
  custom_unsubscribe_url?: string | null
  ip_pool?: string | null
  html_content?: string | null
  plain_content?: string | null
}

export interface user_scheduled_send_status extends mail_batch_id {
  status?: "cancel" | "pause"
}

export interface mail_settings_forward_spam {
  email?: string
  enabled?: boolean
}

export interface contactdb_segments_with_id extends contactdb_segments {
  id?: number
}

export interface advanced_stats_country {
  date: string
  stats: {
    type: string
    name: string
    metrics: {
      clicks: number
      opens: number
      unique_clicks: number
      unique_opens: number
    }
  }[]
}

export interface advanced_stats_clicks {
  date: string
  stats: {
    type: string
    name: string
    metrics: {
      clicks: number
      unique_clicks: number
    }
  }[]
}

export interface contactdb_recipient {
  recipients?: {
    id?: string
    created_at?: number
    custom_fields?: contactdb_custom_field_with_id_value[]
    email: string
    first_name?: string | null
    last_name?: string | null
    last_clicked?: number | null
    last_emailed?: number | null
    last_opened?: number | null
    updated_at?: number
  }[]
}

export interface mail_settings_patch {
  enabled?: boolean
  email?: string
}

export interface mail_settings_forward_bounce {
  email?: string | null
  enabled?: boolean
}

export interface contactdb_custom_field_with_id_value extends contactdb_custom_field_with_id {
  value?: string | null
}

export interface contactdb_recipient_count {
  recipient_count: number
}

export interface subuser_post {
  username: string
  user_id: number
  email: string
  signup_session_token?: string
  authorization_token?: string
  credit_allocation?: { type?: string }
}

export interface whitelabel__domain {
  id: number
  user_id: number
  subdomain: string
  domain: string
  username: string
  ips: {}[]
  custom_spf: boolean
  default: boolean
  legacy: boolean
  automatic_security: boolean
  valid: boolean
  dns: {
    mail_cname: {
      valid: boolean
      type: string
      host: string
      data: string
    }
    dkim1: {
      valid: boolean
      type: string
      host: string
      data: string
    }
    dkim2: {
      valid: boolean
      type: string
      host: string
      data: string
    }
  }
}

export interface ip_pool {
  name: string
}
