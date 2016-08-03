import dim from './dim'
import rep from './rep'

export default class Sparse {
  constructor(A) {
    if(!Array.isArray(A) && A.col){
      this.col = A.col;
      this.row = A.row;
      this.val = A.val;
    } else {
      // TODO: throw error while A is not matrix
      var m = A.length, n, foo, i, j, counts = [];
      for (i = m - 1; i !== -1; --i) {
        foo = A[i];
        for (j in foo) {
          j = parseInt(j);
          while (j >= counts.length) counts[counts.length] = 0;
          if (foo[j] !== 0) counts[j]++;
        }
      }
      var n = counts.length;
      var Ai = Array(n + 1);
      Ai[0] = 0;
      for (i = 0; i < n; ++i) Ai[i + 1] = Ai[i] + counts[i];
      var Aj = Array(Ai[n]), Av = Array(Ai[n]);
      for (i = m - 1; i !== -1; --i) {
        foo = A[i];
        for (j in foo) {
          if (foo[j] !== 0) {
            counts[j]--;
            Aj[Ai[j] + counts[j]] = i;
            Av[Ai[j] + counts[j]] = foo[j];
          }
        }
      }

      this.col = Ai;
      this.row = Aj;
      this.val = Av;
    }
  }

  toFull() {
    var Ai = this.col, Aj = this.row, Av = this.val, 
      s = dim(this), m = s[0], n = s[1], i,j,j0,j1,k;
    var B = rep([m,n],0);
    for(i=0;i<n;i++) {
      j0 = Ai[i];
      j1 = Ai[i+1];
      for(j=j0;j<j1;++j) { B[Aj[j]][i] = Av[j]; }
    }
    return B;
  }
}

// Sparse.diag = function (d) {
//   // TODO
//   var n = d.length,i,ret = Array(n),i1,i2,i3;
//   for(i=n-1;i>=1;i-=2) {
//     i1 = i-1;
//     ret[i] = []; ret[i][i] = d[i];
//     ret[i1] = []; ret[i1][i1] = d[i1];
//   }
//   if(i===0) { ret[0] = []; ret[0][0] = d[i]; }
//   console.log(ret);
// }

