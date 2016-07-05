
import dim from './dim'

/**
 * Pointwise Math.round(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * round(1)
 * // Equals Math.round(1)
 * round([1, 2])
 * // Equals [Math.round(1), Math.round(2)]
 * round([[1,2],[1,3]])
 * // Equals [ [Math.round(1), Math.round(2)], [Math.round(1), Math.round(3)] ]
 */
export default function round(m) {
  switch (dim(m).length) {
    case 0:
      return Math.round(m)
    case 1:
      return m.map(Math.round)
    case 2:
      return m.map(a => a.map(Math.round))
    default:
      throw new Error('round(): wrong size')
  }
}
