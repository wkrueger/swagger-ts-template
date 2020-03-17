const tap = require("tap")
const tstemplate = require("../built/main")
const sendgrid = require("./sendgrid.json")
const uber = require("./uber.json")
const spring = require("./spring.json")
const nestjs = require("./nestjs.json")
const path = require("path")

async function run() {
  await tap.test("sendgrid", async t => {
    await tstemplate.genPaths(sendgrid, {
      output: path.resolve(__dirname, "output", "sendgrid"),
      typesOpts: { hideComments: true },
      moduleStyle: "esm"
    })
  })

  await tap.test("uber", async t => {
    await tstemplate.genPaths(uber, {
      output: path.resolve(__dirname, "output", "uber"),
      typesOpts: { hideComments: true },
      moduleStyle: "esm"
    })
  })

  await tap.test("spring", async t => {
    await tstemplate.genPaths(spring, {
      output: path.resolve(__dirname, "output", "spring"),
      typesOpts: { hideComments: true },
      moduleStyle: "esm"
    })
  })

  await tap.test("empty", async t => {
    await tstemplate.genPaths(null, {
      output: path.resolve(__dirname, "output", "empty"),
      moduleStyle: "esm"
    })
  })

  await tap.test("nestjs", async t => {
    await tstemplate.genPaths(nestjs, {
      output: path.resolve(__dirname, "output", "nestjs"),
      moduleStyle: "esm"
    })
  })
}

run()
