declare global {
  namespace GApiCommon {
    //for declaration augmenting
    interface MergeToRequest {}
    interface MergeToResponse {}
  }
}

export interface IRequest {
  verb?: string
  url: string
  query?: any
  body?: any
  headers?: any
}

export interface IOperation {
  id: string
  path: string
  verb: string
  parameters: {
    name: string
    in: string
    required?: boolean
  }[]
}

export abstract class SwaggerRequester {
  paramBuilder(operation: IOperation, data: any): IRequest {
    const request = {
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
          request.url = request.url.replace(rgx, encodeURIComponent(value))
          break
        case "body":
          request.body = value
          break
        //leave encoding to the sender fn
        case "query":
          request[param.in] = request[param.in] || {}
          request[param.in][param.name] = value
          break
        case "header":
        case "headers":
          request.headers = request.headers || {}
          request.headers[param.name] = value
          break
      }
    })
    return request
  }

  /**
   * Override to return API Response + Common extra fields
   * (Response + GApiCommon.MergeToResponse)
   */
  abstract async handler(
    request: IRequest,
    input: Record<string, any> & GApiCommon.MergeToRequest,
    operation: IOperation
  ): Promise<any>
}

export const settings = {
  getRequester(): SwaggerRequester {
    throw new Error("Define a SwaggerRequester.")
  }
}

export const requestMaker = <Input, Response>(operation: IOperation) => (
  _input: Input & GApiCommon.MergeToRequest
): Promise<Response & GApiCommon.MergeToResponse> => {
  const input = { ..._input }
  const requester = settings.getRequester()
  const request = requester.paramBuilder(operation, input)
  return requester.handler(request, input, operation)
}
