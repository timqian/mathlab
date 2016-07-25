'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return cneg(m);
    case 'Sparse':
      return sneg(m);
    default:
      return neg(m);
  }
};

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _Complex = require('./Complex');

var _Complex2 = _interopRequireDefault(_Complex);

var _Sparse = require('./Sparse');

var _Sparse2 = _interopRequireDefault(_Sparse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var neg = (0, _pointwise2.default)(function (x) {
  return -x;
});

function cneg(x) {
  if (x.y) {
    return new _Complex2.default(neg(x.x), neg(x.y));
  }
  return new _Complex2.default(neg(x.x));
}

function sneg(x) {
  return new _Sparse2.default({
    col: x.col.slice(), // copy the array
    row: x.row.slice(),
    val: neg(x.val)
  });
}

/**
 * Pointwise Math.neg(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * neg(1)
 * // returns Math.neg(1)
 * neg([1, 2])
 * // returns [Math.neg(1), Math.neg(2)]
 * neg([[1,2],[1,3]])
 * // returns [ [Math.neg(1), Math.neg(2)], [Math.neg(1), Math.neg(3)] ]
 */