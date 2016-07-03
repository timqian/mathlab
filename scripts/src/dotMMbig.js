import dotVV from './dotVV'

export default function dotMMbig (x, y) {
  var p = y.length, v = Array(p)
  var m = x.length, n = y[0].length, A = new Array(m), xj
  var VV = dotVV
  var i,j,k,z
  --p
  --m
  for (i = m;i !== -1;--i) A[i] = Array(n)
  --n
  for (i = n;i !== -1;--i) {
    _getCol(y, i, v)
    for (j = m;j !== -1;--j) {
      z = 0
      xj = x[j]
      A[j][i] = VV(xj, v)
    }
  }
  return A
}

function _getCol (A, j, x) {
  var n = A.length, i
  for (i = n - 1;i > 0;--i) {
    x[i] = A[i][j]
    --i
    x[i] = A[i][j]
  }
  if (i === 0) x[0] = A[0][j]
}