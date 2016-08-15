/**
 * Get local storage object
 * @function getLocalStorage
 * @returns {?Object} Local storage instance
 */
'use strict'

const { get } = require('bwindow')

/** @lends getLocalStorage */
function getLocalStorage () {
  return get('localStorage', { strict: false })
}

module.exports = getLocalStorage
