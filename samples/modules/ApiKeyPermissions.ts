import * as Types from '../api-types'
import * as ApiCommon from '../api-common'


export type GET_scopes_Type = {
    'on-behalf-of'? : string
}
export const GET_scopes
    = ApiCommon.requestMaker
    <GET_scopes_Type, Types.__GET_scopes__response >({
        id: 'GET_scopes',
        path: '/scopes',
        verb: 'GET',
        parameters: [{"name":"on-behalf-of","in":"header"}]
    })



