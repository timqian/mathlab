'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (x, y) {
  switch (x.constructor.name) {
    case 'Complex':
      return cnorm2(x, y);
    case 'Sparse':
      return snorm2(x, y);
    default:
      return norm2(x, y);
  }
};

var _norm2Squared = require('./norm2Squared');

var _norm2Squared2 = _interopRequireDefault(_norm2Squared);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cnorm2(x, y) {
  if (x.y) {
    var f = _norm2Squared2.default;
    return Math.sqrt(f(x.x) + f(x.y));
  }
  return norm2(x.x);
}

/**
 * Square root of the sum of the squares of the entries of x
 * 
 * @export
 * @param {Array|Number} x
 * @returns {Number}
 * @example
 * 
 * norm2(2)
 * // 2
 * norm2([2,2])
 * // 2.828
 */


function snorm2(x, y) {
  throw new Error('mathlab.norm2: norm2 for sparse matrix not exist');
}

function norm2(x) {
  return Math.sqrt((0, _norm2Squared2.default)(x));
}