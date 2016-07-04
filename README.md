# [mathlab](http://timqian.com/mathlab)

Lodash like math lab in javascript, focusing on matrix manipulation.

## Goals
- **Modulize**: only import the function you need.

- **Easy to use**: no extra concepts to grasp before using

## Install
```
$ npm install mathlab --save
```

## Sample usage
```js
/** import function */
// import { diag } from 'mathlab'      /** or */
// import diag from 'mathlab/lib/diag' /** or */
var diag = require('mathlab').diag

diag([1,2])
// [[1, 0], 
//  [0, 2]]
```

## Function list

- [x] det
- [x] diag
- [x] dim
- [ ] ...
