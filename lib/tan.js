'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = tan;

var _dim = require('./dim');

var _dim2 = _interopRequireDefault(_dim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Pointwise Math.tan(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * tan(1)
 * // Equals Math.tan(1)
 * tan([1, 2])
 * // Equals [Math.tan(1), Math.tan(2)]
 * tan([[1,2],[1,3]])
 * // Equals [ [Math.tan(1), Math.tan(2)], [Math.tan(1), Math.tan(3)] ]
 */
function tan(m) {
  switch ((0, _dim2.default)(m).length) {
    case 0:
      return Math.tan(m);
    case 1:
      return m.map(Math.tan);
    case 2:
      return m.map(function (a) {
        return a.map(Math.tan);
      });
    default:
      throw new Error('tan(): wrong size');
  }
}