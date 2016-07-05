
import dim from './dim'

/**
 * Pointwise Math.abs(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * abs(1)
 * // Equals Math.abs(1)
 * abs([1, 2])
 * // Equals [Math.abs(1), Math.abs(2)]
 * abs([[1,2],[1,3]])
 * // Equals [ [Math.abs(1), Math.abs(2)], [Math.abs(1), Math.abs(3)] ]
 */
export default function abs(m) {
  switch (dim(m).length) {
    case 0:
      return Math.abs(m)
    case 1:
      return m.map(Math.abs)
    case 2:
      return m.map(a => a.map(Math.abs))
    default:
      throw new Error('abs(): wrong size')
  }
}
