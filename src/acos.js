
import pointwise from './pointwise'
import spPointwise from './spPointwise'
import Sparse from './Sparse'

const acos = pointwise(Math.acos)
const sacos = spPointwise(Math.acos)

function cacos(x) {
  throw new Error('mathlab.acos: no acos for complex number')
}

/**
 * Pointwise Math.acos(x)
 * 
 * @export
 * @param {Number|Vector|Multidimensional array|Matirx|Sparse|Complex} m
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
