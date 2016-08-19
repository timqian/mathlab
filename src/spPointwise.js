	
import Sparse from './Sparse'
import pointwise from './pointwise'

/**
 * Create pointwise function for sparse matrix operating on none zero arguments
 * 
 * @export
 * @param {Function} fun
 * @returns {Function}
 * @example 
 * 
 * function _inc (x) {
 *   return x + 1
 * }
 * const inc = spPointwise(_inc)
 * inc(new Sparse([1,0],[0,0]))           // new Sparse([2,0],[0,0])
 */
export default function spPointwise(fun) {
	return function (x) {
		return new Sparse({
			col: x.col.slice(), // copy the array
			row: x.row.slice(),
			val: x.val.map(fun),
		})
	}
}