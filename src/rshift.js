
import pointwise from './pointwise'

/**
 * Pointwise rshift
 * 
 * @export
 * @param {Number|Array} m1
 * @param {Number|Array} m2
 * @returns {Number|Array}
 * @example 
 * 
 * rshift(1, 2)
 * // returns 1 >> 2
 * rshift([1, 2], [2, 2])
 * // returns [1 >> 2, 2 >> 2]
 * rshift([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 >> 2, 1 >> 2], [1 >> 2, 2 >> 2] ]
 */
export default function (m1, m2) {
  return pointwise((x, y) => x >> y)(m1, m2)
}
