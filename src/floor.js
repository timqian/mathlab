
import dim from './dim'

/**
 * Pointwise Math.floor(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * floor(1)
 * // Equals Math.floor(1)
 * floor([1, 2])
 * // Equals [Math.floor(1), Math.floor(2)]
 * floor([[1,2],[1,3]])
 * // Equals [ [Math.floor(1), Math.floor(2)], [Math.floor(1), Math.floor(3)] ]
 */
export default function floor(m) {
  switch (dim(m).length) {
    case 0:
      return Math.floor(m)
    case 1:
      return m.map(Math.floor)
    case 2:
      return m.map(a => a.map(Math.floor))
    default:
      throw new Error('floor(): wrong size')
  }
}
