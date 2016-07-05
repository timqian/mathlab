
import pointwise from './pointwise'

/**
 * Pointwise Math.tan(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * tan(1)
 * // Equals Math.tan(1)
 * tan([1, 2])
 * // Equals [Math.tan(1), Math.tan(2)]
 * tan([[1,2],[1,3]])
 * // Equals [ [Math.tan(1), Math.tan(2)], [Math.tan(1), Math.tan(3)] ]
 */
export default function (m) {
  return pointwise(Math.tan)(m)
}
