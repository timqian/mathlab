
import pointwise from './pointwise'
import Complex from './Complex'
import Sparse from './Sparse'
import neg from './neg'
import exp from './exp'
import div from './div'
import sub from './sub'

const sin = pointwise(Math.sin)

function csin(x) {
  if (x.y) {
    return div(sub(exp(x), exp(neg(x))), new Complex(0,2))
    // return x.exp().sub(x.neg().exp()).div(new Complex(0, 2));
  }
  return new Complex(sin(x.x));
}

function ssin(x) {
  return new Sparse({
    col: x.col.slice(), // copy the array
    row: x.row.slice(),
    val: sin(x.val),
  })
}

/**
 * Pointwise Math.sin(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * sin(1)
 * // returns Math.sin(1)
 * sin([1, 2])
 * // returns [Math.sin(1), Math.sin(2)]
 * sin([[1,2],[1,3]])
 * // returns [ [Math.sin(1), Math.sin(2)], [Math.sin(1), Math.sin(3)] ]
 */
export default function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return csin(m);
    case 'Sparse':
      return ssin(m);
    default:
      return sin(m);
  }
}
