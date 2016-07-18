import dim from './dim'

/**
 * Extract a block from a matrix 
 * 
 * @export
 * @param {Array} x
 * @param {Array} from from position
 * @param {Array} to to position
 * @returns {Array}
 * @example
 * 
 * getBlock([[1,2,3],
 *           [3,4,5]], [0,0], [1,1])
 * // [[1, 2],
 *     [3, 4]]
 */
export default function getBlock(x, from, to) {
  var s = dim(x);

  function foo(x, k) {
    var i, a = from[k],
      n = to[k] - a,
      ret = Array(n);
    if (k === s.length - 1) {
      for (i = n; i >= 0; i--) {
        ret[i] = x[i + a];
      }
      return ret;
    }
    for (i = n; i >= 0; i--) {
      ret[i] = foo(x[i + a], k + 1);
    }
    return ret;
  }
  return foo(x, 0);
}