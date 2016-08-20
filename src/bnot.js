
import pointwise from './pointwise'
import spPointwise from './spPointwise'
import Sparse from './Sparse'

const bnot = pointwise(x=> ~x)
const sbnot = spPointwise(x=> ~x)

function cbnot(x) {
  throw new Error('mathlab.bnot: no bnot for complex number')
}


/**
 * Pointwise Math.bnot(x)
 * 
 * @export
 * @param {Number|Array|Sparse} m
 * @returns {Number|Array|Sparse}
 * @example 
 * 
 * bnot(1) // ~1
 * bnot([1, 2]) // [~1, ~2]
 * bnot([[1,2],[1,3]]) // [[~1,~2],[~1,~3]]
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
