
import pointwise from './pointwise'

/**
 * Pointwise Math.abs(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * abs(1)
 * // Equals Math.abs(1)
 * abs([1, 2])
 * // Equals [Math.abs(1), Math.abs(2)]
 * abs([[1,2],[1,3]])
 * // Equals [ [Math.abs(1), Math.abs(2)], [Math.abs(1), Math.abs(3)] ]
 */
export default function (m) {
  return pointwise(Math.abs)(m)
}
