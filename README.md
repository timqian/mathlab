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
- [ ] [`abs()`]()	Absolute value
- [ ] [`acos()`]()	Arc-cosine
- [ ] [`add()`]()	Pointwise sum x+y
- [ ] [`addeq()`]()	Pointwise sum x+=y
- [ ] [`all()`]()	All the components of x are true
- [ ] [`and()`]()	Pointwise x && y
- [ ] [`andeq()`]()	Pointwise x &= y
- [ ] [`any()`]()	One or more of the components of x are true
- [ ] [`asin()`]()	Arc-sine
- [ ] [`atan()`]()	Arc-tangeant
- [ ] [`atan2()`]()	Arc-tangeant (two parameters)
- [ ] [`band()`]()	Pointwise x & y
- [ ] [`bench()`]()	Benchmarking routine
- [ ] [`bnot()`]()	Binary negation ~x
- [ ] [`bor()`]()	Binary or x|y
- [ ] [`bxor()`]()	Binary xor x^y
- [ ] [`ccsDim()`]()	Dimensions of sparse matrix
- [ ] [`ccsDot()`]()	Sparse matrix-matrix product
- [ ] [`ccsFull()`]()	Convert sparse to full
- [ ] [`ccsGather()`]()	Gather entries of sparse matrix
- [ ] [`ccsGetBlock()`]()	Get rows/columns of sparse matrix
- [ ] [`ccsLUP()`]()	Compute LUP decomposition of sparse matrix
- [ ] [`ccsLUPSolve()`]()	Solve Ax=b using LUP decomp
- [ ] [`ccsScatter()`]()	Scatter entries of sparse matrix
- [ ] [`ccsSparse()`]()	Convert from full to sparse
- [ ] [`ccsTSolve()`]()	Solve upper/lower triangular system
- [ ] [`ccs<op>()`]()	Supported ops include: add/div/mul/geq/etc...
- [ ] [`cLU()`]()	Coordinate matrix LU decomposition
- [ ] [`cLUsolve()`]()	Coordinate matrix LU solve
- [ ] [`cdelsq()`]()	Coordinate matrix Laplacian
- [ ] [`cdotMV()`]()	Coordinate matrix-vector product
- [ ] [`ceil()`]()	Pointwise Math.ceil(x)
- [ ] [`cgrid()`]()	Coordinate grid for cdelsq
- [ ] [`clone()`]()	Deep copy of Array
- [ ] [`cos()`]()	Pointwise Math.cos(x)
- [ ] [`det()`]()	Determinant
- [ ] [`diag()`]()	Create diagonal matrix
- [ ] [`dim()`]()	Get Array dimensions
- [ ] [`div()`]()	Pointwise x/y
- [ ] [`diveq()`]()	Pointwise x/=y
- [ ] [`dopri()`]()	Numerical integration of ODE using Dormand-Prince RK method. Returns an object Dopri.
- [ ] [`Dopri.at()`]()	Evaluate the ODE solution at a point
- [ ] [`Function()`]()	Description
- [ ] [`dot()`]()	Matrix-Matrix, Matrix-Vector and Vector-Matrix product
- [ ] [`eig()`]()	Eigenvalues and eigenvectors
- [ ] [`epsilon()`]()	2.220446049250313e-16
- [ ] [`eq()`]()	Pointwise comparison x === y
- [ ] [`exp()`]()	Pointwise Math.exp(x)
- [ ] [`floor()`]()	Poinwise Math.floor(x)
- [ ] [`geq()`]()	Pointwise x>=y
- [ ] [`getBlock()`]()	Extract a block from a matrix
- [ ] [`getDiag()`]()	Get the diagonal of a matrix
- [ ] [`gt()`]()	Pointwise x>y
- [ ] [`identity()`]()	Identity matrix
- [ ] [`imageURL()`]()	Encode a matrix as an image URL
- [ ] [`inv()`]()	Matrix inverse
- [ ] [`isFinite()`]()	Pointwise isFinite(x)
- [ ] [`isNaN()`]()	Pointwise isNaN(x)
- [ ] [`largeArray()`]()	Don't prettyPrint Arrays larger than this
- [ ] [`leq()`]()	Pointwise x<=y
- [ ] [`linspace()`]()	Generate evenly spaced values
- [ ] [`log()`]()	Pointwise Math.log(x)
- [ ] [`lshift()`]()	Pointwise x<<y
- [ ] [`lshifteq()`]()	Pointwise x<<=y
- [ ] [`lt()`]()	Pointwise x<y
- [ ] [`LU()`]()	Dense LU decomposition
- [ ] [`LUsolve()`]()	Dense LU solve
- [ ] [`mapreduce()`]()	Make a pointwise map-reduce function
- [ ] [`mod()`]()	Pointwise x%y
- [ ] [`modeq()`]()	Pointwise x%=y
- [ ] [`mul()`]()	Pointwise x*y
- [ ] [`neg()`]()	Pointwise -x
- [ ] [`neq()`]()	Pointwise x!==y
- [ ] [`norm2()`]()	Square root of the sum of the square of the entries of x
- [ ] [`norm2Squared()`]()	Sum of squares of entries of x
- [ ] [`norminf()`]()	Largest modulus entry of x
- [ ] [`not()`]()	Pointwise logical negation !x
- [ ] [`or()`]()	Pointwise logical or x||y
- [ ] [`oreq()`]()	Pointwise x|=y
- [ ] [`parseCSV()`]()	Parse a CSV file into an Array
- [ ] [`parseDate()`]()	Pointwise parseDate(x)
- [ ] [`parseFloat()`]()	Pointwise parseFloat(x)
- [ ] [`pointwise()`]()	Create a pointwise function
- [ ] [`pow()`]()	Pointwise Math.pow(x)
- [ ] [`precision()`]()	Number of digits to prettyPrint
- [ ] [`prettyPrint()`]()	Pretty-prints x
- [ ] [`random()`]()	Create an Array of random numbers
- [ ] [`rep()`]()	Create an Array by duplicating values
- [ ] [`Function()`]()	Description
- [ ] [`round()`]()	Pointwise Math.round(x)
- [ ] [`rrshift()`]()	Pointwise x>>>y
- [ ] [`rrshifteq()`]()	Pointwise x>>>=y
- [ ] [`rshift()`]()	Pointwise x>>y
- [ ] [`rshifteq()`]()	Pointwise x>>=y
- [ ] [`same()`]()	x and y are entrywise identical
- [ ] [`seedrandom()`]()	The seedrandom module
- [ ] [`setBlock()`]()	Set a block of a matrix
- [ ] [`sin()`]()	Pointwise Math.sin(x)
- [ ] [`solve()`]()	Solve Ax=b
- [ ] [`solveLP()`]()	Solve a linear programming problem
- [ ] [`solveQP()`]()	Solve a quadratic programming problem
- [ ] [`spline()`]()	Create a Spline object
- [ ] [`Spline.at()`]()	Evaluate the Spline at a point
- [ ] [`Spline.diff()`]()	Differentiate the Spline
- [ ] [`Spline.roots()`]()	Find all the roots of the Spline
- [ ] [`sqrt()`]()	Pointwise Math.sqrt(x)
- [ ] [`sub()`]()	Pointwise x-y
- [ ] [`subeq()`]()	Pointwise x-=y
- [ ] [`sum()`]()	Sum all the entries of x
- [ ] [`svd()`]()	Singular value decomposition
- [ ] [`t()`]()	Create a tensor type T (may be complex-valued)
- [ ] [`T.<numericfun>()`]()	Supported <numericfun> are: abs, add, cos, diag, div, dot, exp, getBlock, getDiag, inv, log, mul, neg, norm2, setBlock, sin, sub, transpose
- [ ] [`T.conj()`]()	Pointwise complex conjugate
- [ ] [`T.fft()`]()	Fast Fourier transform
- [ ] [`T.get()`]()	Read an entry
- [ ] [`T.getRow()`]()	Get a row
- [ ] [`T.getRows()`]()	Get a range of rows
- [ ] [`T.ifft()`]()	Inverse FFT
- [ ] [`T.reciprocal()`]()	Pointwise 1/z
- [ ] [`T.set()`]()	Set an entry
- [ ] [`T.setRow()`]()	Set a row
- [ ] [`T.setRows()`]()	Set a range of rows
- [ ] [`T.transjugate()`]()	The conjugate-transpose of a matrix
- [ ] [`tan()`]()	Pointwise Math.tan(x)
- [ ] [`tensor()`]()	Tensor product ret[i][j] = x[i]*y[j]
- [ ] [`toCSV()`]()	Make a CSV file
- [ ] [`transpose()`]()	Matrix transpose
- [ ] [`uncmin()`]()	Unconstrained optimization
- [ ] [`version()`]()	Version string for the numeric library
- [ ] [`xor()`]()	Pointwise x^y
- [ ] [`xoreq()`]()	Pointwise x^=y
