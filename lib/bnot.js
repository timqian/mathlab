'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return cbnot(m);
    case 'Sparse':
      return sbnot(m);
    default:
      return bnot(m);
  }
};

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _spPointwise = require('./spPointwise');

var _spPointwise2 = _interopRequireDefault(_spPointwise);

var _Sparse = require('./Sparse');

var _Sparse2 = _interopRequireDefault(_Sparse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bnot = (0, _pointwise2.default)(function (x) {
  return ~x;
});
var sbnot = (0, _spPointwise2.default)(function (x) {
  return ~x;
});

function cbnot(x) {
  throw new Error('mathlab.bnot: no bnot for complex number');
}

/**
 * Pointwise Math.bnot(x)
 * 
 * @export
 * @param {Number|Array|Sparse} m
 * @returns {Number|Array|Sparse}
 * @example 
 * 
 * bnot(1) // ~1
 * bnot([1, 2]) // [~1, ~2]
 * bnot([[1,2],[1,3]]) // [[~1,~2],[~1,~3]]
 */