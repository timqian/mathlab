
import pointwise from './pointwise'

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
export default function (m1, m2) { 
  return pointwise(Math.atan2)(m1, m2)
}
