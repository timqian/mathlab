'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = floor;

var _dim = require('./dim');

var _dim2 = _interopRequireDefault(_dim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Pointwise Math.floor(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * floor(1)
 * // Equals Math.floor(1)
 * floor([1, 2])
 * // Equals [Math.floor(1), Math.floor(2)]
 * floor([[1,2],[1,3]])
 * // Equals [ [Math.floor(1), Math.floor(2)], [Math.floor(1), Math.floor(3)] ]
 */
function floor(m) {
  switch ((0, _dim2.default)(m).length) {
    case 0:
      return Math.floor(m);
    case 1:
      return m.map(Math.floor);
    case 2:
      return m.map(function (a) {
        return a.map(Math.floor);
      });
    default:
      throw new Error('floor(): wrong size');
  }
}