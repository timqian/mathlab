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

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var and = (0, _pointwise2.default)(function (x, y) {
  return x && y;
});

function cand(x, y) {
  throw new Error('mathlab.and: no and for complex number');
}

function sand(x, y) {
  // TODO
  throw new Error('mathlab.and: and for sparse matrix not exist');
}

/**
 * Pointwise and
 * 
 * @export
 * @param {Number|Array} m1
 * @param {Number|Array} m2
 * @returns {Number|Array}
 * @example 
 * 
 * and(1, 2)
 * // returns 1 && 2
 * and([1, 2], [2, 2])
 * // returns [1 && 2, 2 && 2]
 * and([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 && 2, 1 && 2], [1 && 2, 2 && 2] ]
 */