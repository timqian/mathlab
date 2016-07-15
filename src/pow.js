
import pointwise from './pointwise'

/**
 * Pointwise Math.pow(x, y)
 * 
 * @export
 * @param {Number|Array} m1
 * @param {Number|Array} m2
 * @returns {Number|Array}
 * @example 
 * 
 * pow(1, 2)
 * // returns Math.pow(1, 2)
 * pow([1, 2], [2, 2])
 * // returns [Math.pow(1, 2), Math.pow(2, 2)]
 * pow([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [Math.pow(2, 2), Math.pow(1, 2)], [Math.pow(1, 2), Math.pow(2, 2)] ]
 */
export default function (m1, m2) { 
  return pointwise(Math.pow)(m1, m2)
}
