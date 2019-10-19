const tap = require("tap")
const tstemplate = require("../built/main")
const defs = require("./sendgrid.json")
const path = require("path")
const fs = require("fs")
const mkdirp = require("mkdirp")

async function run() {
  // await tap.test("genTypes", async t => {
  //   const resp = await tstemplate.genTypes(defs, {
  //     external: true,
  //     hideComments: false
  //   })
  //   mkdirp.sync(path.resolve(__dirname, "output", "gentypes"))
  //   fs.writeFileSync(path.resolve(__dirname, "output", "gentypes", "gentypes.d.ts"), resp)
  // })

  await tap.test("genPaths", async t => {
    await tstemplate.genPaths(defs, {
      output: path.resolve(__dirname, "output", "genpaths"),
      moduleStyle: "esm"
    })
  })
}

run()
