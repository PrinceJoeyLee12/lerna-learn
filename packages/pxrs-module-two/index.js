const Export = require('pxrs-test')()

function Module1() {
    console.log(`Test: ${Export}`)
    return "This is from module 2"
}

Module1()

module.exports = Module1