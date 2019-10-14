# swagger-ts-template

Quick 'n dirty solution to integrate swagger v2 into a typescript codebase.

1. Generates a `d.ts` file containing the type definitions from
   a swagger `.json` file.

   - `genTypes` generates a single .d.ts file with typedefs (interfaces and type aliases only)

2. Generates an (opinionated) typescript consumer API, focused on bringing
   types to the table.
   - `genPaths` generates an (opinionated) rest API consumer

**USAGE 2 is what you will usually be doing.**

```javascript
var generator = require("swagger-ts-template")
var swaggerFile = require("./api.json")

// usage 1: only get the type definitions, saves to a string
let output = generator.genTypes(swaggerFile, { hideComments: true })
fs.writeFileSync("api.d.ts", output)

// usage 2: generates TS api consumer, saves to folder
generator.genPaths(swaggerFile, { output: "./api" }).then(() => console.log("okay"))
```

## genTypes

Skims the "declarations" key, generating a single `.d.ts` file.

```ts
export async function genTypes(swaggerDoc: SwaggerDoc, opts: genTypesOpts = {}): Promise<string>

export interface genTypesOpts {
  // true: generate a module (use export), false: declare types globally
  external?: any
  hideComments?: boolean
  // optionally rename variables, may be used to fix issues
  mapVariableName?: (s: string) => string
}
```

## genPaths options

Generates a typed API consumer on a defined folder. `genTypes` is already included.

```ts
export async function genPaths(swaggerDoc: SwaggerDoc, opts: genPathsOpts): Promise<void>

type genPathsOpts = {
  output: string //output folder path
  moduleStyle: "commonjs" | "esm"
  failOnMissingOperationId?: boolean
  typesOpts?: genTypesOpts
  mapOperation?: (o: Operation) => Operation
  templateString?: string
}
```

**You MUST supply `operationId` and `tags` on your routes. Most frameworks swagger generators
should already have that sorted.**

## Setting up the consumer API

You have to bootstrap the api skeleton telling how should you run the requests.

This setting is global and must be run before the 1st request takes place.

```typescript
import { SwaggerRequester, settings as swaggerSettings, IRequest } from "./swagger/api-common"

class MyRequester extends SwaggerRequester {
  handler(request: IRequest) {
    const opts = request.options || {}
    const resp = await doTheRequest(
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
```

## Generated consumer API

  - All declared types are exported as `interface`'s or type aliases when necessary;
  - "Anonymous" types (actually, the request and response types)
    will also get an interface for them, with a generated name (if they are not already present in "declarations");
  - Methods are grouped in files by their tag and named by their operationId;
  - The transport is abstracted away. All inputs are passed by their names, there is no distiction whether they are in the path, query parameters or body; The method declarations carry the necessary metadata to achieve this.

Sample generated file excerpt:

```ts
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
    <getPriceEstimates_Type, Types.getPriceEstimates_Response >({
        id: 'getPriceEstimates',
        path: '/estimates/price',
        verb: 'GET',
        parameters: [{"name":"end_latitude","required":true,"in":"query"},{"name":"end_longitude","required":true,"in":"query"},{"name":"start_latitude","required":true,"in":"query"},{"name":"start_longitude","required":true,"in":"query"}]
    })

///...
```

Sample consumer invocation:

```ts
import CustomerApi = require("./api/modules/Customer")
let customer = await CustomerApi.getCustomer({
  customerId: 999
})
```

See also the `samples` path in this repo.

## Personalization

  - The input parameters from `genPaths` may be used to tweak the generation a bit;
  - You can extend the request and response types by augmenting either
`GApiCommon#MergeToRequest` or `GApiCommon#MergeToResponse` global interfaces.

```ts
declare global {
  namespace GApiCommon {
    interface MergeToRequest {
      _allowCache: true
    }

    interface MergeToResponse {
      page: number
      numPages: number
    }
  }
}
```
