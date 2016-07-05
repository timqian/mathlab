
import pointwise from './pointwise'

/**
 * Pointwise Math.atan(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * atan(1)
 * // Equals Math.atan(1)
 * atan([1, 2])
 * // Equals [Math.atan(1), Math.atan(2)]
 * atan([[1,2],[1,3]])
 * // Equals [ [Math.atan(1), Math.atan(2)], [Math.atan(1), Math.atan(3)] ]
 */
export default function (m) {
  return pointwise(Math.atan)(m)
}
