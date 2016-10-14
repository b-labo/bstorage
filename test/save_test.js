/**
 * Test case for save.
 * Runs with mocha.
 */
'use strict'

const save = require('../lib/save.js')
const assert = require('assert')
const co = require('co')
const injectmock = require('injectmock')

describe('save', function () {
  this.timeout(3000)
  let saved = {}
  let states = []
  before(() => co(function * () {
    injectmock(global, 'window', {
      localStorage: {
        setItem (key, value) {
          saved[ key ] = value
        }
      },
      location: {
        search: ''
      },
      history: {
        pushState (state, title, url) {
          states.push([ state, title, url ])
        }
      }
    })
  }))

  after(() => co(function * () {
    injectmock.restoreAll()
  }))

  it('Save', () => co(function * () {
    let success = save('foo', {
      msg: 'This is foo'
    })
    assert.ok(success)
    assert.deepEqual(saved, { foo: '{"msg":"This is foo"}' })
  }))

  it('Save to query', () => co(function * () {
    let success = save.query('foo', {
      msg: 'This is foo'
    })
    assert.ok(success)
    assert.deepEqual(states, [ [ null, null, '?foo%5Bmsg%5D=This%20is%20foo' ] ])
  }))
})

/* global describe, before, after, it */
