
import pointwise from './pointwise'

/**
 * Pointwise Math.exp(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * exp(1)
 * // returns Math.exp(1)
 * exp([1, 2])
 * // returns [Math.exp(1), Math.exp(2)]
 * exp([[1,2],[1,3]])
 * // returns [ [Math.exp(1), Math.exp(2)], [Math.exp(1), Math.exp(3)] ]
 */
export default function (m) {
  return pointwise(Math.exp)(m)
}
