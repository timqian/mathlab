/**
 * Matrix product between vector and matrix
 * 
 * @param {Array} x
 * @param {Array} y
 * @returns Array
 * @example
 */
export default function dotVM (x, y) {
  var i,j,k,p,q,r,ret,foo,bar,woo,i0,k0,p0,r0,s1,s2,s3,baz,accum
  p = x.length; q = y[0].length
  ret = Array(q)
  for (k = q - 1;k >= 0;k--) {
    woo = x[p - 1] * y[p - 1][k]
    for (j = p - 2;j >= 1;j -= 2) {
      i0 = j - 1
      woo += x[j] * y[j][k] + x[i0] * y[i0][k]
    }
    if (j === 0) { woo += x[0] * y[0][k]; }
    ret[k] = woo
  }
  return ret
}
