import identity from './identity';
import mul from './mul';
import div from './div';
import rep from './rep';
import clone from './clone';
import neg from './neg';
import add from './add';
import getBlock from './getBlock';
import setBlock from './setBlock';
import transpose from './transpose';

export default class Complex {
  constructor(re, im) {
    this.re = re;
    this.im = im;
  }

  reciprocal() {
    if(this.im) {
        var d = add(mul(this.re,this.re),mul(this.im,this.im));
        return new Complex(div(this.re, d),div(neg(this.im), d));
    }
    return new Complex(div(1, this.re));
  }

  transjugate() {
    var t = transpose, x = this.re, y = this.im;
    if(y) { return new Complex(t(x), negtranspose(y)); }
    return new Complex(t(x));
  }
  
  get(i) {
    var x = this.re, y = this.im, k = 0, ik, n = i.length;
    if(y) {
        while(k<n) {
            ik = i[k];
            x = x[ik];
            y = y[ik];
            k++;
        }
        return new Complex(x,y);
    }
    while(k<n) {
        ik = i[k];
        x = x[ik];
        k++;
    }
    return new Complex(x);
  }
  
  set(i,v) {
    var x = this.re, y = this.im, k = 0, ik, n = i.length, vx = v.re, vy = v.im;
    if(n===0) {
        if(vy) { this.im = vy; }
        else if(y) { this.im = undefined; }
        this.re = x;
        return this;
    }
    if(vy) {
        if(y) { /* ok */ }
        else {
            y = rep(dim(x),0);
            this.im = y;
        }
        while(k<n-1) {
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
    if(y) {
        while(k<n-1) {
            ik = i[k];
            x = x[ik];
            y = y[ik];
            k++;
        }
        ik = i[k];
        x[ik] = vx;
        if(vx instanceof Array) y[ik] = rep(dim(vx),0);
        else y[ik] = 0;
        return this;
    }
    while(k<n-1) {
        ik = i[k];
        x = x[ik];
        k++;
    }
    ik = i[k];
    x[ik] = vx;
    return this;
  }

  getRows(i0,i1) {
    var n = i1-i0+1, j;
    var rx = Array(n), ry, x = this.re, y = this.im;
    for(j=i0;j<=i1;j++) { rx[j-i0] = x[j]; }
    if(y) {
        ry = Array(n);
        for(j=i0;j<=i1;j++) { ry[j-i0] = y[j]; }
        return new Complex(rx,ry);
    }
    return new Complex(rx);
  }

  setRows(i0,i1,A) {
    var j;
    var rx = this.re, ry = this.im, x = A.re, y = A.im;
    for(j=i0;j<=i1;j++) { rx[j] = x[j-i0]; }
    if(y) {
        if(!ry) { ry = rep(dim(rx),0); this.im = ry; }
        for(j=i0;j<=i1;j++) { ry[j] = y[j-i0]; }
    } else if(ry) {
        for(j=i0;j<=i1;j++) { ry[j] = rep([x[j-i0].length],0); }
    }
    return this;
  }

  getRow(k) {
    var x = this.re, y = this.im;
    if(y) { return new Complex(x[k],y[k]); }
    return new Complex(x[k]);
  }
  setRow(i,v) {
    var rx = this.re, ry = this.im, x = v.re, y = v.im;
    rx[i] = x;
    if(y) {
        if(!ry) { ry = rep(dim(rx),0); this.im = ry; }
        ry[i] = y;
    } else if(ry) {
        ry = rep([x.length],0);
    }
    return this;
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
