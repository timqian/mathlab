
import pointwise from './pointwise'

const sqrt = pointwise(Math.sqrt)

function csqrt(x) {
  throw new Error('mathlab.sqrt: no sqrt for complex number')
}

function ssqrt(x) {
  throw new Error('mathlab.sqrt: sqrt for sparse matrix has not been implemented yet')
}

/**
 * Pointwise Math.sqrt(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * sqrt(1)
 * // returns Math.sqrt(1)
 * sqrt([1, 2])
 * // returns [Math.sqrt(1), Math.sqrt(2)]
 * sqrt([[1,2],[1,3]])
 * // returns [ [Math.sqrt(1), Math.sqrt(2)], [Math.sqrt(1), Math.sqrt(3)] ]
 */
export default function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return csqrt(m);
    case 'Sparse':
      return ssqrt(m);
    default:
      return sqrt(m);
  }
}
