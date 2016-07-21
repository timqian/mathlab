import pointwise from './pointwise';
import T from './T';
import add from './add';
import sub from './sub';

// array mul
const aMul = pointwise((x, y) => x * y)

// complex array mul
function cMul(x, y) {
  if(!(y instanceof T)) { y = new T(y); }
  if (x.y) {
    if (y.y) {
      return new T(sub(aMul(x.x, y.x), aMul(x.y, y.y)), add(aMul(x.x, y.y), aMul(x.y, y.x)));
    }
    return new T(aMul(x.x, y.x), aMul(x.y, y.x));
  }
  if (y.y) {
    return new T(aMul(x.x, y.x), aMul(x.x, y.y));
  }
  return new T(aMul(x.x, y.x));
}

//

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
export default function mul(m1, m2) {
  // if (m1.constructor.name !== m2.constructor.name) {
  //   throw new Error('mathlab.mul: argument type mismatch')
  // }

  switch (m1.constructor.name) {
    case 'Array':
      return aMul(m1, m2);
    case 'T':
      return cMul(m1, m2);
    case 'Sparse':
      return sMul(m1, m2);
    default:
      return aMul(m1, m2);
  }
}