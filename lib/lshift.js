'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return clshift(m1, m2);
    case 'Sparse':
      return slshift(m1, m2);
    default:
      return lshift(m1, m2);
  }
};

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lshift = (0, _pointwise2.default)(function (x, y) {
  return x << y;
});

function clshift(x, y) {
  throw new Error('mathlab.lshift: no lshift for complex number');
}

function slshift(x, y) {
  throw new Error('mathlab.lshift: lshift for sparse matrix not exist');
}

/**
 * Pointwise lshift
 * 
 * @export
 * @param {Number|Array} m1
 * @param {Number|Array} m2
 * @returns {Number|Array}
 * @example 
 * 
 * lshift(1, 2)
 * // returns 1 << 2
 * lshift([1, 2], [2, 2])
 * // returns [1 << 2, 2 << 2]
 * lshift([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 << 2, 1 << 2], [1 << 2, 2 << 2] ]
 */