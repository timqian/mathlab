'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = div;

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _T = require('./T');

var _T2 = _interopRequireDefault(_T);

var _mul = require('./mul');

var _mul2 = _interopRequireDefault(_mul);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var aDiv = (0, _pointwise2.default)(function (x, y) {
  return x / y;
});

function cDiv(x, y) {
  if (!(y instanceof _T2.default)) y = new _T2.default(y);
  if (y.y) {
    return (0, _mul2.default)(x, y.reciprocal());
  }
  if (x.y) {
    return new _T2.default(aDiv(x.x, y.x), aDiv(x.y, y.x));
  }
  return new _T2.default(aDiv(x.x, y.x));
}

/**
 * Pointwise div
 * 
 * @export
 * @param {Number|Array} m1
 * @param {Number|Array} m2
 * @returns {Number|Array}
 * @example 
 * 
 * div(1, 2)
 * // returns 1 / 2
 * div([1, 2], [2, 2])
 * // returns [1 / 2, 2 / 2]
 * div([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 / 2, 1 / 2], [1 / 2, 2 / 2] ]
 */
function div(m1, m2) {
  switch (m1.constructor.name) {
    case 'Array':
      return aDiv(m1, m2);
    case 'T':
      return cDiv(m1, m2);
    case 'Sparse':
      return sDiv(m1, m2);
    default:
      return aDiv(m1, m2);
  }
}