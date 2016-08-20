import pointwise2 from './pointwise2'
import spPointwise2 from './spPointwise2'

const geq = pointwise2((x, y) => x >= y)
const sgeq = spPointwise2((x, y) => x >= y)

function cgeq(x, y) {
  throw new Error('mathlab.geq: no geq for complex number')
}

/**
 * Pointwise geq
 * 
 * @export
 * @param {Number|Array|Complex|Sparse} m1
 * @param {Number|Array|Complex|Sparse} m2
 * @returns {Number|Array|Complex|Sparse}
 * @example 
 * 
 * geq(1, 2)
 * // returns 1 >= 2
 * geq([1, 2], [2, 2])
 * // returns [1 >= 2, 2 >= 2]
 * geq([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 >= 2, 1 >= 2], [1 >= 2, 2 >= 2] ]
 */
export default function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return cgeq(m1, m2);
    case 'Sparse':
      return sgeq(m1, m2);
    default:
      return geq(m1, m2);
  }
}