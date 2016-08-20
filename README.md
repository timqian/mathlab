# mathlab

Lodash like math lab in javascript, focusing on matrix manipulation.

[![npm](https://nodei.co/npm/mathlab.png)](https://www.npmjs.com/package/mathlab)

# Install

```bash
$ npm install mathlab --save
```

# Sample usage
```js
import { dot } from 'mathlab'

const A = [[1,2,3],
           [4,5,6]]

const x = [7,8,9]

// calculate dot product
dot(A, x) // [50,122]
```

# Features

- **Modulize**: only import the function you need.
- **Easy to use**: no extra concepts to grasp(1D Array as vector and 2D Array as matrix)
- **Functional**: no side effact on input data and the outside world
- **Multifunctional**: Support `sparse` and `complex` matrix manipulation; `FFT`; `eigenvectors & eigenvalues of matrix`; and so on

# Introduction to functions

Mathlab provide a collection of mathmatic functions which can be applied to numbers, arrays and two self-defined datatypes (Complex and Sparse).

Functions can be devide into 5 groups:

### 1. Math Object functions

> [abs][abs] | [acos][acos] | [asin][asin] | [atan][atan] | [ceil][ceil] | [cos][cos] | [exp][exp] | [floor][exp] | 
[log][log] | [round][round] | [sin][sin] | [sqrt][sqrt] | [tan][tan]

The *Math* object functions have been adapted to work on Arrays, Complex and Sparse Objects

#### example

```js
import {abs, Complex, Sparse} from './mathlab'

abs(-1)  // 1
abs([-1, 2])  // [1, 2]
abs(new Complex(3, 4))  // {re: 5, im: 0}
abs(new Sparse([[1,2,0],[0,0,-1],[1,0,0]])) // {row: col: val:}
```

### 2. Arithmetic operations

> [add][add] | [sub][sub] | [mul][mul] | [div][div] | [neg][neg]

The standard arithmetic operations have been vectorized:

#### example 

```js
import { add, Complex } from 'mathlab'

add(1, 2) // 3
add([1,2], 2,2) // [3,4]
```

### 3. Linear algebra

> [dot][dot] | [solve][solve] | [det][det] | [inv][inv] | [norm2][norm2] | [tensor][tensor] | [eig][eig]

#### example: `dot`

```js
dot([[1, 1], [2, 1]], [1, 2]) // [3, 4]
```

### 4. Fast Fourier Transforms

> [fft][fft] | [ifft][ifft]

#### example

```js
import {fft, ifft, Complex} from 'mathlab'

// {re: [ 15, -5.941, -3.312, -1.688, 0.941], im: [ 40, 0.941, -1.688, -3.312, -5.941]}
const fftRes = fft(new Complex([1,2,3,4,5],[6,7,8,9,10]))

// {re:[1,2,3,4,5], im:[6,7,8,9,10]}
ifft(fftRes) 
```	

### 5. Utility functions

> [dim][dim] | [same][same] | [rep][rep] | [diag][diag] | [identity][identity] | [random][random] | [linspace][linspace]

#### example `dim`

```js
dim(1) // []
dim([1,2]) // [2]
dim([[1,2],[2,2],[3,3]]) // [3,2]
```

# Introduction to Complex and Sparse matrix

Mathlab provided two Classes for you to initialize Complex and Sparse matrix.

## Complex

Creates a Complex instance that represents a complex number or array.
It accepts two arguments as the real and imaginary part of a complex number or array.

### Usage

#### Initalize

```js
import { Complex, abs } from 'mathlab'

// complex number
const c = new Complex(1, 2) // {re:1, im:2}

// complex array
const ca = new Complex([1,2], [1,2]) // {re:[1,2], im:[1,2]}

// mathlab functions can be applied on it
abs(ca) // {re: [ 1.414, 2.828], im: undefined}
```

#### Methods (still adding)

- reciprocal: Pointwise 1/z 
- transjugate: The conjugate-transpose of the matrix

```js
ca.reciprocal() // {re: [ 0.5, 0.25], im: [ -0.5, -0.25]}
```

## Sparse
Creates a Sparse instance that represents a sparse matrix.
In mathlab, sparse matrices are stored in the [compressed column storage](https://en.wikipedia.org/wiki/Sparse_matrix#Compressed_sparse_column_.28CSC_or_CCS.29) ordering. 

### Usage

#### Initialize

```js
import { Sparse } from 'mathlab'

const z = new Sparse([[1,0,0],[5,2,0],[1,0,0]]) //  { col: [ 0, 3, 4, 4 ], row: [ 0, 1, 2, 1 ], val: [ 1, 5, 1, 2 ] }
```
#### Methods (still adding)

- toFull: Convert to full presentation

```js
z.toFull() // [[1,0,0],[5,2,0],[1,0,0]]
```

# Thanks

> **Mathlab start as a refactoring of [numeric](https://github.com/sloisel/numeric)**


[pointwise]: http://www.timqian.com/mathlab/function/index.html#static-function-pointwise
[det]: http://www.timqian.com/mathlab/function/index.html#static-function-det
[dot]: http://www.timqian.com/mathlab/function/index.html#static-function-dot
[eig]: http://www.timqian.com/mathlab/function/index.html#static-function-eig
[getBlock]: http://www.timqian.com/mathlab/function/index.html#static-function-getBlock
[getDiag]: http://www.timqian.com/mathlab/function/index.html#static-function-getDiag
[identity]: http://www.timqian.com/mathlab/function/index.html#static-function-identity
[inv]: http://www.timqian.com/mathlab/function/index.html#static-function-inv
[largeArray]: http://www.timqian.com/mathlab/function/index.html#static-function-
[LU]: http://www.timqian.com/mathlab/function/index.html#static-function-
[LUsolve]: http://www.timqian.com/mathlab/function/index.html#static-function-
[mapreduce]: http://www.timqian.com/mathlab/function/index.html#static-function-
[norm2]: http://www.timqian.com/mathlab/function/index.html#static-function-norm2
[norm2Squared]: http://www.timqian.com/mathlab/function/index.html#static-function-norm2Squared
[norminf]: http://www.timqian.com/mathlab/function/index.html#static-function-
[parseFloat]: http://www.timqian.com/mathlab/function/index.html#static-function-
[precision]: http://www.timqian.com/mathlab/function/index.html#static-function-
[prettyPrint]: http://www.timqian.com/mathlab/function/index.html#static-function-
[random]: http://www.timqian.com/mathlab/function/index.html#static-function-random
[rep]: http://www.timqian.com/mathlab/function/index.html#static-function-rep
[same]: http://www.timqian.com/mathlab/function/index.html#static-function-same
[setBlock]: http://www.timqian.com/mathlab/function/index.html#static-function-setBlock
[solve]: http://www.timqian.com/mathlab/function/index.html#static-function-
[solveLP]: http://www.timqian.com/mathlab/function/index.html#static-function-
[solveQP]: http://www.timqian.com/mathlab/function/index.html#static-function-
[spline]: http://www.timqian.com/mathlab/function/index.html#static-function-
[Spline.at]: http://www.timqian.com/mathlab/function/index.html#static-function-
[Spline.diff]: http://www.timqian.com/mathlab/function/index.html#static-function-
[Spline.roots]: http://www.timqian.com/mathlab/function/index.html#static-function-
[sum]: http://www.timqian.com/mathlab/function/index.html#static-function-
[svd]: http://www.timqian.com/mathlab/function/index.html#static-function-
[Complex]: http://www.timqian.com/mathlab/function/index.html#static-function-Complex
[tensor]: http://www.timqian.com/mathlab/function/index.html#static-function-tensor
[transpose]: http://www.timqian.com/mathlab/function/index.html#static-function-transpose
[uncmin]: http://www.timqian.com/mathlab/function/index.html#static-function-
[version]: http://www.timqian.com/mathlab/function/index.html#static-function-
[ifft]: http://www.timqian.com/mathlab/function/index.html#static-function-ifft
[fft]: http://www.timqian.com/mathlab/function/index.html#static-function-fft
[clone]: http://www.timqian.com/mathlab/function/index.html#static-function-clone
[abs]: http://www.timqian.com/mathlab/function/index.html#static-function-abs
[acos]: http://www.timqian.com/mathlab/function/index.html#static-function-acos
[add]: http://www.timqian.com/mathlab/function/index.html#static-function-add
[and]: http://www.timqian.com/mathlab/function/index.html#static-function-and
[asin]: http://www.timqian.com/mathlab/function/index.html#static-function-asin
[atan]: http://www.timqian.com/mathlab/function/index.html#static-function-atan
[atan2]: http://www.timqian.com/mathlab/function/index.html#static-function-atan2
[band]: http://www.timqian.com/mathlab/function/index.html#static-function-band
[bnot]: http://www.timqian.com/mathlab/function/index.html#static-function-bnot
[bor]: http://www.timqian.com/mathlab/function/index.html#static-function-bor
[bxor]: http://www.timqian.com/mathlab/function/index.html#static-function-bxor
[ceil]: http://www.timqian.com/mathlab/function/index.html#static-function-ceil
[cos]: http://www.timqian.com/mathlab/function/index.html#static-function-cos
[diag]: http://www.timqian.com/mathlab/function/index.html#static-function-diag
[dim]: http://www.timqian.com/mathlab/function/index.html#static-function-dim
[div]: http://www.timqian.com/mathlab/function/index.html#static-function-div
[eq]: http://www.timqian.com/mathlab/function/index.html#static-function-eq
[exp]: http://www.timqian.com/mathlab/function/index.html#static-function-exp
[floor]: http://www.timqian.com/mathlab/function/index.html#static-function-floor
[geq]: http://www.timqian.com/mathlab/function/index.html#static-function-geq
[gt]: http://www.timqian.com/mathlab/function/index.html#static-function-gt
[leq]: http://www.timqian.com/mathlab/function/index.html#static-function-leq
[linspace]: http://www.timqian.com/mathlab/function/index.html#static-function-linspace
[log]: http://www.timqian.com/mathlab/function/index.html#static-function-log
[lshift]: http://www.timqian.com/mathlab/function/index.html#static-function-lshift
[lt]: http://www.timqian.com/mathlab/function/index.html#static-function-lt
[mod]: http://www.timqian.com/mathlab/function/index.html#static-function-mod
[mul]: http://www.timqian.com/mathlab/function/index.html#static-function-mul
[neg]: http://www.timqian.com/mathlab/function/index.html#static-function-neg
[neq]: http://www.timqian.com/mathlab/function/index.html#static-function-neq
[not]: http://www.timqian.com/mathlab/function/index.html#static-function-not
[or]: http://www.timqian.com/mathlab/function/index.html#static-function-or
[pow]: http://www.timqian.com/mathlab/function/index.html#static-function-pow
[round]: http://www.timqian.com/mathlab/function/index.html#static-function-round
[rrshift]: http://www.timqian.com/mathlab/function/index.html#static-function-rrshift
[rshift]: http://www.timqian.com/mathlab/function/index.html#static-function-rshift
[rshifteq]: http://www.timqian.com/mathlab/function/index.html#static-function-rshift
[sin]: http://www.timqian.com/mathlab/function/index.html#static-function-sin
[sqrt]: http://www.timqian.com/mathlab/function/index.html#static-function-sqrt
[sub]: http://www.timqian.com/mathlab/function/index.html#static-function-sub
[tan]: http://www.timqian.com/mathlab/function/index.html#static-function-tan
[xor]: http://www.timqian.com/mathlab/function/index.html#static-function-xor
[epsilon]: http://www.timqian.com/mathlab/function/index.html#static-function-epsilon

