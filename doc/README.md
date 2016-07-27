# Mathlab

## Table of Contents

1. [Data types](#data-types)
1. [Math Object functions](#math-object-functions)

## Data types

Besides from normal Array presenting vectors and matrix,
mathlab support Complex number/vectors/matrix and Sparse matrix manipulation.

1. Complex number/vectors/matrix
	
	example:
	```js
	import { Complex, abs, add } from 'mathlab'

	// definition
	const z = new Complex(3, 4) // {re:3, im:4}

	// operation
	abs(z) // {re:5, im:0}
	add(z, new Complex(1, 2)) // {re:4, im:6}

	// complex vector and matrix
	const z1 = new Complex([3,4], [4,3])
	abs(z1) //{re:5, im:5}
	```

2. Sparse matrix

	example:
```js
import {Sparse, abs} from 'mathlab'

// transform normal matrix to sparse
const s = new Sparse([[-1,-2,0],
                      [0,-3,0],
                      [-2,0,-5]])
// {
// 	col: [0,2,4,5],
// 	row: [0,2,0,1,2],
// 	val: [-1,-2,-2,-3,-5]
// }


// manipulation
const sAbs = abs(s)
// {
// 	col: [0,2,4,5],
// 	row: [0,2,0,1,2],
// 	val: [1,2,2,3,5]
// }

// transform sparse matrix to full matrix
sAbs.toFull()
// [[-1,-2,0],
// [0,-3,0],
// [-2,0,-5]]
```

## Function list
   |         |         |              |           |            |           |                |
---|     --- | ------ |     ---------- | --------- | ----------- | --------- | ----------- |
[abs](#abs)   |    bnot   |     diag   |     floor   |     leq   |       negtranspose   |  pow   |         setBlock   |
acos   |   bor   |      dim   |      geq   |       linspace   |  neq   |           random   |      sin   |
add   |    bxor   |     div   |      getBlock   |  log   |       norm2   |         reciprocal   |  sqrt   |
and   |    ceil   |     dot   |      getDiag   |   lshift   |    norm2Squared   |  rep   |         sub   |
asin   |   clone   |    eig   |      gt   |        lt   |        not   |           round   |       tan   |
atan2   |  Complex   |  epsilon   |  identity   |  mod   |       or   |            rrshift   |     tensor   |
atan   |   cos   |      eq   |       index   |     mul   |       pointwise2   |    rshift   |      transpose   |
band   |   det   |      exp   |      inv   |       neg   |       pointwise   |     same   |



## Math Object functions

<a name='abs'><a/>
- [**abs(x)**](#abs): Pointwise [Math.abs(x)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs) [*(source)*](https://github.com/timqian/mathlab/blob/master/src/abs.js)
	+ params: `Number | Array | Complex | Sparse`
	+ returns: `Number | Array | Complex | Sparse`
	+ example:
		```js
		import {abs, Complex, Sparse} from './mathlab'

		abs(-1)  // 1
		abs([-1, 2])  // [1, 2]
		abs(new Complex(3, 4))  // {x: 5, y: 0}
		abs(new Sparse([[1,2,0],[0,0,-1],[1,0,0]])) // {row: col: val:}
		```