import * as ApiCommon from "../api-common"
import * as Types from "../api-types"

export type GET_scopes_Type = {
  "on-behalf-of"?: string
}
export type GET_scopes_Response = { scopes: string[] }
/**
 * GET /scopes
 *
 * **This endpoint returns a list of all scopes that this user has access to.**
 *
 * API Keys can be used to authenticate the use of [SendGrid’s v3 Web API](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html), or the [Mail API Endpoint](https://sendgrid.com/docs/API_Reference/Web_API/mail.html). API Keys may be assigned certain permissions, or scopes, that limit which API endpoints they are able to access. For a more detailed explanation of how you can use API Key permissios, please visit our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/api_keys.html#-API-Key-Permissions) or [Classroom](https://sendgrid.com/docs/Classroom/Basics/API/api_key_permissions.html).
 **/
export const GET_scopes = ApiCommon.requestMaker<GET_scopes_Type, GET_scopes_Response>({
  id: "GET_scopes",
  path: "/scopes",
  verb: "GET",
  parameters: [{ name: "on-behalf-of", in: "header" }]
})
