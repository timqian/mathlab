
import pointwise from './pointwise'
import Sparse from './Sparse'

const atan = pointwise(Math.atan)

function catan(x) {
  throw new Error('mathlab.atan: no atan for complex number')
}

function satan(x) {
  return new Sparse({
    col: x.col.slice(), // copy the array
    row: x.row.slice(),
    val: atan(x.val),
  })
}

/**
 * Pointwise Math.atan(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * atan(1)
 * // returns Math.atan(1)
 * atan([1, 2])
 * // returns [Math.atan(1), Math.atan(2)]
 * atan([[1,2],[1,3]])
 * // returns [ [Math.atan(1), Math.atan(2)], [Math.atan(1), Math.atan(3)] ]
 */
export default function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return catan(m);
    case 'Sparse':
      return satan(m);
    default:
      return atan(m);
  }
}
