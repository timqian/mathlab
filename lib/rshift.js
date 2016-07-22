'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return crshift(m1, m2);
    case 'Sparse':
      return srshift(m1, m2);
    default:
      return rshift(m1, m2);
  }
};

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rshift = (0, _pointwise2.default)(function (x, y) {
  return x >> y;
});

function crshift(x, y) {
  throw new Error('mathlab.rshift: no rshift for complex number');
}

function srshift(x, y) {
  throw new Error('mathlab.rshift: rshift for sparse matrix has not been implemented yet');
}

/**
 * Pointwise rshift
 * 
 * @export
 * @param {Number|Array} m1
 * @param {Number|Array} m2
 * @returns {Number|Array}
 * @example 
 * 
 * rshift(1, 2)
 * // returns 1 >> 2
 * rshift([1, 2], [2, 2])
 * // returns [1 >> 2, 2 >> 2]
 * rshift([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 >> 2, 1 >> 2], [1 >> 2, 2 >> 2] ]
 */