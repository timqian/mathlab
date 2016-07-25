
import pointwise from './pointwise'
import Sparse from './Sparse'

const not = pointwise(x=> !x);

function cnot(x) {
  throw new Error('mathlab.not: no not for complex number')
}

function snot(x) {
  return new Sparse({
    col: x.col.slice(), // copy the array
    row: x.row.slice(),
    val: not(x.val),
  })
}

/**
 * Pointwise Math.not(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * not(1)
 * // returns Math.not(1)
 * not([1, 2])
 * // returns [Math.not(1), Math.not(2)]
 * not([[1,2],[1,3]])
 * // returns [ [Math.not(1), Math.not(2)], [Math.not(1), Math.not(3)] ]
 */
export default function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return cnot(m);
    case 'Sparse':
      return snot(m);
    default:
      return not(m);
  }
}
