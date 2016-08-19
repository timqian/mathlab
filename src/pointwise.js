import dim from './dim'

/**
 * Create a pointwise function
 * 
 * @export
 * @param {Function} fun
 * @returns {Function}
 * @example 
 * 
 * function _inc (x) {
 *   return x + 1
 * }
 * const inc = pointwise(inc)
 * inc(1)                                  // 2
 * inc([1, 2])                             // [2, 3]
 * inc([[1, 2], [1, 3]])                   // [[2, 3], [2, 4]]
 */
export default function pointwise(fun) {
  return function(m) {
    switch (dim(m).length) {
      case 0:
        return fun(m)
      case 1:
        return m.map(fun)
      case 2:
        return m.map(a => a.map(fun))
      default:
        throw new Error('mathlab.pointwise: dimension of matrix should <= 2')
    }
  }
}