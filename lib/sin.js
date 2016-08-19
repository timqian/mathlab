'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return csin(m);
    case 'Sparse':
      return ssin(m);
    default:
      return sin(m);
  }
};

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _spPointwise = require('./spPointwise');

var _spPointwise2 = _interopRequireDefault(_spPointwise);

var _Complex = require('./Complex');

var _Complex2 = _interopRequireDefault(_Complex);

var _Sparse = require('./Sparse');

var _Sparse2 = _interopRequireDefault(_Sparse);

var _neg = require('./neg');

var _neg2 = _interopRequireDefault(_neg);

var _exp = require('./exp');

var _exp2 = _interopRequireDefault(_exp);

var _div = require('./div');

var _div2 = _interopRequireDefault(_div);

var _sub = require('./sub');

var _sub2 = _interopRequireDefault(_sub);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sin = (0, _pointwise2.default)(Math.sin);
var ssin = (0, _spPointwise2.default)(Math.sin);

function csin(x) {
  if (x.im) {
    return (0, _div2.default)((0, _sub2.default)((0, _exp2.default)(x), (0, _exp2.default)((0, _neg2.default)(x))), new _Complex2.default(0, 2));
    // return x.exp().sub(x.neg().exp()).div(new Complex(0, 2));
  }
  return new _Complex2.default(sin(x.re));
}

/**
 * Pointwise Math.sin(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * sin(1)
 * // returns Math.sin(1)
 * sin([1, 2])
 * // returns [Math.sin(1), Math.sin(2)]
 * sin([[1,2],[1,3]])
 * // returns [ [Math.sin(1), Math.sin(2)], [Math.sin(1), Math.sin(3)] ]
 */