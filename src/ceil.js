
import pointwise from './pointwise'

/**
 * Pointwise Math.ceil(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * ceil(1)
 * // Equals Math.ceil(1)
 * ceil([1, 2])
 * // Equals [Math.ceil(1), Math.ceil(2)]
 * ceil([[1,2],[1,3]])
 * // Equals [ [Math.ceil(1), Math.ceil(2)], [Math.ceil(1), Math.ceil(3)] ]
 */
export default function (m) {
  return pointwise(Math.ceil)(m)
}
