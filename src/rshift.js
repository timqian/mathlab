import pointwise from './pointwise'

const rshift = pointwise((x, y) => x >> y);

function crshift(x, y) {
  throw new Error('mathlab.rshift: no rshift for complex number')
}

function srshift(x, y) {
  throw new Error('mathlab.rshift: rshift for sparse matrix not exist')
}

/**
 * Pointwise rshift
 * 
 * @export
 * @param {Number|Array} m1
 * @param {Number|Array} m2
 * @returns {Number|Array}
 * @example 
 * 
 * rshift(1, 2)
 * // returns 1 >> 2
 * rshift([1, 2], [2, 2])
 * // returns [1 >> 2, 2 >> 2]
 * rshift([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 >> 2, 1 >> 2], [1 >> 2, 2 >> 2] ]
 */
export default function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return crshift(m1, m2);
    case 'Sparse':
      return srshift(m1, m2);
    default:
      return rshift(m1, m2);
  }
}