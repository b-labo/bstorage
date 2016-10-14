/**
 * Set data to local storage
 * @function save
 * @param {string} key - Key to save
 * @param {Object} value - Values to save
 */
'use strict'

const getLocalStorage = require('./helpers/get_local_storage')
const getQuery = require('./helpers/get_query')
const setQuery = require('./helpers/set_query')

/** @lends save */
function save (key, value) {
  let localStorage = getLocalStorage()
  if (!localStorage) {
    return false
  }
  localStorage.setItem(key, JSON.stringify(value))
  return true
}

Object.assign(save, {
  query (key, value) {
    let query = Object.assign(getQuery() || {}, {
      [key]: value
    })
    return setQuery(query)
  }
})

module.exports = save
