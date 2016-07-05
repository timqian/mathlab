
import dim from './dim'

/**
 * Pointwise Math.exp(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * exp(1)
 * // Equals Math.exp(1)
 * exp([1, 2])
 * // Equals [Math.exp(1), Math.exp(2)]
 * exp([[1,2],[1,3]])
 * // Equals [ [Math.exp(1), Math.exp(2)], [Math.exp(1), Math.exp(3)] ]
 */
export default function exp(m) {
  switch (dim(m).length) {
    case 0:
      return Math.exp(m)
    case 1:
      return m.map(Math.exp)
    case 2:
      return m.map(a => a.map(Math.exp))
    default:
      throw new Error('exp(): wrong size')
  }
}
