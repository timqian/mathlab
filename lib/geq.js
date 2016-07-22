'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return cgeq(m1, m2);
    case 'Sparse':
      return sgeq(m1, m2);
    default:
      return geq(m1, m2);
  }
};

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var geq = (0, _pointwise2.default)(function (x, y) {
  return x >= y;
});

function cgeq(x, y) {
  throw new Error('mathlab.geq: no geq for complex number');
}

function sgeq(x, y) {
  throw new Error('mathlab.geq: geq for sparse matrix has not been implemented yet');
}

/**
 * Pointwise geq
 * 
 * @export
 * @param {Number|Array} m1
 * @param {Number|Array} m2
 * @returns {Number|Array}
 * @example 
 * 
 * geq(1, 2)
 * // returns 1 >= 2
 * geq([1, 2], [2, 2])
 * // returns [1 >= 2, 2 >= 2]
 * geq([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 >= 2, 1 >= 2], [1 >= 2, 2 >= 2] ]
 */