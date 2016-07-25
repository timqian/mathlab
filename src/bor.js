import pointwise from './pointwise'

const bor = pointwise((x, y) => x | y);

function cbor(x, y) {
  throw new Error('mathlab.bor: no bor for complex number')
}

function sbor(x, y) {
  throw new Error('mathlab.bor: bor for sparse matrix not exist')
}

/**
 * Pointwise bor
 * 
 * @export
 * @param {Number|Array} m1
 * @param {Number|Array} m2
 * @returns {Number|Array}
 * @example 
 * 
 * bor(1, 2)
 * // returns 1 | 2
 * bor([1, 2], [2, 2])
 * // returns [1 | 2, 2 | 2]
 * bor([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 | 2, 1 | 2], [1 | 2, 2 | 2] ]
 */
export default function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return cbor(m1, m2);
    case 'Sparse':
      return sbor(m1, m2);
    default:
      return bor(m1, m2);
  }
}