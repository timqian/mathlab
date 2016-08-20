
import pointwise from './pointwise'
import spPointwise from './spPointwise'
import Sparse from './Sparse'

const clone = pointwise(x => x)
const sclone = spPointwise(x => x)

function cclone(x) {
  throw new Error('mathlab.clone: no clone for complex number')
}

/**
 * Pointwise clone(x)
 * 
 * @export
 * @param {Number|Array|Complex|Sparse} m
 * @returns {Number|Array|Complex|Sparse}
 * @example 
 * 
 * clone([[1,2],[1,3]]) // [[1,2],[1,3]]
 */
export default function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return cclone(m);
    case 'Sparse':
      return sclone(m);
    default:
      return clone(m);
  }
}
