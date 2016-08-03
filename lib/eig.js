'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = eig;

var _transpose = require('./transpose');

var _transpose2 = _interopRequireDefault(_transpose);

var _Complex = require('./Complex');

var _Complex2 = _interopRequireDefault(_Complex);

var _neq = require('./neq');

var _neq2 = _interopRequireDefault(_neq);

var _clone = require('./clone');

var _clone2 = _interopRequireDefault(_clone);

var _norm = require('./norm2');

var _norm2 = _interopRequireDefault(_norm);

var _div = require('./div');

var _div2 = _interopRequireDefault(_div);

var _dim = require('./dim');

var _dim2 = _interopRequireDefault(_dim);

var _dot = require('./dot');

var _dot2 = _interopRequireDefault(_dot);

var _add = require('./add');

var _add2 = _interopRequireDefault(_add);

var _getBlock = require('./getBlock');

var _getBlock2 = _interopRequireDefault(_getBlock);

var _tensor = require('./tensor');

var _tensor2 = _interopRequireDefault(_tensor);

var _identity = require('./identity');

var _identity2 = _interopRequireDefault(_identity);

var _epsilon = require('./epsilon');

var _epsilon2 = _interopRequireDefault(_epsilon);

var _sub = require('./sub');

var _sub2 = _interopRequireDefault(_sub);

var _mul = require('./mul');

var _mul2 = _interopRequireDefault(_mul);

var _diag = require('./diag');

var _diag2 = _interopRequireDefault(_diag);

var _rep = require('./rep');

var _rep2 = _interopRequireDefault(_rep);

var _neg = require('./neg');

var _neg2 = _interopRequireDefault(_neg);

var _getDiag = require('./getDiag');

