'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = spPointwise;

var _Sparse = require('./Sparse');

var _Sparse2 = _interopRequireDefault(_Sparse);

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
function spPointwise(fun) {
  return function (x) {
    return new _Sparse2.default({
      col: x.col.slice(), // copy the array
      row: x.row.slice(),
      val: x.val.map(fun)
    });
  };
}