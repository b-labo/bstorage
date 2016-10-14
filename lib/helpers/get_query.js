/**
 * Get query from location
 * @function getQuery
 * @returns {?Object} - Query
 */
'use strict'

const { get } = require('bwindow')
const { parse } = require('qs')

/** @lends getQuery */
function getQuery () {
  let location = get('location')
  if (!location) {
    return null
  }
  let { search } = location
  return search && parse(search.replace(/^\?/, ''))
}

module.exports = getQuery
