
import pointwise from './pointwise'

/**
 * Pointwise add
 * 
 * @export
 * @param {Number|Array} m1
 * @param {Number|Array} m2
 * @returns {Number|Array}
 * @example 
 * 
 * add(1, 2)
 * // Equals 1 + 2
 * add([1, 2], [2, 2])
 * // Equals [1 + 2, 2 + 2]
 * add([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // Equals [ [2 + 2, 1 + 2], [1 + 2, 2 + 2] ]
 */
export default function (m1, m2) {
  return pointwise((x, y) => x + y)(m1, m2)
}
