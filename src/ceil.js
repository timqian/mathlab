
import dim from './dim'

/**
 * Pointwise Math.ceil(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * ceil(1)
 * // Equals Math.ceil(1)
 * ceil([1, 2])
 * // Equals [Math.ceil(1), Math.ceil(2)]
 * ceil([[1,2],[1,3]])
 * // Equals [ [Math.ceil(1), Math.ceil(2)], [Math.ceil(1), Math.ceil(3)] ]
 */
export default function ceil(m) {
  switch (dim(m).length) {
    case 0:
      return Math.ceil(m)
    case 1:
      return m.map(Math.ceil)
    case 2:
      return m.map(a => a.map(Math.ceil))
    default:
      throw new Error('ceil(): wrong size')
  }
}
