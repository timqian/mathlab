
import dim from './dim'

/**
 * Pointwise Math.asin(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * asin(1)
 * // Equals Math.asin(1)
 * asin([1, 2])
 * // Equals [Math.asin(1), Math.asin(2)]
 * asin([[1,2],[1,3]])
 * // Equals [ [Math.asin(1), Math.asin(2)], [Math.asin(1), Math.asin(3)] ]
 */
export default function asin(m) {
  switch (dim(m).length) {
    case 0:
      return Math.asin(m)
    case 1:
      return m.map(Math.asin)
    case 2:
      return m.map(a => a.map(Math.asin))
    default:
      throw new Error('asin(): wrong size')
  }
}
