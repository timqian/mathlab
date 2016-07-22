// export default function Complex(x,y) { this.x = x; this.y = y; }
// // function t(x,y) { return new numeric.Complex(x,y); }

// function Complexbinop(rr,rc,cr,cc,setup) {
//     if(typeof setup !== "string") {
//         var k;
//         setup = '';
//         for(k in numeric) {
//             if(numeric.hasOwnProperty(k) && (rr.indexOf(k)>=0 || rc.indexOf(k)>=0 || cr.indexOf(k)>=0 || cc.indexOf(k)>=0) && k.length>1) {
//                 setup += 'var '+k+' = numeric.'+k+';\n';
//             }
//         }
//     }
//     return Function(['y'],
//             'var x = this;\n'+
//             'if(!(y instanceof numeric.Complex)) { y = new numeric.Complex(y); }\n'+
//             setup+'\n'+
//             'if(x.y) {'+
//             '  if(y.y) {'+
//             '    return new numeric.Complex('+cc+');\n'+
//             '  }\n'+
//             '  return new numeric.Complex('+cr+');\n'+
//             '}\n'+
//             'if(y.y) {\n'+
//             '  return new numeric.Complex('+rc+');\n'+
//             '}\n'+
//             'return new numeric.Complex('+rr+');\n'
//     );
// }

// Complex.prototype.add = numeric.Complexbinop(
//         'add(x.x,y.x)',
//         'add(x.x,y.x),y.y',
//         'add(x.x,y.x),x.y',
//         'add(x.x,y.x),add(x.y,y.y)');

// Complex.prototype.sub = numeric.Complexbinop(
//         'sub(x.x,y.x)',
//         'sub(x.x,y.x),neg(y.y)',
//         'sub(x.x,y.x),x.y',
//         'sub(x.x,y.x),sub(x.y,y.y)');

// Complex.prototype.mul = numeric.Complexbinop(
//         'mul(x.x,y.x)',
//         'mul(x.x,y.x),mul(x.x,y.y)',
//         'mul(x.x,y.x),mul(x.y,y.x)',
//         'sub(mul(x.x,y.x),mul(x.y,y.y)),add(mul(x.x,y.y),mul(x.y,y.x))');


// Complex.prototype.reciprocal = function reciprocal() {
//     var mul = numeric.mul, div = numeric.div;
//     if(this.y) {
//         var d = numeric.add(mul(this.x,this.x),mul(this.y,this.y));
//         return new numeric.Complex(div(this.x,d),div(numeric.neg(this.y),d));
//     }
//     return new Complex(div(1,this.x));
// }

// Complex.prototype.div = function div(y) {
//     if(!(y instanceof numeric.Complex)) y = new numeric.Complex(y);
//     if(y.y) { return this.mul(y.reciprocal()); }
//     var div = numeric.div;
//     if(this.y) { return new numeric.Complex(div(this.x,y.x),div(this.y,y.x)); }
//     return new numeric.Complex(div(this.x,y.x));
// }

// Complex.prototype.dot = numeric.Complexbinop(
//         'dot(x.x,y.x)',
//         'dot(x.x,y.x),dot(x.x,y.y)',
//         'dot(x.x,y.x),dot(x.y,y.x)',
//         'sub(dot(x.x,y.x),dot(x.y,y.y)),add(dot(x.x,y.y),dot(x.y,y.x))'
//         );

// Complex.prototype.transpose = function transpose() {
//     var t = numeric.transpose, x = this.x, y = this.y;
//     if(y) { return new numeric.Complex(t(x),t(y)); }
//     return new numeric.Complex(t(x));
// }

// Complex.prototype.transjugate = function transjugate() {
//     var t = numeric.transpose, x = this.x, y = this.y;
//     if(y) { return new numeric.Complex(t(x),numeric.negtranspose(y)); }
//     return new numeric.Complex(t(x));
// }

// function Complexunop(r,c,s) {
//     if(typeof s !== "string") { s = ''; }
//     return Function(
//             'var x = this;\n'+
//             s+'\n'+
//             'if(x.y) {'+
//             '  '+c+';\n'+
//             '}\n'+
//             r+';\n'
//     );
// }


// Complex.prototype.exp = numeric.Complexunop(
//         'return new numeric.Complex(ex)',
//         'return new numeric.Complex(mul(cos(x.y),ex),mul(sin(x.y),ex))',
//         'var ex = numeric.exp(x.x), cos = numeric.cos, sin = numeric.sin, mul = numeric.mul;');

// Complex.prototype.conj = numeric.Complexunop(
//         'return new numeric.Complex(x.x);',
//         'return new numeric.Complex(x.x,numeric.neg(x.y));');

// Complex.prototype.neg = numeric.Complexunop(
//         'return new numeric.Complex(neg(x.x));',
//         'return new numeric.Complex(neg(x.x),neg(x.y));',
//         'var neg = numeric.neg;');

