'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return ccos(m);
    case 'Sparse':
      return scos(m);
    default:
      return cos(m);
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

var _add = require('./add');

var _add2 = _interopRequireDefault(_add);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cos = (0, _pointwise2.default)(Math.cos);
var scos = (0, _spPointwise2.default)(Math.cos);

function ccos(x) {
  if (x.im) {
    return (0, _div2.default)((0, _add2.default)((0, _exp2.default)(x), (0, _exp2.default)((0, _neg2.default)(x))), 2);
  }
  return new _Complex2.default(cos(x.re));
}

/**
 * Pointwise Math.cos(x)
 * 
 * @export
 * @param {Number|Array|Complex|Sparse} m
 * @returns {Number|Array|Complex|Sparse}
 * @example 
 * 
 * cos(1)
 * // returns Math.cos(1)
 * cos([1, 2])
 * // returns [Math.cos(1), Math.cos(2)]
 * cos([[1,2],[1,3]])
 * // returns [ [Math.cos(1), Math.cos(2)], [Math.cos(1), Math.cos(3)] ]
 */