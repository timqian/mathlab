'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = acos;

var _dim = require('./dim');

var _dim2 = _interopRequireDefault(_dim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Pointwise Math.acos(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * acos(1)
 * // Equals Math.acos(1)
 * acos([1, 2])
 * // Equals [Math.acos(1), Math.acos(2)]
 * acos([[1,2],[1,3]])
 * // Equals [ [Math.acos(1), Math.acos(2)], [Math.acos(1), Math.acos(3)] ]
 */
function acos(m) {
  switch ((0, _dim2.default)(m).length) {
    case 0:
      return Math.acos(m);
    case 1:
      return m.map(Math.acos);
    case 2:
      return m.map(function (a) {
        return a.map(Math.acos);
      });
    default:
      throw new Error('acos(): wrong size');
  }
}