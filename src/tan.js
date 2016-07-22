
import pointwise from './pointwise'

const tan = pointwise(Math.tan)

function ctan(x) {
  throw new Error('mathlab.tan: no tan for complex number')
}

function stan(x) {
  throw new Error('mathlab.tan: tan for sparse matrix has not been implemented yet')
}

/**
 * Pointwise Math.tan(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * tan(1)
 * // returns Math.tan(1)
 * tan([1, 2])
 * // returns [Math.tan(1), Math.tan(2)]
 * tan([[1,2],[1,3]])
 * // returns [ [Math.tan(1), Math.tan(2)], [Math.tan(1), Math.tan(3)] ]
 */
export default function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return ctan(m);
    case 'Sparse':
      return stan(m);
    default:
      return tan(m);
  }
}
