import pointwise from './pointwise'

const bxor = pointwise((x, y) => x ^ y);

function cbxor(x, y) {
  throw new Error('mathlab.bxor: no bxor for complex number')
}

function sbxor(x, y) {
  throw new Error('mathlab.bxor: bxor for sparse matrix not exist')
}

/**
 * Pointwise bxor
 * 
 * @export
 * @param {Number|Array} m1
 * @param {Number|Array} m2
 * @returns {Number|Array}
 * @example 
 * 
 * bxor(1, 2)
 * // returns 1 ^ 2
 * bxor([1, 2], [2, 2])
 * // returns [1 ^ 2, 2 ^ 2]
 * bxor([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 ^ 2, 1 ^ 2], [1 ^ 2, 2 ^ 2] ]
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