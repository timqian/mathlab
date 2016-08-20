import pointwise2 from './pointwise2'
import spPointwise2 from './spPointwise2'

const and = pointwise2((x, y) => x && y)
const sand = spPointwise2((x, y) => x && y)

function cand(x, y) {
  throw new Error('mathlab.and: no and for complex number')
}

/**
 * Pointwise and
 * 
 * @export
 * @param {Number|Array|Complex|Sparse} m1
 * @param {Number|Array|Complex|Sparse} m2
 * @returns {Number|Array|Complex|Sparse}
 * @example 
 * 
 * and(1, 0) // 0
 * and([1, 1], [1, 0]) // [1, 0]
 * and([[1,1], [1,1]], [[1,0], [0,0]])) // [[1,0], [0,0]]
 */
export default function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return cand(m1, m2);
    case 'Sparse':
      return sand(m1, m2);
    default:
      return and(m1, m2);
  }
}