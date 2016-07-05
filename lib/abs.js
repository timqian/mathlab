'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = abs;

var _dim = require('./dim');

var _dim2 = _interopRequireDefault(_dim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Pointwise Math.abs(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * abs(1)
 * // Equals Math.abs(1)
 * abs([1, 2])
 * // Equals [Math.abs(1), Math.abs(2)]
 * abs([[1,2],[1,3]])
 * // Equals [ [Math.abs(1), Math.abs(2)], [Math.abs(1), Math.abs(3)] ]
 */
function abs(m) {
  switch ((0, _dim2.default)(m).length) {
    case 0:
      return Math.abs(m);
    case 1:
      return m.map(Math.abs);
    case 2:
      return m.map(function (a) {
        return a.map(Math.abs);
      });
    default:
      throw new Error('abs(): wrong size');
  }
}