// Complex.prototype.sin = numeric.Complexunop(
//         'return new numeric.Complex(numeric.sin(x.x))',
//         'return x.exp().sub(x.neg().exp()).div(new numeric.Complex(0,2));');

// Complex.prototype.cos = numeric.Complexunop(
//         'return new numeric.Complex(numeric.cos(x.x))',
//         'return x.exp().add(x.neg().exp()).div(2);');

// Complex.prototype.abs = numeric.Complexunop(
//         'return new numeric.Complex(numeric.abs(x.x));',
//         'return new numeric.Complex(numeric.sqrt(numeric.add(mul(x.x,x.x),mul(x.y,x.y))));',
//         'var mul = numeric.mul;');

// Complex.prototype.log = numeric.Complexunop(
//         'return new numeric.Complex(numeric.log(x.x));',
//         'var theta = new numeric.Complex(numeric.atan2(x.y,x.x)), r = x.abs();\n'+
//         'return new numeric.Complex(numeric.log(r.x),theta.x);');

// Complex.prototype.norm2 = numeric.Complexunop(
//         'return numeric.norm2(x.x);',
//         'var f = numeric.norm2Squared;\n'+
//         'return Math.sqrt(f(x.x)+f(x.y));');

// Complex.prototype.inv = function inv() {
//     var A = this;
//     if(typeof A.y === "undefined") { return new numeric.Complex(numeric.inv(A.x)); }
//     var n = A.x.length, i, j, k;
//     var Rx = numeric.identity(n),Ry = numeric.rep([n,n],0);
//     var Ax = numeric.clone(A.x), Ay = numeric.clone(A.y);
//     var Aix, Aiy, Ajx, Ajy, Rix, Riy, Rjx, Rjy;
//     var i,j,k,d,d1,ax,ay,bx,by,temp;
//     for(i=0;i<n;i++) {
//         ax = Ax[i][i]; ay = Ay[i][i];
//         d = ax*ax+ay*ay;
//         k = i;
//         for(j=i+1;j<n;j++) {
//             ax = Ax[j][i]; ay = Ay[j][i];
//             d1 = ax*ax+ay*ay;
//             if(d1 > d) { k=j; d = d1; }
//         }
//         if(k!==i) {
//             temp = Ax[i]; Ax[i] = Ax[k]; Ax[k] = temp;
//             temp = Ay[i]; Ay[i] = Ay[k]; Ay[k] = temp;
//             temp = Rx[i]; Rx[i] = Rx[k]; Rx[k] = temp;
//             temp = Ry[i]; Ry[i] = Ry[k]; Ry[k] = temp;
//         }
//         Aix = Ax[i]; Aiy = Ay[i];
//         Rix = Rx[i]; Riy = Ry[i];
//         ax = Aix[i]; ay = Aiy[i];
//         for(j=i+1;j<n;j++) {
//             bx = Aix[j]; by = Aiy[j];
//             Aix[j] = (bx*ax+by*ay)/d;
//             Aiy[j] = (by*ax-bx*ay)/d;
//         }
//         for(j=0;j<n;j++) {
//             bx = Rix[j]; by = Riy[j];
//             Rix[j] = (bx*ax+by*ay)/d;
//             Riy[j] = (by*ax-bx*ay)/d;
//         }
//         for(j=i+1;j<n;j++) {
//             Ajx = Ax[j]; Ajy = Ay[j];
//             Rjx = Rx[j]; Rjy = Ry[j];
//             ax = Ajx[i]; ay = Ajy[i];
//             for(k=i+1;k<n;k++) {
//                 bx = Aix[k]; by = Aiy[k];
//                 Ajx[k] -= bx*ax-by*ay;
//                 Ajy[k] -= by*ax+bx*ay;
//             }
//             for(k=0;k<n;k++) {
//                 bx = Rix[k]; by = Riy[k];
//                 Rjx[k] -= bx*ax-by*ay;
//                 Rjy[k] -= by*ax+bx*ay;
//             }
//         }
//     }
//     for(i=n-1;i>0;i--) {
//         Rix = Rx[i]; Riy = Ry[i];
//         for(j=i-1;j>=0;j--) {
//             Rjx = Rx[j]; Rjy = Ry[j];
//             ax = Ax[j][i]; ay = Ay[j][i];
//             for(k=n-1;k>=0;k--) {
//                 bx = Rix[k]; by = Riy[k];
//                 Rjx[k] -= ax*bx - ay*by;
//                 Rjy[k] -= ax*by + ay*bx;
//             }
//         }
//     }
//     return new numeric.Complex(Rx,Ry);
// }

// Complex.prototype.get = function get(i) {
//     var x = this.x, y = this.y, k = 0, ik, n = i.length;
//     if(y) {
//         while(k<n) {
//             ik = i[k];
//             x = x[ik];
//             y = y[ik];
//             k++;
//         }
//         return new numeric.Complex(x,y);
//     }
//     while(k<n) {
//         ik = i[k];
//         x = x[ik];
//         k++;
//     }
//     return new numeric.Complex(x);
// }

