
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
 * 
 * 
 * function _add (x, y) {
 *   return x + y
 * }
 * const add = pointwise(_add)
 * add(1, 2)                                // 3
 * add([1, 2], [1, 2])                      // [2, 4]
 * add([[1, 2], [1, 2]], [[1, 2], [1, 2]])  //[[2, 4], [2, 4]]
 */
export default function pointwise (fun) {
  return function (...args) {
    if(args.length === 0) { 
      throw new Error('mathlab: must provide arguments') 
    } else if (args.length === 1) {
      const [m] = args
      switch (dim(m).length) {
        case 0:
          return fun(m)
        case 1:
          return m.map(fun)
        case 2:
          return m.map(a => a.map(fun))
        default:
          throw new Error('mathlab: only support two demitional matrix')
      }
    } else if (args.length === 2) {
      const [m1, m2] = args
      if (dim(m1)[0] !== dim(m2)[0] || dim(m1)[1] !== dim(m2)[1]) {
        throw new Error('mathlab: size of two matrices should be the same')
      }
      switch (dim(m1).length) {
        case 0:
          return fun(m1, m2)
        case 1:
          return m1.map((x, i) => fun(x, m2[i]))
        case 2:
          return m1.map( (mm1, i) => mm1.map( (x, j) => fun(x, m2[i][j]) ) )
        default:
          throw new Error('mathlab: only support two demitional matrix')
      }      
    }
  }
}
