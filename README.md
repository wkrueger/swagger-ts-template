# swagger-ts-template

In-house (quick n dirty) solution to integrate swagger to a typescript codebase.

  1. Generates a `d.ts` file containing the type definitions from
  a swagger `.json` file.

  2. (new) Generates an (opinionated) typescript consumer API, focused on bringing
  types to the table.

```javascript
var generator = require('swagger-ts-template')
var swaggerFile = require('./api.json')

let output = generator.genTypes(swaggerFile, { hideComments:true })
fs.writeFileSync('api.d.ts', output)

generator.genPaths(swaggerFile, { output : './api' })
  .then( () => console.log('ok'))
```

## Type gen options

  - **hideComments**: If true, properties descriptions will not be included
    as comments in the generated file.

  - **external**: Formats the types as `export type`, making the file an
    external module.

## Consumer API example

```typescript
//you have to bootstrap the api skeleton telling what to use to do the requests
//(currently) this setting is global and must be run before any request
import ApiCommon = require('./api/api-common')
ApiCommon.setRequestHandler( req => {
  //...
})

//modules are split by tag. Although you can still use es6 modules
//+ tree shaker to shorten the syntax, we dont rely on that
import CustomerApi = require('./api/modules/Customer')

//the functions are named after the "operationId" property
let customer = await CustomerApi.getCustomer({
    //the parameters are joined into a single object
    //whether they are in query, body or header
    customerId : 999
})

//you may extend the input object in order to expose or require
//properties to be consumed (for instance) by the request maker function
declare global {
  namespace GApiCommon {
      interface RequestHandlerOpts {
          _allowCache : true
          //now TS will point "_allowCache" is missing in the 
          //request made above
      }
  }
}
```


## CLI

This module may be installed globally and used as a command-line tool.
(still WIP/untested for the new releases - consumer API).

    npm i swagger-ts-template --global
    tstemplate <source> <dest> [-c] [-e]
