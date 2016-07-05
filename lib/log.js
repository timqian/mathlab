'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = log;

var _dim = require('./dim');

var _dim2 = _interopRequireDefault(_dim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Pointwise Math.log(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * log(1)
 * // Equals Math.log(1)
 * log([1, 2])
 * // Equals [Math.log(1), Math.log(2)]
 * log([[1,2],[1,3]])
 * // Equals [ [Math.log(1), Math.log(2)], [Math.log(1), Math.log(3)] ]
 */
function log(m) {
  switch ((0, _dim2.default)(m).length) {
    case 0:
      return Math.log(m);
    case 1:
      return m.map(Math.log);
    case 2:
      return m.map(function (a) {
        return a.map(Math.log);
      });
    default:
      throw new Error('log(): wrong size');
  }
}