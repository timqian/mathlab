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
 * @param {Number|Array} m1
 * @param {Number|Array} m2
 * @returns {Number|Array}
 * @example 
 * 
 * and(1, 2)
 * // returns 1 && 2
 * and([1, 2], [2, 2])
 * // returns [1 && 2, 2 && 2]
 * and([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 && 2, 1 && 2], [1 && 2, 2 && 2] ]
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