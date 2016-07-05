
import dim from './dim'

/**
 * Pointwise Math.tan(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * tan(1)
 * // Equals Math.tan(1)
 * tan([1, 2])
 * // Equals [Math.tan(1), Math.tan(2)]
 * tan([[1,2],[1,3]])
 * // Equals [ [Math.tan(1), Math.tan(2)], [Math.tan(1), Math.tan(3)] ]
 */
export default function tan(m) {
  switch (dim(m).length) {
    case 0:
      return Math.tan(m)
    case 1:
      return m.map(Math.tan)
    case 2:
      return m.map(a => a.map(Math.tan))
    default:
      throw new Error('tan(): wrong size')
  }
}
