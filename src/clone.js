
import pointwise from './pointwise'
import Sparse from './Sparse'

const clone = pointwise(x => x);

function cclone(x) {
  throw new Error('mathlab.clone: no clone for complex number')
}

function sclone(x) {
  return new Sparse({
    col: x.col.slice(), // copy the array
    row: x.row.slice(),
    val: x.val.slice()
  })}

/**
 * Pointwise clone(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * clone(1)
 * // returns clone(1)
 * clone([1, 2])
 * // returns [clone(1), clone(2)]
 * clone([[1,2],[1,3]])
 * // returns [ [clone(1), clone(2)], [clone(1), clone(3)] ]
 */
export default function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return cclone(m);
    case 'Sparse':
      return sclone(m);
    default:
      return clone(m);
  }
}
