
import pointwise from './pointwise'

/**
 * Pointwise clone
 * 
 * @export
 * @param {Number|Array} m1
 * @param {Number|Array} m2
 * @returns {Number|Array}
 * @example 
 * 
 * clone(1, 2)
 * // Equals 1  2
 * clone([1, 2], [2, 2])
 * // Equals [1  2, 2  2]
 * clone([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // Equals [ [2  2, 1  2], [1  2, 2  2] ]
 */
export default function (m) {
  return pointwise(x => x)(m)
}
