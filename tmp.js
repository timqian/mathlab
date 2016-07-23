
  // reciprocal: function reciprocal() {
  //   "use strict";
  //   var mul = mul,
  //     div = div;
  //   if (this.y) {
  //     var d = add(mul(this.x, this.x), mul(this.y, this.y));
  //     return new Complex(div(this.x, d), div(neg(this.y), d));
  //   }
  //   return new Complex(div(1, this.x));
  // },
  // div: function div(y) {
  //   "use strict";
  //   if (!(y instanceof Complex)) y = new Complex(y);
  //   if (y.y) {
  //     return this.mul(y.reciprocal());
  //   }
  //   var div = div;
  //   if (this.y) {
  //     return new Complex(div(this.x, y.x), div(this.y, y.x));
  //   }
  //   return new Complex(div(this.x, y.x));
  // },
  dot: function anonymous(y) {
    var x = this;
    if (!(y instanceof Complex)) { y = new Complex(y); }
    var dot = dot;
    var add = add;
    var sub = sub;
    if (x.y) {
      if (y.y) {
        return new Complex(sub(dot(x.x, y.x), dot(x.y, y.y)), add(dot(x.x, y.y), dot(x.y, y.x)));
      }
      return new Complex(dot(x.x, y.x), dot(x.y, y.x));
    }
    if (y.y) {
      return new Complex(dot(x.x, y.x), dot(x.x, y.y));
    }
    return new Complex(dot(x.x, y.x));
  },
  transpose: function transpose() {
    "use strict";
    var t = transpose,
      x = this.x,
      y = this.y;
    if (y) {
      return new Complex(t(x), t(y));
    }
    return new Complex(t(x));
  },
  transjugate: function transjugate() {
    "use strict";
    var t = transpose,
      x = this.x,
      y = this.y;
    if (y) {
      return new Complex(t(x), negtranspose(y));
    }
    return new Complex(t(x));
  },
  conj: function anonymous() {
    var x = this;
    if (x.y) {
      return new Complex(x.x, neg(x.y));
    }
    return new Complex(x.x);
  },

  norm2: function anonymous() {
    var x = this;
    if (x.y) {
      var f = norm2Squared;
      return Math.sqrt(f(x.x) + f(x.y));
    }
    return norm2(x.x);
  },
  inv: function inv() {
    "use strict";
    var A = this;
    if (typeof A.y === "undefined") {
      return new Complex(inv(A.x));
    }
    var n = A.x.length,
      i, j, k;
    var Rx = identity(n),
      Ry = rep([n, n], 0);
    var Ax = clone(A.x),
      Ay = clone(A.y);
    var Aix, Aiy, Ajx, Ajy, Rix, Riy, Rjx, Rjy;
    var i, j, k, d, d1, ax, ay, bx, by, temp;
    for (i = 0; i < n; i++) {
      ax = Ax[i][i];
      ay = Ay[i][i];
      d = ax * ax + ay * ay;
      k = i;
      for (j = i + 1; j < n; j++) {
        ax = Ax[j][i];
        ay = Ay[j][i];
        d1 = ax * ax + ay * ay;
        if (d1 > d) {
          k = j;
          d = d1;
        }
      }
      if (k !== i) {
        temp = Ax[i];
        Ax[i] = Ax[k];
        Ax[k] = temp;
        temp = Ay[i];
        Ay[i] = Ay[k];
        Ay[k] = temp;
        temp = Rx[i];
        Rx[i] = Rx[k];
        Rx[k] = temp;
        temp = Ry[i];
        Ry[i] = Ry[k];
        Ry[k] = temp;
      }
      Aix = Ax[i];
      Aiy = Ay[i];
      Rix = Rx[i];
      Riy = Ry[i];
      ax = Aix[i];
      ay = Aiy[i];
      for (j = i + 1; j < n; j++) {
        bx = Aix[j];
        by = Aiy[j];
        Aix[j] = (bx * ax + by * ay) / d;
        Aiy[j] = (by * ax - bx * ay) / d;
      }
      for (j = 0; j < n; j++) {
        bx = Rix[j];
        by = Riy[j];
        Rix[j] = (bx * ax + by * ay) / d;
        Riy[j] = (by * ax - bx * ay) / d;
      }
      for (j = i + 1; j < n; j++) {
        Ajx = Ax[j];
        Ajy = Ay[j];
        Rjx = Rx[j];
        Rjy = Ry[j];
        ax = Ajx[i];
        ay = Ajy[i];
        for (k = i + 1; k < n; k++) {
          bx = Aix[k];
          by = Aiy[k];
          Ajx[k] -= bx * ax - by * ay;
          Ajy[k] -= by * ax + bx * ay;
        }
        for (k = 0; k < n; k++) {
          bx = Rix[k];
          by = Riy[k];
          Rjx[k] -= bx * ax - by * ay;
          Rjy[k] -= by * ax + bx * ay;
        }
      }
    }
    for (i = n - 1; i > 0; i--) {
      Rix = Rx[i];
      Riy = Ry[i];
      for (j = i - 1; j >= 0; j--) {
        Rjx = Rx[j];
        Rjy = Ry[j];
        ax = Ax[j][i];
        ay = Ay[j][i];
        for (k = n - 1; k >= 0; k--) {
          bx = Rix[k];
          by = Riy[k];
          Rjx[k] -= ax * bx - ay * by;
          Rjy[k] -= ax * by + ay * bx;
        }
      }
    }
    return new Complex(Rx, Ry);
  },
  get: function get(i) {
    "use strict";
    var x = this.x,
      y = this.y,
      k = 0,
      ik, n = i.length;
    if (y) {
      while (k < n) {
        ik = i[k];
        x = x[ik];
        y = y[ik];
        k++;
      }
      return new Complex(x, y);
    }
    while (k < n) {
      ik = i[k];
      x = x[ik];
      k++;
    }
    return new Complex(x);
  },
  set: function set(i, v) {
    "use strict";
    var x = this.x,
      y = this.y,
      k = 0,
      ik, n = i.length,
      vx = v.x,
      vy = v.y;
    if (n === 0) {
      if (vy) { this.y = vy; } else if (y) { this.y = undefined; }
      this.x = x;
      return this;
    }
    if (vy) {
      if (y) { /* ok */ } else {
        y = rep(dim(x), 0);
        this.y = y;
      }
      while (k < n - 1) {
        ik = i[k];
        x = x[ik];
        y = y[ik];
        k++;
      }
      ik = i[k];
      x[ik] = vx;
      y[ik] = vy;
      return this;
    }
    if (y) {
      while (k < n - 1) {
        ik = i[k];
        x = x[ik];
        y = y[ik];
        k++;
      }
      ik = i[k];
      x[ik] = vx;
      if (vx instanceof Array) y[ik] = rep(dim(vx), 0);
      else y[ik] = 0;
      return this;
    }
    while (k < n - 1) {
      ik = i[k];
      x = x[ik];
      k++;
    }
    ik = i[k];
    x[ik] = vx;
    return this;
  },
  getRows: function getRows(i0, i1) {
    "use strict";
    var n = i1 - i0 + 1,
      j;
    var rx = Array(n),
      ry, x = this.x,
      y = this.y;
    for (j = i0; j <= i1; j++) { rx[j - i0] = x[j]; }
    if (y) {
      ry = Array(n);
      for (j = i0; j <= i1; j++) { ry[j - i0] = y[j]; }
      return new Complex(rx, ry);
    }
    return new Complex(rx);
  },
  setRows: function setRows(i0, i1, A) {
    "use strict";
    var j;
    var rx = this.x,
      ry = this.y,
      x = A.x,
      y = A.y;
    for (j = i0; j <= i1; j++) { rx[j] = x[j - i0]; }
    if (y) {
      if (!ry) {
        ry = rep(dim(rx), 0);
        this.y = ry;
      }
      for (j = i0; j <= i1; j++) { ry[j] = y[j - i0]; }
    } else if (ry) {
      for (j = i0; j <= i1; j++) { ry[j] = rep([x[j - i0].length], 0); }
    }
    return this;
  },
  getRow: function getRow(k) {
    "use strict";
    var x = this.x,
      y = this.y;
    if (y) {
      return new Complex(x[k], y[k]);
    }
    return new Complex(x[k]);
  },
  setRow: function setRow(i, v) {
    "use strict";
    var rx = this.x,
      ry = this.y,
      x = v.x,
      y = v.y;
    rx[i] = x;
    if (y) {
      if (!ry) {
        ry = rep(dim(rx), 0);
        this.y = ry;
      }
      ry[i] = y;
    } else if (ry) { ry = rep([x.length], 0); }
    return this;
  },
  getBlock: function getBlock(from, to) {
    "use strict";
    var x = this.x,
      y = this.y,
      b = getBlock;
    if (y) {
      return new Complex(b(x, from, to), b(y, from, to));
    }
    return new Complex(b(x, from, to));
  },
  setBlock: function setBlock(from, to, A) {
    "use strict";
    if (!(A instanceof Complex)) A = new Complex(A);
    var x = this.x,
      y = this.y,
      b = setBlock,
      Ax = A.x,
      Ay = A.y;
    if (Ay) {
      if (!y) {
        this.y = rep(dim(this), 0);
        y = this.y;
      }
      b(x, from, to, Ax);
      b(y, from, to, Ay);
      return this;
    }
    b(x, from, to, Ax);
    if (y) b(y, from, to, rep(dim(Ax), 0));
  },
  getDiag: function getDiag() {
    "use strict";
    var n = numeric;
    var x = this.x,
      y = this.y;
    if (y) {
      return new n.Complex(n.getDiag(x), n.getDiag(y));
    }
    return new n.Complex(n.getDiag(x));
  }