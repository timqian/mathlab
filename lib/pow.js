'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pow;

var _dim = require('./dim');

var _dim2 = _interopRequireDefault(_dim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Pointwise Math.pow(x, y)
 * 
 * @export
 * @param {Number|Array} m1
 * @param {Number|Array} m2
 * @returns {Number|Array}
 * @example 
 * 
 * pow(1, 2)
 * // Equals Math.pow(1, 2)
 * pow([1, 2], [2, 2])
 * // Equals [Math.pow(1, 2), Math.pow(2, 2)]
 * pow([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // Equals [ [Math.pow(2, 2), Math.pow(1, 2)], [Math.pow(1, 2), Math.pow(2, 2)] ]
 */
function pow(m1, m2) {
  if ((0, _dim2.default)(m1)[0] !== (0, _dim2.default)(m2)[0] || (0, _dim2.default)(m1)[1] !== (0, _dim2.default)(m2)[1]) {
    throw new Error('pow() requires two matrices having the same size');
  }
  switch ((0, _dim2.default)(m1).length) {
    case 0:
      return Math.pow(m1, m2);
    case 1:
      return m1.map(function (x, i) {
        return Math.pow(x, m2[i]);
      });
    case 2:
      return m1.map(function (mm1, i) {
        return mm1.map(function (x, j) {
          return Math.pow(x, m2[i][j]);
        });
      });
    default:
      throw new Error('pow(): wrong size');
  }
}