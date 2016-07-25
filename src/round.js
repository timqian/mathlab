
import pointwise from './pointwise'

const round = pointwise(Math.round)

function cround(x) {
  throw new Error('mathlab.round: no round for complex number')
}

function sround(x) {
  throw new Error('mathlab.round: round for sparse matrix not exist')
}

/**
 * Pointwise Math.round(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * round(1)
 * // returns Math.round(1)
 * round([1, 2])
 * // returns [Math.round(1), Math.round(2)]
 * round([[1,2],[1,3]])
 * // returns [ [Math.round(1), Math.round(2)], [Math.round(1), Math.round(3)] ]
 */
export default function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return cround(m);
    case 'Sparse':
      return sround(m);
    default:
      return round(m);
  }
}
