import dim from './dim'

/**
 * Create a pointwise function of two arguments
 * 
 * @export
 * @param {Function} fun
 * @returns {Function}
 * @example 
 * 
 * function _add (x, y) {
 *   return x + y
 * }
 * const add = pointwise(_add)
 * add(1, 2)                                // 3
 * add([1, 2], [1, 2])                      // [2, 4]
 * add([[1, 2], [1, 2]], [[1, 2], [1, 2]])  //[[2, 4], [2, 4]]
 */
export default function pointwise2(fun) {
  return function(m1, m2) {
    switch (dim(m1).length) {
    case 0:
        return fun(m1, m2)
    case 1:
        {
        if (typeof m2 === 'number') {
            return m1.map(x => fun(x, m2))
        }
        return m1.map((x, i) => fun(x, m2[i]))
        }
    case 2:
        {
        if (typeof m2 === 'number') {
            return m1.map(mm1 => mm1.map(x => fun(x, m2)))
        }
        return m1.map((mm1, i) => mm1.map((x, j) => fun(x, m2[i][j])))
        }

    default:
        throw new Error('mathlab.pointwise: dimension of given array should <= 2')
    }
}
}