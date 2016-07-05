'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = round;

var _dim = require('./dim');

var _dim2 = _interopRequireDefault(_dim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Pointwise Math.round(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * round(1)
 * // Equals Math.round(1)
 * round([1, 2])
 * // Equals [Math.round(1), Math.round(2)]
 * round([[1,2],[1,3]])
 * // Equals [ [Math.round(1), Math.round(2)], [Math.round(1), Math.round(3)] ]
 */
function round(m) {
  switch ((0, _dim2.default)(m).length) {
    case 0:
      return Math.round(m);
    case 1:
      return m.map(Math.round);
    case 2:
      return m.map(function (a) {
        return a.map(Math.round);
      });
    default:
      throw new Error('round(): wrong size');
  }
}