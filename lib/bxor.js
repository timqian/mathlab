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

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bxor = (0, _pointwise2.default)(function (x, y) {
  return x ^ y;
});

function cbxor(x, y) {
  throw new Error('mathlab.bxor: no bxor for complex number');
}

function sbxor(x, y) {
  throw new Error('mathlab.bxor: bxor for sparse matrix has not been implemented yet');
}

/**
 * Pointwise bxor
 * 
 * @export
 * @param {Number|Array} m1
 * @param {Number|Array} m2
 * @returns {Number|Array}
 * @example 
 * 
 * bxor(1, 2)
 * // returns 1 ^ 2
 * bxor([1, 2], [2, 2])
 * // returns [1 ^ 2, 2 ^ 2]
 * bxor([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 ^ 2, 1 ^ 2], [1 ^ 2, 2 ^ 2] ]
 */