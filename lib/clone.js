'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return cclone(m);
    case 'Sparse':
      return sclone(m);
    default:
      return clone(m);
  }
};

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clone = (0, _pointwise2.default)(function (x) {
  return x;
});

function cclone(x) {
  throw new Error('mathlab.clone: no clone for complex number');
}

function sclone(x) {
  throw new Error('mathlab.clone: clone for sparse matrix has not been implemented yet');
}

/**
 * Pointwise clone(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * clone(1)
 * // returns clone(1)
 * clone([1, 2])
 * // returns [clone(1), clone(2)]
 * clone([[1,2],[1,3]])
 * // returns [ [clone(1), clone(2)], [clone(1), clone(3)] ]
 */