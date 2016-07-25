
import pointwise from './pointwise'
import Sparse from './Sparse'
import Complex from './Complex'
import atan2 from './atan2'
import abs from './abs'

const log = pointwise(Math.log)

function clog(x) {
  if (x.y) {
    var theta = new Complex(atan2(x.y, x.x)),
      r = abs(x);
    return new Complex(log(r.x), theta.x);
  }
  return new Complex(log(x.x));
}

function slog(x) {
  return new Sparse({
    col: x.col.slice(), // copy the array
    row: x.row.slice(),
    val: log(x.val),
  })
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
