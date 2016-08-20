import pointwise2 from './pointwise2'
import spPointwise2 from './spPointwise2'

const or = pointwise2((x, y) => x || y);
const sor = spPointwise2((x, y) => x || y);

function cor(x, y) {
  throw new Error('mathlab.or: no or for complex number')
}


/**
 * Pointwise or
 * 
 * @export
 * @param {Number|Array|Complex|Sparse} m1
 * @param {Number|Array|Complex|Sparse} m2
 * @returns {Number|Array|Complex|Sparse}
 * @example 
 * 
 * or(1, 2)
 * // returns 1 || 2
 * or([1, 2], [2, 2])
 * // returns [1 || 2, 2 || 2]
 * or([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 || 2, 1 || 2], [1 || 2, 2 || 2] ]
 */
export default function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return cor(m1, m2);
    case 'Sparse':
      return sor(m1, m2);
    default:
      return or(m1, m2);
  }
}