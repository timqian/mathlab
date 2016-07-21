'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mul;

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _T = require('./T');

var _T2 = _interopRequireDefault(_T);

var _add = require('./add');

var _add2 = _interopRequireDefault(_add);

var _sub = require('./sub');

var _sub2 = _interopRequireDefault(_sub);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// array mul
var aMul = (0, _pointwise2.default)(function (x, y) {
  return x * y;
});

// complex array mul
function cMul(x, y) {
  if (!(y instanceof _T2.default)) {
    y = new _T2.default(y);
  }
  if (x.y) {
    if (y.y) {
      return new _T2.default((0, _sub2.default)(aMul(x.x, y.x), aMul(x.y, y.y)), (0, _add2.default)(aMul(x.x, y.y), aMul(x.y, y.x)));
    }
    return new _T2.default(aMul(x.x, y.x), aMul(x.y, y.x));
  }
  if (y.y) {
    return new _T2.default(aMul(x.x, y.x), aMul(x.x, y.y));
  }
  return new _T2.default(aMul(x.x, y.x));
}

//

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
function mul(m1, m2) {
  // if (m1.constructor.name !== m2.constructor.name) {
  //   throw new Error('mathlab.mul: argument type mismatch')
  // }

  switch (m1.constructor.name) {
    case 'Array':
      return aMul(m1, m2);
    case 'T':
      return cMul(m1, m2);
    case 'Sparse':
      return sMul(m1, m2);
    default:
      return aMul(m1, m2);
  }
}