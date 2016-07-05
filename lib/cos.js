'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cos;

var _dim = require('./dim');

var _dim2 = _interopRequireDefault(_dim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Pointwise Math.cos(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * cos(1)
 * // Equals Math.cos(1)
 * cos([1, 2])
 * // Equals [Math.cos(1), Math.cos(2)]
 * cos([[1,2],[1,3]])
 * // Equals [ [Math.cos(1), Math.cos(2)], [Math.cos(1), Math.cos(3)] ]
 */
function cos(m) {
  switch ((0, _dim2.default)(m).length) {
    case 0:
      return Math.cos(m);
    case 1:
      return m.map(Math.cos);
    case 2:
      return m.map(function (a) {
        return a.map(Math.cos);
      });
    default:
      throw new Error('cos(): wrong size');
  }
}