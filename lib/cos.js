'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return ccos(m);
    case 'Sparse':
      return scos(m);
    default:
      return cos(m);
  }
};

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cos = (0, _pointwise2.default)(Math.cos);

function ccos(x) {
  throw new Error('mathlab.cos: no cos for complex number');
}

function scos(x) {
  throw new Error('mathlab.cos: cos for sparse matrix has not been implemented yet');
}

/**
 * Pointwise Math.cos(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * cos(1)
 * // returns Math.cos(1)
 * cos([1, 2])
 * // returns [Math.cos(1), Math.cos(2)]
 * cos([[1,2],[1,3]])
 * // returns [ [Math.cos(1), Math.cos(2)], [Math.cos(1), Math.cos(3)] ]
 */