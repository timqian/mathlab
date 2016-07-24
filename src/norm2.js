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
	if (x.y) {
		var f = norm2Squared;
		return Math.sqrt(f(x.x) + f(x.y));
	}
	return norm2(x.x);
}

function snorm2(x, y) {
  throw new Error('mathlab.norm2: norm2 for sparse matrix has not been implemented yet')
}

function norm2(x) {
  return Math.sqrt(norm2Squared(x)); 
}