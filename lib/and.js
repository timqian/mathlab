'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return cand(m1, m2);
    case 'Sparse':
      return sand(m1, m2);
    default:
      return and(m1, m2);
  }
};

var _pointwise = require('./pointwise2');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _spPointwise = require('./spPointwise2');

var _spPointwise2 = _interopRequireDefault(_spPointwise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var and = (0, _pointwise2.default)(function (x, y) {
  return x && y;
});
var sand = (0, _spPointwise2.default)(function (x, y) {
  return x && y;
});

function cand(x, y) {
  throw new Error('mathlab.and: no and for complex number');
}

/**
 * Pointwise and
 * 
 * @export
 * @param {Number|Array|Complex|Sparse} m1
 * @param {Number|Array|Complex|Sparse} m2
 * @returns {Number|Array|Complex|Sparse}
 * @example 
 * 
 * and(1, 0) // 0
 * and([1, 1], [1, 0]) // [1, 0]
 * and([[1,1], [1,1]], [[1,0], [0,0]])) // [[1,0], [0,0]]
 */