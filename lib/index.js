/**
 * Browser local-storage wrapper
 * @module bstorage
 */

'use strict'

const d = (module) => module && module.default || module

const purge = d(require('./purge'))
const restore = d(require('./restore'))
const save = d(require('./save'))

module.exports = {
  purge,
  restore,
  save
}
