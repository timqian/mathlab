import pointwise2 from './pointwise2'
import spPointwise2 from './spPointwise2'

const rrshift = pointwise2((x, y) => x >>> y)
const srrshift = spPointwise2((x, y) => x >>> y)

function crrshift(x, y) {
  throw new Error('mathlab.rrshift: no rrshift for complex number')
}


/**
 * Pointwise rrshift
 * 
 * @export
 * @param {Number|Array|Complex|Sparse} m1
 * @param {Number|Array|Complex|Sparse} m2
 * @returns {Number|Array|Complex|Sparse}
 * @example 
 * 
 * rrshift(1, 2)
 * // returns 1 >>> 2
 * rrshift([1, 2], [2, 2])
 * // returns [1 >>> 2, 2 >>> 2]
 * rrshift([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 >>> 2, 1 >>> 2], [1 >>> 2, 2 >>> 2] ]
 */
export default function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return crrshift(m1, m2);
    case 'Sparse':
      return srrshift(m1, m2);
    default:
      return rrshift(m1, m2);
  }
}