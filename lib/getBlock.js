'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getBlock;

var _dim = require('./dim');

var _dim2 = _interopRequireDefault(_dim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
function getBlock(x, from, to) {
  var s = (0, _dim2.default)(x);

  function foo(x, k) {
    var i,
        a = from[k],
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