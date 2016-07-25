# Mathlab

## Table of Contents

1. [Data type](#)
1. [Function list](#)
1. [Math Object functions](#)


## Function list
   |                    |    |                 |                 |                     |   |                |
---|              --- | ------ |         ---------- | ------------ | --------------- | --- | --------------- |
[abs](#abs)   |    bnot   |     diag   |     floor   |     leq   |       negtranspose   |  pow   |         setBlock   |
acos   |   bor   |      dim   |      geq   |       linspace   |  neq   |           random   |      sin   |
add   |    bxor   |     div   |      getBlock   |  log   |       norm2   |         reciprocal   |  sqrt   |
and   |    ceil   |     dot   |      getDiag   |   lshift   |    norm2Squared   |  rep   |         sub   |
asin   |   clone   |    eig   |      gt   |        lt   |        not   |           round   |       tan   |
atan2   |  Complex   |  epsilon   |  identity   |  mod   |       or   |            rrshift   |     tensor   |
atan   |   cos   |      eq   |       index   |     mul   |       pointwise2   |    rshift   |      transpose   |
band   |   det   |      exp   |      inv   |       neg   |       pointwise   |     same   |



## Math Object functions

<a name='abs'/>
- [**abs(x)**](#abs): Pointwise [Math.abs(x)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs) [*(source)*](https://github.com/timqian/mathlab/blob/master/src/abs.js)
	+ params: `Number | Array | Complex | Sparse`
	+ returns: `Number | Array | Complex | Sparse`
	+ example:
		```js
		import {abs, Complex, Sparse} from './mathlab'

		abs(-1)  // -1
		abs([-1, 2])  // [1, 2]
		abs(new Complex(3, 4))  // {x: 5, y: 0}
		abs(new Sparse([[1,2,0],[0,0,-1],[1,0,0]])) // {row: col: val:}
		```