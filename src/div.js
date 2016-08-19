import pointwise2 from './pointwise2'
import spPointwise2 from './spPointwise2'
import Complex from './Complex';
import mul from './mul';

const div = pointwise2((x, y) => x / y)
const sdiv = spPointwise2((x, y) => x / y)

function cdiv(x, y) {
  if (!(y instanceof Complex)) y = new Complex(y);
  if (y.im) {
    return mul(x, y.reciprocal()); 
  }
  if (x.im) {
    return new Complex(div(x.re, y.re), div(x.im, y.re)); }
  return new Complex(div(x.re, y.re));
}

/**
 * Pointwise div
 * 
 * @export
 * @param {Number|Array} m1
 * @param {Number|Array} m2
 * @returns {Number|Array}
 * @example 
 * 
 * div(1, 2)
 * // returns 1 / 2
 * div([1, 2], [2, 2])
 * // returns [1 / 2, 2 / 2]
 * div([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 / 2, 1 / 2], [1 / 2, 2 / 2] ]
 */
export default function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return cdiv(m1, m2);
    case 'Sparse':
      return sdiv(m1, m2);
    default:
      return div(m1, m2);
  }
}