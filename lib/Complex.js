'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _identity = require('./identity');

var _identity2 = _interopRequireDefault(_identity);

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

var _getBlock = require('./getBlock');

var _getBlock2 = _interopRequireDefault(_getBlock);

var _setBlock = require('./setBlock');

var _setBlock2 = _interopRequireDefault(_setBlock);

var _transpose = require('./transpose');

var _transpose2 = _interopRequireDefault(_transpose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Complex = function () {
    function Complex(re, im) {
        _classCallCheck(this, Complex);

        this.re = re;
        this.im = im;
    }

    _createClass(Complex, [{
        key: 'reciprocal',
        value: function reciprocal() {
            if (this.im) {
                var d = (0, _add2.default)((0, _mul2.default)(this.re, this.re), (0, _mul2.default)(this.im, this.im));
                return new Complex((0, _div2.default)(this.re, d), (0, _div2.default)((0, _neg2.default)(this.im), d));
            }
            return new Complex((0, _div2.default)(1, this.re));
        }
    }, {
        key: 'transjugate',
        value: function transjugate() {
            var t = _transpose2.default,
                x = this.re,
                y = this.im;
            if (y) {
                return new Complex(t(x), negtranspose(y));
            }
            return new Complex(t(x));
        }
    }, {
        key: 'get',
        value: function get(i) {
            var x = this.re,
                y = this.im,
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
            var x = this.re,
                y = this.im,
                k = 0,
                ik,
                n = i.length,
                vx = v.re,
                vy = v.im;
            if (n === 0) {
                if (vy) {
                    this.im = vy;
                } else if (y) {
                    this.im = undefined;
                }
                this.re = x;
                return this;
            }
            if (vy) {
                if (y) {/* ok */} else {
                    y = (0, _rep2.default)(dim(x), 0);
                    this.im = y;
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
                x = this.re,
                y = this.im;
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
            var rx = this.re,
                ry = this.im,
                x = A.re,
                y = A.im;
            for (j = i0; j <= i1; j++) {
                rx[j] = x[j - i0];
            }
            if (y) {
                if (!ry) {
                    ry = (0, _rep2.default)(dim(rx), 0);this.im = ry;
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
            var x = this.re,
                y = this.im;
            if (y) {
                return new Complex(x[k], y[k]);
            }
            return new Complex(x[k]);
        }
    }, {
        key: 'setRow',
        value: function setRow(i, v) {
            var rx = this.re,
                ry = this.im,
                x = v.re,
                y = v.im;
            rx[i] = x;
            if (y) {
                if (!ry) {
                    ry = (0, _rep2.default)(dim(rx), 0);this.im = ry;
                }
                ry[i] = y;
            } else if (ry) {
                ry = (0, _rep2.default)([x.length], 0);
            }
            return this;
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
    return new Complex((0, _identity2.default)(n));
};