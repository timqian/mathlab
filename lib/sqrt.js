'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sqrt;

var _dim = require('./dim');

var _dim2 = _interopRequireDefault(_dim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Pointwise Math.sqrt(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * sqrt(1)
 * // Equals Math.sqrt(1)
 * sqrt([1, 2])
 * // Equals [Math.sqrt(1), Math.sqrt(2)]
 * sqrt([[1,2],[1,3]])
 * // Equals [ [Math.sqrt(1), Math.sqrt(2)], [Math.sqrt(1), Math.sqrt(3)] ]
 */
function sqrt(m) {
  switch ((0, _dim2.default)(m).length) {
    case 0:
      return Math.sqrt(m);
    case 1:
      return m.map(Math.sqrt);
    case 2:
      return m.map(function (a) {
        return a.map(Math.sqrt);
      });
    default:
      throw new Error('sqrt(): wrong size');
  }
}