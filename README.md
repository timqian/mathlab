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

const y = dot(A, x)

console.log(y) // [50,122]
```

## Documents

http://timqian.com/mathlab


## Test

To run the test suite, first install the dependencies, then run npm test:

```bash
$ npm install
$ npm test
```