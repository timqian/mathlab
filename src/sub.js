import pointwise from './pointwise'
import Complex from './Complex'
import neg from './neg'

const sub = pointwise((x, y) => x - y);

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

function ssub(x, y) {
  throw new Error('mathlab.sub: sub for sparse matrix not exist')
}

/**
 * Pointwise sub
 * 
 * @export
 * @param {Number|Array} m1
 * @param {Number|Array} m2
 * @returns {Number|Array}
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