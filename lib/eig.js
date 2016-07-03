// export default function eig (A, maxiter) {
//   var QH = numeric.toUpperHessenberg(A)
//   var QB = numeric.QRFrancis(QH.H, maxiter)
//   var T = numeric.T
//   var n = A.length,i,k,flag = false,B = QB.B,H = numeric.dot(QB.Q, numeric.dot(QH.H, numeric.transpose(QB.Q)))
//   var Q = new T(numeric.dot(QB.Q, QH.Q)), Q0
//   var m = B.length,j
//   var a,b,c,d,p1,p2,disc,x,y,p,q,n1,n2
//   var sqrt = Math.sqrt
//   for (k = 0;k < m;k++) {
//     i = B[k][0]
//     if (i === B[k][1]) {
//       // nothing
//     } else {
//       j = i + 1
//       a = H[i][i]
//       b = H[i][j]
//       c = H[j][i]
//       d = H[j][j]
//       if (b === 0 && c === 0) continue
//       p1 = -a - d
//       p2 = a * d - b * c
//       disc = p1 * p1 - 4 * p2
//       if (disc >= 0) {
//         if (p1 < 0) x = -0.5 * (p1 - sqrt(disc))
//         else x = -0.5 * (p1 + sqrt(disc))
//         n1 = (a - x) * (a - x) + b * b
//         n2 = c * c + (d - x) * (d - x)
//         if (n1 > n2) {
//           n1 = sqrt(n1)
//           p = (a - x) / n1
//           q = b / n1
//         } else {
//           n2 = sqrt(n2)
//           p = c / n2
//           q = (d - x) / n2
//         }
//         Q0 = new T([[q, -p], [p, q]])
//         Q.setRows(i, j, Q0.dot(Q.getRows(i, j)))
//       } else {
//         x = -0.5 * p1
//         y = 0.5 * sqrt(-disc)
//         n1 = (a - x) * (a - x) + b * b
//         n2 = c * c + (d - x) * (d - x)
//         if (n1 > n2) {
//           n1 = sqrt(n1 + y * y)
//           p = (a - x) / n1
//           q = b / n1
//           x = 0
//           y /= n1
//         } else {
//           n2 = sqrt(n2 + y * y)
//           p = c / n2
//           q = (d - x) / n2
//           x = y / n2
//           y = 0
//         }
//         Q0 = new T([[q, -p], [p, q]], [[x, y], [y, -x]])
//         Q.setRows(i, j, Q0.dot(Q.getRows(i, j)))
//       }
//     }
//   }
//   var R = Q.dot(A).dot(Q.transjugate()), n = A.length, E = numeric.T.identity(n)
//   for (j = 0;j < n;j++) {
//     if (j > 0) {
//       for (k = j - 1;k >= 0;k--) {
//         var Rk = R.get([k, k]), Rj = R.get([j, j])
//         if (numeric.neq(Rk.x, Rj.x) || numeric.neq(Rk.y, Rj.y)) {
//           x = R.getRow(k).getBlock([k], [j - 1])
//           y = E.getRow(j).getBlock([k], [j - 1])
//           E.set([j, k], (R.get([k, j]).neg().sub(x.dot(y))).div(Rk.sub(Rj)))
//         } else {
//           E.setRow(j, E.getRow(k))
//           continue
//         }
//       }
//     }
//   }
//   for (j = 0;j < n;j++) {
//     x = E.getRow(j)
//     E.setRow(j, x.div(x.norm2()))
//   }
//   E = E.transpose()
//   E = Q.transjugate().dot(E)
//   return { lambda: R.getDiag(), E: E }
// }
"use strict";