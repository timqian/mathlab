
import pointwise from './pointwise'
import spPointwise from './spPointwise'
import Sparse from './Sparse'
import Complex from './Complex'
import atan2 from './atan2'
import abs from './abs'

const log = pointwise(Math.log)
const slog = spPointwise(Math.log)

function clog(x) {
  if (x.im) {
    var theta = new Complex(atan2(x.im, x.re)),
      r = abs(x);
    return new Complex(log(r.re), theta.re);
  }
  return new Complex(log(x.re));
}


/**
 * Pointwise Math.log(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * log(1)
 * // returns Math.log(1)
 * log([1, 2])
 * // returns [Math.log(1), Math.log(2)]
 * log([[1,2],[1,3]])
 * // returns [ [Math.log(1), Math.log(2)], [Math.log(1), Math.log(3)] ]
 */
export default function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return clog(m);
    case 'Sparse':
      return slog(m);
    default:
      return log(m);
  }
}
