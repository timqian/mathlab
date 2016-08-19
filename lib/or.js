'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return cor(m1, m2);
    case 'Sparse':
      return sor(m1, m2);
    default:
      return or(m1, m2);
  }
};

var _pointwise = require('./pointwise2');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _spPointwise = require('./spPointwise2');

var _spPointwise2 = _interopRequireDefault(_spPointwise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var or = (0, _pointwise2.default)(function (x, y) {
  return x || y;
});
var sor = (0, _spPointwise2.default)(function (x, y) {
  return x || y;
});

function cor(x, y) {
  throw new Error('mathlab.or: no or for complex number');
}

/**
 * Pointwise or
 * 
 * @export
 * @param {Number|Array} m1
 * @param {Number|Array} m2
 * @returns {Number|Array}
 * @example 
 * 
 * or(1, 2)
 * // returns 1 || 2
 * or([1, 2], [2, 2])
 * // returns [1 || 2, 2 || 2]
 * or([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 || 2, 1 || 2], [1 || 2, 2 || 2] ]
 */