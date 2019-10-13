import * as Types from '../api-types'
import * as ApiCommon from '../api-common'


export type getPriceEstimates_Type = {
    'end_latitude' : number
    'end_longitude' : number
    'start_latitude' : number
    'start_longitude' : number
}
export const getPriceEstimates
    = ApiCommon.requestMaker
    <getPriceEstimates_Type, Types.__getPriceEstimates__response >({
        id: 'getPriceEstimates',
        path: '/estimates/price',
        verb: 'GET',
        parameters: [{"name":"end_latitude","required":true,"in":"query"},{"name":"end_longitude","required":true,"in":"query"},{"name":"start_latitude","required":true,"in":"query"},{"name":"start_longitude","required":true,"in":"query"}]
    })



export type getTimeEstimates_Type = {
    'customer_uuid'? : string
    'product_id'? : string
    'start_latitude' : number
    'start_longitude' : number
}
export const getTimeEstimates
    = ApiCommon.requestMaker
    <getTimeEstimates_Type, Types.Product[] >({
        id: 'getTimeEstimates',
        path: '/estimates/time',
        verb: 'GET',
        parameters: [{"name":"customer_uuid","in":"query"},{"name":"product_id","in":"query"},{"name":"start_latitude","required":true,"in":"query"},{"name":"start_longitude","required":true,"in":"query"}]
    })



