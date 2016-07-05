
import dim from './dim'

/**
 * Pointwise Math.cos(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * cos(1)
 * // Equals Math.cos(1)
 * cos([1, 2])
 * // Equals [Math.cos(1), Math.cos(2)]
 * cos([[1,2],[1,3]])
 * // Equals [ [Math.cos(1), Math.cos(2)], [Math.cos(1), Math.cos(3)] ]
 */
export default function cos(m) {
  switch (dim(m).length) {
    case 0:
      return Math.cos(m)
    case 1:
      return m.map(Math.cos)
    case 2:
      return m.map(a => a.map(Math.cos))
    default:
      throw new Error('cos(): wrong size')
  }
}
