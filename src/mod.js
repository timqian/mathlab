import pointwise from './pointwise'

const mod = pointwise((x, y) => x % y);

function cmod(x, y) {
  throw new Error('mathlab.mod: no mod for complex number')
}

function smod(x, y) {
  throw new Error('mathlab.mod: mod for sparse matrix has not been implemented yet')
}

/**
 * Pointwise mod
 * 
 * @export
 * @param {Number|Array} m1
 * @param {Number|Array} m2
 * @returns {Number|Array}
 * @example 
 * 
 * mod(1, 2)
 * // returns 1 % 2
 * mod([1, 2], [2, 2])
 * // returns [1 % 2, 2 % 2]
 * mod([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 % 2, 1 % 2], [1 % 2, 2 % 2] ]
 */
export default function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return cmod(m1, m2);
    case 'Sparse':
      return smod(m1, m2);
    default:
      return mod(m1, m2);
  }
}