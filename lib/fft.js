'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fft = fft;
exports.ifft = ifft;

var _rep = require('./rep');

var _rep2 = _interopRequireDefault(_rep);

var _mul = require('./mul');

var _mul2 = _interopRequireDefault(_mul);

var _clone = require('./clone');

var _clone2 = _interopRequireDefault(_clone);

var _neg = require('./neg');

var _neg2 = _interopRequireDefault(_neg);

var _Complex = require('./Complex');

var _Complex2 = _interopRequireDefault(_Complex);

var _div = require('./div');

var _div2 = _interopRequireDefault(_div);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Fast Fourier transform 
 * 
 * @export
 * @param {any} m
 * @returns
 */
function fft(m) {
    switch (m.constructor.name) {
        case 'Complex':
            return cfft(m);
        case 'Sparse':
            throw new Error('mathlab.fft: fft for sparse matrix not done yet');
        default:
            return cfft(new _Complex2.default(m));
    }
}

/**
 * Inverse FFT
 * 
 * @export
 * @param {any} m
 * @returns
 */
function ifft(m) {
    switch (m.constructor.name) {
        case 'Complex':
            return cifft(m);
        case 'Sparse':
            throw new Error('mathlab.ifft: ifft for sparse matrix not done yet');
        default:
            return cifft(new _Complex2.default(m));
    }
}

function cfft(cplx) {
    var x = cplx.re,
        y = cplx.im;
    var n = x.length,
        log = Math.log,
        log2 = log(2),
        p = Math.ceil(log(2 * n - 1) / log2),
        m = Math.pow(2, p);
    var cx = (0, _rep2.default)([m], 0),
        cy = (0, _rep2.default)([m], 0),
        cos = Math.cos,
        sin = Math.sin;
    var k,
        c = -3.141592653589793238462643383279502884197169399375105820 / n,
        t;
    var a = (0, _rep2.default)([m], 0),
        b = (0, _rep2.default)([m], 0),
        nhalf = Math.floor(n / 2);
    for (k = 0; k < n; k++) {
        a[k] = x[k];
    }if (typeof y !== "undefined") for (k = 0; k < n; k++) {
        b[k] = y[k];
    }cx[0] = 1;
    for (k = 1; k <= m / 2; k++) {
        t = c * k * k;
        cx[k] = cos(t);
        cy[k] = sin(t);
        cx[m - k] = cos(t);
        cy[m - k] = sin(t);
    }
    var X = new _Complex2.default(a, b),
        Y = new _Complex2.default(cx, cy);
    X = (0, _mul2.default)(X, Y);
    convpow2(X.re, X.im, (0, _clone2.default)(Y.re), (0, _neg2.default)(Y.im));
    X = (0, _mul2.default)(X, Y);
    X.re.length = n;
    X.im.length = n;
    return X;
}

function cifft(cplx) {
    var x = cplx.re,
        y = cplx.im;
    var n = x.length,
        log = Math.log,
        log2 = log(2),
        p = Math.ceil(log(2 * n - 1) / log2),
        m = Math.pow(2, p);
    var cx = (0, _rep2.default)([m], 0),
        cy = (0, _rep2.default)([m], 0),
        cos = Math.cos,
        sin = Math.sin;
    var k,
        c = 3.141592653589793238462643383279502884197169399375105820 / n,
        t;
    var a = (0, _rep2.default)([m], 0),
        b = (0, _rep2.default)([m], 0),
        nhalf = Math.floor(n / 2);
    for (k = 0; k < n; k++) {
        a[k] = x[k];
    }if (typeof y !== "undefined") for (k = 0; k < n; k++) {
        b[k] = y[k];
    }cx[0] = 1;
    for (k = 1; k <= m / 2; k++) {
        t = c * k * k;
        cx[k] = cos(t);
        cy[k] = sin(t);
        cx[m - k] = cos(t);
        cy[m - k] = sin(t);
    }
    var X = new _Complex2.default(a, b),
        Y = new _Complex2.default(cx, cy);
    X = (0, _mul2.default)(X, Y);
    convpow2(X.re, X.im, (0, _clone2.default)(Y.re), (0, _neg2.default)(Y.im));
    X = (0, _mul2.default)(X, Y);
    X.re.length = n;
    X.im.length = n;
    return (0, _div2.default)(X, n);
}

function fftpow2(x, y) {
    var n = x.length;
    if (n === 1) return;
    var cos = Math.cos,
        sin = Math.sin,
        i,
        j;
    var xe = Array(n / 2),
        ye = Array(n / 2),
        xo = Array(n / 2),
        yo = Array(n / 2);
    j = n / 2;
    for (i = n - 1; i !== -1; --i) {
        --j;
        xo[j] = x[i];
        yo[j] = y[i];
        --i;
        xe[j] = x[i];
        ye[j] = y[i];
    }
    fftpow2(xe, ye);
    fftpow2(xo, yo);
    j = n / 2;
    var t,
        k = -6.2831853071795864769252867665590057683943387987502116419 / n,
        ci,
        si;
    for (i = n - 1; i !== -1; --i) {
        --j;
        if (j === -1) j = n / 2 - 1;
        t = k * i;
        ci = cos(t);
        si = sin(t);
        x[i] = xe[j] + ci * xo[j] - si * yo[j];
        y[i] = ye[j] + ci * yo[j] + si * xo[j];
    }
}

function _ifftpow2(x, y) {
    var n = x.length;
    if (n === 1) return;
    var cos = Math.cos,
        sin = Math.sin,
        i,
        j;
    var xe = Array(n / 2),
        ye = Array(n / 2),
        xo = Array(n / 2),
        yo = Array(n / 2);
    j = n / 2;
    for (i = n - 1; i !== -1; --i) {
        --j;
        xo[j] = x[i];
        yo[j] = y[i];
        --i;
        xe[j] = x[i];
        ye[j] = y[i];
    }
    _ifftpow2(xe, ye);
    _ifftpow2(xo, yo);
    j = n / 2;
    var t,
        k = 6.2831853071795864769252867665590057683943387987502116419 / n,
        ci,
        si;
    for (i = n - 1; i !== -1; --i) {
        --j;
        if (j === -1) j = n / 2 - 1;
        t = k * i;
        ci = cos(t);
        si = sin(t);
        x[i] = xe[j] + ci * xo[j] - si * yo[j];
        y[i] = ye[j] + ci * yo[j] + si * xo[j];
    }
}

function ifftpow2(x, y) {
    _ifftpow2(x, y);
    // x = div(x, x.length);
    // y = div(y, y.length);
    x.forEach(function (n, i) {
        x[i] = n / x.length;
    });
    y.forEach(function (n, i) {
        y[i] = n / y.length;
    });
}

function convpow2(ax, ay, bx, by) {
    fftpow2(ax, ay);
    fftpow2(bx, by);
    var i,
        n = ax.length,
        axi,
        bxi,
        ayi,
        byi;
    for (i = n - 1; i !== -1; --i) {
        axi = ax[i];ayi = ay[i];bxi = bx[i];byi = by[i];
        ax[i] = axi * bxi - ayi * byi;
        ay[i] = axi * byi + ayi * bxi;
    }
    ifftpow2(ax, ay);
}