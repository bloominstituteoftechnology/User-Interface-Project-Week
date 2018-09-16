# tealight

> ES2015 module for DOM queries.

<a href="https://travis-ci.org/jlmakes/tealight"><img src="https://img.shields.io/travis/jlmakes/tealight.svg" alt="Build status" height="24px"></a>
<a href="https://coveralls.io/github/jlmakes/tealight"><img src="https://img.shields.io/coveralls/jlmakes/tealight.svg" alt="Coverage" height="24px"></a>
<a href="https://www.npmjs.com/package/tealight"><img src="https://img.shields.io/npm/v/tealight.svg" alt="Version" height="24px"></a>
<a href="https://github.com/jlmakes/tealight/blob/master/src/index.js"><img src="https://img.shields.io/badge/min+gzip-0.4KB-blue.svg" alt="0.4KB min+gzip" height="24px"></a>
<a href="https://github.com/jlmakes/tealight/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT License" height="24px"></a>

<p align="center">
	<a href="https://saucelabs.com/u/tealight">
		<img src="https://saucelabs.com/browser-matrix/tealight.svg" alt="Browser compatibility matrix" width="100%">
	</a>
</p>

<br>

<br>

## Installation

### Browser

A simple and fast way to get started is to include this script on your page:

```html
<script src="https://unpkg.com/tealight"></script>
```

This will create the global variable `tealight`.

### Module

```bash
$ npm install tealight
```

#### CommonJS

```js
const tealight = require('tealight')
```

#### ES2015

```js
import tealight from 'tealight'
```

<br>

<br>

## Usage

`tealight` accepts a single argument, `target`, and will **always return an array of 0 or more DOM nodes**.

```jsx
tealight(target) => Array<Node>
```

For the examples below, assume we have this HTML fragment to query against:

```html
<div id="jar">
	<div class="chocolate-chip cookie"></div>
	<div class="peanut-butter cookie"></div>
	<div class="short-bread cookie"></div>
</div>
```

<br>

### `tealight(String<Selector>)`

`String` arguments will be used as DOM query selectors.

```js
tealight('#jar')
// => [ <div#jar> ]
```

```js
tealight('.cookie')
// => [ <div.chocolate-chip.cookie>, <div.peanut-butter.cookie>, <div.short-bread.cookie> ]
```

> Keep in mind that `document.querySelectorAll` throws an error when passed an invalid selector (requiring a try/catch block), whereas `tealight` will swallow the error and return an empty array.

<br>

### `tealight(Node)`

`Node` arguments will be wrapped in an `Array`.

```js
const node = document.querySelector('#jar')

tealight(node)
// => [ <div#jar> ]
```

<br>

### `tealight(NodeList)`

`NodeList` arguments will be converted to `Array`.

```js
const nodeList = document.querySelectorAll('.cookie')

tealight(nodeList)
// => [ <div.chocolate-chip.cookie>, <div.peanut-butter.cookie>, <div.short-bread.cookie> ]
```

<br>

### `tealight(Array)`

`Array` arguments will be filtered, leaving only `Node` items.

```js
const node = document.querySelector('#jar')
const array = [node, null, '.cookie']

tealight(array)
// => [ <div#jar> ]
```

<br>

<br>

© 2018 FISSSION, LLC.
<br>
Open source under the [MIT License](https://github.com/jlmakes/tealight/blob/master/LICENSE).
