# swagger-ts-template

Quick 'n dirty solution to integrate swagger v2 into a typescript codebase.

1. Generates a `d.ts` file containing the type definitions from
   a swagger `.json` file.

   - `genTypes` generates a single .d.ts file with typedefs (no class BS!)

2. Generates an (opinionated) typescript consumer API, focused on bringing
   types to the table.
   - `genPaths` generates an (opinionated) rest API consumer

```javascript
var generator = require("swagger-ts-template")
var swaggerFile = require("./api.json")

let output = generator.genTypes(swaggerFile, { hideComments: true })
fs.writeFileSync("api.d.ts", output)

generator.genPaths(swaggerFile, { output: "./api" }).then(() => console.log("okay"))
```

## genTypes options

```ts
export async function genTypes(swaggerDoc: SwaggerDoc, opts: genTypesOpts = {}): Promise<string>

export interface genTypesOpts {
  external?: any //if false, declares types globally
  filename?: string
  hideComments?: boolean
  mapVariableName?: (s: string) => string
}
```

## genPaths options

```ts
export async function genPaths(swaggerDoc: SwaggerDoc, opts: genPathsOpts): Promise<void>

type genPathsOpts = {
  output: string //output folder path
  moduleStyle: "commonjs" | "esm"
  failOnMissingOperationId?: boolean
  typesOpts?: genTypesOpts
}
```

You MUST supply `operationId` and `tags` on your routes. Most frameworks swagger generators
should already have that sorted.

## Consumer API example

```typescript
//you have to bootstrap the api skeleton telling what to use to do the requests
//this setting is global and must be run before the 1st request takes place

import { SwaggerRequester, settings as swaggerSettings } from "swagger-ts-template"

class MyRequester extends SwaggerRequester {
  handler: RequestHandler_t<any> = async request => {
    const opts = request.options || {}
    const resp = await this.request(
      request.verb as any,
      request.url,
      request.query,
      request.body,
      opts
    )
    return resp || {}
  }
}

const myRequester = new MyRequester()
swaggerSettings.getRequester = () => myRequester

//module files are split by tag
import CustomerApi = require("./api/modules/Customer")

//the functions are named after the "operationId" property
//the parameters are joined into a single object
//whether they are in query, body or header
let customer = await CustomerApi.getCustomer({
  customerId: 999
})

declare global {
  namespace GApiCommon {
    //you may extend the input object in order to expose or require
    //properties to be consumed by the request maker function
    interface RequestHandlerOpts {
      _allowCache: true
    }

    //you may declare properties which are available on every response
    interface MergeToResponse {
      page: number
      numPages: number
    }
  }
}
```
