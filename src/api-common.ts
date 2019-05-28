declare global {
  namespace GApiCommon {
    //for declaration augmenting
    interface RequestHandlerOpts {}
    interface MergeToResponse {}
  }
}

export type RequestHandler_t<T> = (
  payload: ReqHandlerPayload_t & GApiCommon.RequestHandlerOpts,
  data: any,
  operation: Operation_t
) => Promise<T>

export interface ReqHandlerPayload_t {
  verb?: string
  url: string
  query?: any
  body?: any
  headers?: any
}

export interface Operation_t {
  id: string
  path: string
  verb: string
  parameters: {
    name: string
    in: string
    required?: boolean
  }[]
}

export type RequestMaker_t = <Params, Response>(
  o: Operation_t
) => (
  params: Params & GApiCommon.RequestHandlerOpts
) => Promise<Response & GApiCommon.MergeToResponse>

export class SwaggerRequester {
  paramBuilder(operation: Operation_t, data: any): ReqHandlerPayload_t {
    const form = {
      verb: String(operation.verb).toUpperCase(),
      url: operation.path,
      query: {} as any,
      body: {} as any,
      headers: {} as any
    }
    operation.parameters.forEach(param => {
      const value = data[param.name]
      if (!value) return
      switch (param.in) {
        case "path":
          const rgx = new RegExp("{" + param.name + "}")
          form.url = form.url.replace(rgx, encodeURIComponent(value))
          break
        case "body":
          form.body = value
          break
        //leave encoding to the sender fn
        case "query":
          form[param.in] = form[param.in] || {}
          form[param.in][param.name] = value
          break
        case "header":
        case "headers":
          form.headers = form.headers || {}
          form.headers[param.name] = value
          break
      }
    })
    return form
  }

  handler: RequestHandler_t<any> = async () => {
    throw Error("Please define a requestHandler.")
  }
}

export const settings = {
  getRequester() {
    return new SwaggerRequester()
  }
}

export const requestMaker: RequestMaker_t = operation => (data: any) => {
  const _data = { ...data }
  const requester = settings.getRequester()
  const payload = requester.paramBuilder(operation, _data)
  return requester.handler(payload as any, _data, operation)
}
