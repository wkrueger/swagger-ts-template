import * as ApiCommon from "../api-common"
import * as Types from "../api-types"

export type GET_whitelabel_links_Type = {
  limit?: number
  "on-behalf-of"?: string
}
export type GET_whitelabel_links_Response = Types.link_whitelabel[]
/**
 * GET /whitelabel/links
 *
 * **This endpoint allows you to retrieve all link whitelabels.**
 *
 * Email link whitelabels allow all of the click-tracked links you send in your emails to include the URL of your domain instead of sendgrid.net.
 *
 * For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/links.html).
 **/
export const GET_whitelabel_links = ApiCommon.requestMaker<
  GET_whitelabel_links_Type,
  GET_whitelabel_links_Response
>({
  id: "GET_whitelabel_links",
  path: "/whitelabel/links",
  verb: "GET",
  parameters: [{ name: "limit", in: "query" }, { name: "on-behalf-of", in: "header" }]
})

export type POST_whitelabel_links_Type = {
  body?: {
    domain: string
    subdomain: string
    default?: true | false
  }
  limit?: number
  offset?: number
  "on-behalf-of"?: string
}
export type POST_whitelabel_links_Response = Types.link_whitelabel
/**
 * POST /whitelabel/links
 *
 * **This endpoint allows you to create a new link whitelabel.**
 *
 * Email link whitelabels allow all of the click-tracked links you send in your emails to include the URL of your domain instead of sendgrid.net.
 *
 * For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/links.html).
 **/
export const POST_whitelabel_links = ApiCommon.requestMaker<
  POST_whitelabel_links_Type,
  POST_whitelabel_links_Response
