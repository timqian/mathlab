
import pointwise from './pointwise'

/**
 * Pointwise mul
 * 
 * @export
 * @param {Number|Array} m1
 * @param {Number|Array} m2
 * @returns {Number|Array}
 * @example 
 * 
 * mul(1, 2)
 * // returns 1 * 2
 * mul([1, 2], [2, 2])
 * // returns [1 * 2, 2 * 2]
 * mul([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 * 2, 1 * 2], [1 * 2, 2 * 2] ]
 */
export default function (m1, m2) {
  return pointwise((x, y) => x * y)(m1, m2)
}
