
import pointwise from './pointwise'

/**
 * Pointwise bnot
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * bnot(1, 2)
 * // Equals 1 ~ 2
 * bnot([1, 2], [2, 2])
 * // Equals [1 ~ 2, 2 ~ 2]
 * bnot([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // Equals [ [2 ~ 2, 1 ~ 2], [1 ~ 2, 2 ~ 2] ]
 */
export default function (m) {
  return pointwise(x => ~x)(m)
}
