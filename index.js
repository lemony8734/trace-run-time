'use strict'

const stackTrace = require('stack-trace')

module.exports = {
  trace: function* (key, func){
    const t = new Date() * 1

    const result = yield func

    const s = stackTrace.get(func)

    console.log(`${s}`)

    return result
  }
}