>({
  id: "POST_whitelabel_links",
  path: "/whitelabel/links",
  verb: "POST",
  parameters: [
    { name: "body", in: "body" },
    { name: "limit", in: "query" },
    { name: "offset", in: "query" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type GET_whitelabel_links_id_Type = {
  id: number
  "on-behalf-of"?: string
}
export type GET_whitelabel_links_id_Response = Types.link_whitelabel
/**
 * GET /whitelabel/links/{id}
 *
 * **This endpoint allows you to retrieve a specific link whitelabel.**
 *
 * Email link whitelabels allow all of the click-tracked links you send in your emails to include the URL of your domain instead of sendgrid.net.
 *
 * For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/links.html).
 **/
export const GET_whitelabel_links_id = ApiCommon.requestMaker<
  GET_whitelabel_links_id_Type,
  GET_whitelabel_links_id_Response
>({
  id: "GET_whitelabel_links_id",
  path: "/whitelabel/links/{id}",
  verb: "GET",
  parameters: [{ name: "id", required: true, in: "path" }, { name: "on-behalf-of", in: "header" }]
})

export type PATCH_whitelabel_links_id_Type = {
  body?: { default?: true | false }
  id: number
  "on-behalf-of"?: string
}
export type PATCH_whitelabel_links_id_Response = Types.link_whitelabel
/**
 * PATCH /whitelabel/links/{id}
 *
 * **This endpoint allows you to update a specific link whitelabel. You can use this endpoint to change a link whitelabel's default status.**
 *
 * Email link whitelabels allow all of the click-tracked links you send in your emails to include the URL of your domain instead of sendgrid.net.
 *
 * For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/links.html).
 **/
export const PATCH_whitelabel_links_id = ApiCommon.requestMaker<
  PATCH_whitelabel_links_id_Type,
  PATCH_whitelabel_links_id_Response
>({
  id: "PATCH_whitelabel_links_id",
  path: "/whitelabel/links/{id}",
  verb: "PATCH",
  parameters: [
    { name: "body", in: "body" },
    { name: "id", required: true, in: "path" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type DELETE_whitelabel_links_id_Type = {
  body?: null
  id: number
  "on-behalf-of"?: string
}
export type DELETE_whitelabel_links_id_Response = void
/**
 * DELETE /whitelabel/links/{id}
 *
 * **This endpoint allows you to delete a link whitelabel.**
 *
 * Email link whitelabels allow all of the click-tracked links you send in your emails to include the URL of your domain instead of sendgrid.net.
 *
 * For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/links.html).
 **/
export const DELETE_whitelabel_links_id = ApiCommon.requestMaker<
  DELETE_whitelabel_links_id_Type,
  DELETE_whitelabel_links_id_Response
>({
  id: "DELETE_whitelabel_links_id",
  path: "/whitelabel/links/{id}",
  verb: "DELETE",
  parameters: [
    { name: "body", in: "body" },
    { name: "id", required: true, in: "path" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type GET_whitelabel_links_default_Type = {
  domain?: string
  "on-behalf-of"?: string
}
export type GET_whitelabel_links_default_Response = Types.link_whitelabel
/**
 * GET /whitelabel/links/default
 *
 * **This endpoint allows you to retrieve the default link whitelabel.**
 *
 * Default link whitelabel is the actual link whitelabel to be used when sending messages. If there are multiple link whitelabels, the default is determined by the following order:
 * <ul>
 *   <li>Validated link whitelabels marked as "default"</li>
 *   <li>Legacy link whitelabels (migrated from the whitelabel wizard)</li>
 *   <li>Default SendGrid link whitelabel (i.e. 100.ct.sendgrid.net)</li>
 * </ul>
 *
 * Email link whitelabels allow all of the click-tracked links you send in your emails to include the URL of your domain instead of sendgrid.net.
 *
 * For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/links.html).
 **/
export const GET_whitelabel_links_default = ApiCommon.requestMaker<
  GET_whitelabel_links_default_Type,
  GET_whitelabel_links_default_Response
>({
  id: "GET_whitelabel_links_default",
  path: "/whitelabel/links/default",
  verb: "GET",
  parameters: [{ name: "domain", in: "query" }, { name: "on-behalf-of", in: "header" }]
})

export type POST_whitelabel_links_id_validate_Type = {
  body?: null
  id: number
  "on-behalf-of"?: string
}
export type POST_whitelabel_links_id_validate_Response = {
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
/**
 * POST /whitelabel/links/{id}/validate
 *
 * **This endpoint allows you to validate a link whitelabel.**
 *
 * Email link whitelabels allow all of the click-tracked links you send in your emails to include the URL of your domain instead of sendgrid.net.
 *
 * For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/links.html).
 **/
export const POST_whitelabel_links_id_validate = ApiCommon.requestMaker<
  POST_whitelabel_links_id_validate_Type,
  POST_whitelabel_links_id_validate_Response
>({
  id: "POST_whitelabel_links_id_validate",
  path: "/whitelabel/links/{id}/validate",
  verb: "POST",
  parameters: [
    { name: "body", in: "body" },
    { name: "id", required: true, in: "path" },
    { name: "on-behalf-of", in: "header" }
  ]
})

export type GET_whitelabel_links_subuser_Type = {
  "on-behalf-of"?: string
  username: string
}
export type GET_whitelabel_links_subuser_Response = Types.link_whitelabel
/**
 * GET /whitelabel/links/subuser
 *
 * **This endpoint allows you to retrieve the associated link whitelabel for a subuser.**
 *
 * Link whitelables can be associated with subusers from the parent account. This functionality allows
 * subusers to send mail using their parent's linke whitelabels. To associate a link whitelabel, the parent account
 * must first create a whitelabel and validate it. The parent may then associate that whitelabel with a subuser via the API or the Subuser Management page in the user interface.
 *
 * Email link whitelabels allow all of the click-tracked links you send in your emails to include the URL of your domain instead of sendgrid.net.
 *
 * For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/links.html).
 **/
export const GET_whitelabel_links_subuser = ApiCommon.requestMaker<
  GET_whitelabel_links_subuser_Type,
  GET_whitelabel_links_subuser_Response
>({
  id: "GET_whitelabel_links_subuser",
  path: "/whitelabel/links/subuser",
  verb: "GET",
  parameters: [
    { name: "on-behalf-of", in: "header" },
    { name: "username", required: true, in: "query" }
  ]
})

export type DELETE_whitelabel_links_subuser_Type = {
  body?: null
  "on-behalf-of"?: string
  username: string
}
export type DELETE_whitelabel_links_subuser_Response = void
/**
 * DELETE /whitelabel/links/subuser
 *
 * **This endpoint allows you to disassociate a link whitelabel from a subuser.**
 *
 * Link whitelables can be associated with subusers from the parent account. This functionality allows
 * subusers to send mail using their parent's linke whitelabels. To associate a link whitelabel, the parent account
 * must first create a whitelabel and validate it. The parent may then associate that whitelabel with a subuser via the API or the Subuser Management page in the user interface.
 *
 * Email link whitelabels allow all of the click-tracked links you send in your emails to include the URL of your domain instead of sendgrid.net.
 *
 * For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/links.html).
 **/
export const DELETE_whitelabel_links_subuser = ApiCommon.requestMaker<
  DELETE_whitelabel_links_subuser_Type,
  DELETE_whitelabel_links_subuser_Response
>({
  id: "DELETE_whitelabel_links_subuser",
  path: "/whitelabel/links/subuser",
  verb: "DELETE",
  parameters: [
    { name: "body", in: "body" },
    { name: "on-behalf-of", in: "header" },
    { name: "username", required: true, in: "query" }
  ]
})

export type POST_whitelabel_links_link_id_subuser_Type = {
  body?: { username?: string }
  link_id: number
  "on-behalf-of"?: string
}
export type POST_whitelabel_links_link_id_subuser_Response = Types.link_whitelabel
/**
 * POST /whitelabel/links/{link_id}/subuser
 *
 * **This endpoint allows you to associate a link whitelabel with a subuser account.**
 *
 * Link whitelables can be associated with subusers from the parent account. This functionality allows
 * subusers to send mail using their parent's linke whitelabels. To associate a link whitelabel, the parent account
 * must first create a whitelabel and validate it. The parent may then associate that whitelabel with a subuser via the API or the Subuser Management page in the user interface.
 *
 * Email link whitelabels allow all of the click-tracked links you send in your emails to include the URL of your domain instead of sendgrid.net.
 *
 * For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/links.html).
 **/
export const POST_whitelabel_links_link_id_subuser = ApiCommon.requestMaker<
  POST_whitelabel_links_link_id_subuser_Type,
  POST_whitelabel_links_link_id_subuser_Response
>({
  id: "POST_whitelabel_links_link_id_subuser",
  path: "/whitelabel/links/{link_id}/subuser",
  verb: "POST",
  parameters: [
    { name: "body", in: "body" },
    { name: "link_id", required: true, in: "path" },
    { name: "on-behalf-of", in: "header" }
  ]
})
