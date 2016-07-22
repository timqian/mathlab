
import pointwise from './pointwise'

const acos = pointwise(Math.acos)

function cacos(x) {
  throw new Error('mathlab.acos: no acos for complex number')
}

function sacos(x) {
  throw new Error('mathlab.acos: acos for sparse matrix has not been implemented yet')
}

/**
 * Pointwise Math.acos(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * acos(1)
 * // returns Math.acos(1)
 * acos([1, 2])
 * // returns [Math.acos(1), Math.acos(2)]
 * acos([[1,2],[1,3]])
 * // returns [ [Math.acos(1), Math.acos(2)], [Math.acos(1), Math.acos(3)] ]
 */
export default function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return cacos(m);
    case 'Sparse':
      return sacos(m);
    default:
      return acos(m);
  }
}
