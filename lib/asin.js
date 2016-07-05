'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = asin;

var _dim = require('./dim');

var _dim2 = _interopRequireDefault(_dim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Pointwise Math.asin(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * asin(1)
 * // Equals Math.asin(1)
 * asin([1, 2])
 * // Equals [Math.asin(1), Math.asin(2)]
 * asin([[1,2],[1,3]])
 * // Equals [ [Math.asin(1), Math.asin(2)], [Math.asin(1), Math.asin(3)] ]
 */
function asin(m) {
  switch ((0, _dim2.default)(m).length) {
    case 0:
      return Math.asin(m);
    case 1:
      return m.map(Math.asin);
    case 2:
      return m.map(function (a) {
        return a.map(Math.asin);
      });
    default:
      throw new Error('asin(): wrong size');
  }
}