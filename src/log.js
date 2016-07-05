
import dim from './dim'

/**
 * Pointwise Math.log(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * log(1)
 * // Equals Math.log(1)
 * log([1, 2])
 * // Equals [Math.log(1), Math.log(2)]
 * log([[1,2],[1,3]])
 * // Equals [ [Math.log(1), Math.log(2)], [Math.log(1), Math.log(3)] ]
 */
export default function log(m) {
  switch (dim(m).length) {
    case 0:
      return Math.log(m)
    case 1:
      return m.map(Math.log)
    case 2:
      return m.map(a => a.map(Math.log))
    default:
      throw new Error('log(): wrong size')
  }
}
