
import pointwise from './pointwise'

const floor = pointwise(Math.floor)

function cfloor(x) {
  throw new Error('mathlab.floor: no floor for complex number')
}

function sfloor(x) {
  throw new Error('mathlab.floor: floor for sparse matrix has not been implemented yet')
}

/**
 * Pointwise Math.floor(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * floor(1)
 * // returns Math.floor(1)
 * floor([1, 2])
 * // returns [Math.floor(1), Math.floor(2)]
 * floor([[1,2],[1,3]])
 * // returns [ [Math.floor(1), Math.floor(2)], [Math.floor(1), Math.floor(3)] ]
 */
export default function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return cfloor(m);
    case 'Sparse':
      return sfloor(m);
    default:
      return floor(m);
  }
}
