import pointwise2 from './pointwise2'
import spPointwise2 from './spPointwise2'

const bxor = pointwise2((x, y) => x ^ y)
const sbxor = spPointwise2((x, y) => x ^ y)

function cbxor(x, y) {
  throw new Error('mathlab.bxor: no bxor for complex number')
}

/**
 * Pointwise bxor
 * 
 * @export
 * @param {Number|Array|Sparse} m1
 * @param {Number|Array|Sparse} m2
 * @returns {Number|Array|Sparse}
 * @example 
 * 
 * bxor(1, 2) // 1 ^ 2
 * bxor([1, 2], [2, 2]) // [1 ^ 2, 2 ^ 2]
 * bxor([[2,1], [1,2]], [[2, 2], [2, 2]])) // [ [2 ^ 2, 1 ^ 2], [1 ^ 2, 2 ^ 2] ]
 */
export default function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return cbxor(m1, m2);
    case 'Sparse':
      return sbxor(m1, m2);
    default:
      return bxor(m1, m2);
  }
}