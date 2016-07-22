import pointwise from './pointwise'

const and = pointwise((x, y) => x && y);

function cand(x, y) {
  throw new Error('mathlab.and: no and for complex number')
}

function sand(x, y) {
  throw new Error('mathlab.and: and for sparse matrix has not been implemented yet')
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