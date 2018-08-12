/**
 * Get data from local storage
 * @function restore
 * @param {string} key - Key to restore
 * @returns {?Object} - Resotred object
 */
'use strict'

const getLocalStorage = require('./helpers/get_local_storage')
const getQuery = require('./helpers/get_query')

/** @lends restore */
function restore (key) {
  let localStorage = getLocalStorage()
  if (!localStorage) {
    return undefined
  }
  let has = localStorage.hasOwnProperty(key)
  if (!has) {
    return undefined
  }
  let found = localStorage.getItem(key)
  let isEmpty = (typeof found === 'undefined') || found === null
  if (isEmpty) {
    return found
  }
  try {
    return JSON.parse(found)
  } catch (e) {
    return found
  }
}

Object.assign(restore, {
  query (key) {
    return (getQuery() || {})[key]
  }
})

module.exports = restore
