
import pointwise from './pointwise'

/**
 * Pointwise not
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * not(2)
 * // returns !2
 * not([1, 2])
 * // returns [!1, !2]
 * not([[1, 2], [2, 2]]))
 * // returns [ [!1, !2], [!2, !2] ]
 */
export default function (m) {
  return pointwise(x => !x)(m)
}
