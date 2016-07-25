'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m1, m2) {
  // if (m1.constructor.name !== m2.constructor.name) {
  //   throw new Error('mathlab.mul: argument type mismatch')
  // }

  switch (m1.constructor.name) {
    case 'Array':
      return amul(m1, m2);
    case 'Complex':
      return cmul(m1, m2);
    case 'Sparse':
      return smul(m1, m2);
    default:
      return amul(m1, m2);
  }
};

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _Complex = require('./Complex');

var _Complex2 = _interopRequireDefault(_Complex);

var _add = require('./add');

var _add2 = _interopRequireDefault(_add);

var _sub = require('./sub');

var _sub2 = _interopRequireDefault(_sub);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// array mul
var amul = (0, _pointwise2.default)(function (x, y) {
  return x * y;
});

// complex array mul
function cmul(x, y) {
  if (!(y instanceof _Complex2.default)) {
    y = new _Complex2.default(y);
  }
  if (x.y) {
    if (y.y) {
      return new _Complex2.default((0, _sub2.default)(amul(x.x, y.x), amul(x.y, y.y)), (0, _add2.default)(amul(x.x, y.y), amul(x.y, y.x)));
    }
    return new _Complex2.default(amul(x.x, y.x), amul(x.y, y.x));
  }
  if (y.y) {
    return new _Complex2.default(amul(x.x, y.x), amul(x.x, y.y));
  }
  return new _Complex2.default(amul(x.x, y.x));
}

function smul(x, y) {
  throw new Error('mathlab.sub: sub for sparse matrix not exist');
}

/**
 * Pointwise mul
 * 
 * @export
 * @param {Number|Array|Object} m1
 * @param {Number|Array|Object} m2
 * @returns {Number|Array}
 * @example 
 * 
 * mul(1, 2)
 * // returns 1 * 2
 * mul([1, 2], [2, 2])
 * // returns [1 * 2, 2 * 2]
 * mul([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 * 2, 1 * 2], [1 * 2, 2 * 2] ]
 */