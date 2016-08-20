
import pointwise2 from './pointwise2'

/**
 * Pointwise Math.atan2(x, y)
 * 
 * @export
 * @param {Number|Array|Complex|Sparse} m1
 * @param {Number|Array|Complex|Sparse} m2
 * @returns {Number|Array|Complex|Sparse}
 * @example 
 * 
 * atan2(1, 2) // Math.atan2(1, 2)
 * atan2([1, 2], [2, 2]) // [Math.atan2(1, 2), Math.atan2(2, 2)]
 * atan2([[2,1], [1,2]], [[2, 2], [2, 2]])) // [ [Math.atan2(2, 2), Math.atan2(1, 2)], [Math.atan2(1, 2), Math.atan2(2, 2)] ]
 */
export default function (m1, m2) {
  // TODO 
  return pointwise2(Math.atan2)(m1, m2)
}
