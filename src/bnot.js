
import pointwise from './pointwise'
import Sparse from './Sparse'

const bnot = pointwise(x=> ~x);

function cbnot(x) {
  throw new Error('mathlab.bnot: no bnot for complex number')
}

function sbnot(x) {
  return new Sparse({
    col: x.col.slice(), // copy the array
    row: x.row.slice(),
    val: bnot(x.val),
  })
}

/**
 * Pointwise Math.bnot(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * bnot(1)
 * // returns Math.bnot(1)
 * bnot([1, 2])
 * // returns [Math.bnot(1), Math.bnot(2)]
 * bnot([[1,2],[1,3]])
 * // returns [ [Math.bnot(1), Math.bnot(2)], [Math.bnot(1), Math.bnot(3)] ]
 */
export default function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return cbnot(m);
    case 'Sparse':
      return sbnot(m);
    default:
      return bnot(m);
  }
}
