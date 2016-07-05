'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = atan2;

var _dim = require('./dim');

var _dim2 = _interopRequireDefault(_dim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Pointwise Math.atan2(x, y)
 * 
 * @export
 * @param {Number|Array} m1
 * @param {Number|Array} m2
 * @returns {Number|Array}
 * @example 
 * 
 * atan2(1, 2)
 * // Equals Math.atan2(1, 2)
 * atan2([1, 2], [2, 2])
 * // Equals [Math.atan2(1, 2), Math.atan2(2, 2)]
 * atan2([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // Equals [ [Math.atan2(2, 2), Math.atan2(1, 2)], [Math.atan2(1, 2), Math.atan2(2, 2)] ]
 */
function atan2(m1, m2) {
  if ((0, _dim2.default)(m1)[0] !== (0, _dim2.default)(m2)[0] || (0, _dim2.default)(m1)[1] !== (0, _dim2.default)(m2)[1]) {
    throw new Error('atan2() requires two matrices having the same size');
  }
  switch ((0, _dim2.default)(m1).length) {
    case 0:
      return Math.atan2(m1, m2);
    case 1:
      return m1.map(function (x, i) {
        return Math.atan2(x, m2[i]);
      });
    case 2:
      return m1.map(function (mm1, i) {
        return mm1.map(function (x, j) {
          return Math.atan2(x, m2[i][j]);
        });
      });
    default:
      throw new Error('atan2(): wrong size');
  }
}