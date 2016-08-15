/**
 * Set data to local storage
 * @function save
 * @param {string} key - Key to save
 * @param {Object} value - Values to save
 */
'use strict'

const getLocalStorage = require('./helpers/get_local_storage')

/** @lends save */
function save (key, value) {
  let localStorage = getLocalStorage()
  if (!localStorage) {
    return false
  }
  localStorage.setItem(key, JSON.stringify(value))
  return true
}

module.exports = save
