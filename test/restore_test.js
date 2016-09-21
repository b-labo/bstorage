/**
 * Test case for restore.
 * Runs with mocha.
 */
'use strict'

const restore = require('../lib/restore.js')
const assert = require('assert')
const co = require('co')
const injectmock = require('injectmock')

describe('restore', function () {
  this.timeout(3000)

  before(() => co(function * () {
    injectmock(global, 'window', {
      localStorage: {
        hoge: { msg: 'Value of hoge' },
        getItem (key) {
          return { msg: 'Value of ' + key }
        }
      }
    })
  }))

  after(() => co(function * () {
    injectmock.restoreAll()
  }))

  it('Restore', () => co(function * () {
    let hoge = restore('hoge')
    assert.deepEqual(hoge, { msg: 'Value of hoge' })
  }))
})

/* global describe, before, after, it */
