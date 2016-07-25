'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return cacos(m);
    case 'Sparse':
      return sacos(m);
    default:
      return acos(m);
  }
};

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _Sparse = require('./Sparse');

var _Sparse2 = _interopRequireDefault(_Sparse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var acos = (0, _pointwise2.default)(Math.acos);

function cacos(x) {
  throw new Error('mathlab.acos: no acos for complex number');
}

function sacos(x) {
  return new _Sparse2.default({
    col: x.col.slice(), // copy the array
    row: x.row.slice(),
    val: acos(x.val)
  });
}

/**
 * Pointwise Math.acos(x)
 * 
 * @export
 * @param {Number|Vector|Multidimensional array|Matirx|Sparse|Complex} m
 * @returns {Number|Array}
 * @example 
 * 
 * acos(1)
 * // returns Math.acos(1)
 * acos([1, 2])
 * // returns [Math.acos(1), Math.acos(2)]
 * acos([[1,2],[1,3]])
 * // returns [ [Math.acos(1), Math.acos(2)], [Math.acos(1), Math.acos(3)] ]
 */