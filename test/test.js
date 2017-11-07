const tstemplate = require('../built/main')
const defs = require('./test.json')

/*
tstemplate.genTypes( defs, {
    external : true,
    hideComments: true
})
*/


tstemplate.genPaths( defs, {output: './output'} ).then(() => console.log('ended paths test'))