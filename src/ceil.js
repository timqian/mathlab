
import pointwise from './pointwise'
import spPointwise from './spPointwise'
import Sparse from './Sparse'

const ceil = pointwise(Math.ceil)
const sceil = spPointwise(Math.ceil)

function cceil(x) {
  throw new Error('mathlab.ceil: no ceil for complex number')
}

/**
 * Pointwise Math.ceil(x)
 * 
 * @export
 * @param {Number|Array|Complex|Sparse} m
 * @returns {Number|Array|Complex|Sparse}
 * @example 
 * 
 * ceil(1) // Math.ceil(1)
 * ceil([1, 2]) // [Math.ceil(1), Math.ceil(2)]
 * ceil([[1,2],[1,3]]) // [ [Math.ceil(1), Math.ceil(2)], [Math.ceil(1), Math.ceil(3)] ]
 */
export default function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return cceil(m);
    case 'Sparse':
      return sceil(m);
    default:
      return ceil(m);
  }
}
