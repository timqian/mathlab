
import pointwise from './pointwise'
import spPointwise from './spPointwise'
import Complex from './Complex'
import Sparse from './Sparse'
import neg from './neg'
import exp from './exp'
import div from './div'
import add from './add'

const cos = pointwise(Math.cos)
const scos = spPointwise(Math.cos)

function ccos(x) {
  if (x.im) {
    return div(add(exp(x), exp(neg(x))), 2);
  }
  return new Complex(cos(x.re));
}

/**
 * Pointwise Math.cos(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * cos(1)
 * // returns Math.cos(1)
 * cos([1, 2])
 * // returns [Math.cos(1), Math.cos(2)]
 * cos([[1,2],[1,3]])
 * // returns [ [Math.cos(1), Math.cos(2)], [Math.cos(1), Math.cos(3)] ]
 */
export default function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return ccos(m);
    case 'Sparse':
      return scos(m);
    default:
      return cos(m);
  }
}
