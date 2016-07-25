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

var _Sparse = require('./Sparse');

var _Sparse2 = _interopRequireDefault(_Sparse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clone = (0, _pointwise2.default)(function (x) {
  return x;
});

function cclone(x) {
  throw new Error('mathlab.clone: no clone for complex number');
}

function sclone(x) {
  return new _Sparse2.default({
    col: x.col.slice(), // copy the array
    row: x.row.slice(),
    val: x.val.slice()
  });
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