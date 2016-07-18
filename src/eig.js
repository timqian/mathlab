// /**
//  * Eigenvalues of real matrices
//  * 
//  * @param {any} A
//  * @param {any} maxiter
//  * @returns
//  */
// export default function eig(A, maxiter) {
//   var QH = numeric.toUpperHessenberg(A);
//   var QB = numeric.QRFrancis(QH.H, maxiter);
//   var T = numeric.T;
//   var n = A.length,
//     i, k, flag = false,
//     B = QB.B,
//     H = numeric.dot(QB.Q, numeric.dot(QH.H, numeric.transpose(QB.Q)));
//   var Q = new T(numeric.dot(QB.Q, QH.Q)),
//     Q0;
//   var m = B.length,
//     j;
//   var a, b, c, d, p1, p2, disc, x, y, p, q, n1, n2;
//   var sqrt = Math.sqrt;
//   for (k = 0; k < m; k++) {
//     i = B[k][0];
//     if (i === B[k][1]) {
//       // nothing
//     } else {
//       j = i + 1;
//       a = H[i][i];
//       b = H[i][j];
//       c = H[j][i];
//       d = H[j][j];
//       if (b === 0 && c === 0) continue;
//       p1 = -a - d;
//       p2 = a * d - b * c;
//       disc = p1 * p1 - 4 * p2;
//       if (disc >= 0) {
//         if (p1 < 0) x = -0.5 * (p1 - sqrt(disc));
//         else x = -0.5 * (p1 + sqrt(disc));
//         n1 = (a - x) * (a - x) + b * b;
//         n2 = c * c + (d - x) * (d - x);
//         if (n1 > n2) {
//           n1 = sqrt(n1);
//           p = (a - x) / n1;
//           q = b / n1;
//         } else {
//           n2 = sqrt(n2);
//           p = c / n2;
//           q = (d - x) / n2;
//         }
//         Q0 = new T([
//           [q, -p],
//           [p, q]
//         ]);
//         Q.setRows(i, j, Q0.dot(Q.getRows(i, j)));
//       } else {
//         x = -0.5 * p1;
//         y = 0.5 * sqrt(-disc);
//         n1 = (a - x) * (a - x) + b * b;
//         n2 = c * c + (d - x) * (d - x);
//         if (n1 > n2) {
//           n1 = sqrt(n1 + y * y);
//           p = (a - x) / n1;
//           q = b / n1;
//           x = 0;
//           y /= n1;
//         } else {
//           n2 = sqrt(n2 + y * y);
//           p = c / n2;
//           q = (d - x) / n2;
//           x = y / n2;
//           y = 0;
//         }
//         Q0 = new T([
//           [q, -p],
//           [p, q]
//         ], [
//           [x, y],
//           [y, -x]
//         ]);
//         Q.setRows(i, j, Q0.dot(Q.getRows(i, j)));
//       }
//     }
//   }
//   var R = Q.dot(A).dot(Q.transjugate()),
//     n = A.length,
//     E = numeric.T.identity(n);
//   for (j = 0; j < n; j++) {
//     if (j > 0) {
//       for (k = j - 1; k >= 0; k--) {
//         var Rk = R.get([k, k]),
//           Rj = R.get([j, j]);
//         if (numeric.neq(Rk.x, Rj.x) || numeric.neq(Rk.y, Rj.y)) {
//           x = R.getRow(k).getBlock([k], [j - 1]);
//           y = E.getRow(j).getBlock([k], [j - 1]);
//           E.set([j, k], (R.get([k, j]).neg().sub(x.dot(y))).div(Rk.sub(Rj)));
//         } else {
//           E.setRow(j, E.getRow(k));
//           continue;
//         }
//       }
//     }
//   }
//   for (j = 0; j < n; j++) {
//     x = E.getRow(j);
//     E.setRow(j, x.div(x.norm2()));
//   }
//   E = E.transpose();
//   E = Q.transjugate().dot(E);
//   return {
//     lambda: R.getDiag(),
//     E: E
//   };
// };

// function house(x) {
//   var v = numeric.clone(x);
//   var s = x[0] >= 0 ? 1 : -1;
//   var alpha = s * numeric.norm2(x);
//   v[0] += alpha;
//   var foo = numeric.norm2(v);
//   if (foo === 0) { /* this should not happen */
//     throw new Error('eig: internal error');
//   }
//   return numeric.div(v, foo);
// }

