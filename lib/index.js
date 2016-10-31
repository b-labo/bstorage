/**
 * Browser local-storage wrapper
 * @module bstorage
 */

'use strict'

let d = (module) => module && module.default || module

module.exports = {
  get purge () { return d(require('./purge')) },
  get restore () { return d(require('./restore')) },
  get save () { return d(require('./save')) }
}
