import norm2Squared from './norm2Squared';


/**
 * Square root of the sum of the squares of the entries of x
 * 
 * @export
 * @param {Array|Number} x
 * @returns {Number}
 * @example
 * 
 * norm2(2)
 * // 2
 * norm2([2,2])
 * // 2.828
 */
export default function (x, y) {
  switch (x.constructor.name) {
    case 'Complex':
      return cnorm2(x, y);
    case 'Sparse':
      return snorm2(x, y);
    default:
      return norm2(x, y);
  }
}

function cnorm2(x, y) {
	if (x.im) {
		var f = norm2Squared;
		return Math.sqrt(f(x.re) + f(x.im));
	}
	return norm2(x.re);
}

function snorm2(x, y) {
  throw new Error('mathlab.norm2: norm2 for sparse matrix not exist')
}

function norm2(x) {
  return Math.sqrt(norm2Squared(x)); 
}