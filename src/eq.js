import pointwise2 from './pointwise2'
import spPointwise2 from './spPointwise2'

const eq = pointwise2((x, y) => x === y);
const seq = spPointwise2((x, y) => x === y);

function ceq(x, y) {
  throw new Error('mathlab.eq: no eq for complex number')
}

/**
 * Pointwise eq
 * 
 * @export
 * @param {Number|Array} m1
 * @param {Number|Array} m2
 * @returns {Number|Array}
 * @example 
 * 
 * eq(1, 2)
 * // returns 1 === 2
 * eq([1, 2], [2, 2])
 * // returns [1 === 2, 2 === 2]
 * eq([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 === 2, 1 === 2], [1 === 2, 2 === 2] ]
 */
export default function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return ceq(m1, m2);
    case 'Sparse':
      return seq(m1, m2);
    default:
      return eq(m1, m2);
  }
}