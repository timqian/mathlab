'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return crrshift(m1, m2);
    case 'Sparse':
      return srrshift(m1, m2);
    default:
      return rrshift(m1, m2);
  }
};

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rrshift = (0, _pointwise2.default)(function (x, y) {
  return x >>> y;
});

function crrshift(x, y) {
  throw new Error('mathlab.rrshift: no rrshift for complex number');
}

function srrshift(x, y) {
  throw new Error('mathlab.rrshift: rrshift for sparse matrix not exist');
}

/**
 * Pointwise rrshift
 * 
 * @export
 * @param {Number|Array} m1
 * @param {Number|Array} m2
 * @returns {Number|Array}
 * @example 
 * 
 * rrshift(1, 2)
 * // returns 1 >>> 2
 * rrshift([1, 2], [2, 2])
 * // returns [1 >>> 2, 2 >>> 2]
 * rrshift([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 >>> 2, 1 >>> 2], [1 >>> 2, 2 >>> 2] ]
 */