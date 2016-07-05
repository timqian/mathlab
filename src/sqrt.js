
import dim from './dim'

/**
 * Pointwise Math.sqrt(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * sqrt(1)
 * // Equals Math.sqrt(1)
 * sqrt([1, 2])
 * // Equals [Math.sqrt(1), Math.sqrt(2)]
 * sqrt([[1,2],[1,3]])
 * // Equals [ [Math.sqrt(1), Math.sqrt(2)], [Math.sqrt(1), Math.sqrt(3)] ]
 */
export default function sqrt(m) {
  switch (dim(m).length) {
    case 0:
      return Math.sqrt(m)
    case 1:
      return m.map(Math.sqrt)
    case 2:
      return m.map(a => a.map(Math.sqrt))
    default:
      throw new Error('sqrt(): wrong size')
  }
}
