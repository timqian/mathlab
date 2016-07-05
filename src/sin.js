
import dim from './dim'

/**
 * Pointwise Math.sin(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * sin(1)
 * // Equals Math.sin(1)
 * sin([1, 2])
 * // Equals [Math.sin(1), Math.sin(2)]
 * sin([[1,2],[1,3]])
 * // Equals [ [Math.sin(1), Math.sin(2)], [Math.sin(1), Math.sin(3)] ]
 */
export default function sin(m) {
  switch (dim(m).length) {
    case 0:
      return Math.sin(m)
    case 1:
      return m.map(Math.sin)
    case 2:
      return m.map(a => a.map(Math.sin))
    default:
      throw new Error('sin(): wrong size')
  }
}
