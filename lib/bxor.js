'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return cbxor(m1, m2);
    case 'Sparse':
      return sbxor(m1, m2);
    default:
      return bxor(m1, m2);
  }
};

var _pointwise = require('./pointwise2');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _spPointwise = require('./spPointwise2');

var _spPointwise2 = _interopRequireDefault(_spPointwise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bxor = (0, _pointwise2.default)(function (x, y) {
  return x ^ y;
});
var sbxor = (0, _spPointwise2.default)(function (x, y) {
  return x ^ y;
});

function cbxor(x, y) {
  throw new Error('mathlab.bxor: no bxor for complex number');
}

/**
 * Pointwise bxor
 * 
 * @export
 * @param {Number|Array|Sparse} m1
 * @param {Number|Array|Sparse} m2
 * @returns {Number|Array|Sparse}
 * @example 
 * 
 * bxor(1, 2) // 1 ^ 2
 * bxor([1, 2], [2, 2]) // [1 ^ 2, 2 ^ 2]
 * bxor([[2,1], [1,2]], [[2, 2], [2, 2]])) // [ [2 ^ 2, 1 ^ 2], [1 ^ 2, 2 ^ 2] ]
 */