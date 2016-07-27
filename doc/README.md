# Mathlab

## Table of Contents

1. [Complex numbers](#complex-numbers)
1. [Sparse matrix](#sparse-matrix)
1. [Math Object functions](#math-object-functions)
1. [Arithmetic operations](#arithmetic-operations)
1. [Utility functions](#utility-functions)
1. [Linear algebra](#linear-algebra)
1. [Fast Fourier Transforms](#fast-fourier-transforms)
1. [Coordinate matrices]
1. [Solving PDEs]
1. [Solving ODEs]
1. [Cubic splines]
1. [Quadratic Programming]
1. [Unconstrained optimization]
1. [Linear programming]
1. [Seedrandom]


## Complex numbers

> Complex

Besides normal Array presenting vectors and matrix,
mathlab also support Complex number/vectors/matrix and Sparse matrix manipulation.

Complex number/vectors/matrix
	
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

## Sparse matrix

> Sparse

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
//  [0,-3,0],
//  [-2,0,-5]]
```

## Math Object functions

> abs | acos | asin | atan | ceil | cos | exp | floor | log | round | sin | sqrt | tan

The *Math* object functions have been adapted to work on Arrays , Complex and Sparse Objects

#### Sample usage

**abs**: Pointwise [Math.abs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs) [*(source)*](https://github.com/timqian/mathlab/blob/master/src/abs.js)
- params: `Number | Array | Complex | Sparse`
- returns: `Number | Array | Complex | Sparse`
- example:
	```js
	import {abs, Complex, Sparse} from './mathlab'

	abs(-1)  // 1
	abs([-1, 2])  // [1, 2]
	abs(new Complex(3, 4))  // {x: 5, y: 0}
	abs(new Sparse([[1,2,0],[0,0,-1],[1,0,0]])) // {row: col: val:}
	```

## Arithmetic operations

> add | sub | mul | div | neg | isFinite | isNaN

The standard arithmetic operations have been vectorized:
```js
import { add, Complex } from 'mathlab'

add(1, 2) // 3
add([1,2], 2,2) // [3,4]
add(new Complex([1,2], [2,2]), new Complex([1,1],[1,1]))
// {
// 	re: [2, 3],
// 	im: [3,3]
// }
```

## Utility functions

> dim | same | rep | diag | identity | random | linspace

- dim: returns the dimensions of an Array
```js
dim(1) // []
dim([1,2]) // [2]
dim(new Complex([1,2], [1,2])) // [2]
dim([[1,2],[2,2],[3,3]]) // [3,2]
```


## Linear algebra

> dot | solve | det | inv | norm2 | tensor | eig

- dot: returns dot product
```js
dot([1, 2], 4) // [4, 8]
dot([[1, 1], [2, 1]], [1, 2]) // [3, 4]
dot(new Complex([1, 2], [2, 2]), new Complex([2,2], [2,2])) // -2
```

## Fast Fourier Transforms

> fft | ifft

```js

```


## Function list

- [x] [`pointwise()`](http://www.timqian.com/mathlab/function/index.html#static-function-pointwise)	Create a pointwise function
- [x] [`det()`](http://www.timqian.com/mathlab/function/index.html#static-function-det)	Determinant
- [x] [`dot()`](http://www.timqian.com/mathlab/function/index.html#static-function-dot)	Matrix-Matrix, Matrix-Vector and Vector-Matrix product
- [x] [`eig()`](http://www.timqian.com/mathlab/function/index.html#static-function-eig)	Eigenvalues and eigenvectors
- [x] [`getBlock()`](http://www.timqian.com/mathlab/function/index.html#static-function-getBlock)	Extract a block from a matrix
- [x] [`getDiag()`](http://www.timqian.com/mathlab/function/index.html#static-function-getDiag)	Get the diagonal of a matrix
- [x] [`identity()`](http://www.timqian.com/mathlab/function/index.html#static-function-identity)	Identity matrix
- [x] [`inv()`](http://www.timqian.com/mathlab/function/index.html#static-function-inv)	Matrix inverse
- [ ] [`largeArray()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Don't prettyPrint Arrays larger than this
- [ ] [`LU()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Dense LU decomposition
- [ ] [`LUsolve()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Dense LU solve
- [ ] [`mapreduce()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Make a pointwise map-reduce function
- [x] [`norm2()`](http://www.timqian.com/mathlab/function/index.html#static-function-norm2)	Square root of the sum of the squares of the entries of x
- [x] [`norm2Squared()`](http://www.timqian.com/mathlab/function/index.html#static-function-norm2Squared)	Sum of squares of entries of x
- [ ] [`norminf()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Largest modulus entry of x
- [ ] [`parseFloat()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Pointwise parseFloat(x)
- [ ] [`precision()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Number of digits to prettyPrint
- [ ] [`prettyPrint()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Pretty-prints x
- [x] [`random()`](http://www.timqian.com/mathlab/function/index.html#static-function-random)	Create an Array of random numbers
- [x] [`rep()`](http://www.timqian.com/mathlab/function/index.html#static-function-rep)	Create an Array by duplicating values
- [x] [`same()`](http://www.timqian.com/mathlab/function/index.html#static-function-same)	x and y are entrywise identical
- [x] [`setBlock()`](http://www.timqian.com/mathlab/function/index.html#static-function-setBlock)	Set a block of a matrix
- [ ] [`solve()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Solve Ax=b
- [ ] [`solveLP()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Solve a linear programming problem
- [ ] [`solveQP()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Solve a quadratic programming problem
- [ ] [`spline()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Create a Spline object
- [ ] [`Spline.at()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Evaluate the Spline at a point
- [ ] [`Spline.diff()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Differentiate the Spline
- [ ] [`Spline.roots()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Find all the roots of the Spline
- [ ] [`sum()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Sum all the entries of x
- [ ] [`svd()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Singular value decomposition
- [x] [`Complex()`](http://www.timqian.com/mathlab/function/index.html#static-function-Complex)	Create a Complex type
- [x] [`Complex.identity()`]() Generate identity complex structure matrix of given size
- [x] [`Complex.conj()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Pointwise complex conjugate
- [x] [`Complex.fft()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Fast Fourier transform
- [x] [`Complex.get()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Read an entry
- [x] [`Complex.getRow()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Get a row
- [x] [`Complex.getRows()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Get a range of rows
- [x] [`Complex.ifft()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Inverse FFComplex
- [x] [`Complex.reciprocal()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Pointwise 1/z
- [x] [`Complex.set()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Set an entry
- [x] [`Complex.setRow()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Set a row
- [x] [`Complex.setRows()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Set a range of rows
- [x] [`Complex.transjugate()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Complexhe conjugate-transpose of a matrix
- [x] [`tensor()`](http://www.timqian.com/mathlab/function/index.html#static-function-tensor)	Complexensor product ret[i][j] = x[i]*y[j]
- [x] [`transpose()`](http://www.timqian.com/mathlab/function/index.html#static-function-transpose)	Matrix transpose
- [ ] [`uncmin()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Unconstrained optimization
- [ ] [`version()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Version string for the numeric library

#### Pointwise functions

- [x] [`clone()`](http://www.timqian.com/mathlab/function/index.html#static-function-clone)	Deep copy of Array
- [x] [`abs()`](http://www.timqian.com/mathlab/function/index.html#static-function-abs)	Absolute value
- [x] [`acos()`](http://www.timqian.com/mathlab/function/index.html#static-function-acos)	Arc-cosine
- [x] [`add()`](http://www.timqian.com/mathlab/function/index.html#static-function-add)	Pointwise sum x+y
- [x] [`and()`](http://www.timqian.com/mathlab/function/index.html#static-function-and)	Pointwise x && y
- [x] [`asin()`](http://www.timqian.com/mathlab/function/index.html#static-function-asin)	Arc-sine
- [x] [`atan()`](http://www.timqian.com/mathlab/function/index.html#static-function-atan)	Arc-tangeant
- [x] [`atan2()`](http://www.timqian.com/mathlab/function/index.html#static-function-atan2)	Arc-tangeant (two parameters)
- [x] [`band()`](http://www.timqian.com/mathlab/function/index.html#static-function-band)	Pointwise x & y
- [x] [`bnot()`](http://www.timqian.com/mathlab/function/index.html#static-function-bnot)	Binary negation ~x
- [x] [`bor()`](http://www.timqian.com/mathlab/function/index.html#static-function-bor)	Binary or x|y
- [x] [`bxor()`](http://www.timqian.com/mathlab/function/index.html#static-function-bxor)	Binary xor x^y
- [x] [`ceil()`](http://www.timqian.com/mathlab/function/index.html#static-function-ceil)	Pointwise Math.ceil(x)
- [x] [`cos()`](http://www.timqian.com/mathlab/function/index.html#static-function-cos)	Pointwise Math.cos(x)
- [x] [`diag()`](http://www.timqian.com/mathlab/function/index.html#static-function-diag)	Create diagonal matrix
- [x] [`dim()`](http://www.timqian.com/mathlab/function/index.html#static-function-dim)	Get Array dimensions
- [x] [`div()`](http://www.timqian.com/mathlab/function/index.html#static-function-div)	Pointwise x/y
- [x] [`eq()`](http://www.timqian.com/mathlab/function/index.html#static-function-eq)	Pointwise comparison x === y
- [x] [`exp()`](http://www.timqian.com/mathlab/function/index.html#static-function-exp)	Pointwise Math.exp(x)
- [x] [`floor()`](http://www.timqian.com/mathlab/function/index.html#static-function-floor)	Poinwise Math.floor(x)
- [x] [`geq()`](http://www.timqian.com/mathlab/function/index.html#static-function-geq)	Pointwise x>=y
- [x] [`gt()`](http://www.timqian.com/mathlab/function/index.html#static-function-gt)	Pointwise x>y
- [x] [`leq()`](http://www.timqian.com/mathlab/function/index.html#static-function-leq)	Pointwise x<=y
- [x] [`linspace()`](http://www.timqian.com/mathlab/function/index.html#static-function-linspace)	Generate evenly spaced values
- [x] [`log()`](http://www.timqian.com/mathlab/function/index.html#static-function-log)	Pointwise Math.log(x)
- [x] [`lshift()`](http://www.timqian.com/mathlab/function/index.html#static-function-lshift)	Pointwise x<<y
- [x] [`lt()`](http://www.timqian.com/mathlab/function/index.html#static-function-lt)	Pointwise x<y
- [x] [`mod()`](http://www.timqian.com/mathlab/function/index.html#static-function-mod)	Pointwise x%y
- [x] [`mul()`](http://www.timqian.com/mathlab/function/index.html#static-function-mul)	Pointwise x*y
- [x] [`neg()`](http://www.timqian.com/mathlab/function/index.html#static-function-neg)	Pointwise -x
- [x] [`neq()`](http://www.timqian.com/mathlab/function/index.html#static-function-neq)	Pointwise x!==y
- [x] [`not()`](http://www.timqian.com/mathlab/function/index.html#static-function-not)	Pointwise logical negation !x
- [x] [`or()`](http://www.timqian.com/mathlab/function/index.html#static-function-or)	Pointwise logical or x||y
- [x] [`pow()`](http://www.timqian.com/mathlab/function/index.html#static-function-pow)	Pointwise Math.pow(x)
- [x] [`round()`](http://www.timqian.com/mathlab/function/index.html#static-function-round)	Pointwise Math.round(x)
- [x] [`rrshift()`](http://www.timqian.com/mathlab/function/index.html#static-function-rrshift)	Pointwise x>>>y
- [x] [`rshift()`](http://www.timqian.com/mathlab/function/index.html#static-function-rshift)	Pointwise x>>y
- [x] [`rshifteq()`](http://www.timqian.com/mathlab/function/index.html#static-function-rshift)	Pointwise x>>=y
- [x] [`sin()`](http://www.timqian.com/mathlab/function/index.html#static-function-sin)	Pointwise Math.sin(x)
- [x] [`sqrt()`](http://www.timqian.com/mathlab/function/index.html#static-function-sqrt)	Pointwise Math.sqrt(x)
- [x] [`sub()`](http://www.timqian.com/mathlab/function/index.html#static-function-sub)	Pointwise x-y
- [x] [`tan()`](http://www.timqian.com/mathlab/function/index.html#static-function-tan)	Pointwise Math.tan(x)
- [x] [`xor()`](http://www.timqian.com/mathlab/function/index.html#static-function-xor)	Pointwise x^y

#### Constants
- [x] [`epsilon`](http://www.timqian.com/mathlab/function/index.html#static-function-epsilon)	Return 2.220446049250313e-16
