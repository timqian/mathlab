import identity from './identity';
import mul from './mul';
import div from './div';
import rep from './rep';
import clone from './clone';
import neg from './neg';
import add from './add';

export default class Complex {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  reciprocal() {
    if(this.y) {
        var d = add(mul(this.x,this.x),mul(this.y,this.y));
        return new Complex(div(this.x, d),div(neg(this.y), d));
    }
    return new Complex(div(1, this.x));
  }

  fft() {
    var x = this.x, y = this.y;
    var n = x.length, log = Math.log, log2 = log(2),
        p = Math.ceil(log(2*n-1)/log2), m = Math.pow(2,p);
    var cx = rep([m],0), cy = rep([m],0), cos = Math.cos, sin = Math.sin;
    var k, c = (-3.141592653589793238462643383279502884197169399375105820/n),t;
    var a = rep([m],0), b = rep([m],0),nhalf = Math.floor(n/2);
    for(k=0;k<n;k++) a[k] = x[k];
    if(typeof y !== "undefined") for(k=0;k<n;k++) b[k] = y[k];
    cx[0] = 1;
    for(k=1;k<=m/2;k++) {
      t = c*k*k;
          console.log('X',X);cx[k] = cos(t);x
      cy[k] = sin(t);
      cx[m-k] = cos(t);
      cy[m-k] = sin(t)
    }
    var X = new Complex(a,b), Y = new Complex(cx,cy);
    X = mul(X, Y);
    convpow2(X.x, X.y, clone(Y.x), neg(Y.y));
    X = mul(X, Y);
    X.x.length = n;
    X.y.length = n;
    return X;
  }

  ifft() {
    var x = this.x, y = this.y;
    var n = x.length, log = Math.log, log2 = log(2),
        p = Math.ceil(log(2*n-1)/log2), m = Math.pow(2,p);
    var cx = rep([m],0), cy = rep([m],0), cos = Math.cos, sin = Math.sin;
    var k, c = (3.141592653589793238462643383279502884197169399375105820/n),t;
    var a = rep([m],0), b = rep([m],0),nhalf = Math.floor(n/2);
    for(k=0;k<n;k++) a[k] = x[k];
    if(typeof y !== "undefined") for(k=0;k<n;k++) b[k] = y[k];
    cx[0] = 1;
    for(k=1;k<=m/2;k++) {
      t = c*k*k;
      cx[k] = cos(t);
      cy[k] = sin(t);
      cx[m-k] = cos(t);
      cy[m-k] = sin(t)
    }
    var X = new Complex(a,b), Y = new Complex(cx,cy);
    X = mul(X, Y);
    convpow2(X.x, X.y, clone(Y.x), neg(Y.y));
    X = mul(X, Y);
    X.x.length = n;
    X.y.length = n;
    return div(X, n);
  }
}

/**
 * Generate identity complex structure matrix of given size
 * 
 * @param {Number} n
 * @returns {Object}
 * @example 
 * 
 * Complex.identity(2)
 * // {x: [[1, 0], [0, 1]], y: undefined}
 */
Complex.identity = function(n) {
  return new Complex(identity(n));
}



function fftpow2(x,y) {
    var n = x.length;
    if(n === 1) return;
    var cos = Math.cos, sin = Math.sin, i,j;
    var xe = Array(n/2), ye = Array(n/2), xo = Array(n/2), yo = Array(n/2);
    j = n/2;
    for(i=n-1;i!==-1;--i) {
        --j;
        xo[j] = x[i];
        yo[j] = y[i];
        --i;
        xe[j] = x[i];
        ye[j] = y[i];
    }
    fftpow2(xe,ye);
    fftpow2(xo,yo);
    j = n/2;
    var t,k = (-6.2831853071795864769252867665590057683943387987502116419/n),ci,si;
    for(i=n-1;i!==-1;--i) {
        --j;
        if(j === -1) j = n/2-1;
        t = k*i;
        ci = cos(t);
        si = sin(t);
        x[i] = xe[j] + ci*xo[j] - si*yo[j];
        y[i] = ye[j] + ci*yo[j] + si*xo[j];
    }
}

function _ifftpow2(x,y) {
    var n = x.length;
    if(n === 1) return;
    var cos = Math.cos, sin = Math.sin, i,j;
    var xe = Array(n/2), ye = Array(n/2), xo = Array(n/2), yo = Array(n/2);
    j = n/2;
    for(i=n-1;i!==-1;--i) {
        --j;
        xo[j] = x[i];
        yo[j] = y[i];
        --i;
        xe[j] = x[i];
        ye[j] = y[i];
    }
    _ifftpow2(xe,ye);
    _ifftpow2(xo,yo);
    j = n/2;
    var t,k = (6.2831853071795864769252867665590057683943387987502116419/n),ci,si;
    for(i=n-1;i!==-1;--i) {
        --j;
        if(j === -1) j = n/2-1;
        t = k*i;
        ci = cos(t);
        si = sin(t);
        x[i] = xe[j] + ci*xo[j] - si*yo[j];
        y[i] = ye[j] + ci*yo[j] + si*xo[j];
    }
}

function ifftpow2(x,y) {
    _ifftpow2(x, y);
    // x = div(x, x.length);
    // y = div(y, y.length);
    x.forEach((n, i) => {x[i] = n / x.length});
    y.forEach((n, i) => {y[i] = n / y.length});
}

function convpow2(ax,ay,bx,by) {
    fftpow2(ax,ay);
    fftpow2(bx,by);
    var i,n = ax.length,axi,bxi,ayi,byi;
    for(i=n-1;i!==-1;--i) {
        axi = ax[i]; ayi = ay[i]; bxi = bx[i]; byi = by[i];
        ax[i] = axi*bxi-ayi*byi;
        ay[i] = axi*byi+ayi*bxi;
    }
    ifftpow2(ax,ay);
}