// function toUpperHessenberg(me) {
//   var s = numeric.dim(me);
//   if (s.length !== 2 || s[0] !== s[1]) {
//     throw new Error('numeric: toUpperHessenberg() only works on square matrices');
//   }
//   var m = s[0],
//     i, j, k, x, v, A = numeric.clone(me),
//     B, C, Ai, Ci, Q = numeric.identity(m),
//     Qi;
//   for (j = 0; j < m - 2; j++) {
//     x = Array(m - j - 1);
//     for (i = j + 1; i < m; i++) {
//       x[i - j - 1] = A[i][j];
//     }
//     if (numeric.norm2(x) > 0) {
//       v = numeric.house(x);
//       B = numeric.getBlock(A, [j + 1, j], [m - 1, m - 1]);
//       C = numeric.tensor(v, numeric.dot(v, B));
//       for (i = j + 1; i < m; i++) {
//         Ai = A[i];
//         Ci = C[i - j - 1];
//         for (k = j; k < m; k++) Ai[k] -= 2 * Ci[k - j];
//       }
//       B = numeric.getBlock(A, [0, j + 1], [m - 1, m - 1]);
//       C = numeric.tensor(numeric.dot(B, v), v);
//       for (i = 0; i < m; i++) {
//         Ai = A[i];
//         Ci = C[i];
//         for (k = j + 1; k < m; k++) Ai[k] -= 2 * Ci[k - j - 1];
//       }
//       B = Array(m - j - 1);
//       for (i = j + 1; i < m; i++) B[i - j - 1] = Q[i];
//       C = numeric.tensor(v, numeric.dot(v, B));
//       for (i = j + 1; i < m; i++) {
//         Qi = Q[i];
//         Ci = C[i - j - 1];
//         for (k = 0; k < m; k++) Qi[k] -= 2 * Ci[k];
//       }
//     }
//   }
//   return {
//     H: A,
//     Q: Q
//   };
// }

// numeric.epsilon = 2.220446049250313e-16;

