
import pointwise from './pointwise'

/**
 * Pointwise Math.floor(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * floor(1)
 * // returns Math.floor(1)
 * floor([1, 2])
 * // returns [Math.floor(1), Math.floor(2)]
 * floor([[1,2],[1,3]])
 * // returns [ [Math.floor(1), Math.floor(2)], [Math.floor(1), Math.floor(3)] ]
 */
export default function (m) {
  return pointwise(Math.floor)(m)
}
