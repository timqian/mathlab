
import pointwise from './pointwise'

/**
 * Pointwise Math.asin(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * asin(1)
 * // Equals Math.asin(1)
 * asin([1, 2])
 * // Equals [Math.asin(1), Math.asin(2)]
 * asin([[1,2],[1,3]])
 * // Equals [ [Math.asin(1), Math.asin(2)], [Math.asin(1), Math.asin(3)] ]
 */
export default function (m) {
  return pointwise(Math.asin)(m)
}
