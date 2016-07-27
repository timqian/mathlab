import pointwise from './pointwise'
import Complex from './Complex'

const add = pointwise((x, y) => x + y);

function cadd(x, y) {
  if (!(y instanceof Complex)) { y = new Complex(y); }
  if (x.im) {
    if (y.im) {
      return new Complex(add(x.re, y.re), add(x.im, y.im));
    }
    return new Complex(add(x.re, y.re), x.im);
  }
  if (y.im) {
    return new Complex(add(x.re, y.re), y.im);
  }
  return new Complex(add(x.re, y.re));
}

function sadd(x, y) {
  // TODO
  throw new Error('mathlab.add: add for sparse matrix not exist')
}

/**
 * Pointwise add
 * 
 * @export
 * @param {Number|Array} m1
 * @param {Number|Array} m2
 * @returns {Number|Array}
 * @example 
 * 
 * add(1, 2)
 * // returns 1 + 2
 * add([1, 2], [2, 2])
 * // returns [1 + 2, 2 + 2]
 * add([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 + 2, 1 + 2], [1 + 2, 2 + 2] ]
 */
export default function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return cadd(m1, m2);
    case 'Sparse':
      return sadd(m1, m2);
    default:
      return add(m1, m2);
  }
}