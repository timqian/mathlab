import pointwise2 from './pointwise2'
import spPointwise2 from './spPointwise2'

const neq = pointwise2((x, y) => x !== y)
const sneq = spPointwise2((x, y) => x !== y)

function cneq(x, y) {
  throw new Error('mathlab.neq: no neq for complex number')
}


/**
 * Pointwise neq
 * 
 * @export
 * @param {Number|Array} m1
 * @param {Number|Array} m2
 * @returns {Number|Array}
 * @example 
 * 
 * neq(1, 2)
 * // returns 1 !== 2
 * neq([1, 2], [2, 2])
 * // returns [1 !== 2, 2 !== 2]
 * neq([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 !== 2, 1 !== 2], [1 !== 2, 2 !== 2] ]
 */
export default function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return cneq(m1, m2);
    case 'Sparse':
      return sneq(m1, m2);
    default:
      return neq(m1, m2);
  }
}