import pointwise2 from './pointwise2'
import spPointwise2 from './spPointwise2'

const bor = pointwise2((x, y) => x | y);
const sbor = spPointwise2((x, y) => x | y);

function cbor(x, y) {
  throw new Error('mathlab.bor: no bor for complex number')
}

/**
 * Pointwise bor
 * 
 * @export
 * @param {Number|Array|Sparse} m1
 * @param {Number|Array|Sparse} m2
 * @returns {Number|Array|Sparse}
 * @example 
 * 
 * bor(1, 2) // 1 | 2
 * bor([1, 2], [2, 2]) // [1 | 2, 2 | 2]
 * bor([[2,1], [1,2]], [[2, 2], [2, 2]])) // [ [2 | 2, 1 | 2], [1 | 2, 2 | 2] ]
 */
export default function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return cbor(m1, m2);
    case 'Sparse':
      return sbor(m1, m2);
    default:
      return bor(m1, m2);
  }
}