/**
 * Test case for purge.
 * Runs with mocha.
 */
'use strict'

const purge = require('../lib/purge.js')
const assert = require('assert')
const co = require('co')
const injectmock = require('injectmock')

describe('purge', function () {
  this.timeout(3000)

  before(() => co(function * () {
    injectmock(global, 'window', {
      localStorage: {
        removeItem (key) {

        }
      }
    })
  }))

  after(() => co(function * () {
    injectmock.restoreAll()
  }))

  it('Purge', () => co(function * () {
    assert.ok(purge('hoge'))
  }))
})

/* global describe, before, after, it */
