'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inv;

var _dim = require('./dim');

var _dim2 = _interopRequireDefault(_dim);

var _identity = require('./identity');

var _identity2 = _interopRequireDefault(_identity);

var _clone = require('./utils/clone');

var _clone2 = _interopRequireDefault(_clone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Inverse of an matrix
 * 
 * @export
 * @param {Array} x
 * @returns {Array}
 * @example 
 * 
 * inv([[1,2],[3,4]])
 * // [[   -2,    1],
 * //  [  1.5, -0.5]]
 */
function inv(x) {
  var s = (0, _dim2.default)(x),
      abs = Math.abs,
      m = s[0],
      n = s[1];
  var A = (0, _clone2.default)(x),
      Ai,
      Aj;
  var I = (0, _identity2.default)(m),
      Ii,
      Ij;
  var i, j, k, x;
  for (j = 0; j < n; ++j) {
    var i0 = -1;
    var v0 = -1;
    for (i = j; i !== m; ++i) {
      k = abs(A[i][j]);if (k > v0) {
        i0 = i;v0 = k;
      }
    }
    Aj = A[i0];A[i0] = A[j];A[j] = Aj;
    Ij = I[i0];I[i0] = I[j];I[j] = Ij;
    x = Aj[j];
    for (k = j; k !== n; ++k) {
      Aj[k] /= x;
    }for (k = n - 1; k !== -1; --k) {
      Ij[k] /= x;
    }for (i = m - 1; i !== -1; --i) {
      if (i !== j) {
        Ai = A[i];
        Ii = I[i];
        x = Ai[j];
        for (k = j + 1; k !== n; ++k) {
          Ai[k] -= Aj[k] * x;
        }for (k = n - 1; k > 0; --k) {
          Ii[k] -= Ij[k] * x;--k;Ii[k] -= Ij[k] * x;
        }
        if (k === 0) Ii[0] -= Ij[0] * x;
      }
    }
  }
  return I;
}