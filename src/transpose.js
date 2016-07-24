import Complex from './Complex'

/**
 * Matrix transpose
 * 
 * @export
 * @param {Array} x
 * @returns {Array}
 * @example 
 * 
 * transpose([[1,2,3],[4,5,6]])
 * //[[1,4],
 * // [2,5],
 * // [3,6]]
 */
export default function (x) {
  switch (x.constructor.name) {
    case 'Complex':
      return ctranspose(x);
    case 'Sparse':
      return stranspose(x);
    default:
      return transpose(x);
  }
}

function ctranspose(x) {
  // TODO: Check if is matrix
    var t = transpose;
    if (x.y) {
      return new Complex(t(x.x), t(x.y));
    }
    return new Complex(t(x.x));
}

function stranspose(x) {
  throw new Error('mathlab.transpose: transpose for sparse matrix has not been implemented yet')
}

function transpose (x) {
  var i,j,m = x.length,n = x[0].length, ret = Array(n),A0,A1,Bj
  for (j = 0;j < n;j++) ret[j] = Array(m)
  for (i = m - 1;i >= 1;i -= 2) {
    A1 = x[i]
    A0 = x[i - 1]
    for (j = n - 1;j >= 1;--j) {
      Bj = ret[j]; Bj[i] = A1[j]; Bj[i - 1] = A0[j]
      --j
      Bj = ret[j]; Bj[i] = A1[j]; Bj[i - 1] = A0[j]
    }
    if (j === 0) {
      Bj = ret[0]; Bj[i] = A1[0]; Bj[i - 1] = A0[0]
    }
  }
  if (i === 0) {
    A0 = x[0]
    for (j = n - 1;j >= 1;--j) {
      ret[j][0] = A0[j]
      --j
      ret[j][0] = A0[j]
    }
    if (j === 0) { ret[0][0] = A0[0]; }
  }
  return ret
}
