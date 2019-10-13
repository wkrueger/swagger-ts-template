import * as Types from '../api-types'
import * as ApiCommon from '../api-common'


export type getProductTypes_Type = {
    'latitude' : number
    'longitude' : number
}
export const getProductTypes
    = ApiCommon.requestMaker
    <getProductTypes_Type, Types.Product[] >({
        id: 'getProductTypes',
        path: '/products',
        verb: 'GET',
        parameters: [{"name":"latitude","required":true,"in":"query"},{"name":"longitude","required":true,"in":"query"}]
    })



