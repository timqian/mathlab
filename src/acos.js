
import pointwise from './pointwise'

/**
 * Pointwise Math.acos(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * acos(1)
 * // returns Math.acos(1)
 * acos([1, 2])
 * // returns [Math.acos(1), Math.acos(2)]
 * acos([[1,2],[1,3]])
 * // returns [ [Math.acos(1), Math.acos(2)], [Math.acos(1), Math.acos(3)] ]
 */
export default function (m) {
  return pointwise(Math.acos)(m)
}
