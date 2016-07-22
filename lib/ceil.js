'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return cceil(m);
    case 'Sparse':
      return sceil(m);
    default:
      return ceil(m);
  }
};

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ceil = (0, _pointwise2.default)(Math.ceil);

function cceil(x) {
  throw new Error('mathlab.ceil: no ceil for complex number');
}

function sceil(x) {
  throw new Error('mathlab.ceil: ceil for sparse matrix has not been implemented yet');
}

/**
 * Pointwise Math.ceil(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * ceil(1)
 * // returns Math.ceil(1)
 * ceil([1, 2])
 * // returns [Math.ceil(1), Math.ceil(2)]
 * ceil([[1,2],[1,3]])
 * // returns [ [Math.ceil(1), Math.ceil(2)], [Math.ceil(1), Math.ceil(3)] ]
 */