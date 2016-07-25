import pointwise from './pointwise'

const or = pointwise((x, y) => x || y);

function cor(x, y) {
  throw new Error('mathlab.or: no or for complex number')
}

function sor(x, y) {
  throw new Error('mathlab.or: or for sparse matrix not exist')
}

/**
 * Pointwise or
 * 
 * @export
 * @param {Number|Array} m1
 * @param {Number|Array} m2
 * @returns {Number|Array}
 * @example 
 * 
 * or(1, 2)
 * // returns 1 || 2
 * or([1, 2], [2, 2])
 * // returns [1 || 2, 2 || 2]
 * or([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 || 2, 1 || 2], [1 || 2, 2 || 2] ]
 */
export default function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return cor(m1, m2);
    case 'Sparse':
      return sor(m1, m2);
    default:
      return or(m1, m2);
  }
}