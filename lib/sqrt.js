'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return csqrt(m);
    case 'Sparse':
      return ssqrt(m);
    default:
      return sqrt(m);
  }
};

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _Sparse = require('./Sparse');

var _Sparse2 = _interopRequireDefault(_Sparse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sqrt = (0, _pointwise2.default)(Math.sqrt);

function csqrt(x) {
  throw new Error('mathlab.sqrt: no sqrt for complex number');
}

function ssqrt(x) {
  return new _Sparse2.default({
    col: x.col.slice(), // copy the array
    row: x.row.slice(),
    val: sqrt(x.val)
  });
}

/**
 * Pointwise Math.sqrt(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * sqrt(1)
 * // returns Math.sqrt(1)
 * sqrt([1, 2])
 * // returns [Math.sqrt(1), Math.sqrt(2)]
 * sqrt([[1,2],[1,3]])
 * // returns [ [Math.sqrt(1), Math.sqrt(2)], [Math.sqrt(1), Math.sqrt(3)] ]
 */