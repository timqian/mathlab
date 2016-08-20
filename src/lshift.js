import pointwise2 from './pointwise2'
import spPointwise2 from './spPointwise2'

const lshift = pointwise2((x, y) => x << y);
const slshift = spPointwise2((x, y) => x << y);

function clshift(x, y) {
  throw new Error('mathlab.lshift: no lshift for complex number')
}

/**
 * Pointwise lshift
 * 
 * @export
 * @param {Number|Array|Complex|Sparse} m1
 * @param {Number|Array|Complex|Sparse} m2
 * @returns {Number|Array|Complex|Sparse}
 * @example 
 * 
 * lshift(1, 2)
 * // returns 1 << 2
 * lshift([1, 2], [2, 2])
 * // returns [1 << 2, 2 << 2]
 * lshift([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 << 2, 1 << 2], [1 << 2, 2 << 2] ]
 */
export default function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return clshift(m1, m2);
    case 'Sparse':
      return slshift(m1, m2);
    default:
      return lshift(m1, m2);
  }
}