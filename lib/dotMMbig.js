'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dotMMbig;

var _dotVV = require('./dotVV');

var _dotVV2 = _interopRequireDefault(_dotVV);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function dotMMbig(x, y) {
  var p = y.length,
      v = Array(p);
  var m = x.length,
      n = y[0].length,
      A = new Array(m),
      xj;
  var VV = _dotVV2.default;
  var i, j, k, z;
  --p;
  --m;
  for (i = m; i !== -1; --i) {
    A[i] = Array(n);
  }--n;
  for (i = n; i !== -1; --i) {
    _getCol(y, i, v);
    for (j = m; j !== -1; --j) {
      z = 0;
      xj = x[j];
      A[j][i] = VV(xj, v);
    }
  }
  return A;
}

function _getCol(A, j, x) {
  var n = A.length,
      i;
  for (i = n - 1; i > 0; --i) {
    x[i] = A[i][j];
    --i;
    x[i] = A[i][j];
  }
  if (i === 0) x[0] = A[0][j];
}