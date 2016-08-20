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

var _spPointwise = require('./spPointwise');

var _spPointwise2 = _interopRequireDefault(_spPointwise);

var _Sparse = require('./Sparse');

var _Sparse2 = _interopRequireDefault(_Sparse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var acos = (0, _pointwise2.default)(Math.acos);
var sacos = (0, _spPointwise2.default)(Math.acos);

function cacos(x) {
  throw new Error('mathlab.acos: no acos for complex number');
}

/**
 * Pointwise Math.acos(x)
 * 
 * @export
 * @param {Number|Array|Sparse} m
 * @returns {Number|Array|Sparse}
 * @example 
 * 
 * acos(1) // Math.acos(1)
 * acos([1, 2]) // [Math.acos(1), Math.acos(2)]
 * acos([[1,2],[1,3]]) // [ [Math.acos(1), Math.acos(2)], [Math.acos(1), Math.acos(3)] ]
 */