'use strict'

const logger = require('log4js').getLogger("trace")

module.exports = {
  trace: function* (key, func){
    const t = new Date() * 1

    const result = yield func

    logger.info(`${key} runtime: ${new Date() * 1 - t} ms`)

    return result
  }
}
