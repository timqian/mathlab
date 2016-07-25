# Mathlab

## Table of Contents

1. [Data type](#)
1. [Function list](#)
1. [Math Object functions](#)


## Function list
   |                    |    |                 |                 |                     |
---|              --- | ------ |         ---------- | ------------ | --------------- |
abs   |    ceil   |     eq   |        linspace   |      not   |         rshift   |
acos   |   clone   |    exp   |       log   |           OldT   |        same   |
add   |    Complex   |  floor   |     lshift   |        or   |          setBlock   |
and   |    cos   |      geq   |       lt   |            pointwise2   |  sin   |
asin   |   det   |      getBlock   |  mod   |           pointwise   |   sqrt   |
atan2   |  diag   |     getDiag   |   mul   |           pow   |         sub   |
atan   |   dim   |      gt   |        neg   |           random   |      tan   |
band   |   div   |      identity   |  negtranspose   |  reciprocal   |  tensor   |
bnot   |   dot   |      index   |     neq   |           rep   |         transpose   |
bor   |    eig   |      inv   |       norm2   |         round   |
bxor   |   epsilon   |  leq   |       norm2Squared   |  rrshift   |


## Math Object functions

- [**abs(x)**](https://github.com/timqian/mathlab/blob/master/src/abs   |): Pointwise [Math.abs(x)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs)

	+ params: `Number | Array | Complex | Sparse`

	+ returns: `Number | Array | Complex | Sparse`

	+ example:

		``   |
		import {abs, Complex, Sparse} from './mathlab'

		abs(-1)  // -1
		abs([-1, 2])  // [1, 2]
		abs(new Complex(3, 4))  // {x: 5, y: 0}
		abs(new Sparse([[1,2,0],[0,0,-1],[1,0,0]])) // {row: col: val:}
		```