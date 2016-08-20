import pointwise2 from './pointwise2'
import spPointwise2 from './spPointwise2'

const mod = pointwise2((x, y) => x % y);
const smod = spPointwise2((x, y) => x % y);

function cmod(x, y) {
  throw new Error('mathlab.mod: no mod for complex number')
}

/**
 * Pointwise mod
 * 
 * @export
 * @param {Number|Array|Complex|Sparse} m1
 * @param {Number|Array|Complex|Sparse} m2
 * @returns {Number|Array|Complex|Sparse}
 * @example 
 * 
 * mod(1, 2)
 * // returns 1 % 2
 * mod([1, 2], [2, 2])
 * // returns [1 % 2, 2 % 2]
 * mod([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 % 2, 1 % 2], [1 % 2, 2 % 2] ]
 */
export default function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return cmod(m1, m2);
    case 'Sparse':
      return smod(m1, m2);
    default:
      return mod(m1, m2);
  }
}