// Complex.prototype.set = function set(i,v) {
//     var x = this.x, y = this.y, k = 0, ik, n = i.length, vx = v.x, vy = v.y;
//     if(n===0) {
//         if(vy) { this.y = vy; }
//         else if(y) { this.y = undefined; }
//         this.x = x;
//         return this;
//     }
//     if(vy) {
//         if(y) { /* ok */ }
//         else {
//             y = numeric.rep(numeric.dim(x),0);
//             this.y = y;
//         }
//         while(k<n-1) {
//             ik = i[k];
//             x = x[ik];
//             y = y[ik];
//             k++;
//         }
//         ik = i[k];
//         x[ik] = vx;
//         y[ik] = vy;
//         return this;
//     }
//     if(y) {
//         while(k<n-1) {
//             ik = i[k];
//             x = x[ik];
//             y = y[ik];
//             k++;
//         }
//         ik = i[k];
//         x[ik] = vx;
//         if(vx instanceof Array) y[ik] = numeric.rep(numeric.dim(vx),0);
//         else y[ik] = 0;
//         return this;
//     }
//     while(k<n-1) {
//         ik = i[k];
//         x = x[ik];
//         k++;
//     }
//     ik = i[k];
//     x[ik] = vx;
//     return this;
// }

// Complex.prototype.getRows = function getRows(i0,i1) {
//     var n = i1-i0+1, j;
//     var rx = Array(n), ry, x = this.x, y = this.y;
//     for(j=i0;j<=i1;j++) { rx[j-i0] = x[j]; }
//     if(y) {
//         ry = Array(n);
//         for(j=i0;j<=i1;j++) { ry[j-i0] = y[j]; }
//         return new numeric.Complex(rx,ry);
//     }
//     return new numeric.Complex(rx);
// }

// Complex.prototype.setRows = function setRows(i0,i1,A) {
//     var j;
//     var rx = this.x, ry = this.y, x = A.x, y = A.y;
//     for(j=i0;j<=i1;j++) { rx[j] = x[j-i0]; }
//     if(y) {
//         if(!ry) { ry = numeric.rep(numeric.dim(rx),0); this.y = ry; }
//         for(j=i0;j<=i1;j++) { ry[j] = y[j-i0]; }
//     } else if(ry) {
//         for(j=i0;j<=i1;j++) { ry[j] = numeric.rep([x[j-i0].length],0); }
//     }
//     return this;
// }

// Complex.prototype.getRow = function getRow(k) {
//     var x = this.x, y = this.y;
//     if(y) { return new numeric.Complex(x[k],y[k]); }
//     return new numeric.Complex(x[k]);
// }

// Complex.prototype.setRow = function setRow(i,v) {
//     var rx = this.x, ry = this.y, x = v.x, y = v.y;
//     rx[i] = x;
//     if(y) {
//         if(!ry) { ry = numeric.rep(numeric.dim(rx),0); this.y = ry; }
//         ry[i] = y;
//     } else if(ry) {
//         ry = numeric.rep([x.length],0);
//     }
//     return this;
// }

// Complex.prototype.getBlock = function getBlock(from,to) {
//     var x = this.x, y = this.y, b = numeric.getBlock;
//     if(y) { return new numeric.Complex(b(x,from,to),b(y,from,to)); }
//     return new numeric.Complex(b(x,from,to));
// }

// Complex.prototype.setBlock = function setBlock(from,to,A) {
//     if(!(A instanceof numeric.Complex)) A = new numeric.Complex(A);
//     var x = this.x, y = this.y, b = numeric.setBlock, Ax = A.x, Ay = A.y;
//     if(Ay) {
//         if(!y) { this.y = numeric.rep(numeric.dim(this),0); y = this.y; }
//         b(x,from,to,Ax);
//         b(y,from,to,Ay);
//         return this;
//     }
//     b(x,from,to,Ax);
//     if(y) b(y,from,to,numeric.rep(numeric.dim(Ax),0));
// }

// Complex.rep = function rep(s,v) {
//     var Complex = numeric.Complex;
//     if(!(v instanceof Complex)) v = new Complex(v);
//     var x = v.x, y = v.y, r = numeric.rep;
//     if(y) return new Complex(r(s,x),r(s,y));
//     return new Complex(r(s,x));
// }

// Complex.diag = function diag(d) {
//     if(!(d instanceof numeric.Complex)) d = new numeric.Complex(d);
//     var x = d.x, y = d.y, diag = numeric.diag;
//     if(y) return new numeric.Complex(diag(x),diag(y));
//     return new numeric.Complex(diag(x));
// }

// Complex.eig = function eig() {
//     if(this.y) { throw new Error('eig: not implemented for complex matrices.'); }
//     return numeric.eig(this.x);
// }


// Complex.prototype.getDiag = function getDiag() {
//     var n = numeric;
//     var x = this.x, y = this.y;
//     if(y) { return new n.Complex(n.getDiag(x),n.getDiag(y)); }
//     return new n.Complex(n.getDiag(x));
// }