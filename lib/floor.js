'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return cfloor(m);
    case 'Sparse':
      return sfloor(m);
    default:
      return floor(m);
  }
};

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _Sparse = require('./Sparse');

var _Sparse2 = _interopRequireDefault(_Sparse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var floor = (0, _pointwise2.default)(Math.floor);

function cfloor(x) {
  throw new Error('mathlab.floor: no floor for complex number');
}

function sfloor(x) {
  return new _Sparse2.default({
    col: x.col.slice(), // copy the array
    row: x.row.slice(),
    val: floor(x.val)
  });
}
/**
 * Pointwise Math.floor(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * floor(1)
 * // returns Math.floor(1)
 * floor([1, 2])
 * // returns [Math.floor(1), Math.floor(2)]
 * floor([[1,2],[1,3]])
 * // returns [ [Math.floor(1), Math.floor(2)], [Math.floor(1), Math.floor(3)] ]
 */