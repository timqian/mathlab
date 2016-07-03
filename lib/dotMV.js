'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = dotMV;

var _dotVV = require('./dotVV');

var _dotVV2 = _interopRequireDefault(_dotVV);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function dotMV(x, y) {
    var p = x.length,
        q = y.length,
        i;
    var ret = Array(p);
    for (i = p - 1; i >= 0; i--) {
        ret[i] = (0, _dotVV2.default)(x[i], y);
    }
    return ret;
}