'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = det;

var _dim = require('./dim');

var _dim2 = _interopRequireDefault(_dim);

var _clone = require('./utils/clone');

var _clone2 = _interopRequireDefault(_clone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Determinant of matix
 * 
 * @export
 * @param {Matrix} x
 * @returns {Number}
 * @example
 * 
 * det([[1, 2], [1, 2]])
 * // 0
 */
//	Determinant
function det(x) {
  var s = (0, _dim2.default)(x);
  if (s.length !== 2 || s[0] !== s[1]) {
    throw new Error('det() only works on square matrices');
  }
  var n = s[0],
      ret = 1,
      i,
      j,
      k,
      A = (0, _clone2.default)(x),
      Aj,
      Ai,
      alpha,
      temp,
      k1,
      k2,
      k3;
  for (j = 0; j < n - 1; j++) {
    k = j;
    for (i = j + 1; i < n; i++) {
      if (Math.abs(A[i][j]) > Math.abs(A[k][j])) {
        k = i;
      }
    }
    if (k !== j) {
      temp = A[k];A[k] = A[j];A[j] = temp;
      ret *= -1;
    }
    Aj = A[j];
    for (i = j + 1; i < n; i++) {
      Ai = A[i];
      alpha = Ai[j] / Aj[j];
      for (k = j + 1; k < n - 1; k += 2) {
        k1 = k + 1;
        Ai[k] -= Aj[k] * alpha;
        Ai[k1] -= Aj[k1] * alpha;
      }
      if (k !== n) {
        Ai[k] -= Aj[k] * alpha;
      }
    }
    if (Aj[j] === 0) {
      return 0;
    }
    ret *= Aj[j];
  }
  return ret * A[j][j];
}