'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return cnot(m);
    case 'Sparse':
      return snot(m);
    default:
      return not(m);
  }
};

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _Sparse = require('./Sparse');

var _Sparse2 = _interopRequireDefault(_Sparse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var not = (0, _pointwise2.default)(function (x) {
  return !x;
});

function cnot(x) {
  throw new Error('mathlab.not: no not for complex number');
}

function snot(x) {
  return new _Sparse2.default({
    col: x.col.slice(), // copy the array
    row: x.row.slice(),
    val: not(x.val)
  });
}

/**
 * Pointwise Math.not(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * not(1)
 * // returns Math.not(1)
 * not([1, 2])
 * // returns [Math.not(1), Math.not(2)]
 * not([[1,2],[1,3]])
 * // returns [ [Math.not(1), Math.not(2)], [Math.not(1), Math.not(3)] ]
 */