'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = identity;

var _diag = require('./diag');

var _diag2 = _interopRequireDefault(_diag);

var _rep = require('./rep');

var _rep2 = _interopRequireDefault(_rep);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Generate identity matrix of given size
 * 
 * @param {Number} n
 * @returns Array
 * @example 
 * 
 * identity(2)
 * // [[1, 0], [0, 1]]
 */
function identity(n) {
  return (0, _diag2.default)((0, _rep2.default)([n], 1));
}