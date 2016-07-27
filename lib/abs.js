'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return cabs(m);
    case 'Sparse':
      return sabs(m);
    default:
      return abs(m);
  }
};

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _Complex = require('./Complex');

var _Complex2 = _interopRequireDefault(_Complex);

var _Sparse = require('./Sparse');

var _Sparse2 = _interopRequireDefault(_Sparse);

var _mul = require('./mul');

var _mul2 = _interopRequireDefault(_mul);

var _sqrt = require('./sqrt');

var _sqrt2 = _interopRequireDefault(_sqrt);

var _add = require('./add');

var _add2 = _interopRequireDefault(_add);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var abs = (0, _pointwise2.default)(Math.abs);

function cabs(x) {
  if (x.im) {
    return new _Complex2.default((0, _sqrt2.default)((0, _add2.default)((0, _mul2.default)(x.re, x.re), (0, _mul2.default)(x.im, x.im))));
  }
  return new _Complex2.default(abs(x.re));
}

function sabs(x) {
  return new _Sparse2.default({
    col: x.col.slice(), // copy the array
    row: x.row.slice(),
    val: abs(x.val)
  });
}

/**
 * Pointwise Math.abs(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * abs(1)
 * // returns Math.abs(1)
 * abs([1, 2])
 * // returns [Math.abs(1), Math.abs(2)]
 * abs([[1,2],[1,3]])
 * // returns [ [Math.abs(1), Math.abs(2)], [Math.abs(1), Math.abs(3)] ]
 */