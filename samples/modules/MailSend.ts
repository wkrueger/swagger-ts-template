import * as ApiCommon from '../api-common'


export type POST_mail_send_Type = {
    'body'? : any
}
export const POST_mail_send
    = ApiCommon.requestMaker
    <POST_mail_send_Type, void >({
        id: 'POST_mail_send',
        path: '/mail/send',
        verb: 'POST',
        parameters: [{"name":"body","in":"body"}]
    })



