# Mathlab

> Doc generated using [mkdoc](#)

## Table of Contents

1. [data type](#)
1. [Math Object functions](#)


## Math Object functions

- `abs`: Pointwise [Math.abs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs)

	+ params:

		> Number | Array | Complex | Sparse

	+ returns:

		> Number | Array | Complex | Sparse

	+ example:

		```js
		import {abs, Complex, Sparse} from './mathlab'

		abs(-1)  // -1
		abs([-1, 2])  // [1, 2]
		abs(new Complex(3, 4))  // {x: 5, y: 0}
		abs(new Sparse([[1,2,0],[0,0,-1],[1,0,0]])) // {row: col: val:}
		```

- `acos`: Pointwise [Math.acos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/acos)

	+ params:

		> Number | Array | Complex | Sparse

	+ returns:

		> Number | Array | Complex | Sparse

	+ example:

		```js
		import {acos, Complex, Sparse} from './mathlab'

		acos(-1)  // -1
		absacos([-1, 2])  // [1, 2]
		absacos(new Complex(3, 4))  // {x: 5, y: 0}
		acos(new Sparse([[1,2,0],[0,0,-1],[1,0,0]])) // {row: col: val:}
		```