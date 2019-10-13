
export interface Product {
    product_id?: string
    description?: string
    display_name?: string
    capacity?: string
    image?: string
}


export interface PriceEstimate {
    product_id?: string
    currency_code?: string
    display_name?: string
    estimate?: string
    low_estimate?: number
    high_estimate?: number
    surge_multiplier?: number
}


export interface Profile {
    first_name?: string
    last_name?: string
    email?: string
    picture?: string
    promo_code?: string
}


export interface Activity { uuid?: string }


export interface Activities {
    offset?: number
    limit?: number
    count?: number
    history?: Activity[]
}


export interface Error {
    code?: number
    message?: string
    fields?: string
}


export type __getProductTypes__response =
    Product[]


export interface __getPriceEstimates__response { estimates?: PriceEstimate[] }


export type __getTimeEstimates__response =
    Product[]

