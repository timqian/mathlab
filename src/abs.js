
import pointwise from './pointwise'
import spPointwise from './spPointwise'
import Complex from './Complex'
import Sparse from './Sparse'
import mul from './mul'
import sqrt from './sqrt'
import add from './add'


const abs = pointwise(Math.abs)
const sabs = spPointwise(Math.abs)

function cabs(x) {
  if (x.im) {
    return new Complex(sqrt(add(mul(x.re, x.re), mul(x.im, x.im))));
  }
  return new Complex(abs(x.re));
}

/**
 * Pointwise Math.abs(x)
 * 
 * @export
 * @param {Number|Array|Complex|Sparse} m
 * @returns {Number|Array|Complex|Sparse}
 * @example 
 * 
 * abs(-1) // 1
 * abs([1, -2]) // [1, 2]
 * abs([[-1,2],[1,-3]]) // [[1,2],[1,3]]
 */
export default function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return cabs(m);
    case 'Sparse':
      return sabs(m);
    default:
      return abs(m);
  }
}
