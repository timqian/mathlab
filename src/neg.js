
import pointwise from './pointwise'

/**
 * Pointwise neg
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * neg(1, 2)
 * // Equals 1 - 2
 * neg([1, 2], [2, 2])
 * // Equals [1 - 2, 2 - 2]
 * neg([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // Equals [ [2 - 2, 1 - 2], [1 - 2, 2 - 2] ]
 */
export default function (m) {
  return pointwise(x => -x)(m)
}
