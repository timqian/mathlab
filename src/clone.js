
import pointwise from './pointwise'

/**
 * Pointwise clone
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * clone(2)
 * // returns 2
 * clone([1, 2])
 * // returns [1, 2]
 * clone([[1, 2], [2, 2]]))
 * // returns [ [1, 2], [2, 2] ]
 */
export default function (m) {
  return pointwise(x => x)(m)
}
