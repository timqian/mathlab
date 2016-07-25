import pointwise from './pointwise'
import Complex from './Complex';
import mul from './mul';

const div = pointwise((x, y) => x / y);

function cdiv(x, y) {
  if (!(y instanceof Complex)) y = new Complex(y);
  if (y.y) {
    return mul(x, y.reciprocal()); 
  }
  if (x.y) {
    return new Complex(div(x.x, y.x), div(x.y, y.x)); }
  return new Complex(div(x.x, y.x));
}

function sdiv(x, y) {
  // TODO
  throw new Error('mathlab.div: div for sparse matrix not exist')
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