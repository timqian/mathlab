import pointwise from './pointwise'

const lshift = pointwise((x, y) => x << y);

function clshift(x, y) {
  throw new Error('mathlab.lshift: no lshift for complex number')
}

function slshift(x, y) {
  throw new Error('mathlab.lshift: lshift for sparse matrix has not been implemented yet')
}

/**
 * Pointwise lshift
 * 
 * @export
 * @param {Number|Array} m1
 * @param {Number|Array} m2
 * @returns {Number|Array}
 * @example 
 * 
 * lshift(1, 2)
 * // returns 1 << 2
 * lshift([1, 2], [2, 2])
 * // returns [1 << 2, 2 << 2]
 * lshift([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 << 2, 1 << 2], [1 << 2, 2 << 2] ]
 */
export default function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return clshift(m1, m2);
    case 'Sparse':
      return slshift(m1, m2);
    default:
      return lshift(m1, m2);
  }
}