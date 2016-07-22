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

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _Complex = require('./Complex');

var _Complex2 = _interopRequireDefault(_Complex);

var _mul = require('./mul');

var _mul2 = _interopRequireDefault(_mul);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var div = (0, _pointwise2.default)(function (x, y) {
  return x / y;
});

function cdiv(x, y) {
  if (!(y instanceof _Complex2.default)) y = new _Complex2.default(y);
  if (y.y) {
    return (0, _mul2.default)(x, y.reciprocal());
  }
  if (x.y) {
    return new _Complex2.default(div(x.x, y.x), div(x.y, y.x));
  }
  return new _Complex2.default(div(x.x, y.x));
}

function sdiv(x, y) {
  throw new Error('mathlab.div: div for sparse matrix has not been implemented yet');
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