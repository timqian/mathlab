
import dim from './dim';

/**
 * Pointwise Math.pow(x, y)
 * 
 * @export
 * @param {Number|Array} m1
 * @param {Number|Array} m2
 * @returns {Number|Array}
 * @example 
 * 
 * pow(1, 2)
 * // Equals Math.pow(1, 2)
 * pow([1, 2], [2, 2])
 * // Equals [Math.pow(1, 2), Math.pow(2, 2)]
 * pow([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // Equals [ [Math.pow(2, 2), Math.pow(1, 2)], [Math.pow(1, 2), Math.pow(2, 2)] ]
 */
export default function pow(m1, m2) {
  if (dim(m1)[0] !== dim(m2)[0] || dim(m1)[1] !== dim(m2)[1]) {
    throw new Error('pow() requires two matrices having the same size')
  }
  switch (dim(m1).length) {
    case 0:
      return Math.pow(m1, m2)
    case 1:
      return m1.map((x, i) => Math.pow(x, m2[i]))
    case 2:
      return m1.map( (mm1, i) => mm1.map( (x, j) => Math.pow(x, m2[i][j]) ) )
    default:
      throw new Error('pow(): wrong size')
  }
}
