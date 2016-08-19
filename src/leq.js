import pointwise2 from './pointwise2'
import spPointwise2 from './spPointwise2'

const leq = pointwise2((x, y) => x <= y);
const sleq = spPointwise2((x, y) => x <= y);

function cleq(x, y) {
  throw new Error('mathlab.leq: no leq for complex number')
}


/**
 * Pointwise leq
 * 
 * @export
 * @param {Number|Array} m1
 * @param {Number|Array} m2
 * @returns {Number|Array}
 * @example 
 * 
 * leq(1, 2)
 * // returns 1 <= 2
 * leq([1, 2], [2, 2])
 * // returns [1 <= 2, 2 <= 2]
 * leq([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 <= 2, 1 <= 2], [1 <= 2, 2 <= 2] ]
 */
export default function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return cleq(m1, m2);
    case 'Sparse':
      return sleq(m1, m2);
    default:
      return leq(m1, m2);
  }
}