'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return csub(m1, m2);
    case 'Sparse':
      return ssub(m1, m2);
    default:
      return sub(m1, m2);
  }
};

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _Complex = require('./Complex');

var _Complex2 = _interopRequireDefault(_Complex);

var _neg = require('./neg');

var _neg2 = _interopRequireDefault(_neg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sub = (0, _pointwise2.default)(function (x, y) {
  return x - y;
});

function csub(x, y) {
  if (!(y instanceof _Complex2.default)) {
    y = new _Complex2.default(y);
  }
  if (x.y) {
    if (y.y) {
      return new _Complex2.default(sub(x.x, y.x), sub(x.y, y.y));
    }
    return new _Complex2.default(sub(x.x, y.x), x.y);
  }
  if (y.y) {
    return new _Complex2.default(sub(x.x, y.x), (0, _neg2.default)(y.y));
  }
  return new _Complex2.default(sub(x.x, y.x));
}

function ssub(x, y) {
  throw new Error('mathlab.sub: sub for sparse matrix has not been implemented yet');
}

/**
 * Pointwise sub
 * 
 * @export
 * @param {Number|Array} m1
 * @param {Number|Array} m2
 * @returns {Number|Array}
 * @example 
 * 
 * sub(1, 2)
 * // returns 1 - 2
 * sub([1, 2], [2, 2])
 * // returns [1 - 2, 2 - 2]
 * sub([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 - 2, 1 - 2], [1 - 2, 2 - 2] ]
 */