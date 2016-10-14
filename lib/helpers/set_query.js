/**
 * Update query on location
 * @function setQuery
 * @param {Object} query - Query object to set
 * @returns {boolean} - Succeed or not
 */
'use strict'

const { get } = require('bwindow')
const { stringify } = require('qs')

/** @lends setQuery */
function setQuery (query) {
  let history = get('history')
  if (!history) {
    return false
  }
  history.pushState(null, null, '?' + stringify(query))
  return true
}

module.exports = setQuery
