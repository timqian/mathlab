'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = tensor;

var _mul = require('./mul');

var _mul2 = _interopRequireDefault(_mul);

var _dim = require('./dim');

var _dim2 = _interopRequireDefault(_dim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Tensor product ret[i][j] = x[i]*y[j]
 * 
 * @export
 * @param {Array|Number} x
 * @param {Array|Number} y
 * @returns {Array|Number}
 * @example 
 * 
 * tensor([1,2],[3,4])
 * // [[1,4],
 * //  [6,8]]
 */
function tensor(x, y) {
    if (typeof x === "number" || typeof y === "number") return (0, _mul2.default)(x, y);
    var s1 = (0, _dim2.default)(x),
        s2 = (0, _dim2.default)(y);
    if (s1.length !== 1 || s2.length !== 1) {
        throw new Error('Mathlab.tensor: tensor product is only defined for vectors');
    }
    var m = s1[0],
        n = s2[0],
        A = Array(m),
        Ai,
        i,
        j,
        xi;
    for (i = m - 1; i >= 0; i--) {
        Ai = Array(n);
        xi = x[i];
        for (j = n - 1; j >= 3; --j) {
            Ai[j] = xi * y[j];
            --j;
            Ai[j] = xi * y[j];
            --j;
            Ai[j] = xi * y[j];
            --j;
            Ai[j] = xi * y[j];
        }
        while (j >= 0) {
            Ai[j] = xi * y[j];--j;
        }
        A[i] = Ai;
    }
    return A;
}