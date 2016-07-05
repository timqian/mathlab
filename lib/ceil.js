'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ceil;

var _dim = require('./dim');

var _dim2 = _interopRequireDefault(_dim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Pointwise Math.ceil(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * ceil(1)
 * // Equals Math.ceil(1)
 * ceil([1, 2])
 * // Equals [Math.ceil(1), Math.ceil(2)]
 * ceil([[1,2],[1,3]])
 * // Equals [ [Math.ceil(1), Math.ceil(2)], [Math.ceil(1), Math.ceil(3)] ]
 */
function ceil(m) {
  switch ((0, _dim2.default)(m).length) {
    case 0:
      return Math.ceil(m);
    case 1:
      return m.map(Math.ceil);
    case 2:
      return m.map(function (a) {
        return a.map(Math.ceil);
      });
    default:
      throw new Error('ceil(): wrong size');
  }
}