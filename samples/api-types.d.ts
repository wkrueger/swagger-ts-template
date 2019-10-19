
export interface mail_settings_spam_check {
    enabled: boolean
    max_score?: number
    url?: string
}


export interface __POST_whitelabel_links_id_validate__response {
    id: number
    valid: true | false
    validation_results: {
        domain_cname: {
            valid: true | false
            reason: string | null
        }
        owner_cname?: {
            valid: true | false
            reason: null | string
        }
    }
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


export type stats =
    {
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
    operator: 'eq' | 'ne' | 'lt' | 'gt' | 'contains'
    and_or?: 'and' | 'or' | ''
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
    address2?: {
    }
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


export type global_empty_request =
    null


export interface contactdb_custom_field {
    name?: string
    type?: 'date' | 'text' | 'number'
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
            type: 'cname' | 'txt' | 'mx'
            host: string
            data: string
        }
        owner_cname?: {
            valid: true | false
            type?: 'cname' | 'txt' | 'mx'
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


export type ip_warmup_response =
    {
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


export interface ip_pool { name: string }


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
    soft_bounces?: integer | null
    hard_bounces?: integer | null
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


export type global_id =
    number


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
    sender_id?: null | integer
    list_ids?: number[]
    segment_ids?: number[]
    categories?: string[]
    suppression_group_id?: null | integer
    custom_unsubscribe_url?: string | null
    ip_pool?: string | null
    html_content?: string | null
    plain_content?: string | null
}


export interface user_scheduled_send_status extends mail_batch_id {
    status?: 'cancel' | 'pause'
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


export interface contactdb_recipient_count { recipient_count: number }


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
    ips: {
    }[]
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


export interface mail_batch_id { batch_id: string }


export interface __POST_alerts__response {
    created_at: number
    email_to: string
    frequency?: string
    id: number
    type: string
    updated_at: number
    percentage?: number
}


export type __GET_alerts__response =
    {
        created_at: number
        email_to: string
        id: number
        percentage?: number
        type: 'usage_limit' | 'stats_notification'
        updated_at?: number
        frequency?: string
    }[]


export interface __GET_alerts_alert_id__response {
    created_at: number
    email_to: string
    frequency?: string
    id: number
    type: 'usage_alert' | 'stats_notification'
    updated_at: number
    percentage?: number
}


export interface __PATCH_alerts_alert_id__response {
    created_at: number
    email_to: string
    frequency?: string
    id: number
    type: 'usage_alert' | 'stats_notification'
    updated_at: number
    percentage?: number
}


export interface __GET_api_keys__response { result?: api_key_name_id[] }


export interface __create_api_keys__response {
    api_key?: string
    api_key_id?: string
    name?: string
    scopes?: string[]
}


export interface __GET_api_keys_api_key_id__response { result?: api_key_name_id_scopes[] }


export type __GET_suppression_blocks__response =
    {
        created: number
        email: string
        reason: string
        status: string
    }[]


export type __GET_suppression_blocks_email__response =
    {
        created: number
        email: string
        reason: string
        status?: string
    }[]


export interface __GET_scopes__response { scopes: string[] }


export type __GET_suppression_bounces__response =
    {
        created?: number
        email?: string
        reason?: string
        status?: string
    }[]


export type __GET_suppression_bounces_email__response =
    {
        created?: number
        email?: string
        reason?: string
        status?: string
    }[]


export interface __GET_campaigns__response {
    result?: {
        categories?: string[]
        custom_unsubscribe_url?: string
        html_content?: string
        id?: number
        ip_pool?: string
        list_ids?: number[]
        plain_content?: string
        segment_ids?: number[]
        sender_id?: number
        status?: string
        subject?: string
        suppression_group_id?: number
        title?: string
    }[]
}


export interface __GET_campaigns_campaign_id__response {
    categories?: string[]
    custom_unsubscribe_url?: string
    html_content?: string
    id?: number
    ip_pool?: string
    list_ids?: number[]
    plain_content?: string
    segment_ids?: number[]
    sender_id?: number
    status?: string
    subject?: string
    suppression_group_id?: number
    title?: string
}


export interface __POST_campaigns_campaign_id_schedules_now__response {
    id: number
    status: string
}


export interface __POST_campaigns_campaign_id_schedules__response {
    id: number
    send_at: number
    status: 'Scheduled'
}


export interface __PATCH_campaigns_campaign_id_schedules__response {
    id: number
    send_at: number
    status: string
}


export interface __GET_campaigns_campaign_id_schedules__response { send_at: number }


export type __GET_user_scheduled_sends__response =
    user_scheduled_send_status[]


export type __GET_user_scheduled_sends_batch_id__response =
    user_scheduled_send_status[]


export type __GET_categories__response =
    { category: string }[]


export type __GET_categories_stats__response =
    category_stats[]


export interface __POST_contactdb_custom_fields__response {
    id?: number
    name?: string
    type?: string
}


export interface __GET_contactdb_custom_fields__response { custom_fields: contactdb_custom_field_with_id[] }


export interface __GET_contactdb_reserved_fields__response { reserved_fields: contactdb_custom_field[] }


export interface __GET_contactdb_lists__response { lists: contactdb_list[] }


export interface __PATCH_contactdb_lists_list_id__response {
    id?: number
    name?: string
    recipient_count?: number
}


export interface __GET_contactdb_lists_list_id_recipients__response { recipients?: contactdb_recipient[] }


export interface suppression_group_unsubscribes {
}


export type __POST_contactdb_lists_list_id_recipients_recipient_id__response =
    null


export interface __GET_contactdb_status__response {
    status?: {
        id?: string
        value?: string
    }[]
}


export interface __DELETE_contactdb_recipients__response {
}


export interface __GET_contactdb_recipients__response {
    recipients: {
    }[]
}


export interface __GET_contactdb_recipients_recipient_id_lists__response { lists?: contactdb_list[] }


export interface __GET_contactdb_recipients_search__response { recipients?: contactdb_recipient[] }


export interface __GET_contactdb_segments__response { segments: contactdb_segments[] }


export interface __GET_contactdb_segments_segment_id_recipients__response { recipients: contactdb_recipient[] }


export type __GET_suppression_invalid_emails__response =
    {
        created: number
        email: string
        reason: string
    }[]


export type __GET_suppression_invalid_emails_email__response =
    {
        created: number
        email: string
        reason: string
    }[]


export interface __GET_access_settings_activity__response {
    result?: {
        allowed?: boolean
        auth_method?: string
        first_at?: number
        ip?: string
        last_at?: number
        location?: string
    }[]
}


export interface __GET_access_settings_whitelist__response {
    result: {
        id: number
        ip: string
        created_at: number
        updated_at: number
    }[]
}


export interface __POST_access_settings_whitelist__response {
    result: {
        id: number
        ip: string
        created_at: number
        updated_at: number
    }[]
}


export interface __GET_access_settings_whitelist_rule_id__response {
    id: number
    ip: string
    created_at: number
    updated_at: number
}


export interface __POST_ips__response {
    ips: {
        ip: string
        subusers: string[]
    }[]
    remaining_ips: number
    warmup: boolean
}


export type __GET_ips__response =
    {
        ip: string
        subusers: string[]
        rdns?: string
        pools: string[]
        warmup: boolean
        start_date: number | null
        whitelabeled: boolean
        assigned_at: integer | null
    }[]


export interface __GET_ips_remaining__response {
    results: {
        remaining: number
        period: string
        price_per_ip: number
    }[]
}


export type __GET_ips_assigned__response =
    {
        ip: string
        pools: string[]
        warmup: boolean
        start_date: number
    }[]


export interface __GET_ips_ip_address__response {
    ip: string
    subusers: string[]
    rdns: string
    pools: string[]
    warmup: boolean
    start_date: integer | null
    whitelabeled: boolean
}


export type __GET_ips_pools__response =
    ip_pool[]


export interface __GET_ips_pools_pool_name__response {
    pool_name: string
    ips?: string[]
}


export interface __POST_ips_pools_pool_name_ips__response {
    ip: string
    pools: string[]
    start_date: number
    warmup: boolean
}


export interface __GET_v3_senders__response { result?: senderID[] }


export interface __GET_user_settings_enforced_tls__response {
    require_tls: boolean
    require_valid_cert: boolean
}


export interface __PATCH_user_settings_enforced_tls__response {
    require_tls: boolean
    require_valid_cert: boolean
}


export interface __GET_user_webhooks_parse_settings__response { result?: any[] }


export interface __GET_mail_settings__response {
    result: {
        title: string
        enabled: boolean
        name: string
        description: string
    }[]
}


export interface __GET_mail_settings_plain_content__response { enabled?: boolean }


export interface __PATCH_mail_settings_plain_content__response { enabled?: boolean }


export interface __PATCH_mail_settings_template__response {
    enabled: boolean
    html_content: string
}


export interface __GET_partner_settings__response {
    result?: {
        title: string
        enabled: boolean
        name: string
        description: string
    }[]
}


export interface __GET_tracking_settings__response {
    result?: {
        name?: string
        title?: string
        description?: string
        enabled?: boolean
    }[]
}


export interface __GET_tracking_settings_click__response {
    enable_text: boolean
    enabled: boolean
}


export interface __PATCH_tracking_settings_click__response {
    enable_text: boolean
    enabled: boolean
}


export interface __GET_tracking_settings_open__response { enabled: boolean }


export interface __PATCH_tracking_settings_open__response { enabled: boolean }


export type __GET_suppression_spam_reports__response =
    {
        created: number
        email: string
        ip: string
    }[]


export type __GET_suppression_spam_reports_email__response =
    {
        created: number
        email: string
        ip: string
    }[]


export type __GET_stats__response =
    {
        date: string
        stats: {
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


export type __GET_geo_stats__response =
    advanced_stats_country[]


export type __GET_devices_stats__response =
    advanced_stats_opens[]


export type __GET_clients_stats__response =
    advanced_stats_opens[]


export type __GET_clients_client_type_stats__response =
    advanced_stats_opens[]


export type __GET_mailbox_providers_stats__response =
    advanced_stats_mailbox_provider[]


export type __GET_browsers_stats__response =
    advanced_stats_clicks[]


export type __GET_subusers__response =
    subuser[]


export type __GET_subusers_reputations__response =
    {
        reputation: number
        username: string
    }[]


export interface __PUT_subusers_subuser_name_ips__response { ips?: string[] }


export type __GET_suppression_unsubscribes__response =
    {
        created: number
        email: string
    }[]


export interface __POST_asm_suppressions_global__response { recipient_emails: string[] }


export interface __GET_asm_suppressions_global_email__response { recipient_email: string }


export interface __POST_asm_groups_group_id_suppressions__response { recipient_emails: string[] }


export type __GET_asm_groups_group_id_suppressions__response =
    string[]


export type __GET_asm_suppressions__response =
    {
        email: string
        group_id: number
        group_name: string
        created_at: number
    }[]


export interface __GET_asm_suppressions_email__response {
    suppressions: {
        description: string
        id: number
        is_default: boolean
        name: string
        suppressed: boolean
    }[]
}


export interface __POST_asm_groups_group_id_suppressions_search__response { recipient_emails: string[] }


export type __GET_asm_groups__response =
    suppression_group[]


export interface __POST_asm_groups__response {
    id: number
    name: string
    description: string
    is_default: boolean
}


export interface __GET_asm_groups_group_id__response {
    description?: string
    id?: number
    is_default?: boolean
    last_email_sent_at?: null
    name?: string
    unsubscribes?: number
}


export type __GET_v3_scopes_requests__response =
    {
        id?: number
        scope_group_name?: string
        username?: string
        email?: string
        first_name?: string
        last_name?: string
    }[]


export interface __PATCH_v3_scopes_requests_approve_id__response { scope_group_name?: string }


export interface __POST_v3_teammates_pending_token_resend__response {
    token?: string
    email?: string
    scopes?: string[]
    is_admin?: boolean
}


export interface __GET_v3_teammates_pending__response {
    result?: {
        email?: string
        scopes?: string[]
        is_admin?: boolean
        token?: string
        expiration_date?: number
    }[]
}


export interface __POST_v3_teammates__response {
    token?: string
    email?: string
    scopes?: any[]
    is_admin?: boolean
}


export interface __GET_v3_teammates__response {
    result?: {
        username?: string
        email?: string
        first_name?: string
        last_name?: string
        user_type?: 'admin' | 'owner' | 'teammate'
        is_admin?: boolean
        phone?: string
        website?: string
        address?: string
        address2?: string
        city?: string
        state?: string
        zip?: string
        country?: string
    }[]
}


export interface __GET_v3_teammates_username__response {
    username?: string
    first_name?: string
    last_name?: string
    email?: string
    scopes?: any[]
    user_type?: 'admin' | 'owner' | 'teammate'
    is_admin?: boolean
    phone?: string
    website?: string
    address?: string
    address2?: string
    city?: string
    state?: string
    zip?: string
    country?: string
}


export interface __PATCH_v3_teammates_username__response {
    username?: string
    first_name?: string
    last_name?: string
    email?: string
    scopes?: string[]
    user_type?: 'admin' | 'owner' | 'teammate'
    is_admin?: boolean
    phone?: string
    website?: string
    address?: string
    address2?: string
    city?: string
    state?: string
    zip?: string
    country?: string
}


export type __GET_templates__response =
    transactional_template[]


export interface __POST_templates_template_id_versions__response {
    id: string
    updated_at: string
    Transactional_Template_Version?: transactional_template_version
}


export interface __POST_templates_template_id_versions_version_id_activate__response {
    id: string
    updated_at: string
    Transactional_Template_Version?: transactional_template_version
}


export interface __GET_templates_template_id_versions_version_id__response {
    id: string
    updated_at: string
    Transactional_Template_Version?: transactional_template_version
}


export interface __PATCH_templates_template_id_versions_version_id__response {
    id: string
    updated_at: string
    Transactional_Template_Version?: transactional_template_version
}


export interface __GET_user_profile__response {
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


export interface __GET_user_account__response {
    type: 'free' | 'paid'
    reputation: number
}


export interface __GET_user_email__response { email: string }


export interface __PUT_user_email__response { email: string }


export interface __GET_user_username__response {
    username: string
    user_id: number
}


export interface __PUT_user_username__response { username: string }


export interface __GET_user_credits__response {
    remain: number
    total: number
    overage: number
    used: number
    last_reset: string
    next_reset: string
    reset_frequency: string
}


export interface __PUT_user_password__response {
}


export type __GET_user_webhooks_parse_stats__response =
    {
        date: string
        stats: { metrics?: { received: number } }[]
    }[]


export type __GET_whitelabel_domains__response =
    {
        id: number
        user_id: number
        subdomain: string
        domain: string
        username: string
        ips: string[]
        custom_spf: boolean
        default: boolean
        legacy: boolean
        automatic_security: boolean
        valid: boolean
        dns: {
            mail_server?: {
                valid?: boolean
                type?: string
                host?: string
                data?: string
            }
            subdomain_spf?: {
                valid?: boolean
                type?: string
                host?: string
                data?: string
            }
            dkim?: {
                valid?: boolean
                type?: 'cname' | 'mx' | 'txt'
                host?: string
                data?: string
            }
        }
    }[]


export interface __PATCH_whitelabel_domains_domain_id__response {
    default_false?: boolean
    custom_spf_false?: boolean
}


export interface __POST_whitelabel_domains_id_validate__response {
    id?: number
    valid?: boolean
    validation_results?: {
        mail_cname?: {
            valid?: boolean
            reason?: string
        }
        dkim1?: {
            valid?: boolean
            reason?: null
        }
        dkim2?: {
            valid?: boolean
            reason?: null
        }
        spf?: {
            valid?: boolean
            reason?: null
        }
    }
}


export type __GET_whitelabel_ips__response =
    ip_whitelabel[]


export interface __POST_whitelabel_ips_id_validate__response {
    id: number
    valid: true | false
    validation_results: {
        a_record?: {
            valid: true | false
            reason: null | string
        }
    }
}


export type __GET_whitelabel_links__response =
    link_whitelabel[]


export type __POST_contactdb_lists_list_id_recipients__response =
    null

