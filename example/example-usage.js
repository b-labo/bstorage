'use strict'

const {save, restore, purge} = require('bstorage')

// Set to localStorage
save('foo', {msg: 'This is foo'})

// Get from localStorage
console.log(restore('foo')) // -> { msg: 'This is foo' }

// Remove from localStorage
purge('foo')
