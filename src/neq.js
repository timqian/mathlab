import pointwise from './pointwise'

const neq = pointwise((x, y) => x !== y);

function cneq(x, y) {
  throw new Error('mathlab.neq: no neq for complex number')
}

function sneq(x, y) {
  throw new Error('mathlab.neq: neq for sparse matrix not exist')
}

/**
 * Pointwise neq
 * 
 * @export
 * @param {Number|Array} m1
 * @param {Number|Array} m2
 * @returns {Number|Array}
 * @example 
 * 
 * neq(1, 2)
 * // returns 1 !== 2
 * neq([1, 2], [2, 2])
 * // returns [1 !== 2, 2 !== 2]
 * neq([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 !== 2, 1 !== 2], [1 !== 2, 2 !== 2] ]
 */
export default function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return cneq(m1, m2);
    case 'Sparse':
      return sneq(m1, m2);
    default:
      return neq(m1, m2);
  }
}