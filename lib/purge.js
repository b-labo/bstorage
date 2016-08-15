/**
 * Remove data from local storage
 * @function purge
 * @param {string} key - Key to purge
 */
'use strict'

const getLocalStorage = require('./helpers/get_local_storage')

/** @lends purge */
function purge (key) {
  let localStorage = getLocalStorage()
  if (!localStorage) {
    return false
  }
  localStorage.removeItem(key)
  return true
}

module.exports = purge
