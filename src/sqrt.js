
import pointwise from './pointwise'

/**
 * Pointwise Math.sqrt(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * sqrt(1)
 * // returns Math.sqrt(1)
 * sqrt([1, 2])
 * // returns [Math.sqrt(1), Math.sqrt(2)]
 * sqrt([[1,2],[1,3]])
 * // returns [ [Math.sqrt(1), Math.sqrt(2)], [Math.sqrt(1), Math.sqrt(3)] ]
 */
export default function (m) {
  return pointwise(Math.sqrt)(m)
}
