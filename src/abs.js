
import pointwise from './pointwise'
import Complex from './Complex'
import Sparse from './Sparse'
import mul from './mul'
import sqrt from './sqrt';
import add from './add';

const abs = pointwise(Math.abs)

function cabs(x) {
  if (x.y) {
    return new Complex(sqrt(add(mul(x.x, x.x), mul(x.y, x.y))));
  }
  return new Complex(abs(x.x));
}

function sabs(x) {
  return new Sparse({
    col: x.col.slice(), // copy the array
    row: x.row.slice(),
    val: abs(x.val),
  })
}

/**
 * Pointwise Math.abs(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * abs(1)
 * // returns Math.abs(1)
 * abs([1, 2])
 * // returns [Math.abs(1), Math.abs(2)]
 * abs([[1,2],[1,3]])
 * // returns [ [Math.abs(1), Math.abs(2)], [Math.abs(1), Math.abs(3)] ]
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
