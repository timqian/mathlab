
import pointwise from './pointwise'
import spPointwise from './spPointwise'
import cos from './cos'
import sin from './sin'
import mul from './mul'
import Complex from './Complex'
import Sparse from './Sparse'

const exp = pointwise(Math.exp)
const sexp = spPointwise(Math.exp)

function cexp(x) {
  var ex = exp(x.re);
  if (x.im) {
    return new Complex(mul(cos(x.im), ex), mul(sin(x.im), ex));
  }
  return new Complex(ex);
}


/**
 * Pointwise Math.exp(x)
 * 
 * @export
 * @param {Number|Array|Complex|Sparse} m
 * @returns {Number|Array|Complex|Sparse}
 * @example 
 * 
 * exp(1)
 * // returns Math.exp(1)
 * exp([1, 2])
 * // returns [Math.exp(1), Math.exp(2)]
 * exp([[1,2],[1,3]])
 * // returns [ [Math.exp(1), Math.exp(2)], [Math.exp(1), Math.exp(3)] ]
 */
export default function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return cexp(m);
    case 'Sparse':
      return sexp(m);
    default:
      return exp(m);
  }
}
