
import pointwise from './pointwise'
import Complex from './Complex'

const neg = pointwise(x=> -x);

function cneg(x) {
  if (x.y) {
    return new Complex(neg(x.x), neg(x.y));
  }
  return new Complex(neg(x.x));
}

function sneg(x) {
  throw new Error('mathlab.neg: neg for sparse matrix has not been implemented yet')
}

/**
 * Pointwise Math.neg(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * neg(1)
 * // returns Math.neg(1)
 * neg([1, 2])
 * // returns [Math.neg(1), Math.neg(2)]
 * neg([[1,2],[1,3]])
 * // returns [ [Math.neg(1), Math.neg(2)], [Math.neg(1), Math.neg(3)] ]
 */
export default function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return cneg(m);
    case 'Sparse':
      return sneg(m);
    default:
      return neg(m);
  }
}
