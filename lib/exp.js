'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exp;

var _dim = require('./dim');

var _dim2 = _interopRequireDefault(_dim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Pointwise Math.exp(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * exp(1)
 * // Equals Math.exp(1)
 * exp([1, 2])
 * // Equals [Math.exp(1), Math.exp(2)]
 * exp([[1,2],[1,3]])
 * // Equals [ [Math.exp(1), Math.exp(2)], [Math.exp(1), Math.exp(3)] ]
 */
function exp(m) {
  switch ((0, _dim2.default)(m).length) {
    case 0:
      return Math.exp(m);
    case 1:
      return m.map(Math.exp);
    case 2:
      return m.map(function (a) {
        return a.map(Math.exp);
      });
    default:
      throw new Error('exp(): wrong size');
  }
}