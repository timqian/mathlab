'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return cgt(m1, m2);
    case 'Sparse':
      return sgt(m1, m2);
    default:
      return gt(m1, m2);
  }
};

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gt = (0, _pointwise2.default)(function (x, y) {
  return x > y;
});

function cgt(x, y) {
  throw new Error('mathlab.gt: no gt for complex number');
}

function sgt(x, y) {
  throw new Error('mathlab.gt: gt for sparse matrix not exist');
}

/**
 * Pointwise gt
 * 
 * @export
 * @param {Number|Array} m1
 * @param {Number|Array} m2
 * @returns {Number|Array}
 * @example 
 * 
 * gt(1, 2)
 * // returns 1 > 2
 * gt([1, 2], [2, 2])
 * // returns [1 > 2, 2 > 2]
 * gt([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 > 2, 1 > 2], [1 > 2, 2 > 2] ]
 */