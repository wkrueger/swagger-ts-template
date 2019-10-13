import * as Types from '../api-types'
import * as ApiCommon from '../api-common'


export type getUserProfile_Type = {}
export const getUserProfile
    = ApiCommon.requestMaker
    <getUserProfile_Type, Types.Profile >({
        id: 'getUserProfile',
        path: '/me',
        verb: 'GET',
        parameters: []
    })



