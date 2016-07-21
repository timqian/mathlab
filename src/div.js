import pointwise from './pointwise'
import T from './T';
import mul from './mul';

const aDiv = pointwise((x, y) => x / y);

function cDiv(x, y) {
  if (!(y instanceof T)) y = new T(y);
  if (y.y) {
    return mul(x, y.reciprocal()); 
  }
  if (x.y) {
    return new T(aDiv(x.x, y.x), aDiv(x.y, y.x)); }
  return new T(aDiv(x.x, y.x));
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
export default function div(m1, m2) {
  switch (m1.constructor.name) {
    case 'Array':
      return aDiv(m1, m2);
    case 'T':
      return cDiv(m1, m2);
    case 'Sparse':
      return sDiv(m1, m2);
    default:
      return aDiv(m1, m2);
  }
}