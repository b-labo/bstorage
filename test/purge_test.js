/**
 * Test case for purge.
 * Runs with mocha.
 */
'use strict'

const purge = require('../lib/purge.js')
const assert = require('assert')

const injectmock = require('injectmock')

describe('purge', function () {
  this.timeout(3000)

  before(async () => {
    injectmock(global, 'window', {
      localStorage: {
        removeItem (key) {

        }
      }
    })
  })

  after(async () => {
    injectmock.restoreAll()
  })

  it('Purge', async () => {
    assert.ok(purge('hoge'))
  })
})

/* global describe, before, after, it */
