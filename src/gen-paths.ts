import _ = require('lodash')
import { promisify } from 'promisify'
import fs = require('fs')
import cp = require('cp')
import { genTypes } from './gen-types'
import mkdirp = require('mkdirp')
import rimraf = require('rimraf')
import path = require('path')

type SwaggerDoc = SwaggerIo.V2.SchemaJson

type genPathsOpts = {
    output : string
}

export async function genPaths(swaggerDoc: SwaggerDoc, opts: genPathsOpts) {

    if (!opts.output) throw Error('Missing parameter: output.')

    await promisify( rimraf, opts.output)
    await promisify( mkdirp, path.resolve(opts.output, 'modules') )
    await promisify( cp, path.resolve(__dirname, '..', 'src', 'api-common.ts'), path.resolve( opts.output ,'api-common.ts') )
    await genTypes(swaggerDoc, {
        external: true ,
        hideComments: true,
        filename: path.resolve(opts.output, 'api-types.d.ts')
    })
    await genTypes(swaggerDoc, {
        external: true,
        hideComments: true,
        noOptionals : true,
        filename: path.resolve(opts.output, 'api-types-no-optionals.d.ts')
    })    


    let tags : any = _.chain(swaggerDoc.paths).toPairs().map( ([path, schema]) => {
        //search for a tag name
        let tags = (() => {
            let verbs = Object.keys(schema)
            let out : string[] = []
            for ( let it = 0; it < verbs.length; it++ ) {
                let verb = verbs[it]
                if (verb === 'parameters') continue
                let verbObj : SwaggerIo.V2.SchemaJson.Definitions.Operation = schema[verb]
                if (_.get(verbObj, ['tags','length'])) {
                    out.push(...verbObj.tags.map(camelCased))
                }
            }
            return out
        })()
        if (!tags.length) tags.push('NoTag')
        let out = _.toPairs(schema).map( ([verb, operation]) => {
            if (verb === 'parameters') return null
            operation['__path__'] = path
            operation['__tag__'] = tags
            operation['__verb__'] = verb
            operation['__parentParameters__'] = schema['parameters'];
            let params = [
                ...(operation['__parentParameters__'] || []),
                ...(operation.parameters || [])
            ].map( p => {
                
                if (p.$ref) p = unRef(p)
                
                if (p.schema) {
                    p.type = p.schema
                }                
                let out : any =  _.pick(p, 'name', 'type', 'required', 'in')
                if (!out.name) throw Error('unexpected')
                return out
            })
            .reduce( (out, line:any) => {
                out[line.name] = line
                return out
            } , {})
            params = _.values(params)

            operation['__mergedParameters__'] = params
            return operation
        }).filter( i => i !== null)
        return out
    }) // [ [Operation], [Operation] ]
    .reduce((out, curr) => {
        return [...out, ...curr]
    }, []) // [ Operation ] __tag__ : string[]
    .value()

    tags = tags.reduce((out, operation) => {
        let spread = operation.__tag__.map( tag => {
            return { ...operation, __tag__ : tag }
        })
        return [...out, ...spread]
    }, []) // [ Operation ] __tag__ : string
    tags = _.groupBy(tags, '__tag__')  // { [__tag__:string] : Operation[] }
    tags = _.mapValues( tags, (value, key) => {
        let uniq = {}
        value.forEach( v => {
            uniq[v.operationId] = v
        })
        return _.values(uniq)
    })

    //DANGEROUSLY MUTABLE AND SHARED
    let __usesTypes = false

    function convertType(type) {
        if (type === 'integer') return 'number'
        if (type.$ref) {
            return refName(type)
        }        
        if (typeof type === 'object' && type !== null) {
            return 'any'
        }
        return type
    }

    function paramsType(operation: SwaggerIo.V2.SchemaJson.Definitions.Operation) {
        let params = operation['__mergedParameters__']
        let out = '{'
        let count = 0
        params = params.sort( (a,b) => {
            let namea = String(a.name).toLowerCase();
            let nameb = String(b.name).toLowerCase();
            if (namea > nameb) return 1;
            else if (namea < nameb) return -1;
            return 0;
        })
        params.forEach( param => {
            if (!param.in && !param.$ref) return
            if (param.schema) {
                param.type = param.schema
            }
            //if ((!header && param.in === 'header') || (header && param.in !== 'header')) return
            if (param.in === 'header' && param.name === 'Authorization') return
            count++
            out += `\n    '${param.name}'${param.required ? '' : '?'} : ${convertType(param.type)}`
        })
        if (count) out += '\n'
        out += '}'
        return out
    }

    function responseType(operation: SwaggerIo.V2.SchemaJson.Definitions.Operation) {
        let find : any = _.get(operation, ['responses', '200', 'schema'])
        if (!find) return 'void'
        if (find.type === 'array') {
            if (!_.get(find, ['items', '$ref'])) return 'any[]'
            let typeNameSplit = find.items.$ref.split('/')
            let typeName = typeNameSplit[typeNameSplit.length-1]
            __usesTypes = true
            return `Types.${typeName}[]`
        } else {
            if (!find.$ref) return 'any'
            let typeNameSplit = find.$ref.split('/')
            let typeName = typeNameSplit[typeNameSplit.length - 1]
            __usesTypes = true
            return `Types.${typeName}`
        }
    }
    
    await _.toPairs(tags).reduce( async (chain, [tag, operations]) => {
        await chain
        __usesTypes = false
        let merged = compiled({ operations, paramsType, responseType, strip })
        if (__usesTypes) merged = "import Types = require('../api-types')\n" + merged
        await promisify( fs.writeFile, path.resolve( opts.output , 'modules', tag + '.ts' ), merged )
    }, Promise.resolve())

    function unRef(param) {
        let path = param.$ref.substr(2).split('/')
        let found = _.get(swaggerDoc, path)
        return found
    }

    function refName(param) {
        let split = param.$ref.split('/')
        __usesTypes = true
        return 'Types.' + split[split.length-1]
    }

    function strip(op:any[]) {
        return op.map( line => _.omit(line, 'type') )
    }

}


function camelCased(tag:string) {
    return tag.match(/[a-zA-Z]+/g).map(word => {
        let out = String(word[0]).toUpperCase() + word.substr(1).toLowerCase()
        return out
    }).reduce((a, b) => a + b, '')    
}


let templateStr =
`import ApiCommon = require('../api-common')

<% operations.forEach( operation => { %>
export type <%=operation.operationId%>_Type = <%= paramsType(operation) %>
export const <%=operation.operationId%>
    = ApiCommon.requestMaker
    <<%=operation.operationId%>_Type, <%=responseType(operation)%> >({
        path: '<%=operation.__path__%>' ,
        verb: '<%=String(operation.__verb__).toUpperCase()%>',
        parameters: <%=JSON.stringify(strip(operation.__mergedParameters__))%>
    })


<% }) %>
`

let compiled = _.template(templateStr)