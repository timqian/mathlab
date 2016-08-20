'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return cround(m);
    case 'Sparse':
      return sround(m);
    default:
      return round(m);
  }
};

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var round = (0, _pointwise2.default)(Math.round);

function cround(x) {
  throw new Error('mathlab.round: no round for complex number');
}

function sround(x) {
  throw new Error('mathlab.round: round for sparse matrix not exist');
}

/**
 * Pointwise Math.round(x)
 * 
 * @export
 * @param {Number|Array|Complex|Sparse} m
 * @returns {Number|Array|Complex|Sparse}
 * @example 
 * 
 * round(1)
 * // returns Math.round(1)
 * round([1, 2])
 * // returns [Math.round(1), Math.round(2)]
 * round([[1,2],[1,3]])
 * // returns [ [Math.round(1), Math.round(2)], [Math.round(1), Math.round(3)] ]
 */