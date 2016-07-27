> Note: Unstable, Developing

# mathlab
Lodash like math lab in javascript, focusing on matrix manipulation.

[![npm](https://nodei.co/npm/mathlab.png)](https://www.npmjs.com/package/mathlab)


## Features
- **Modulize**: only import the function you need.
- **Easy to use**: no extra concepts to grasp(1D Array as vector and 2D Array as matrix)
- **Functional**: no side effact on input data and the outside world
- **Multifunctional**: Support `sparse` and `complex` matrix manipulation; `FFT`; `eigenvectors & eigenvalues of matrix`; and so on

## Install
```
$ npm install mathlab --save
```

## Sample usage
```js
import { dot } from 'mathlab'

const A = [[1,2,3],
           [4,5,6]];
const x = [7,8,9]
const y = dot(A, x)

console.log(y); // [50,122]
```

# [Documents wrote by human](https://github.com/timqian/mathlab/tree/master/doc#readme)
# [Documents generated from comments](http://timqian.com/mathlab)