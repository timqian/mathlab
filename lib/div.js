'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return cdiv(m1, m2);
    case 'Sparse':
      return sdiv(m1, m2);
    default:
      return div(m1, m2);
  }
};

var _pointwise = require('./pointwise2');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _spPointwise = require('./spPointwise2');

var _spPointwise2 = _interopRequireDefault(_spPointwise);

var _Complex = require('./Complex');

var _Complex2 = _interopRequireDefault(_Complex);

var _mul = require('./mul');

var _mul2 = _interopRequireDefault(_mul);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var div = (0, _pointwise2.default)(function (x, y) {
  return x / y;
});
var sdiv = (0, _spPointwise2.default)(function (x, y) {
  return x / y;
});

function cdiv(x, y) {
  if (!(y instanceof _Complex2.default)) y = new _Complex2.default(y);
  if (y.im) {
    return (0, _mul2.default)(x, y.reciprocal());
  }
  if (x.im) {
    return new _Complex2.default(div(x.re, y.re), div(x.im, y.re));
  }
  return new _Complex2.default(div(x.re, y.re));
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