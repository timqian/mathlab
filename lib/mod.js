'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return cmod(m1, m2);
    case 'Sparse':
      return smod(m1, m2);
    default:
      return mod(m1, m2);
  }
};

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mod = (0, _pointwise2.default)(function (x, y) {
  return x % y;
});

function cmod(x, y) {
  throw new Error('mathlab.mod: no mod for complex number');
}

function smod(x, y) {
  throw new Error('mathlab.mod: mod for sparse matrix not exist');
}

/**
 * Pointwise mod
 * 
 * @export
 * @param {Number|Array} m1
 * @param {Number|Array} m2
 * @returns {Number|Array}
 * @example 
 * 
 * mod(1, 2)
 * // returns 1 % 2
 * mod([1, 2], [2, 2])
 * // returns [1 % 2, 2 % 2]
 * mod([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 % 2, 1 % 2], [1 % 2, 2 % 2] ]
 */