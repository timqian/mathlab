'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return csin(m);
    case 'Sparse':
      return ssin(m);
    default:
      return sin(m);
  }
};

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sin = (0, _pointwise2.default)(Math.sin);

function csin(x) {
  throw new Error('mathlab.sin: no sin for complex number');
}

function ssin(x) {
  throw new Error('mathlab.sin: sin for sparse matrix has not been implemented yet');
}

/**
 * Pointwise Math.sin(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * sin(1)
 * // returns Math.sin(1)
 * sin([1, 2])
 * // returns [Math.sin(1), Math.sin(2)]
 * sin([[1,2],[1,3]])
 * // returns [ [Math.sin(1), Math.sin(2)], [Math.sin(1), Math.sin(3)] ]
 */