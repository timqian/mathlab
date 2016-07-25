'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return clt(m1, m2);
    case 'Sparse':
      return slt(m1, m2);
    default:
      return lt(m1, m2);
  }
};

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lt = (0, _pointwise2.default)(function (x, y) {
  return x < y;
});

function clt(x, y) {
  throw new Error('mathlab.lt: no lt for complex number');
}

function slt(x, y) {
  throw new Error('mathlab.lt: lt for sparse matrix not exist');
}

/**
 * Pointwise lt
 * 
 * @export
 * @param {Number|Array} m1
 * @param {Number|Array} m2
 * @returns {Number|Array}
 * @example 
 * 
 * lt(1, 2)
 * // returns 1 < 2
 * lt([1, 2], [2, 2])
 * // returns [1 < 2, 2 < 2]
 * lt([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 < 2, 1 < 2], [1 < 2, 2 < 2] ]
 */