// numeric.QRFrancis = function(H, maxiter) {
//   if (typeof maxiter === "undefined") {
//     maxiter = 10000;
//   }
//   H = numeric.clone(H);
//   var H0 = numeric.clone(H);
//   var s = numeric.dim(H),
//     m = s[0],
//     x, v, a, b, c, d, det, tr, Hloc, Q = numeric.identity(m),
//     Qi, Hi, B, C, Ci, i, j, k, iter;
//   if (m < 3) {
//     return {
//       Q: Q,
//       B: [
//         [0, m - 1]
//       ]
//     };
//   }
//   var epsilon = numeric.epsilon;
//   for (iter = 0; iter < maxiter; iter++) {
//     for (j = 0; j < m - 1; j++) {
//       if (Math.abs(H[j + 1][j]) < epsilon * (Math.abs(H[j][j]) + Math.abs(H[j + 1][j + 1]))) {
//         var QH1 = numeric.QRFrancis(numeric.getBlock(H, [0, 0], [j, j]), maxiter);
//         var QH2 = numeric.QRFrancis(numeric.getBlock(H, [j + 1, j + 1], [m - 1, m - 1]), maxiter);
//         B = Array(j + 1);
//         for (i = 0; i <= j; i++) {
//           B[i] = Q[i];
//         }
//         C = numeric.dot(QH1.Q, B);
//         for (i = 0; i <= j; i++) {
//           Q[i] = C[i];
//         }
//         B = Array(m - j - 1);
//         for (i = j + 1; i < m; i++) {
//           B[i - j - 1] = Q[i];
//         }
//         C = numeric.dot(QH2.Q, B);
//         for (i = j + 1; i < m; i++) {
//           Q[i] = C[i - j - 1];
//         }
//         return {
//           Q: Q,
//           B: QH1.B.concat(numeric.add(QH2.B, j + 1))
//         };
//       }
//     }
//     a = H[m - 2][m - 2];
//     b = H[m - 2][m - 1];
//     c = H[m - 1][m - 2];
//     d = H[m - 1][m - 1];
//     tr = a + d;
//     det = (a * d - b * c);
//     Hloc = numeric.getBlock(H, [0, 0], [2, 2]);
//     if (tr * tr >= 4 * det) {
//       var s1, s2;
//       s1 = 0.5 * (tr + Math.sqrt(tr * tr - 4 * det));
//       s2 = 0.5 * (tr - Math.sqrt(tr * tr - 4 * det));
//       Hloc = numeric.add(numeric.sub(numeric.dot(Hloc, Hloc),
//           numeric.mul(Hloc, s1 + s2)),
//         numeric.diag(numeric.rep([3], s1 * s2)));
//     } else {
//       Hloc = numeric.add(numeric.sub(numeric.dot(Hloc, Hloc),
//           numeric.mul(Hloc, tr)),
//         numeric.diag(numeric.rep([3], det)));
//     }
//     x = [Hloc[0][0], Hloc[1][0], Hloc[2][0]];
//     v = numeric.house(x);
//     B = [H[0], H[1], H[2]];
//     C = numeric.tensor(v, numeric.dot(v, B));
//     for (i = 0; i < 3; i++) {
//       Hi = H[i];
//       Ci = C[i];
//       for (k = 0; k < m; k++) Hi[k] -= 2 * Ci[k];
//     }
//     B = numeric.getBlock(H, [0, 0], [m - 1, 2]);
//     C = numeric.tensor(numeric.dot(B, v), v);
//     for (i = 0; i < m; i++) {
//       Hi = H[i];
//       Ci = C[i];
//       for (k = 0; k < 3; k++) Hi[k] -= 2 * Ci[k];
//     }
//     B = [Q[0], Q[1], Q[2]];
//     C = numeric.tensor(v, numeric.dot(v, B));
//     for (i = 0; i < 3; i++) {
//       Qi = Q[i];
//       Ci = C[i];
//       for (k = 0; k < m; k++) Qi[k] -= 2 * Ci[k];
//     }
//     var J;
//     for (j = 0; j < m - 2; j++) {
//       for (k = j; k <= j + 1; k++) {
//         if (Math.abs(H[k + 1][k]) < epsilon * (Math.abs(H[k][k]) + Math.abs(H[k + 1][k + 1]))) {
//           var QH1 = numeric.QRFrancis(numeric.getBlock(H, [0, 0], [k, k]), maxiter);
//           var QH2 = numeric.QRFrancis(numeric.getBlock(H, [k + 1, k + 1], [m - 1, m - 1]), maxiter);
//           B = Array(k + 1);
//           for (i = 0; i <= k; i++) {
//             B[i] = Q[i];
//           }
//           C = numeric.dot(QH1.Q, B);
//           for (i = 0; i <= k; i++) {
//             Q[i] = C[i];
//           }
//           B = Array(m - k - 1);
//           for (i = k + 1; i < m; i++) {
//             B[i - k - 1] = Q[i];
//           }
//           C = numeric.dot(QH2.Q, B);
//           for (i = k + 1; i < m; i++) {
//             Q[i] = C[i - k - 1];
//           }
//           return {
//             Q: Q,
//             B: QH1.B.concat(numeric.add(QH2.B, k + 1))
//           };
//         }
//       }
//       J = Math.min(m - 1, j + 3);
//       x = Array(J - j);
//       for (i = j + 1; i <= J; i++) {
//         x[i - j - 1] = H[i][j];
//       }
//       v = numeric.house(x);
//       B = numeric.getBlock(H, [j + 1, j], [J, m - 1]);
//       C = numeric.tensor(v, numeric.dot(v, B));
//       for (i = j + 1; i <= J; i++) {
//         Hi = H[i];
//         Ci = C[i - j - 1];
//         for (k = j; k < m; k++) Hi[k] -= 2 * Ci[k - j];
//       }
//       B = numeric.getBlock(H, [0, j + 1], [m - 1, J]);
//       C = numeric.tensor(numeric.dot(B, v), v);
//       for (i = 0; i < m; i++) {
//         Hi = H[i];
//         Ci = C[i];
//         for (k = j + 1; k <= J; k++) Hi[k] -= 2 * Ci[k - j - 1];
//       }
//       B = Array(J - j);
//       for (i = j + 1; i <= J; i++) B[i - j - 1] = Q[i];
//       C = numeric.tensor(v, numeric.dot(v, B));
//       for (i = j + 1; i <= J; i++) {
//         Qi = Q[i];
//         Ci = C[i - j - 1];
//         for (k = 0; k < m; k++) Qi[k] -= 2 * Ci[k];
//       }
//     }
//   }
//   throw new Error('numeric: eigenvalue iteration does not converge -- increase maxiter?');
// }