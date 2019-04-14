const tap = require("tap")
const tstemplate = require("../built/main")
const defs = require("./uber.json")
const path = require("path")
const fs = require("fs")
const mkdirp = require("mkdirp")

tap.test("genTypes", async t => {
  const resp = await tstemplate.genTypes(defs, {
    external: true,
    hideComments: false
  })
  mkdirp.sync(path.resolve(__dirname, "output", "gentypes"))
  fs.writeFileSync(path.resolve(__dirname, "output", "gentypes", "gentypes.d.ts"), resp)
})

tap.test("genPaths", async t => {
  await tstemplate.genPaths(defs, {
    output: path.resolve(__dirname, "output", "genpaths")
  })
})
