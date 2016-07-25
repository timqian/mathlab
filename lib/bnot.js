'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return cbnot(m);
    case 'Sparse':
      return sbnot(m);
    default:
      return bnot(m);
  }
};

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _Sparse = require('./Sparse');

var _Sparse2 = _interopRequireDefault(_Sparse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bnot = (0, _pointwise2.default)(function (x) {
  return ~x;
});

function cbnot(x) {
  throw new Error('mathlab.bnot: no bnot for complex number');
}

function sbnot(x) {
  return new _Sparse2.default({
    col: x.col.slice(), // copy the array
    row: x.row.slice(),
    val: bnot(x.val)
  });
}

/**
 * Pointwise Math.bnot(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * bnot(1)
 * // returns Math.bnot(1)
 * bnot([1, 2])
 * // returns [Math.bnot(1), Math.bnot(2)]
 * bnot([[1,2],[1,3]])
 * // returns [ [Math.bnot(1), Math.bnot(2)], [Math.bnot(1), Math.bnot(3)] ]
 */