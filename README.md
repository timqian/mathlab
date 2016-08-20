# mathlab

Lodash like math lab in javascript, focusing on matrix manipulation.

> Start as a refactoring of [numeric](https://github.com/sloisel/numeric)

[![npm](https://nodei.co/npm/mathlab.png)](https://www.npmjs.com/package/mathlab)

## Features

- **Modulize**: only import the function you need.
- **Easy to use**: no extra concepts to grasp(1D Array as vector and 2D Array as matrix)
- **Functional**: no side effact on input data and the outside world
- **Multifunctional**: Support `sparse` and `complex` matrix manipulation; `FFT`; `eigenvectors & eigenvalues of matrix`; and so on

## Install

```bash
$ npm install mathlab --save
```

## Sample usage
```js
import { dot } from 'mathlab'

const A = [[1,2,3],
           [4,5,6]]

const x = [7,8,9]

// calculate dot product
dot(A, x) // [50,122]
```

## Introduction to functions

Mathlab is basicly a collection of mathmatic functions which can be applied to numbers, arrays and two self-defined datatype (Complex and Sparse).

The function can be devide into 5 groups:

### 1. Math Object functions

> abs | acos | asin | atan | ceil | cos | exp | floor | log | round | sin | sqrt | tan

The *Math* object functions have been adapted to work on Arrays , Complex and Sparse Objects

#### example

```js
import {abs, Complex, Sparse} from './mathlab'

abs(-1)  // 1
abs([-1, 2])  // [1, 2]
```

### 2. Arithmetic operations

> add | sub | mul | div | neg | isFinite | isNaN

The standard arithmetic operations have been vectorized:

#### example 

```js
import { add, Complex } from 'mathlab'

add(1, 2) // 3
add([1,2], 2,2) // [3,4]
```

### 3. Utility functions

> dim | same | rep | diag | identity | random | linspace

#### example `dim`

```js
dim(1) // []
dim([1,2]) // [2]
dim([[1,2],[2,2],[3,3]]) // [3,2]
```


### 4. Linear algebra

> dot | solve | det | inv | norm2 | tensor | eig

#### example: `dot`

```js
dot([[1, 1], [2, 1]], [1, 2]) // [3, 4]
```

### 5. Fast Fourier Transforms

> fft | ifft

#### example

```js
import {fft, ifft, Complex} from 'mathlab'

// {re: [ 15, -5.941, -3.312, -1.688, 0.941], im: [ 40, 0.941, -1.688, -3.312, -5.941]}
const fftRes = fft(new Complex([1,2,3,4,5],[6,7,8,9,10]))

// {re:[1,2,3,4,5], im:[6,7,8,9,10]}
ifft(fftRes) 
```	

## Introduction to Complex and Sparse