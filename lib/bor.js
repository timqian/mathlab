'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return cbor(m1, m2);
    case 'Sparse':
      return sbor(m1, m2);
    default:
      return bor(m1, m2);
  }
};

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bor = (0, _pointwise2.default)(function (x, y) {
  return x | y;
});

function cbor(x, y) {
  throw new Error('mathlab.bor: no bor for complex number');
}

function sbor(x, y) {
  throw new Error('mathlab.bor: bor for sparse matrix has not been implemented yet');
}

/**
 * Pointwise bor
 * 
 * @export
 * @param {Number|Array} m1
 * @param {Number|Array} m2
 * @returns {Number|Array}
 * @example 
 * 
 * bor(1, 2)
 * // returns 1 | 2
 * bor([1, 2], [2, 2])
 * // returns [1 | 2, 2 | 2]
 * bor([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 | 2, 1 | 2], [1 | 2, 2 | 2] ]
 */