import pointwise from './pointwise';
import Complex from './Complex';
import add from './add';
import sub from './sub';

// array mul
const amul = pointwise((x, y) => x * y)

// complex array mul
function cmul(x, y) {
  if(!(y instanceof Complex)) { y = new Complex(y); }
  if (x.y) {
    if (y.y) {
      return new Complex(sub(amul(x.x, y.x), amul(x.y, y.y)), add(amul(x.x, y.y), amul(x.y, y.x)));
    }
    return new Complex(amul(x.x, y.x), amul(x.y, y.x));
  }
  if (y.y) {
    return new Complex(amul(x.x, y.x), amul(x.x, y.y));
  }
  return new Complex(amul(x.x, y.x));
}

function smul(x, y) {
  throw new Error('mathlab.sub: sub for sparse matrix not exist')
}

/**
 * Pointwise mul
 * 
 * @export
 * @param {Number|Array|Object} m1
 * @param {Number|Array|Object} m2
 * @returns {Number|Array}
 * @example 
 * 
 * mul(1, 2)
 * // returns 1 * 2
 * mul([1, 2], [2, 2])
 * // returns [1 * 2, 2 * 2]
 * mul([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 * 2, 1 * 2], [1 * 2, 2 * 2] ]
 */
export default function (m1, m2) {
  // if (m1.constructor.name !== m2.constructor.name) {
  //   throw new Error('mathlab.mul: argument type mismatch')
  // }

  switch (m1.constructor.name) {
    case 'Array':
      return amul(m1, m2);
    case 'Complex':
      return cmul(m1, m2);
    case 'Sparse':
      return smul(m1, m2);
    default:
      return amul(m1, m2);
  }
}