var _getDiag2 = _interopRequireDefault(_getDiag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Eigenvalues of real matrices
 * 
 * @param {any} A
 * @param {any} maxiter
 * @returns
 */
function eig(A, maxiter) {
  var QH = toUpperHessenberg(A);
  var QB = QRFrancis(QH.H, maxiter);
  var n = A.length,
      i,
      k,
      flag = false,
      B = QB.B,
      H = (0, _dot2.default)(QB.Q, (0, _dot2.default)(QH.H, (0, _transpose2.default)(QB.Q)));
  var Q = new _Complex2.default((0, _dot2.default)(QB.Q, QH.Q)),
      Q0;
  var m = B.length,
      j;
  var a, b, c, d, p1, p2, disc, x, y, p, q, n1, n2;
  var sqrt = Math.sqrt;
  for (k = 0; k < m; k++) {
    i = B[k][0];
    if (i === B[k][1]) {
      // nothing
    } else {
      j = i + 1;
      a = H[i][i];
      b = H[i][j];
      c = H[j][i];
      d = H[j][j];
      if (b === 0 && c === 0) continue;
      p1 = -a - d;
      p2 = a * d - b * c;
      disc = p1 * p1 - 4 * p2;
      if (disc >= 0) {
        if (p1 < 0) x = -0.5 * (p1 - sqrt(disc));else x = -0.5 * (p1 + sqrt(disc));
        n1 = (a - x) * (a - x) + b * b;
        n2 = c * c + (d - x) * (d - x);
        if (n1 > n2) {
          n1 = sqrt(n1);
          p = (a - x) / n1;
          q = b / n1;
        } else {
          n2 = sqrt(n2);
          p = c / n2;
          q = (d - x) / n2;
        }
        Q0 = new _Complex2.default([[q, -p], [p, q]]);
        Q.setRows(i, j, (0, _dot2.default)(Q0, Q.getRows(i, j)));
      } else {
        x = -0.5 * p1;
        y = 0.5 * sqrt(-disc);
        n1 = (a - x) * (a - x) + b * b;
        n2 = c * c + (d - x) * (d - x);
        if (n1 > n2) {
          n1 = sqrt(n1 + y * y);
          p = (a - x) / n1;
          q = b / n1;
          x = 0;
          y /= n1;
        } else {
          n2 = sqrt(n2 + y * y);
          p = c / n2;
          q = (d - x) / n2;
          x = y / n2;
          y = 0;
        }
        Q0 = new _Complex2.default([[q, -p], [p, q]], [[x, y], [y, -x]]);
        Q.setRows(i, j, (0, _dot2.default)(Q0, Q.getRows(i, j)));
      }
    }
  }
  var R = (0, _dot2.default)((0, _dot2.default)(Q, A), Q.transjugate()),
      n = A.length,
      E = new _Complex2.default((0, _identity2.default)(n));
  for (j = 0; j < n; j++) {
    if (j > 0) {
      for (k = j - 1; k >= 0; k--) {
        var Rk = R.get([k, k]),
            Rj = R.get([j, j]);
        if ((0, _neq2.default)(Rk.re, Rj.re) || (0, _neq2.default)(Rk.im, Rj.im)) {
          x = (0, _getBlock2.default)(R.getRow(k), [k], [j - 1]);
          y = (0, _getBlock2.default)(E.getRow(j), [k], [j - 1]);
          E.set([j, k], (0, _div2.default)((0, _sub2.default)((0, _neg2.default)(R.get([k, j])), (0, _dot2.default)(x, y)), (0, _sub2.default)(Rk, Rj)));
        } else {
          E.setRow(j, E.getRow(k));
          continue;
        }
      }
    }
  }
  for (j = 0; j < n; j++) {
    x = E.getRow(j);
    E.setRow(j, (0, _div2.default)(x, (0, _norm2.default)(x)));
  }
  E = (0, _transpose2.default)(E);
  E = (0, _dot2.default)(Q.transjugate(), E);
  return {
    lambda: (0, _getDiag2.default)(R),
    E: E
  };
};

function house(x) {
  var v = (0, _clone2.default)(x);
  var s = x[0] >= 0 ? 1 : -1;
  var alpha = s * (0, _norm2.default)(x);
  v[0] += alpha;
  var foo = (0, _norm2.default)(v);
  if (foo === 0) {
    /* this should not happen */
    throw new Error('eig: internal error');
  }
  return (0, _div2.default)(v, foo);
}

function toUpperHessenberg(me) {
  var s = (0, _dim2.default)(me);
  if (s.length !== 2 || s[0] !== s[1]) {
    throw new Error('mathlab: toUpperHessenberg() only works on square matrices');
  }
  var m = s[0],
      i,
      j,
      k,
      x,
      v,
      A = (0, _clone2.default)(me),
      B,
      C,
      Ai,
      Ci,
      Q = (0, _identity2.default)(m),
      Qi;
  for (j = 0; j < m - 2; j++) {
    x = Array(m - j - 1);
    for (i = j + 1; i < m; i++) {
      x[i - j - 1] = A[i][j];
    }
    if ((0, _norm2.default)(x) > 0) {
      v = house(x);
      B = (0, _getBlock2.default)(A, [j + 1, j], [m - 1, m - 1]);
      C = (0, _tensor2.default)(v, (0, _dot2.default)(v, B));
      for (i = j + 1; i < m; i++) {
        Ai = A[i];
        Ci = C[i - j - 1];
        for (k = j; k < m; k++) {
          Ai[k] -= 2 * Ci[k - j];
        }
      }
      B = (0, _getBlock2.default)(A, [0, j + 1], [m - 1, m - 1]);
      C = (0, _tensor2.default)((0, _dot2.default)(B, v), v);
      for (i = 0; i < m; i++) {
        Ai = A[i];
        Ci = C[i];
        for (k = j + 1; k < m; k++) {
          Ai[k] -= 2 * Ci[k - j - 1];
        }
      }
      B = Array(m - j - 1);
      for (i = j + 1; i < m; i++) {
        B[i - j - 1] = Q[i];
      }C = (0, _tensor2.default)(v, (0, _dot2.default)(v, B));
      for (i = j + 1; i < m; i++) {
        Qi = Q[i];
        Ci = C[i - j - 1];
        for (k = 0; k < m; k++) {
          Qi[k] -= 2 * Ci[k];
        }
      }
    }
  }
  return {
    H: A,
    Q: Q
  };
}

function QRFrancis(H, maxiter) {
  if (typeof maxiter === "undefined") {
    maxiter = 10000;
  }
  H = (0, _clone2.default)(H);
  var H0 = (0, _clone2.default)(H);
  var s = (0, _dim2.default)(H),
      m = s[0],
      x,
      v,
      a,
      b,
      c,
      d,
      det,
      tr,
      Hloc,
      Q = (0, _identity2.default)(m),
      Qi,
      Hi,
      B,
      C,
      Ci,
      i,
      j,
      k,
      iter;
  if (m < 3) {
    return {
      Q: Q,
      B: [[0, m - 1]]
    };
  }
  for (iter = 0; iter < maxiter; iter++) {
    for (j = 0; j < m - 1; j++) {
      if (Math.abs(H[j + 1][j]) < _epsilon2.default * (Math.abs(H[j][j]) + Math.abs(H[j + 1][j + 1]))) {
        var QH1 = QRFrancis((0, _getBlock2.default)(H, [0, 0], [j, j]), maxiter);
        var QH2 = QRFrancis((0, _getBlock2.default)(H, [j + 1, j + 1], [m - 1, m - 1]), maxiter);
        B = Array(j + 1);
        for (i = 0; i <= j; i++) {
          B[i] = Q[i];
        }
        C = (0, _dot2.default)(QH1.Q, B);
        for (i = 0; i <= j; i++) {
          Q[i] = C[i];
        }
        B = Array(m - j - 1);
        for (i = j + 1; i < m; i++) {
          B[i - j - 1] = Q[i];
        }
        C = (0, _dot2.default)(QH2.Q, B);
        for (i = j + 1; i < m; i++) {
          Q[i] = C[i - j - 1];
        }
        return {
          Q: Q,
          B: QH1.B.concat((0, _add2.default)(QH2.B, j + 1))
        };
      }
    }
    a = H[m - 2][m - 2];
    b = H[m - 2][m - 1];
    c = H[m - 1][m - 2];
    d = H[m - 1][m - 1];
    tr = a + d;
    det = a * d - b * c;
    Hloc = (0, _getBlock2.default)(H, [0, 0], [2, 2]);
    if (tr * tr >= 4 * det) {
      var s1, s2;
      s1 = 0.5 * (tr + Math.sqrt(tr * tr - 4 * det));
      s2 = 0.5 * (tr - Math.sqrt(tr * tr - 4 * det));
      Hloc = (0, _add2.default)((0, _sub2.default)((0, _dot2.default)(Hloc, Hloc), (0, _mul2.default)(Hloc, s1 + s2)), (0, _diag2.default)((0, _rep2.default)([3], s1 * s2)));
    } else {
      Hloc = (0, _add2.default)((0, _sub2.default)((0, _dot2.default)(Hloc, Hloc), (0, _mul2.default)(Hloc, tr)), (0, _diag2.default)((0, _rep2.default)([3], det)));
    }
    x = [Hloc[0][0], Hloc[1][0], Hloc[2][0]];
    v = house(x);
    B = [H[0], H[1], H[2]];
    C = (0, _tensor2.default)(v, (0, _dot2.default)(v, B));
    for (i = 0; i < 3; i++) {
      Hi = H[i];
      Ci = C[i];
      for (k = 0; k < m; k++) {
        Hi[k] -= 2 * Ci[k];
      }
    }
    B = (0, _getBlock2.default)(H, [0, 0], [m - 1, 2]);
    C = (0, _tensor2.default)((0, _dot2.default)(B, v), v);
    for (i = 0; i < m; i++) {
      Hi = H[i];
      Ci = C[i];
      for (k = 0; k < 3; k++) {
        Hi[k] -= 2 * Ci[k];
      }
    }
    B = [Q[0], Q[1], Q[2]];
    C = (0, _tensor2.default)(v, (0, _dot2.default)(v, B));
    for (i = 0; i < 3; i++) {
      Qi = Q[i];
      Ci = C[i];
      for (k = 0; k < m; k++) {
        Qi[k] -= 2 * Ci[k];
      }
    }
    var J;
    for (j = 0; j < m - 2; j++) {
      for (k = j; k <= j + 1; k++) {
        if (Math.abs(H[k + 1][k]) < _epsilon2.default * (Math.abs(H[k][k]) + Math.abs(H[k + 1][k + 1]))) {
          var QH1 = QRFrancis((0, _getBlock2.default)(H, [0, 0], [k, k]), maxiter);
          var QH2 = QRFrancis((0, _getBlock2.default)(H, [k + 1, k + 1], [m - 1, m - 1]), maxiter);
          B = Array(k + 1);
          for (i = 0; i <= k; i++) {
            B[i] = Q[i];
          }
          C = (0, _dot2.default)(QH1.Q, B);
          for (i = 0; i <= k; i++) {
            Q[i] = C[i];
          }
          B = Array(m - k - 1);
          for (i = k + 1; i < m; i++) {
            B[i - k - 1] = Q[i];
          }
          C = (0, _dot2.default)(QH2.Q, B);
          for (i = k + 1; i < m; i++) {
            Q[i] = C[i - k - 1];
          }
          return {
            Q: Q,
            B: QH1.B.concat((0, _add2.default)(QH2.B, k + 1))
          };
        }
      }
      J = Math.min(m - 1, j + 3);
      x = Array(J - j);
      for (i = j + 1; i <= J; i++) {
        x[i - j - 1] = H[i][j];
      }
      v = house(x);
      B = (0, _getBlock2.default)(H, [j + 1, j], [J, m - 1]);
      C = (0, _tensor2.default)(v, (0, _dot2.default)(v, B));
      for (i = j + 1; i <= J; i++) {
        Hi = H[i];
        Ci = C[i - j - 1];
        for (k = j; k < m; k++) {
          Hi[k] -= 2 * Ci[k - j];
        }
      }
      B = (0, _getBlock2.default)(H, [0, j + 1], [m - 1, J]);
      C = (0, _tensor2.default)((0, _dot2.default)(B, v), v);
      for (i = 0; i < m; i++) {
        Hi = H[i];
        Ci = C[i];
        for (k = j + 1; k <= J; k++) {
          Hi[k] -= 2 * Ci[k - j - 1];
        }
      }
      B = Array(J - j);
      for (i = j + 1; i <= J; i++) {
        B[i - j - 1] = Q[i];
      }C = (0, _tensor2.default)(v, (0, _dot2.default)(v, B));
      for (i = j + 1; i <= J; i++) {
        Qi = Q[i];
        Ci = C[i - j - 1];
        for (k = 0; k < m; k++) {
          Qi[k] -= 2 * Ci[k];
        }
      }
    }
  }
  throw new Error('mathlab: eigenvalue iteration does not converge -- increase maxiter?');
}