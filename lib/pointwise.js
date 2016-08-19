'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pointwise;

var _dim = require('./dim');

var _dim2 = _interopRequireDefault(_dim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create a pointwise function
 * 
 * @export
 * @param {Function} fun
 * @returns {Function}
 * @example 
 * 
 * function _inc (x) {
 *   return x + 1
 * }
 * const inc = pointwise(inc)
 * inc(1)                                  // 2
 * inc([1, 2])                             // [2, 3]
 * inc([[1, 2], [1, 3]])                   // [[2, 3], [2, 4]]
 * 
 * 
 * function _add (x, y) {
 *   return x + y
 * }
 * const add = pointwise(_add)
 * add(1, 2)                                // 3
 * add([1, 2], [1, 2])                      // [2, 4]
 * add([[1, 2], [1, 2]], [[1, 2], [1, 2]])  //[[2, 4], [2, 4]]
 */
function pointwise(fun) {
  return function (m) {
    switch ((0, _dim2.default)(m).length) {
      case 0:
        return fun(m);
      case 1:
        return m.map(fun);
      case 2:
        return m.map(function (a) {
          return a.map(fun);
        });
      default:
        throw new Error('mathlab.pointwise: dimension of matrix should <= 2');
    }
  };
}