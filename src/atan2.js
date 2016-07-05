
import dim from './dim';

/**
 * Pointwise Math.atan2(x, y)
 * 
 * @export
 * @param {Number|Array} m1
 * @param {Number|Array} m2
 * @returns {Number|Array}
 * @example 
 * 
 * atan2(1, 2)
 * // Equals Math.atan2(1, 2)
 * atan2([1, 2], [2, 2])
 * // Equals [Math.atan2(1, 2), Math.atan2(2, 2)]
 * atan2([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // Equals [ [Math.atan2(2, 2), Math.atan2(1, 2)], [Math.atan2(1, 2), Math.atan2(2, 2)] ]
 */
export default function atan2(m1, m2) {
  if (dim(m1)[0] !== dim(m2)[0] || dim(m1)[1] !== dim(m2)[1]) {
    throw new Error('atan2() requires two matrices having the same size')
  }
  switch (dim(m1).length) {
    case 0:
      return Math.atan2(m1, m2)
    case 1:
      return m1.map((x, i) => Math.atan2(x, m2[i]))
    case 2:
      return m1.map( (mm1, i) => mm1.map( (x, j) => Math.atan2(x, m2[i][j]) ) )
    default:
      throw new Error('atan2(): wrong size')
  }
}
