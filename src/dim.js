/**
 * Get Array dimensions
 * 
 * @export
 * @param {Array} x
 * @returns {Array}
 * @example 
 * 
 * dim([[1, 2, 3], [1, 2, 2]])
 * // [2, 3]
 */
export default function dim (x) {
  var y // ,z
  if (typeof x === 'object') {
    y = x[0]
    if (typeof y === 'object') {
      // z = y[0]
      // if (typeof z === 'object') {
      //   return numeric._dim(x)
      // }
      return [x.length, y.length]
    }
    return [x.length]
  }
  return []
}
