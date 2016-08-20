
import pointwise from './pointwise'
import spPointwise from './spPointwise'
import Sparse from './Sparse'

const tan = pointwise(Math.tan)
const stan = spPointwise(Math.tan)

function ctan(x) {
  // TODO
  throw new Error('mathlab.tan: no tan for complex number')
}


/**
 * Pointwise Math.tan(x)
 * 
 * @export
 * @param {Number|Array|Complex|Sparse} m
 * @returns {Number|Array|Complex|Sparse}
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
