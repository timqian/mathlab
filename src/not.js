
import pointwise from './pointwise'
import spPointwise from './spPointwise'
import Sparse from './Sparse'

const not = pointwise(x=> !x)
const snot = spPointwise(x=> !x)

function cnot(x) {
  throw new Error('mathlab.not: no not for complex number')
}

/**
 * Pointwise Math.not(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * not(1)
 * // returns Math.not(1)
 * not([1, 2])
 * // returns [Math.not(1), Math.not(2)]
 * not([[1,2],[1,3]])
 * // returns [ [Math.not(1), Math.not(2)], [Math.not(1), Math.not(3)] ]
 */
export default function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return cnot(m);
    case 'Sparse':
      return snot(m);
    default:
      return not(m);
  }
}
