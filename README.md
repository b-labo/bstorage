bstorage
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![Code Climate][bd_codeclimate_shield_url]][bd_codeclimate_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/b-labo/bstorage
[bd_travis_url]: http://travis-ci.org/b-labo/bstorage
[bd_travis_shield_url]: http://img.shields.io/travis/b-labo/bstorage.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/b-labo/bstorage
[bd_travis_com_shield_url]: https://api.travis-ci.com/b-labo/bstorage.svg?token=
[bd_license_url]: https://github.com/b-labo/bstorage/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/b-labo/bstorage
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/b-labo/bstorage.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/b-labo/bstorage.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/b-labo/bstorage
[bd_gemnasium_shield_url]: https://gemnasium.com/b-labo/bstorage.svg
[bd_npm_url]: http://www.npmjs.org/package/bstorage
[bd_npm_shield_url]: http://img.shields.io/npm/v/bstorage.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Browser local-storage wrapper

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>

Installation
-----

```bash
$ npm install bstorage --save
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Usage.md.hbs" Start -->

<a name="section-doc-guides-02-usage-md"></a>

Usage
---------

```javascript
'use strict'

const { save, restore, purge } = require('bstorage')

// Set to localStorage
save('foo', { msg: 'This is foo' })

// Get from localStorage
console.log(restore('foo')) // -> { msg: 'This is foo' }

// Remove from localStorage
purge('foo')

```


<!-- Section from "doc/guides/02.Usage.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/b-labo/bstorage/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------



<!-- Links End -->