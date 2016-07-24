'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _identity2 = require('./identity');

var _identity3 = _interopRequireDefault(_identity2);

var _mul = require('./mul');

var _mul2 = _interopRequireDefault(_mul);

var _div = require('./div');

var _div2 = _interopRequireDefault(_div);

var _rep = require('./rep');

var _rep2 = _interopRequireDefault(_rep);

var _clone = require('./clone');

var _clone2 = _interopRequireDefault(_clone);

var _neg = require('./neg');

var _neg2 = _interopRequireDefault(_neg);

var _add = require('./add');

var _add2 = _interopRequireDefault(_add);

var _getBlock2 = require('./getBlock');

var _getBlock3 = _interopRequireDefault(_getBlock2);

var _setBlock2 = require('./setBlock');

var _setBlock3 = _interopRequireDefault(_setBlock2);

var _transpose = require('./transpose');

var _transpose2 = _interopRequireDefault(_transpose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Complex = function () {
    function Complex(x, y) {
        _classCallCheck(this, Complex);

        this.x = x;
        this.y = y;
    }

    _createClass(Complex, [{
        key: 'reciprocal',
        value: function reciprocal() {
            if (this.y) {
                var d = (0, _add2.default)((0, _mul2.default)(this.x, this.x), (0, _mul2.default)(this.y, this.y));
                return new Complex((0, _div2.default)(this.x, d), (0, _div2.default)((0, _neg2.default)(this.y), d));
            }
            return new Complex((0, _div2.default)(1, this.x));
        }
    }, {
        key: 'identity',
        value: function identity(n) {
            return new Complex((0, _identity3.default)(n));
        }
    }, {
        key: 'transjugate',
        value: function transjugate() {
            var t = _transpose2.default,
                x = this.x,
                y = this.y;
            if (y) {
                return new Complex(t(x), negtranspose(y));
            }
            return new Complex(t(x));
        }
    }, {
        key: 'get',
        value: function get(i) {
            var x = this.x,
                y = this.y,
                k = 0,
                ik,
                n = i.length;
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
        }
    }, {
        key: 'set',
        value: function set(i, v) {
            var x = this.x,
                y = this.y,
                k = 0,
                ik,
                n = i.length,
                vx = v.x,
                vy = v.y;
            if (n === 0) {
                if (vy) {
                    this.y = vy;
                } else if (y) {
                    this.y = undefined;
                }
                this.x = x;
                return this;
            }
            if (vy) {
                if (y) {/* ok */} else {
                    y = (0, _rep2.default)(dim(x), 0);
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
                if (vx instanceof Array) y[ik] = (0, _rep2.default)(dim(vx), 0);else y[ik] = 0;
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
        }
    }, {
        key: 'getRows',
        value: function getRows(i0, i1) {
            var n = i1 - i0 + 1,
                j;
            var rx = Array(n),
                ry,
                x = this.x,
                y = this.y;
            for (j = i0; j <= i1; j++) {
                rx[j - i0] = x[j];
            }
            if (y) {
                ry = Array(n);
                for (j = i0; j <= i1; j++) {
                    ry[j - i0] = y[j];
                }
                return new Complex(rx, ry);
            }
            return new Complex(rx);
        }
    }, {
        key: 'setRows',
        value: function setRows(i0, i1, A) {
            var j;
            var rx = this.x,
                ry = this.y,
                x = A.x,
                y = A.y;
            for (j = i0; j <= i1; j++) {
                rx[j] = x[j - i0];
            }
            if (y) {
                if (!ry) {
                    ry = (0, _rep2.default)(dim(rx), 0);this.y = ry;
                }
                for (j = i0; j <= i1; j++) {
                    ry[j] = y[j - i0];
                }
            } else if (ry) {
                for (j = i0; j <= i1; j++) {
                    ry[j] = (0, _rep2.default)([x[j - i0].length], 0);
                }
            }
            return this;
        }
    }, {
        key: 'getRow',
        value: function getRow(k) {
            var x = this.x,
                y = this.y;
            if (y) {
                return new Complex(x[k], y[k]);
            }
            return new Complex(x[k]);
        }
    }, {
        key: 'setRow',
        value: function setRow(i, v) {
            var rx = this.x,
                ry = this.y,
                x = v.x,
                y = v.y;
            rx[i] = x;
            if (y) {
                if (!ry) {
                    ry = (0, _rep2.default)(dim(rx), 0);this.y = ry;
                }
                ry[i] = y;
            } else if (ry) {
                ry = (0, _rep2.default)([x.length], 0);
            }
            return this;
        }
    }, {
        key: 'getBlock',
        value: function getBlock(from, to) {
            var x = this.x,
                y = this.y,
                b = _getBlock3.default;
            if (y) {
                return new Complex(b(x, from, to), b(y, from, to));
            }
            return new Complex(b(x, from, to));
        }
    }, {
        key: 'setBlock',
        value: function setBlock(from, to, A) {
            if (!(A instanceof Complex)) A = new Complex(A);
            var x = this.x,
                y = this.y,
                b = _setBlock3.default,
                Ax = A.x,
                Ay = A.y;
            if (Ay) {
                if (!y) {
                    this.y = (0, _rep2.default)(dim(this), 0);y = this.y;
                }
                b(x, from, to, Ax);
                b(y, from, to, Ay);
                return this;
            }
            b(x, from, to, Ax);
            if (y) b(y, from, to, (0, _rep2.default)(dim(Ax), 0));
        }
    }, {
        key: 'fft',
        value: function fft() {
            var x = this.x,
                y = this.y;
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
                console.log('X', X);cx[k] = cos(t);x;
                cy[k] = sin(t);
                cx[m - k] = cos(t);
                cy[m - k] = sin(t);
            }
            var X = new Complex(a, b),
                Y = new Complex(cx, cy);
            X = (0, _mul2.default)(X, Y);
            convpow2(X.x, X.y, (0, _clone2.default)(Y.x), (0, _neg2.default)(Y.y));
            X = (0, _mul2.default)(X, Y);
            X.x.length = n;
            X.y.length = n;
            return X;
        }
    }, {
        key: 'ifft',
        value: function ifft() {
            var x = this.x,
                y = this.y;
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
            var X = new Complex(a, b),
                Y = new Complex(cx, cy);
            X = (0, _mul2.default)(X, Y);
            convpow2(X.x, X.y, (0, _clone2.default)(Y.x), (0, _neg2.default)(Y.y));
            X = (0, _mul2.default)(X, Y);
            X.x.length = n;
            X.y.length = n;
            return (0, _div2.default)(X, n);
        }
    }]);

    return Complex;
}();

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


exports.default = Complex;
Complex.identity = function (n) {
    return new Complex((0, _identity3.default)(n));
};

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