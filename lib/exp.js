'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return cexp(m);
    case 'Sparse':
      return sexp(m);
    default:
      return exp(m);
  }
};

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var exp = (0, _pointwise2.default)(Math.exp);

function cexp(x) {
  throw new Error('mathlab.exp: no exp for complex number');
}

function sexp(x) {
  throw new Error('mathlab.exp: exp for sparse matrix has not been implemented yet');
}

/**
 * Pointwise Math.exp(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * exp(1)
 * // returns Math.exp(1)
 * exp([1, 2])
 * // returns [Math.exp(1), Math.exp(2)]
 * exp([[1,2],[1,3]])
 * // returns [ [Math.exp(1), Math.exp(2)], [Math.exp(1), Math.exp(3)] ]
 */