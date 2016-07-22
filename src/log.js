
import pointwise from './pointwise'

const log = pointwise(Math.log)

function clog(x) {
  throw new Error('mathlab.log: no log for complex number')
}

function slog(x) {
  throw new Error('mathlab.log: log for sparse matrix has not been implemented yet')
}

/**
 * Pointwise Math.log(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * log(1)
 * // returns Math.log(1)
 * log([1, 2])
 * // returns [Math.log(1), Math.log(2)]
 * log([[1,2],[1,3]])
 * // returns [ [Math.log(1), Math.log(2)], [Math.log(1), Math.log(3)] ]
 */
export default function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return clog(m);
    case 'Sparse':
      return slog(m);
    default:
      return log(m);
  }
}
