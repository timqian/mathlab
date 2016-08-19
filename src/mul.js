import pointwise2 from './pointwise2';
import spPointwise2 from './spPointwise2'
import Complex from './Complex';
import add from './add';
import sub from './sub';

// array mul
const amul = pointwise2((x, y) => x * y)
const smul = spPointwise2((x, y) => x * y)

// complex array mul
function cmul(x, y) {
  if(!(y instanceof Complex)) { y = new Complex(y); }
  if (x.im) {
    if (y.im) {
      return new Complex(sub(amul(x.re, y.re), amul(x.im, y.im)), add(amul(x.re, y.im), amul(x.im, y.re)));
    }
    return new Complex(amul(x.re, y.re), amul(x.im, y.re));
  }
  if (y.im) {
    return new Complex(amul(x.re, y.re), amul(x.re, y.im));
  }
  return new Complex(amul(x.re, y.re));
}


/**
 * Pointwise mul
 * 
 * @export
 * @param {Number|Array|Object} m1
 * @param {Number|Array|Object} m2
 * @returns {Number|Array}
 * @example 
 * 
 * mul(1, 2)
 * // returns 1 * 2
 * mul([1, 2], [2, 2])
 * // returns [1 * 2, 2 * 2]
 * mul([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 * 2, 1 * 2], [1 * 2, 2 * 2] ]
 */
export default function (m1, m2) {
  // if (m1.constructor.name !== m2.constructor.name) {
  //   throw new Error('mathlab.mul: argument type mismatch')
  // }

  switch (m1.constructor.name) {
    case 'Array':
      return amul(m1, m2);
    case 'Complex':
      return cmul(m1, m2);
    case 'Sparse':
      return smul(m1, m2);
    default:
      return amul(m1, m2);
  }
}