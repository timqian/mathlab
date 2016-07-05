'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sin;

var _dim = require('./dim');

var _dim2 = _interopRequireDefault(_dim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Pointwise Math.sin(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * sin(1)
 * // Equals Math.sin(1)
 * sin([1, 2])
 * // Equals [Math.sin(1), Math.sin(2)]
 * sin([[1,2],[1,3]])
 * // Equals [ [Math.sin(1), Math.sin(2)], [Math.sin(1), Math.sin(3)] ]
 */
function sin(m) {
  switch ((0, _dim2.default)(m).length) {
    case 0:
      return Math.sin(m);
    case 1:
      return m.map(Math.sin);
    case 2:
      return m.map(function (a) {
        return a.map(Math.sin);
      });
    default:
      throw new Error('sin(): wrong size');
  }
}