'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return cexp(m);
    case 'Sparse':
      return sexp(m);
    default:
      return exp(m);
  }
};

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _cos = require('./cos');

var _cos2 = _interopRequireDefault(_cos);

var _sin = require('./sin');

var _sin2 = _interopRequireDefault(_sin);

var _mul = require('./mul');

var _mul2 = _interopRequireDefault(_mul);

var _Complex = require('./Complex');

var _Complex2 = _interopRequireDefault(_Complex);

var _Sparse = require('./Sparse');

var _Sparse2 = _interopRequireDefault(_Sparse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var exp = (0, _pointwise2.default)(Math.exp);

function cexp(x) {
  var ex = exp(x.re);
  if (x.im) {
    return new _Complex2.default((0, _mul2.default)((0, _cos2.default)(x.im), ex), (0, _mul2.default)((0, _sin2.default)(x.im), ex));
  }
  return new _Complex2.default(ex);
}

function sexp(x) {
  return new _Sparse2.default({
    col: x.col.slice(), // copy the array
    row: x.row.slice(),
    val: exp(x.val)
  });
}

/**
 * Pointwise Math.exp(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * exp(1)
 * // returns Math.exp(1)
 * exp([1, 2])
 * // returns [Math.exp(1), Math.exp(2)]
 * exp([[1,2],[1,3]])
 * // returns [ [Math.exp(1), Math.exp(2)], [Math.exp(1), Math.exp(3)] ]
 */