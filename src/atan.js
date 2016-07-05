
import dim from './dim'

/**
 * Pointwise Math.atan(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * atan(1)
 * // Equals Math.atan(1)
 * atan([1, 2])
 * // Equals [Math.atan(1), Math.atan(2)]
 * atan([[1,2],[1,3]])
 * // Equals [ [Math.atan(1), Math.atan(2)], [Math.atan(1), Math.atan(3)] ]
 */
export default function atan(m) {
  switch (dim(m).length) {
    case 0:
      return Math.atan(m)
    case 1:
      return m.map(Math.atan)
    case 2:
      return m.map(a => a.map(Math.atan))
    default:
      throw new Error('atan(): wrong size')
  }
}
