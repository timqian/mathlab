/**
 * 	Get the diagonal of a matrix
 * 
 * @export
 * @param {Array} A
 * @returns Array
 * @example 
 * 
 * getDiag([[1, 3], [0, 2]])
 * // [1, 2]
 */
export default function getDiag(A) {
  var n = Math.min(A.length, A[0].length),i,ret = Array(n)
  for (i = n - 1;i >= 1;--i) {
    ret[i] = A[i][i]
    --i
    ret[i] = A[i][i]
  }
  if (i === 0) {
    ret[0] = A[0][0]
  }
  return ret
}
