
import pointwise from './pointwise'

/**
 * Pointwise bnot
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * bnot(2)
 * // returns ~2
 * bnot([1, 2])
 * // returns [~1, ~2]
 * bnot([[1, 2], [2, 2]]))
 * // returns [ [~1, ~2], [~2, ~2] ]
 */
export default function (m) {
  return pointwise(x => ~x)(m)
}
