const tap = require("tap")
const tstemplate = require("../built/main")
const sendgrid = require("./sendgrid.json")
const uber = require("./uber.json")
const spring = require("./spring.json")
const path = require("path")

async function run() {
  await tap.test("sendgrid", async t => {
    await tstemplate.genPaths(sendgrid, {
      output: path.resolve(__dirname, "output", "sendgrid"),
      typesOpts: { hideComments: true },
      moduleStyle: "esm"
    })
  })

  // await tap.test("uber", async t => {
  //   await tstemplate.genPaths(uber, {
  //     output: path.resolve(__dirname, "output", "uber"),
  //     typesOpts: { hideComments: true },
  //     moduleStyle: "esm"
  //   })
  // })

  // await tap.test("spring", async t => {
  //   await tstemplate.genPaths(spring, {
  //     output: path.resolve(__dirname, "output", "spring"),
  //     typesOpts: { hideComments: true },
  //     moduleStyle: "esm"
  //   })
  // })
}

run()
