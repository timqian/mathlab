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

var _pointwise = require('./pointwise2');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _spPointwise = require('./spPointwise2');

var _spPointwise2 = _interopRequireDefault(_spPointwise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mod = (0, _pointwise2.default)(function (x, y) {
  return x % y;
});
var smod = (0, _spPointwise2.default)(function (x, y) {
  return x % y;
});

function cmod(x, y) {
  throw new Error('mathlab.mod: no mod for complex number');
}

/**
 * Pointwise mod
 * 
 * @export
 * @param {Number|Array|Complex|Sparse} m1
 * @param {Number|Array|Complex|Sparse} m2
 * @returns {Number|Array|Complex|Sparse}
 * @example 
 * 
 * mod(1, 2)
 * // returns 1 % 2
 * mod([1, 2], [2, 2])
 * // returns [1 % 2, 2 % 2]
 * mod([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 % 2, 1 % 2], [1 % 2, 2 % 2] ]
 */