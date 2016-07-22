import pointwise from './pointwise'

const gt = pointwise((x, y) => x > y);

function cgt(x, y) {
  throw new Error('mathlab.gt: no gt for complex number')
}

function sgt(x, y) {
  throw new Error('mathlab.gt: gt for sparse matrix has not been implemented yet')
}

/**
 * Pointwise gt
 * 
 * @export
 * @param {Number|Array} m1
 * @param {Number|Array} m2
 * @returns {Number|Array}
 * @example 
 * 
 * gt(1, 2)
 * // returns 1 > 2
 * gt([1, 2], [2, 2])
 * // returns [1 > 2, 2 > 2]
 * gt([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 > 2, 1 > 2], [1 > 2, 2 > 2] ]
 */
export default function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return cgt(m1, m2);
    case 'Sparse':
      return sgt(m1, m2);
    default:
      return gt(m1, m2);
  }
}