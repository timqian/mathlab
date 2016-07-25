'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return casin(m);
    case 'Sparse':
      return sasin(m);
    default:
      return asin(m);
  }
};

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _Sparse = require('./Sparse');

var _Sparse2 = _interopRequireDefault(_Sparse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var asin = (0, _pointwise2.default)(Math.asin);

function casin(x) {
  throw new Error('mathlab.asin: no asin for complex number');
}

function sasin(x) {
  return new _Sparse2.default({
    col: x.col.slice(), // copy the array
    row: x.row.slice(),
    val: asin(x.val)
  });
}

/**
 * Pointwise Math.asin(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * asin(1)
 * // returns Math.asin(1)
 * asin([1, 2])
 * // returns [Math.asin(1), Math.asin(2)]
 * asin([[1,2],[1,3]])
 * // returns [ [Math.asin(1), Math.asin(2)], [Math.asin(1), Math.asin(3)] ]
 */