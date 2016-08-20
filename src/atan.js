
import pointwise from './pointwise'
import spPointwise from './spPointwise'
import Sparse from './Sparse'

const atan = pointwise(Math.atan)
const satan = spPointwise(Math.atan)

function catan(x) {
  throw new Error('mathlab.atan: no atan for complex number')
}

/**
 * Pointwise Math.atan(x)
 * 
 * @export
 * @param {Number|Array|Sparse} m
 * @returns {Number|Array|Sparse}
 * @example 
 * 
 * atan(1) // Math.atan(1)
 * atan([1, 2]) // [Math.atan(1), Math.atan(2)]
 * atan([[1,2],[1,3]]) // [ [Math.atan(1), Math.atan(2)], [Math.atan(1), Math.atan(3)] ]
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
