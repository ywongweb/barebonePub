#!/usr/bin/env node
const {IOSBuilder} = require('./IOSBuilder')
const exec = require('../utils/exec')

run().catch(error => {
  console.log(error)
  process.exit(1)
})

async function run() {
  console.log('\n*** Installing Pods ***')
  exec.execSync(`cd ${__dirname}/../../ios && pod install`)

  const iOSBuilder = new IOSBuilder()
  iOSBuilder.buildiOSBinary()
}

