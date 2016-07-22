'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return cneg(m);
    case 'Sparse':
      return sneg(m);
    default:
      return neg(m);
  }
};

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var neg = (0, _pointwise2.default)(function (x) {
  return -x;
});

function cneg(x) {
  throw new Error('mathlab.neg: no neg for complex number');
}

function sneg(x) {
  throw new Error('mathlab.neg: neg for sparse matrix has not been implemented yet');
}

/**
 * Pointwise Math.neg(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * neg(1)
 * // returns Math.neg(1)
 * neg([1, 2])
 * // returns [Math.neg(1), Math.neg(2)]
 * neg([[1,2],[1,3]])
 * // returns [ [Math.neg(1), Math.neg(2)], [Math.neg(1), Math.neg(3)] ]
 */