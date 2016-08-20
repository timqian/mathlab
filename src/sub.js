import pointwise2 from './pointwise2'
import spPointwise2 from './spPointwise2'
import Complex from './Complex'
import neg from './neg'

const sub = pointwise2((x, y) => x - y)
const ssub = spPointwise2((x, y) => x - y)

function csub(x, y) {
  if (!(y instanceof Complex)) { y = new Complex(y); }
  if (x.im) {
    if (y.im) {
      return new Complex(sub(x.re, y.re), sub(x.im, y.im));
    }
    return new Complex(sub(x.re, y.re), x.im);
  }
  if (y.im) {
    return new Complex(sub(x.re, y.re), neg(y.im));
  }
  return new Complex(sub(x.re, y.re));
}


/**
 * Pointwise sub
 * 
 * @export
 * @param {Number|Array|Complex|Sparse} m1
 * @param {Number|Array|Complex|Sparse} m2
 * @returns {Number|Array|Complex|Sparse}
 * @example 
 * 
 * sub(1, 2)
 * // returns 1 - 2
 * sub([1, 2], [2, 2])
 * // returns [1 - 2, 2 - 2]
 * sub([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 - 2, 1 - 2], [1 - 2, 2 - 2] ]
 */
export default function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return csub(m1, m2);
    case 'Sparse':
      return ssub(m1, m2);
    default:
      return sub(m1, m2);
  }
}