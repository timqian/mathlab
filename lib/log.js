'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return clog(m);
    case 'Sparse':
      return slog(m);
    default:
      return log(m);
  }
};

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _Complex = require('./Complex');

var _Complex2 = _interopRequireDefault(_Complex);

var _atan = require('./atan2');

var _atan2 = _interopRequireDefault(_atan);

var _abs = require('./abs');

var _abs2 = _interopRequireDefault(_abs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _pointwise2.default)(Math.log);

function clog(x) {
  if (x.y) {
    var theta = new _Complex2.default((0, _atan2.default)(x.y, x.x)),
        r = (0, _abs2.default)(x);
    return new _Complex2.default(log(r.x), theta.x);
  }
  return new _Complex2.default(log(x.x));
}

function slog(x) {
  throw new Error('mathlab.log: log for sparse matrix has not been implemented yet');
}

/**
 * Pointwise Math.log(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * log(1)
 * // returns Math.log(1)
 * log([1, 2])
 * // returns [Math.log(1), Math.log(2)]
 * log([[1,2],[1,3]])
 * // returns [ [Math.log(1), Math.log(2)], [Math.log(1), Math.log(3)] ]
 */