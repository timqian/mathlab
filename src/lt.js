import pointwise2 from './pointwise2'
import spPointwise2 from './spPointwise2'

const lt = pointwise2((x, y) => x < y);
const slt = spPointwise2((x, y) => x < y);

function clt(x, y) {
  throw new Error('mathlab.lt: no lt for complex number')
}


/**
 * Pointwise lt
 * 
 * @export
 * @param {Number|Array} m1
 * @param {Number|Array} m2
 * @returns {Number|Array}
 * @example 
 * 
 * lt(1, 2)
 * // returns 1 < 2
 * lt([1, 2], [2, 2])
 * // returns [1 < 2, 2 < 2]
 * lt([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 < 2, 1 < 2], [1 < 2, 2 < 2] ]
 */
export default function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return clt(m1, m2);
    case 'Sparse':
      return slt(m1, m2);
    default:
      return lt(m1, m2);
  }
}