
import pointwise from './pointwise'

/**
 * Pointwise Math.round(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * round(1)
 * // Equals Math.round(1)
 * round([1, 2])
 * // Equals [Math.round(1), Math.round(2)]
 * round([[1,2],[1,3]])
 * // Equals [ [Math.round(1), Math.round(2)], [Math.round(1), Math.round(3)] ]
 */
export default function (m) {
  return pointwise(Math.round)(m)
}
