'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = atan;

var _dim = require('./dim');

var _dim2 = _interopRequireDefault(_dim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Pointwise Math.atan(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * atan(1)
 * // Equals Math.atan(1)
 * atan([1, 2])
 * // Equals [Math.atan(1), Math.atan(2)]
 * atan([[1,2],[1,3]])
 * // Equals [ [Math.atan(1), Math.atan(2)], [Math.atan(1), Math.atan(3)] ]
 */
function atan(m) {
  switch ((0, _dim2.default)(m).length) {
    case 0:
      return Math.atan(m);
    case 1:
      return m.map(Math.atan);
    case 2:
      return m.map(function (a) {
        return a.map(Math.atan);
      });
    default:
      throw new Error('atan(): wrong size');
  }
}