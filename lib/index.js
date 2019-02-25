/**
 * Browser local-storage wrapper
 * @module bstorage
 */

'use strict'


const purge = require('./purge')
const restore = require('./restore')
const save = require('./save')

exports.purge = purge
exports.restore = restore
exports.save = save

module.exports = {
  purge,
  restore,
  save
}
