
import pointwise from './pointwise'

/**
 * Pointwise neg
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * neg(2)
 * // returns -2
 * neg([1, 2])
 * // returns [-1, -2]
 * neg([[1, 2], [2, 2]]))
 * // returns [ [-1, -2], [-2, -2] ]
 */
export default function (m) {
  return pointwise(x => -x)(m)
}
