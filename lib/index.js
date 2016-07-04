'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transpose = exports.rep = exports.random = exports.negtranspose = exports.linspace = exports.inv = exports.identity = exports.getDiag = exports.eig = exports.dotVV = exports.dotVM = exports.dotMV = exports.dotMMsmall = exports.dotMMbig = exports.dot = exports.dim = exports.diag = exports.det = exports._getCol = undefined;

var _getCol2 = require('./_getCol');

var _getCol3 = _interopRequireDefault(_getCol2);

var _det2 = require('./det');

var _det3 = _interopRequireDefault(_det2);

var _diag2 = require('./diag');

var _diag3 = _interopRequireDefault(_diag2);

var _dim2 = require('./dim');

var _dim3 = _interopRequireDefault(_dim2);

var _dot2 = require('./dot');

var _dot3 = _interopRequireDefault(_dot2);

var _dotMMbig2 = require('./dotMMbig');

var _dotMMbig3 = _interopRequireDefault(_dotMMbig2);

var _dotMMsmall2 = require('./dotMMsmall');

var _dotMMsmall3 = _interopRequireDefault(_dotMMsmall2);

var _dotMV2 = require('./dotMV');

var _dotMV3 = _interopRequireDefault(_dotMV2);

var _dotVM2 = require('./dotVM');

var _dotVM3 = _interopRequireDefault(_dotVM2);

var _dotVV2 = require('./dotVV');

var _dotVV3 = _interopRequireDefault(_dotVV2);

var _eig2 = require('./eig');

var _eig3 = _interopRequireDefault(_eig2);

var _getDiag2 = require('./getDiag');

var _getDiag3 = _interopRequireDefault(_getDiag2);

var _identity2 = require('./identity');

var _identity3 = _interopRequireDefault(_identity2);

var _inv2 = require('./inv');

var _inv3 = _interopRequireDefault(_inv2);

var _linspace2 = require('./linspace');

var _linspace3 = _interopRequireDefault(_linspace2);

var _negtranspose2 = require('./negtranspose');

var _negtranspose3 = _interopRequireDefault(_negtranspose2);

var _random2 = require('./random');

var _random3 = _interopRequireDefault(_random2);

var _rep2 = require('./rep');

var _rep3 = _interopRequireDefault(_rep2);

var _transpose2 = require('./transpose');

var _transpose3 = _interopRequireDefault(_transpose2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports._getCol = _getCol3.default; /**
                                     * Math lab like lodash
                                     */

exports.det = _det3.default;
exports.diag = _diag3.default;
exports.dim = _dim3.default;
exports.dot = _dot3.default;
exports.dotMMbig = _dotMMbig3.default;
exports.dotMMsmall = _dotMMsmall3.default;
exports.dotMV = _dotMV3.default;
exports.dotVM = _dotVM3.default;
exports.dotVV = _dotVV3.default;
exports.eig = _eig3.default;
exports.getDiag = _getDiag3.default;
exports.identity = _identity3.default;
exports.inv = _inv3.default;
exports.linspace = _linspace3.default;
exports.negtranspose = _negtranspose3.default;
exports.random = _random3.default;
exports.rep = _rep3.default;
exports.transpose = _transpose3.default;