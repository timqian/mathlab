'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return cadd(m1, m2);
    case 'Sparse':
      return sadd(m1, m2);
    default:
      return add(m1, m2);
  }
};

var _pointwise = require('./pointwise2');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _spPointwise = require('./spPointwise2');

var _spPointwise2 = _interopRequireDefault(_spPointwise);

var _Complex = require('./Complex');

var _Complex2 = _interopRequireDefault(_Complex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var add = (0, _pointwise2.default)(function (x, y) {
  return x + y;
});
var sadd = (0, _spPointwise2.default)(function (x, y) {
  return x + y;
});

function cadd(x, y) {
  if (!(y instanceof _Complex2.default)) {
    y = new _Complex2.default(y);
  }
  if (x.im) {
    if (y.im) {
      return new _Complex2.default(add(x.re, y.re), add(x.im, y.im));
    }
    return new _Complex2.default(add(x.re, y.re), x.im);
  }
  if (y.im) {
    return new _Complex2.default(add(x.re, y.re), y.im);
  }
  return new _Complex2.default(add(x.re, y.re));
}

/**
 * Pointwise add
 * 
 * @export
 * @param {Number|Array|Complex|Sparse} m1
 * @param {Number|Array|Complex|Sparse} m2
 * @returns {Number|Array|Complex|Sparse}
 * @example 
 * 
 * add(1, 2) // 3
 * add([1, 2], [2, 2]) // [3, 4]
 * add([[2,1], [1,2]], [[2, 2], [2, 2]])) // [ [2 + 2, 1 + 2], [1 + 2, 2 + 2] ]
 */