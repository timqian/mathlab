import rep from './rep';
import mul from './mul';
import clone from './clone';
import neg from './neg';
import Complex from './Complex';
import div from './div';

/**
 * Fast Fourier transform 
 * 
 * @export
 * @param {any} m
 * @returns
 */
export function fft(m) {
  switch (m.constructor.name) {
    case 'Complex':
      return cfft(m);
    case 'Sparse':
        throw new Error('mathlab.fft: fft for sparse matrix not done yet')
    default:
      return cfft(new Complex(m));
  }
}


/**
 * Inverse FFT
 * 
 * @export
 * @param {any} m
 * @returns
 */
export function ifft(m) {
  switch (m.constructor.name) {
    case 'Complex':
      return cifft(m);
    case 'Sparse':
        throw new Error('mathlab.ifft: ifft for sparse matrix not done yet')
    default:
      return cifft(new Complex(m));
  }
}



function cfft(cplx) {
	var x = cplx.re, y = cplx.im;
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
		cx[k] = cos(t);
		cy[k] = sin(t);
		cx[m-k] = cos(t);
		cy[m-k] = sin(t)
	}
	var X = new Complex(a,b), Y = new Complex(cx,cy);
	X = mul(X, Y);
	convpow2(X.re, X.im, clone(Y.re), neg(Y.im));
	X = mul(X, Y);
	X.re.length = n;
	X.im.length = n;
	return X;
}

function cifft(cplx) {
	var x = cplx.re, y = cplx.im;
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
	convpow2(X.re, X.im, clone(Y.re), neg(Y.im));
	X = mul(X, Y);
	X.re.length = n;
	X.im.length = n;
	return div(X, n);
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

