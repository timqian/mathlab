
import dim from './dim'

/**
 * Pointwise Math.acos(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * acos(1)
 * // Equals Math.acos(1)
 * acos([1, 2])
 * // Equals [Math.acos(1), Math.acos(2)]
 * acos([[1,2],[1,3]])
 * // Equals [ [Math.acos(1), Math.acos(2)], [Math.acos(1), Math.acos(3)] ]
 */
export default function acos(m) {
  switch (dim(m).length) {
    case 0:
      return Math.acos(m)
    case 1:
      return m.map(Math.acos)
    case 2:
      return m.map(a => a.map(Math.acos))
    default:
      throw new Error('acos(): wrong size')
  }
}
