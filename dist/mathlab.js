(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// used to build bundles in dist/ for browser
var mathlab = require('./lib/index')

if(window !== "undefined") {
	window.mathlab = mathlab; 
}
},{"./lib/index":34}],2:[function(require,module,exports){
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
},{"./add":6,"./clone":16,"./div":21,"./getBlock":30,"./identity":33,"./mul":42,"./neg":43,"./rep":55,"./setBlock":60,"./transpose":69}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dim = require('./dim');

var _dim2 = _interopRequireDefault(_dim);

var _rep = require('./rep');

var _rep2 = _interopRequireDefault(_rep);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sparse = function () {
  function Sparse(A) {
    _classCallCheck(this, Sparse);

    if (!Array.isArray(A) && A.col) {
      this.col = A.col;
      this.row = A.row;
      this.val = A.val;
    } else {
      // TODO: throw error while A is not matrix
      var m = A.length,
          n,
          foo,
          i,
          j,
          counts = [];
      for (i = m - 1; i !== -1; --i) {
        foo = A[i];
        for (j in foo) {
          j = parseInt(j);
          while (j >= counts.length) {
            counts[counts.length] = 0;
          }if (foo[j] !== 0) counts[j]++;
        }
      }
      var n = counts.length;
      var Ai = Array(n + 1);
      Ai[0] = 0;
      for (i = 0; i < n; ++i) {
        Ai[i + 1] = Ai[i] + counts[i];
      }var Aj = Array(Ai[n]),
          Av = Array(Ai[n]);
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

  _createClass(Sparse, [{
    key: 'toFull',
    value: function toFull() {
      var Ai = this.col,
          Aj = this.row,
          Av = this.val,
          s = (0, _dim2.default)(this),
          m = s[0],
          n = s[1],
          i,
          j,
          j0,
          j1,
          k;
      var B = (0, _rep2.default)([m, n], 0);
      for (i = 0; i < n; i++) {
        j0 = Ai[i];
        j1 = Ai[i + 1];
        for (j = j0; j < j1; ++j) {
          B[Aj[j]][i] = Av[j];
        }
      }
      return B;
    }
  }]);

  return Sparse;
}();

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


exports.default = Sparse;
},{"./dim":20,"./rep":55}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return cabs(m);
    case 'Sparse':
      return sabs(m);
    default:
      return abs(m);
  }
};

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _spPointwise = require('./spPointwise');

var _spPointwise2 = _interopRequireDefault(_spPointwise);

var _Complex = require('./Complex');

var _Complex2 = _interopRequireDefault(_Complex);

var _Sparse = require('./Sparse');

var _Sparse2 = _interopRequireDefault(_Sparse);

var _mul = require('./mul');

var _mul2 = _interopRequireDefault(_mul);

var _sqrt = require('./sqrt');

var _sqrt2 = _interopRequireDefault(_sqrt);

var _add = require('./add');

var _add2 = _interopRequireDefault(_add);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var abs = (0, _pointwise2.default)(Math.abs);
var sabs = (0, _spPointwise2.default)(Math.abs);

function cabs(x) {
  if (x.im) {
    return new _Complex2.default((0, _sqrt2.default)((0, _add2.default)((0, _mul2.default)(x.re, x.re), (0, _mul2.default)(x.im, x.im))));
  }
  return new _Complex2.default(abs(x.re));
}

/**
 * Pointwise Math.abs(x)
 * 
 * @export
 * @param {Number|Array|Complex|Sparse} m
 * @returns {Number|Array|Complex|Sparse}
 * @example 
 * 
 * abs(-1) // 1
 * abs([1, -2]) // [1, 2]
 * abs([[-1,2],[1,-3]]) // [[1,2],[1,3]]
 */
},{"./Complex":2,"./Sparse":3,"./add":6,"./mul":42,"./pointwise":50,"./spPointwise":62,"./sqrt":64}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return cacos(m);
    case 'Sparse':
      return sacos(m);
    default:
      return acos(m);
  }
};

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _spPointwise = require('./spPointwise');

var _spPointwise2 = _interopRequireDefault(_spPointwise);

var _Sparse = require('./Sparse');

var _Sparse2 = _interopRequireDefault(_Sparse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var acos = (0, _pointwise2.default)(Math.acos);
var sacos = (0, _spPointwise2.default)(Math.acos);

function cacos(x) {
  throw new Error('mathlab.acos: no acos for complex number');
}

/**
 * Pointwise Math.acos(x)
 * 
 * @export
 * @param {Number|Array|Sparse} m
 * @returns {Number|Array|Sparse}
 * @example 
 * 
 * acos(1) // Math.acos(1)
 * acos([1, 2]) // [Math.acos(1), Math.acos(2)]
 * acos([[1,2],[1,3]]) // [ [Math.acos(1), Math.acos(2)], [Math.acos(1), Math.acos(3)] ]
 */
},{"./Sparse":3,"./pointwise":50,"./spPointwise":62}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return cadd(m1, m2);
    case 'Sparse':
      return sadd(m1, m2);
    default:
      return add(m1, m2);
  }
};

var _pointwise = require('./pointwise2');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _spPointwise = require('./spPointwise2');

var _spPointwise2 = _interopRequireDefault(_spPointwise);

var _Complex = require('./Complex');

var _Complex2 = _interopRequireDefault(_Complex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var add = (0, _pointwise2.default)(function (x, y) {
  return x + y;
});
var sadd = (0, _spPointwise2.default)(function (x, y) {
  return x + y;
});

function cadd(x, y) {
  if (!(y instanceof _Complex2.default)) {
    y = new _Complex2.default(y);
  }
  if (x.im) {
    if (y.im) {
      return new _Complex2.default(add(x.re, y.re), add(x.im, y.im));
    }
    return new _Complex2.default(add(x.re, y.re), x.im);
  }
  if (y.im) {
    return new _Complex2.default(add(x.re, y.re), y.im);
  }
  return new _Complex2.default(add(x.re, y.re));
}

/**
 * Pointwise add
 * 
 * @export
 * @param {Number|Array|Complex|Sparse} m1
 * @param {Number|Array|Complex|Sparse} m2
 * @returns {Number|Array|Complex|Sparse}
 * @example 
 * 
 * add(1, 2) // 3
 * add([1, 2], [2, 2]) // [3, 4]
 * add([[2,1], [1,2]], [[2, 2], [2, 2]])) // [ [2 + 2, 1 + 2], [1 + 2, 2 + 2] ]
 */
},{"./Complex":2,"./pointwise2":51,"./spPointwise2":63}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return cand(m1, m2);
    case 'Sparse':
      return sand(m1, m2);
    default:
      return and(m1, m2);
  }
};

var _pointwise = require('./pointwise2');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _spPointwise = require('./spPointwise2');

var _spPointwise2 = _interopRequireDefault(_spPointwise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var and = (0, _pointwise2.default)(function (x, y) {
  return x && y;
});
var sand = (0, _spPointwise2.default)(function (x, y) {
  return x && y;
});

function cand(x, y) {
  throw new Error('mathlab.and: no and for complex number');
}

/**
 * Pointwise and
 * 
 * @export
 * @param {Number|Array|Complex|Sparse} m1
 * @param {Number|Array|Complex|Sparse} m2
 * @returns {Number|Array|Complex|Sparse}
 * @example 
 * 
 * and(1, 0) // 0
 * and([1, 1], [1, 0]) // [1, 0]
 * and([[1,1], [1,1]], [[1,0], [0,0]])) // [[1,0], [0,0]]
 */
},{"./pointwise2":51,"./spPointwise2":63}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return casin(m);
    case 'Sparse':
      return sasin(m);
    default:
      return asin(m);
  }
};

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _spPointwise = require('./spPointwise');

var _spPointwise2 = _interopRequireDefault(_spPointwise);

var _Sparse = require('./Sparse');

var _Sparse2 = _interopRequireDefault(_Sparse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var asin = (0, _pointwise2.default)(Math.asin);
var sasin = (0, _spPointwise2.default)(Math.asin);

function casin(x) {
  throw new Error('mathlab.asin: no asin for complex number');
}

/**
 * Pointwise Math.asin(x)
 * 
 * @export
 * @param {Number|Array|Sparse} m
 * @returns {Number|Array|Sparse}
 * @example 
 * 
 * asin(1) // Math.asin(1)
 * asin([1, 2]) // [Math.asin(1), Math.asin(2)]
 * asin([[1,2],[1,3]]) // [ [Math.asin(1), Math.asin(2)], [Math.asin(1), Math.asin(3)] ]
 */
},{"./Sparse":3,"./pointwise":50,"./spPointwise":62}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return catan(m);
    case 'Sparse':
      return satan(m);
    default:
      return atan(m);
  }
};

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _spPointwise = require('./spPointwise');

var _spPointwise2 = _interopRequireDefault(_spPointwise);

var _Sparse = require('./Sparse');

var _Sparse2 = _interopRequireDefault(_Sparse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var atan = (0, _pointwise2.default)(Math.atan);
var satan = (0, _spPointwise2.default)(Math.atan);

function catan(x) {
  throw new Error('mathlab.atan: no atan for complex number');
}

/**
 * Pointwise Math.atan(x)
 * 
 * @export
 * @param {Number|Array|Sparse} m
 * @returns {Number|Array|Sparse}
 * @example 
 * 
 * atan(1) // Math.atan(1)
 * atan([1, 2]) // [Math.atan(1), Math.atan(2)]
 * atan([[1,2],[1,3]]) // [ [Math.atan(1), Math.atan(2)], [Math.atan(1), Math.atan(3)] ]
 */
},{"./Sparse":3,"./pointwise":50,"./spPointwise":62}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m1, m2) {
  // TODO 
  return (0, _pointwise2.default)(Math.atan2)(m1, m2);
};

var _pointwise = require('./pointwise2');

var _pointwise2 = _interopRequireDefault(_pointwise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./pointwise2":51}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return cband(m1, m2);
    case 'Sparse':
      return sband(m1, m2);
    default:
      return band(m1, m2);
  }
};

var _pointwise = require('./pointwise2');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _spPointwise = require('./spPointwise2');

var _spPointwise2 = _interopRequireDefault(_spPointwise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var band = (0, _pointwise2.default)(function (x, y) {
  return x & y;
});
var sband = (0, _spPointwise2.default)(function (x, y) {
  return x & y;
});

function cband(x, y) {
  throw new Error('mathlab.band: no band for complex number');
}

/**
 * Pointwise band
 * 
 * @export
 * @param {Number|Array|Complex|Sparse} m1
 * @param {Number|Array|Complex|Sparse} m2
 * @returns {Number|Array|Complex|Sparse}
 * @example 
 * 
 * band(1, 2) // 1 & 2
 * band([1, 2], [2, 2]) // [1 & 2, 2 & 2]
 * band([[2,1], [1,2]], [[2, 2], [2, 2]])) // [ [2 & 2, 1 & 2], [1 & 2, 2 & 2] ]
 */
},{"./pointwise2":51,"./spPointwise2":63}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return cbnot(m);
    case 'Sparse':
      return sbnot(m);
    default:
      return bnot(m);
  }
};

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _spPointwise = require('./spPointwise');

var _spPointwise2 = _interopRequireDefault(_spPointwise);

var _Sparse = require('./Sparse');

var _Sparse2 = _interopRequireDefault(_Sparse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bnot = (0, _pointwise2.default)(function (x) {
  return ~x;
});
var sbnot = (0, _spPointwise2.default)(function (x) {
  return ~x;
});

function cbnot(x) {
  throw new Error('mathlab.bnot: no bnot for complex number');
}

/**
 * Pointwise Math.bnot(x)
 * 
 * @export
 * @param {Number|Array|Sparse} m
 * @returns {Number|Array|Sparse}
 * @example 
 * 
 * bnot(1) // ~1
 * bnot([1, 2]) // [~1, ~2]
 * bnot([[1,2],[1,3]]) // [[~1,~2],[~1,~3]]
 */
},{"./Sparse":3,"./pointwise":50,"./spPointwise":62}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return cbor(m1, m2);
    case 'Sparse':
      return sbor(m1, m2);
    default:
      return bor(m1, m2);
  }
};

var _pointwise = require('./pointwise2');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _spPointwise = require('./spPointwise2');

var _spPointwise2 = _interopRequireDefault(_spPointwise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bor = (0, _pointwise2.default)(function (x, y) {
  return x | y;
});
var sbor = (0, _spPointwise2.default)(function (x, y) {
  return x | y;
});

function cbor(x, y) {
  throw new Error('mathlab.bor: no bor for complex number');
}

/**
 * Pointwise bor
 * 
 * @export
 * @param {Number|Array|Sparse} m1
 * @param {Number|Array|Sparse} m2
 * @returns {Number|Array|Sparse}
 * @example 
 * 
 * bor(1, 2) // 1 | 2
 * bor([1, 2], [2, 2]) // [1 | 2, 2 | 2]
 * bor([[2,1], [1,2]], [[2, 2], [2, 2]])) // [ [2 | 2, 1 | 2], [1 | 2, 2 | 2] ]
 */
},{"./pointwise2":51,"./spPointwise2":63}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return cbxor(m1, m2);
    case 'Sparse':
      return sbxor(m1, m2);
    default:
      return bxor(m1, m2);
  }
};

var _pointwise = require('./pointwise2');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _spPointwise = require('./spPointwise2');

var _spPointwise2 = _interopRequireDefault(_spPointwise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bxor = (0, _pointwise2.default)(function (x, y) {
  return x ^ y;
});
var sbxor = (0, _spPointwise2.default)(function (x, y) {
  return x ^ y;
});

function cbxor(x, y) {
  throw new Error('mathlab.bxor: no bxor for complex number');
}

/**
 * Pointwise bxor
 * 
 * @export
 * @param {Number|Array|Sparse} m1
 * @param {Number|Array|Sparse} m2
 * @returns {Number|Array|Sparse}
 * @example 
 * 
 * bxor(1, 2) // 1 ^ 2
 * bxor([1, 2], [2, 2]) // [1 ^ 2, 2 ^ 2]
 * bxor([[2,1], [1,2]], [[2, 2], [2, 2]])) // [ [2 ^ 2, 1 ^ 2], [1 ^ 2, 2 ^ 2] ]
 */
},{"./pointwise2":51,"./spPointwise2":63}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return cceil(m);
    case 'Sparse':
      return sceil(m);
    default:
      return ceil(m);
  }
};

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _spPointwise = require('./spPointwise');

var _spPointwise2 = _interopRequireDefault(_spPointwise);

var _Sparse = require('./Sparse');

var _Sparse2 = _interopRequireDefault(_Sparse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ceil = (0, _pointwise2.default)(Math.ceil);
var sceil = (0, _spPointwise2.default)(Math.ceil);

function cceil(x) {
  throw new Error('mathlab.ceil: no ceil for complex number');
}

/**
 * Pointwise Math.ceil(x)
 * 
 * @export
 * @param {Number|Array|Complex|Sparse} m
 * @returns {Number|Array|Complex|Sparse}
 * @example 
 * 
 * ceil(1) // Math.ceil(1)
 * ceil([1, 2]) // [Math.ceil(1), Math.ceil(2)]
 * ceil([[1,2],[1,3]]) // [ [Math.ceil(1), Math.ceil(2)], [Math.ceil(1), Math.ceil(3)] ]
 */
},{"./Sparse":3,"./pointwise":50,"./spPointwise":62}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return cclone(m);
    case 'Sparse':
      return sclone(m);
    default:
      return clone(m);
  }
};

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _spPointwise = require('./spPointwise');

var _spPointwise2 = _interopRequireDefault(_spPointwise);

var _Sparse = require('./Sparse');

var _Sparse2 = _interopRequireDefault(_Sparse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clone = (0, _pointwise2.default)(function (x) {
  return x;
});
var sclone = (0, _spPointwise2.default)(function (x) {
  return x;
});

function cclone(x) {
  throw new Error('mathlab.clone: no clone for complex number');
}

/**
 * Pointwise clone(x)
 * 
 * @export
 * @param {Number|Array|Complex|Sparse} m
 * @returns {Number|Array|Complex|Sparse}
 * @example 
 * 
 * clone([[1,2],[1,3]]) // [[1,2],[1,3]]
 */
},{"./Sparse":3,"./pointwise":50,"./spPointwise":62}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return ccos(m);
    case 'Sparse':
      return scos(m);
    default:
      return cos(m);
  }
};

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _spPointwise = require('./spPointwise');

var _spPointwise2 = _interopRequireDefault(_spPointwise);

var _Complex = require('./Complex');

var _Complex2 = _interopRequireDefault(_Complex);

var _Sparse = require('./Sparse');

var _Sparse2 = _interopRequireDefault(_Sparse);

var _neg = require('./neg');

var _neg2 = _interopRequireDefault(_neg);

var _exp = require('./exp');

var _exp2 = _interopRequireDefault(_exp);

var _div = require('./div');

var _div2 = _interopRequireDefault(_div);

var _add = require('./add');

var _add2 = _interopRequireDefault(_add);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cos = (0, _pointwise2.default)(Math.cos);
var scos = (0, _spPointwise2.default)(Math.cos);

function ccos(x) {
  if (x.im) {
    return (0, _div2.default)((0, _add2.default)((0, _exp2.default)(x), (0, _exp2.default)((0, _neg2.default)(x))), 2);
  }
  return new _Complex2.default(cos(x.re));
}

/**
 * Pointwise Math.cos(x)
 * 
 * @export
 * @param {Number|Array|Complex|Sparse} m
 * @returns {Number|Array|Complex|Sparse}
 * @example 
 * 
 * cos(1)
 * // returns Math.cos(1)
 * cos([1, 2])
 * // returns [Math.cos(1), Math.cos(2)]
 * cos([[1,2],[1,3]])
 * // returns [ [Math.cos(1), Math.cos(2)], [Math.cos(1), Math.cos(3)] ]
 */
},{"./Complex":2,"./Sparse":3,"./add":6,"./div":21,"./exp":26,"./neg":43,"./pointwise":50,"./spPointwise":62}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = det;

var _dim = require('./dim');

var _dim2 = _interopRequireDefault(_dim);

var _clone = require('./clone');

var _clone2 = _interopRequireDefault(_clone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Determinant of matix
 * 
 * @export
 * @param {Array} x
 * @returns {Number}
 * @example
 * 
 * det([[1, 2], [1, 2]])
 * // 0
 */
//	Determinant
function det(x) {
  // TODO
  var s = (0, _dim2.default)(x);
  if (s.length !== 2 || s[0] !== s[1]) {
    throw new Error('det() only works on square matrices');
  }
  var n = s[0],
      ret = 1,
      i,
      j,
      k,
      A = (0, _clone2.default)(x),
      Aj,
      Ai,
      alpha,
      temp,
      k1,
      k2,
      k3;
  for (j = 0; j < n - 1; j++) {
    k = j;
    for (i = j + 1; i < n; i++) {
      if (Math.abs(A[i][j]) > Math.abs(A[k][j])) {
        k = i;
      }
    }
    if (k !== j) {
      temp = A[k];A[k] = A[j];A[j] = temp;
      ret *= -1;
    }
    Aj = A[j];
    for (i = j + 1; i < n; i++) {
      Ai = A[i];
      alpha = Ai[j] / Aj[j];
      for (k = j + 1; k < n - 1; k += 2) {
        k1 = k + 1;
        Ai[k] -= Aj[k] * alpha;
        Ai[k1] -= Aj[k1] * alpha;
      }
      if (k !== n) {
        Ai[k] -= Aj[k] * alpha;
      }
    }
    if (Aj[j] === 0) {
      return 0;
    }
    ret *= Aj[j];
  }
  return ret * A[j][j];
}
},{"./clone":16,"./dim":20}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = diag;
/**
 * Create diagonal matrix from vector
 * 
 * @param {Array} d
 * @returns {Array}
 * @example 
 * 
 * diag([1, 2])
 * // [[1, 0], 
 * //  [0, 2]]
 */
function diag(d) {
  var i,
      i1,
      j,
      n = d.length,
      A = Array(n),
      Ai;
  for (i = n - 1; i >= 0; i--) {
    Ai = Array(n);
    i1 = i + 2;
    for (j = n - 1; j >= i1; j -= 2) {
      Ai[j] = 0;
      Ai[j - 1] = 0;
    }
    if (j > i) {
      Ai[j] = 0;
    }
    Ai[i] = d[i];
    for (j = i - 1; j >= 1; j -= 2) {
      Ai[j] = 0;
      Ai[j - 1] = 0;
    }
    if (j === 0) {
      Ai[0] = 0;
    }
    A[i] = Ai;
  }
  return A;
}
},{}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                   * Get Array dimensions
                                                                                                                                                                                                                                                   * 
                                                                                                                                                                                                                                                   * @export
                                                                                                                                                                                                                                                   * @param {Array} x
                                                                                                                                                                                                                                                   * @returns {Array}
                                                                                                                                                                                                                                                   * @example 
                                                                                                                                                                                                                                                   * 
                                                                                                                                                                                                                                                   * dim([[1, 2, 3], [1, 2, 2]])
                                                                                                                                                                                                                                                   * // [2, 3]
                                                                                                                                                                                                                                                   */


exports.default = function (x) {
  switch (x.constructor.name) {
    case 'Complex':
      return cdim(x);
    case 'Sparse':
      return sdim(x);
    default:
      return dim(x);
  }
};

function cdim(x) {
  if (x.re) {
    return dim(x.re);
  } else {
    return dim(x.im);
  }
}

function sdim(x) {
  return [x.col.length - 1, x.col.length - 1];
}

function dim(x) {
  if ((typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object') {
    if (_typeof(x[0]) === 'object') {
      if (_typeof(x[0][0]) === 'object') {
        throw new Error('mathlab: only support two demitional matrix for now');
      }
      return [x.length, x[0].length];
    }
    return [x.length];
  }
  return [];
}
},{}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return cdiv(m1, m2);
    case 'Sparse':
      return sdiv(m1, m2);
    default:
      return div(m1, m2);
  }
};

var _pointwise = require('./pointwise2');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _spPointwise = require('./spPointwise2');

var _spPointwise2 = _interopRequireDefault(_spPointwise);

var _Complex = require('./Complex');

var _Complex2 = _interopRequireDefault(_Complex);

var _mul = require('./mul');

var _mul2 = _interopRequireDefault(_mul);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var div = (0, _pointwise2.default)(function (x, y) {
  return x / y;
});
var sdiv = (0, _spPointwise2.default)(function (x, y) {
  return x / y;
});

function cdiv(x, y) {
  if (!(y instanceof _Complex2.default)) y = new _Complex2.default(y);
  if (y.im) {
    return (0, _mul2.default)(x, y.reciprocal());
  }
  if (x.im) {
    return new _Complex2.default(div(x.re, y.re), div(x.im, y.re));
  }
  return new _Complex2.default(div(x.re, y.re));
}

/**
 * Pointwise div
 * 
 * @export
 * @param {Number|Array|Complex|Sparse} m1
 * @param {Number|Array|Complex|Sparse} m2
 * @returns {Number|Array|Complex|Sparse}
 * @example 
 * 
 * div(1, 2)
 * // returns 1 / 2
 * div([1, 2], [2, 2])
 * // returns [1 / 2, 2 / 2]
 * div([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 / 2, 1 / 2], [1 / 2, 2 / 2] ]
 */
},{"./Complex":2,"./mul":42,"./pointwise2":51,"./spPointwise2":63}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (x, y) {
    switch (x.constructor.name) {
        case 'Complex':
            return cdot(x, y);
        case 'Sparse':
            return sdot(x, y);
        default:
            return dot(x, y);
    }
};

var _dim = require('./dim');

var _dim2 = _interopRequireDefault(_dim);

var _add = require('./add');

var _add2 = _interopRequireDefault(_add);

var _sub = require('./sub');

var _sub2 = _interopRequireDefault(_sub);

var _Complex = require('./Complex');

var _Complex2 = _interopRequireDefault(_Complex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cdot(x, y) {
    if (!(y instanceof _Complex2.default)) {
        y = new _Complex2.default(y);
    }
    if (x.im) {
        if (y.im) {
            return new _Complex2.default((0, _sub2.default)(dot(x.re, y.re), dot(x.im, y.im)), (0, _add2.default)(dot(x.re, y.im), dot(x.im, y.re)));
        }
        return new _Complex2.default(dot(x.re, y.re), dot(x.im, y.re));
    }
    if (y.im) {
        return new _Complex2.default(dot(x.re, y.re), dot(x.re, y.im));
    }
    return new _Complex2.default(dot(x.re, y.re));
}

/**
 * 
 * 
 * @export
 * @param {Array | Number} x
 * @param {Array | Number} y
 * @returns {Array | Number}
 * @example
 * 
 * dot([[1, 1], [2, 1]], [1, 2])
 * // [3, 4]
 * 
 * dot([1, 2], 4)
 * // [4, 8]
 */


function sdot(x, y) {
    // TODO
    throw new Error('mathlab.dot: dot for sparse matrix not exist');
}

function dot(x, y) {
    var d = _dim2.default;
    switch (d(x).length * 1000 + d(y).length) {
        case 2002:
            if (y.length < 10) return dotMMsmall(x, y);else return dotMMbig(x, y);
        case 2001:
            return dotMV(x, y);
        case 1002:
            return dotVM(x, y);
        case 1001:
            return dotVV(x, y);
        case 1000:
            return mulVS(x, y);
        case 1:
            return mulSV(x, y);
        case 0:
            return x * y;
        default:
            throw new Error('dot only works on vectors and matrices');
    }
}

function dotMMsmall(x, y) {
    var i, j, k, p, q, r, ret, foo, bar, woo, i0, k0, p0, r0;
    p = x.length;
    q = y.length;
    r = y[0].length;
    ret = Array(p);
    for (i = p - 1; i >= 0; i--) {
        foo = Array(r);
        bar = x[i];
        for (k = r - 1; k >= 0; k--) {
            woo = bar[q - 1] * y[q - 1][k];
            for (j = q - 2; j >= 1; j -= 2) {
                i0 = j - 1;
                woo += bar[j] * y[j][k] + bar[i0] * y[i0][k];
            }
            if (j === 0) {
                woo += bar[0] * y[0][k];
            }
            foo[k] = woo;
        }
        ret[i] = foo;
    }
    return ret;
}

function _getCol(A, j, x) {
    var n = A.length,
        i;
    for (i = n - 1; i > 0; --i) {
        x[i] = A[i][j];
        --i;
        x[i] = A[i][j];
    }
    if (i === 0) x[0] = A[0][j];
}

function dotMMbig(x, y) {
    var gc = _getCol,
        p = y.length,
        v = Array(p);
    var m = x.length,
        n = y[0].length,
        A = new Array(m),
        xj;
    var VV = dotVV;
    var i, j, k, z;
    --p;
    --m;
    for (i = m; i !== -1; --i) {
        A[i] = Array(n);
    }--n;
    for (i = n; i !== -1; --i) {
        gc(y, i, v);
        for (j = m; j !== -1; --j) {
            z = 0;
            xj = x[j];
            A[j][i] = VV(xj, v);
        }
    }
    return A;
}

function dotMV(x, y) {
    var p = x.length,
        q = y.length,
        i;
    var ret = Array(p);
    for (i = p - 1; i >= 0; i--) {
        ret[i] = dotVV(x[i], y);
    }
    return ret;
}

function dotVM(x, y) {
    var i, j, k, p, q, r, ret, foo, bar, woo, i0, k0, p0, r0, s1, s2, s3, baz, accum;
    p = x.length;
    q = y[0].length;
    ret = Array(q);
    for (k = q - 1; k >= 0; k--) {
        woo = x[p - 1] * y[p - 1][k];
        for (j = p - 2; j >= 1; j -= 2) {
            i0 = j - 1;
            woo += x[j] * y[j][k] + x[i0] * y[i0][k];
        }
        if (j === 0) {
            woo += x[0] * y[0][k];
        }
        ret[k] = woo;
    }
    return ret;
}

function dotVV(x, y) {
    var i,
        n = x.length,
        i1,
        ret = x[n - 1] * y[n - 1];
    for (i = n - 2; i >= 1; i -= 2) {
        i1 = i - 1;
        ret += x[i] * y[i] + x[i1] * y[i1];
    }
    if (i === 0) {
        ret += x[0] * y[0];
    }
    return ret;
}

function mulVV(x, y) {
    var _n = y.length;
    var i,
        ret = Array(_n);
    for (i = _n - 1; i !== -1; --i) {
        ret[i] = x[i] * y[i];
    }
    return ret;
}

function mulSV(x, y) {
    var _n = y.length;
    var i,
        ret = Array(_n);
    for (i = _n - 1; i !== -1; --i) {
        ret[i] = x * y[i];
    }
    return ret;
}

function mulVS(x, y) {
    var _n = x.length;
    var i,
        ret = Array(_n);
    for (i = _n - 1; i !== -1; --i) {
        ret[i] = x[i] * y;
    }
    return ret;
}
},{"./Complex":2,"./add":6,"./dim":20,"./sub":65}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = eig;

var _transpose = require('./transpose');

var _transpose2 = _interopRequireDefault(_transpose);

var _Complex = require('./Complex');

var _Complex2 = _interopRequireDefault(_Complex);

var _neq = require('./neq');

var _neq2 = _interopRequireDefault(_neq);

var _clone = require('./clone');

var _clone2 = _interopRequireDefault(_clone);

var _norm = require('./norm2');

var _norm2 = _interopRequireDefault(_norm);

var _div = require('./div');

var _div2 = _interopRequireDefault(_div);

var _dim = require('./dim');

var _dim2 = _interopRequireDefault(_dim);

var _dot = require('./dot');

var _dot2 = _interopRequireDefault(_dot);

var _add = require('./add');

var _add2 = _interopRequireDefault(_add);

var _getBlock = require('./getBlock');

var _getBlock2 = _interopRequireDefault(_getBlock);

var _tensor = require('./tensor');

var _tensor2 = _interopRequireDefault(_tensor);

var _identity = require('./identity');

var _identity2 = _interopRequireDefault(_identity);

var _epsilon = require('./epsilon');

var _epsilon2 = _interopRequireDefault(_epsilon);

var _sub = require('./sub');

var _sub2 = _interopRequireDefault(_sub);

var _mul = require('./mul');

var _mul2 = _interopRequireDefault(_mul);

var _diag = require('./diag');

var _diag2 = _interopRequireDefault(_diag);

var _rep = require('./rep');

var _rep2 = _interopRequireDefault(_rep);

var _neg = require('./neg');

var _neg2 = _interopRequireDefault(_neg);

var _getDiag = require('./getDiag');

var _getDiag2 = _interopRequireDefault(_getDiag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Eigenvalues of real matrices
 * 
 * @param {any} A
 * @param {any} maxiter
 * @returns
 */
function eig(A, maxiter) {
  var QH = toUpperHessenberg(A);
  var QB = QRFrancis(QH.H, maxiter);
  var n = A.length,
      i,
      k,
      flag = false,
      B = QB.B,
      H = (0, _dot2.default)(QB.Q, (0, _dot2.default)(QH.H, (0, _transpose2.default)(QB.Q)));
  var Q = new _Complex2.default((0, _dot2.default)(QB.Q, QH.Q)),
      Q0;
  var m = B.length,
      j;
  var a, b, c, d, p1, p2, disc, x, y, p, q, n1, n2;
  var sqrt = Math.sqrt;
  for (k = 0; k < m; k++) {
    i = B[k][0];
    if (i === B[k][1]) {
      // nothing
    } else {
      j = i + 1;
      a = H[i][i];
      b = H[i][j];
      c = H[j][i];
      d = H[j][j];
      if (b === 0 && c === 0) continue;
      p1 = -a - d;
      p2 = a * d - b * c;
      disc = p1 * p1 - 4 * p2;
      if (disc >= 0) {
        if (p1 < 0) x = -0.5 * (p1 - sqrt(disc));else x = -0.5 * (p1 + sqrt(disc));
        n1 = (a - x) * (a - x) + b * b;
        n2 = c * c + (d - x) * (d - x);
        if (n1 > n2) {
          n1 = sqrt(n1);
          p = (a - x) / n1;
          q = b / n1;
        } else {
          n2 = sqrt(n2);
          p = c / n2;
          q = (d - x) / n2;
        }
        Q0 = new _Complex2.default([[q, -p], [p, q]]);
        Q.setRows(i, j, (0, _dot2.default)(Q0, Q.getRows(i, j)));
      } else {
        x = -0.5 * p1;
        y = 0.5 * sqrt(-disc);
        n1 = (a - x) * (a - x) + b * b;
        n2 = c * c + (d - x) * (d - x);
        if (n1 > n2) {
          n1 = sqrt(n1 + y * y);
          p = (a - x) / n1;
          q = b / n1;
          x = 0;
          y /= n1;
        } else {
          n2 = sqrt(n2 + y * y);
          p = c / n2;
          q = (d - x) / n2;
          x = y / n2;
          y = 0;
        }
        Q0 = new _Complex2.default([[q, -p], [p, q]], [[x, y], [y, -x]]);
        Q.setRows(i, j, (0, _dot2.default)(Q0, Q.getRows(i, j)));
      }
    }
  }
  var R = (0, _dot2.default)((0, _dot2.default)(Q, A), Q.transjugate()),
      n = A.length,
      E = new _Complex2.default((0, _identity2.default)(n));
  for (j = 0; j < n; j++) {
    if (j > 0) {
      for (k = j - 1; k >= 0; k--) {
        var Rk = R.get([k, k]),
            Rj = R.get([j, j]);
        if ((0, _neq2.default)(Rk.re, Rj.re) || (0, _neq2.default)(Rk.im, Rj.im)) {
          x = (0, _getBlock2.default)(R.getRow(k), [k], [j - 1]);
          y = (0, _getBlock2.default)(E.getRow(j), [k], [j - 1]);
          E.set([j, k], (0, _div2.default)((0, _sub2.default)((0, _neg2.default)(R.get([k, j])), (0, _dot2.default)(x, y)), (0, _sub2.default)(Rk, Rj)));
        } else {
          E.setRow(j, E.getRow(k));
          continue;
        }
      }
    }
  }
  for (j = 0; j < n; j++) {
    x = E.getRow(j);
    E.setRow(j, (0, _div2.default)(x, (0, _norm2.default)(x)));
  }
  E = (0, _transpose2.default)(E);
  E = (0, _dot2.default)(Q.transjugate(), E);
  return {
    lambda: (0, _getDiag2.default)(R),
    E: E
  };
};

function house(x) {
  var v = (0, _clone2.default)(x);
  var s = x[0] >= 0 ? 1 : -1;
  var alpha = s * (0, _norm2.default)(x);
  v[0] += alpha;
  var foo = (0, _norm2.default)(v);
  if (foo === 0) {
    /* this should not happen */
    throw new Error('eig: internal error');
  }
  return (0, _div2.default)(v, foo);
}

function toUpperHessenberg(me) {
  var s = (0, _dim2.default)(me);
  if (s.length !== 2 || s[0] !== s[1]) {
    throw new Error('mathlab: toUpperHessenberg() only works on square matrices');
  }
  var m = s[0],
      i,
      j,
      k,
      x,
      v,
      A = (0, _clone2.default)(me),
      B,
      C,
      Ai,
      Ci,
      Q = (0, _identity2.default)(m),
      Qi;
  for (j = 0; j < m - 2; j++) {
    x = Array(m - j - 1);
    for (i = j + 1; i < m; i++) {
      x[i - j - 1] = A[i][j];
    }
    if ((0, _norm2.default)(x) > 0) {
      v = house(x);
      B = (0, _getBlock2.default)(A, [j + 1, j], [m - 1, m - 1]);
      C = (0, _tensor2.default)(v, (0, _dot2.default)(v, B));
      for (i = j + 1; i < m; i++) {
        Ai = A[i];
        Ci = C[i - j - 1];
        for (k = j; k < m; k++) {
          Ai[k] -= 2 * Ci[k - j];
        }
      }
      B = (0, _getBlock2.default)(A, [0, j + 1], [m - 1, m - 1]);
      C = (0, _tensor2.default)((0, _dot2.default)(B, v), v);
      for (i = 0; i < m; i++) {
        Ai = A[i];
        Ci = C[i];
        for (k = j + 1; k < m; k++) {
          Ai[k] -= 2 * Ci[k - j - 1];
        }
      }
      B = Array(m - j - 1);
      for (i = j + 1; i < m; i++) {
        B[i - j - 1] = Q[i];
      }C = (0, _tensor2.default)(v, (0, _dot2.default)(v, B));
      for (i = j + 1; i < m; i++) {
        Qi = Q[i];
        Ci = C[i - j - 1];
        for (k = 0; k < m; k++) {
          Qi[k] -= 2 * Ci[k];
        }
      }
    }
  }
  return {
    H: A,
    Q: Q
  };
}

function QRFrancis(H, maxiter) {
  if (typeof maxiter === "undefined") {
    maxiter = 10000;
  }
  H = (0, _clone2.default)(H);
  var H0 = (0, _clone2.default)(H);
  var s = (0, _dim2.default)(H),
      m = s[0],
      x,
      v,
      a,
      b,
      c,
      d,
      det,
      tr,
      Hloc,
      Q = (0, _identity2.default)(m),
      Qi,
      Hi,
      B,
      C,
      Ci,
      i,
      j,
      k,
      iter;
  if (m < 3) {
    return {
      Q: Q,
      B: [[0, m - 1]]
    };
  }
  for (iter = 0; iter < maxiter; iter++) {
    for (j = 0; j < m - 1; j++) {
      if (Math.abs(H[j + 1][j]) < _epsilon2.default * (Math.abs(H[j][j]) + Math.abs(H[j + 1][j + 1]))) {
        var QH1 = QRFrancis((0, _getBlock2.default)(H, [0, 0], [j, j]), maxiter);
        var QH2 = QRFrancis((0, _getBlock2.default)(H, [j + 1, j + 1], [m - 1, m - 1]), maxiter);
        B = Array(j + 1);
        for (i = 0; i <= j; i++) {
          B[i] = Q[i];
        }
        C = (0, _dot2.default)(QH1.Q, B);
        for (i = 0; i <= j; i++) {
          Q[i] = C[i];
        }
        B = Array(m - j - 1);
        for (i = j + 1; i < m; i++) {
          B[i - j - 1] = Q[i];
        }
        C = (0, _dot2.default)(QH2.Q, B);
        for (i = j + 1; i < m; i++) {
          Q[i] = C[i - j - 1];
        }
        return {
          Q: Q,
          B: QH1.B.concat((0, _add2.default)(QH2.B, j + 1))
        };
      }
    }
    a = H[m - 2][m - 2];
    b = H[m - 2][m - 1];
    c = H[m - 1][m - 2];
    d = H[m - 1][m - 1];
    tr = a + d;
    det = a * d - b * c;
    Hloc = (0, _getBlock2.default)(H, [0, 0], [2, 2]);
    if (tr * tr >= 4 * det) {
      var s1, s2;
      s1 = 0.5 * (tr + Math.sqrt(tr * tr - 4 * det));
      s2 = 0.5 * (tr - Math.sqrt(tr * tr - 4 * det));
      Hloc = (0, _add2.default)((0, _sub2.default)((0, _dot2.default)(Hloc, Hloc), (0, _mul2.default)(Hloc, s1 + s2)), (0, _diag2.default)((0, _rep2.default)([3], s1 * s2)));
    } else {
      Hloc = (0, _add2.default)((0, _sub2.default)((0, _dot2.default)(Hloc, Hloc), (0, _mul2.default)(Hloc, tr)), (0, _diag2.default)((0, _rep2.default)([3], det)));
    }
    x = [Hloc[0][0], Hloc[1][0], Hloc[2][0]];
    v = house(x);
    B = [H[0], H[1], H[2]];
    C = (0, _tensor2.default)(v, (0, _dot2.default)(v, B));
    for (i = 0; i < 3; i++) {
      Hi = H[i];
      Ci = C[i];
      for (k = 0; k < m; k++) {
        Hi[k] -= 2 * Ci[k];
      }
    }
    B = (0, _getBlock2.default)(H, [0, 0], [m - 1, 2]);
    C = (0, _tensor2.default)((0, _dot2.default)(B, v), v);
    for (i = 0; i < m; i++) {
      Hi = H[i];
      Ci = C[i];
      for (k = 0; k < 3; k++) {
        Hi[k] -= 2 * Ci[k];
      }
    }
    B = [Q[0], Q[1], Q[2]];
    C = (0, _tensor2.default)(v, (0, _dot2.default)(v, B));
    for (i = 0; i < 3; i++) {
      Qi = Q[i];
      Ci = C[i];
      for (k = 0; k < m; k++) {
        Qi[k] -= 2 * Ci[k];
      }
    }
    var J;
    for (j = 0; j < m - 2; j++) {
      for (k = j; k <= j + 1; k++) {
        if (Math.abs(H[k + 1][k]) < _epsilon2.default * (Math.abs(H[k][k]) + Math.abs(H[k + 1][k + 1]))) {
          var QH1 = QRFrancis((0, _getBlock2.default)(H, [0, 0], [k, k]), maxiter);
          var QH2 = QRFrancis((0, _getBlock2.default)(H, [k + 1, k + 1], [m - 1, m - 1]), maxiter);
          B = Array(k + 1);
          for (i = 0; i <= k; i++) {
            B[i] = Q[i];
          }
          C = (0, _dot2.default)(QH1.Q, B);
          for (i = 0; i <= k; i++) {
            Q[i] = C[i];
          }
          B = Array(m - k - 1);
          for (i = k + 1; i < m; i++) {
            B[i - k - 1] = Q[i];
          }
          C = (0, _dot2.default)(QH2.Q, B);
          for (i = k + 1; i < m; i++) {
            Q[i] = C[i - k - 1];
          }
          return {
            Q: Q,
            B: QH1.B.concat((0, _add2.default)(QH2.B, k + 1))
          };
        }
      }
      J = Math.min(m - 1, j + 3);
      x = Array(J - j);
      for (i = j + 1; i <= J; i++) {
        x[i - j - 1] = H[i][j];
      }
      v = house(x);
      B = (0, _getBlock2.default)(H, [j + 1, j], [J, m - 1]);
      C = (0, _tensor2.default)(v, (0, _dot2.default)(v, B));
      for (i = j + 1; i <= J; i++) {
        Hi = H[i];
        Ci = C[i - j - 1];
        for (k = j; k < m; k++) {
          Hi[k] -= 2 * Ci[k - j];
        }
      }
      B = (0, _getBlock2.default)(H, [0, j + 1], [m - 1, J]);
      C = (0, _tensor2.default)((0, _dot2.default)(B, v), v);
      for (i = 0; i < m; i++) {
        Hi = H[i];
        Ci = C[i];
        for (k = j + 1; k <= J; k++) {
          Hi[k] -= 2 * Ci[k - j - 1];
        }
      }
      B = Array(J - j);
      for (i = j + 1; i <= J; i++) {
        B[i - j - 1] = Q[i];
      }C = (0, _tensor2.default)(v, (0, _dot2.default)(v, B));
      for (i = j + 1; i <= J; i++) {
        Qi = Q[i];
        Ci = C[i - j - 1];
        for (k = 0; k < m; k++) {
          Qi[k] -= 2 * Ci[k];
        }
      }
    }
  }
  throw new Error('mathlab: eigenvalue iteration does not converge -- increase maxiter?');
}
},{"./Complex":2,"./add":6,"./clone":16,"./diag":19,"./dim":20,"./div":21,"./dot":22,"./epsilon":24,"./getBlock":30,"./getDiag":31,"./identity":33,"./mul":42,"./neg":43,"./neq":45,"./norm2":46,"./rep":55,"./sub":65,"./tensor":68,"./transpose":69}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 2.220446049250313e-16
 * 
 * @export
 */
exports.default = 2.220446049250313e-16;
},{}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return ceq(m1, m2);
    case 'Sparse':
      return seq(m1, m2);
    default:
      return eq(m1, m2);
  }
};

var _pointwise = require('./pointwise2');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _spPointwise = require('./spPointwise2');

var _spPointwise2 = _interopRequireDefault(_spPointwise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var eq = (0, _pointwise2.default)(function (x, y) {
  return x === y;
});
var seq = (0, _spPointwise2.default)(function (x, y) {
  return x === y;
});

function ceq(x, y) {
  throw new Error('mathlab.eq: no eq for complex number');
}

/**
 * Pointwise eq
 * 
 * @export
 * @param {Number|Array|Complex|Sparse} m1
 * @param {Number|Array|Complex|Sparse} m2
 * @returns {Number|Array|Complex|Sparse}
 * @example 
 * 
 * eq(1, 2)
 * // returns 1 === 2
 * eq([1, 2], [2, 2])
 * // returns [1 === 2, 2 === 2]
 * eq([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 === 2, 1 === 2], [1 === 2, 2 === 2] ]
 */
},{"./pointwise2":51,"./spPointwise2":63}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return cexp(m);
    case 'Sparse':
      return sexp(m);
    default:
      return exp(m);
  }
};

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _spPointwise = require('./spPointwise');

var _spPointwise2 = _interopRequireDefault(_spPointwise);

var _cos = require('./cos');

var _cos2 = _interopRequireDefault(_cos);

var _sin = require('./sin');

var _sin2 = _interopRequireDefault(_sin);

var _mul = require('./mul');

var _mul2 = _interopRequireDefault(_mul);

var _Complex = require('./Complex');

var _Complex2 = _interopRequireDefault(_Complex);

var _Sparse = require('./Sparse');

var _Sparse2 = _interopRequireDefault(_Sparse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var exp = (0, _pointwise2.default)(Math.exp);
var sexp = (0, _spPointwise2.default)(Math.exp);

function cexp(x) {
  var ex = exp(x.re);
  if (x.im) {
    return new _Complex2.default((0, _mul2.default)((0, _cos2.default)(x.im), ex), (0, _mul2.default)((0, _sin2.default)(x.im), ex));
  }
  return new _Complex2.default(ex);
}

/**
 * Pointwise Math.exp(x)
 * 
 * @export
 * @param {Number|Array|Complex|Sparse} m
 * @returns {Number|Array|Complex|Sparse}
 * @example 
 * 
 * exp(1)
 * // returns Math.exp(1)
 * exp([1, 2])
 * // returns [Math.exp(1), Math.exp(2)]
 * exp([[1,2],[1,3]])
 * // returns [ [Math.exp(1), Math.exp(2)], [Math.exp(1), Math.exp(3)] ]
 */
},{"./Complex":2,"./Sparse":3,"./cos":17,"./mul":42,"./pointwise":50,"./sin":61,"./spPointwise":62}],27:[function(require,module,exports){
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
},{"./Complex":2,"./clone":16,"./div":21,"./mul":42,"./neg":43,"./rep":55}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return cfloor(m);
    case 'Sparse':
      return sfloor(m);
    default:
      return floor(m);
  }
};

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _spPointwise = require('./spPointwise');

var _spPointwise2 = _interopRequireDefault(_spPointwise);

var _Sparse = require('./Sparse');

var _Sparse2 = _interopRequireDefault(_Sparse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var floor = (0, _pointwise2.default)(Math.floor);
var sfloor = (0, _spPointwise2.default)(Math.floor);

function cfloor(x) {
  throw new Error('mathlab.floor: no floor for complex number');
}

/**
 * Pointwise Math.floor(x)
 * 
 * @export
 * @param {Number|Array|Complex|Sparse} m
 * @returns {Number|Array|Complex|Sparse}
 * @example 
 * 
 * floor(1)
 * // returns Math.floor(1)
 * floor([1, 2])
 * // returns [Math.floor(1), Math.floor(2)]
 * floor([[1,2],[1,3]])
 * // returns [ [Math.floor(1), Math.floor(2)], [Math.floor(1), Math.floor(3)] ]
 */
},{"./Sparse":3,"./pointwise":50,"./spPointwise":62}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return cgeq(m1, m2);
    case 'Sparse':
      return sgeq(m1, m2);
    default:
      return geq(m1, m2);
  }
};

var _pointwise = require('./pointwise2');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _spPointwise = require('./spPointwise2');

var _spPointwise2 = _interopRequireDefault(_spPointwise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var geq = (0, _pointwise2.default)(function (x, y) {
  return x >= y;
});
var sgeq = (0, _spPointwise2.default)(function (x, y) {
  return x >= y;
});

function cgeq(x, y) {
  throw new Error('mathlab.geq: no geq for complex number');
}

/**
 * Pointwise geq
 * 
 * @export
 * @param {Number|Array|Complex|Sparse} m1
 * @param {Number|Array|Complex|Sparse} m2
 * @returns {Number|Array|Complex|Sparse}
 * @example 
 * 
 * geq(1, 2)
 * // returns 1 >= 2
 * geq([1, 2], [2, 2])
 * // returns [1 >= 2, 2 >= 2]
 * geq([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 >= 2, 1 >= 2], [1 >= 2, 2 >= 2] ]
 */
},{"./pointwise2":51,"./spPointwise2":63}],30:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getBlock;

var _dim = require('./dim');

var _dim2 = _interopRequireDefault(_dim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Extract a block from a matrix 
 * 
 * @export
 * @param {Array} x
 * @param {Array} from from position
 * @param {Array} to to position
 * @returns {Array}
 * @example
 * 
 * getBlock([[1,2,3],
 *           [3,4,5]], [0,0], [1,1])
 * // [[1, 2],
 *     [3, 4]]
 */
function getBlock(x, from, to) {
  var s = (0, _dim2.default)(x);

  function foo(x, k) {
    var i,
        a = from[k],
        n = to[k] - a,
        ret = Array(n);
    if (k === s.length - 1) {
      for (i = n; i >= 0; i--) {
        ret[i] = x[i + a];
      }
      return ret;
    }
    for (i = n; i >= 0; i--) {
      ret[i] = foo(x[i + a], k + 1);
    }
    return ret;
  }
  return foo(x, 0);
}
},{"./dim":20}],31:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (A) {
  switch (A.constructor.name) {
    case 'Complex':
      return cgetDiag(A);
    case 'Sparse':
      return sgetDiag(A);
    default:
      return getDiag(A);
  }
};

var _Complex = require('./Complex');

var _Complex2 = _interopRequireDefault(_Complex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cgetDiag(A) {
  // TODO: Check if is matrix
  if (A.im) {
    return new _Complex2.default(getDiag(A.re), getDiag(A.im));
  }
  return new _Complex2.default(getDiag(A.re));
}

/**
 * 	Get the diagonal of a matrix
 * 
 * @export
 * @param {Array} A
 * @returns {Array}
 * @example 
 * 
 * getDiag([[1, 3], [0, 2]])
 * // [1, 2]
 */


function sgetDiag(A) {
  throw new Error('mathlab.getDiag: getDiag for sparse matrix not exist');
}

function getDiag(A) {
  var n = Math.min(A.length, A[0].length),
      i,
      ret = Array(n);
  for (i = n - 1; i >= 1; --i) {
    ret[i] = A[i][i];
    --i;
    ret[i] = A[i][i];
  }
  if (i === 0) {
    ret[0] = A[0][0];
  }
  return ret;
}
},{"./Complex":2}],32:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return cgt(m1, m2);
    case 'Sparse':
      return sgt(m1, m2);
    default:
      return gt(m1, m2);
  }
};

var _pointwise = require('./pointwise2');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _spPointwise = require('./spPointwise2');

var _spPointwise2 = _interopRequireDefault(_spPointwise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gt = (0, _pointwise2.default)(function (x, y) {
  return x > y;
});
var sgt = (0, _spPointwise2.default)(function (x, y) {
  return x > y;
});

function cgt(x, y) {
  throw new Error('mathlab.gt: no gt for complex number');
}

/**
 * Pointwise gt
 * 
 * @export
 * @param {Number|Array|Complex|Sparse} m1
 * @param {Number|Array|Complex|Sparse} m2
 * @returns {Number|Array|Complex|Sparse}
 * @example 
 * 
 * gt(1, 2)
 * // returns 1 > 2
 * gt([1, 2], [2, 2])
 * // returns [1 > 2, 2 > 2]
 * gt([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 > 2, 1 > 2], [1 > 2, 2 > 2] ]
 */
},{"./pointwise2":51,"./spPointwise2":63}],33:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = identity;

var _diag = require('./diag');

var _diag2 = _interopRequireDefault(_diag);

var _rep = require('./rep');

var _rep2 = _interopRequireDefault(_rep);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Generate identity matrix of given size
 * 
 * @param {Number} n
 * @returns {Array}
 * @example 
 * 
 * identity(2)
 * // [[1, 0], [0, 1]]
 */
function identity(n) {
  return (0, _diag2.default)((0, _rep2.default)([n], 1));
}
},{"./diag":19,"./rep":55}],34:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ifft = exports.fft = exports.transpose = exports.tensor = exports.tan = exports.sub = exports.sqrt = exports.sin = exports.setBlock = exports.same = exports.rshift = exports.rrshift = exports.round = exports.rep = exports.reciprocal = exports.random = exports.pow = exports.pointwise2 = exports.pointwise = exports.or = exports.not = exports.norm2Squared = exports.norm2 = exports.neq = exports.negtranspose = exports.neg = exports.mul = exports.mod = exports.lt = exports.lshift = exports.log = exports.linspace = exports.leq = exports.inv = exports.identity = exports.gt = exports.getDiag = exports.getBlock = exports.geq = exports.floor = exports.exp = exports.eq = exports.epsilon = exports.eig = exports.dot = exports.div = exports.dim = exports.diag = exports.det = exports.cos = exports.clone = exports.ceil = exports.bxor = exports.bor = exports.bnot = exports.band = exports.atan2 = exports.atan = exports.asin = exports.and = exports.add = exports.acos = exports.abs = exports.Sparse = exports.Complex = undefined;

var _fft = require('./fft');

Object.defineProperty(exports, 'fft', {
  enumerable: true,
  get: function get() {
    return _fft.fft;
  }
});
Object.defineProperty(exports, 'ifft', {
  enumerable: true,
  get: function get() {
    return _fft.ifft;
  }
});

var _Complex2 = require('./Complex');

var _Complex3 = _interopRequireDefault(_Complex2);

var _Sparse2 = require('./Sparse');

var _Sparse3 = _interopRequireDefault(_Sparse2);

var _abs2 = require('./abs');

var _abs3 = _interopRequireDefault(_abs2);

var _acos2 = require('./acos');

var _acos3 = _interopRequireDefault(_acos2);

var _add2 = require('./add');

var _add3 = _interopRequireDefault(_add2);

var _and2 = require('./and');

var _and3 = _interopRequireDefault(_and2);

var _asin2 = require('./asin');

var _asin3 = _interopRequireDefault(_asin2);

var _atan3 = require('./atan');

var _atan4 = _interopRequireDefault(_atan3);

var _atan5 = require('./atan2');

var _atan6 = _interopRequireDefault(_atan5);

var _band2 = require('./band');

var _band3 = _interopRequireDefault(_band2);

var _bnot2 = require('./bnot');

var _bnot3 = _interopRequireDefault(_bnot2);

var _bor2 = require('./bor');

var _bor3 = _interopRequireDefault(_bor2);

var _bxor2 = require('./bxor');

var _bxor3 = _interopRequireDefault(_bxor2);

var _ceil2 = require('./ceil');

var _ceil3 = _interopRequireDefault(_ceil2);

var _clone2 = require('./clone');

var _clone3 = _interopRequireDefault(_clone2);

var _cos2 = require('./cos');

var _cos3 = _interopRequireDefault(_cos2);

var _det2 = require('./det');

var _det3 = _interopRequireDefault(_det2);

var _diag2 = require('./diag');

var _diag3 = _interopRequireDefault(_diag2);

var _dim2 = require('./dim');

var _dim3 = _interopRequireDefault(_dim2);

var _div2 = require('./div');

var _div3 = _interopRequireDefault(_div2);

var _dot2 = require('./dot');

var _dot3 = _interopRequireDefault(_dot2);

var _eig2 = require('./eig');

var _eig3 = _interopRequireDefault(_eig2);

var _epsilon2 = require('./epsilon');

var _epsilon3 = _interopRequireDefault(_epsilon2);

var _eq2 = require('./eq');

var _eq3 = _interopRequireDefault(_eq2);

var _exp2 = require('./exp');

var _exp3 = _interopRequireDefault(_exp2);

var _floor2 = require('./floor');

var _floor3 = _interopRequireDefault(_floor2);

var _geq2 = require('./geq');

var _geq3 = _interopRequireDefault(_geq2);

var _getBlock2 = require('./getBlock');

var _getBlock3 = _interopRequireDefault(_getBlock2);

var _getDiag2 = require('./getDiag');

var _getDiag3 = _interopRequireDefault(_getDiag2);

var _gt2 = require('./gt');

var _gt3 = _interopRequireDefault(_gt2);

var _identity2 = require('./identity');

var _identity3 = _interopRequireDefault(_identity2);

var _inv2 = require('./inv');

var _inv3 = _interopRequireDefault(_inv2);

var _leq2 = require('./leq');

var _leq3 = _interopRequireDefault(_leq2);

var _linspace2 = require('./linspace');

var _linspace3 = _interopRequireDefault(_linspace2);

var _log2 = require('./log');

var _log3 = _interopRequireDefault(_log2);

var _lshift2 = require('./lshift');

var _lshift3 = _interopRequireDefault(_lshift2);

var _lt2 = require('./lt');

var _lt3 = _interopRequireDefault(_lt2);

var _mod2 = require('./mod');

var _mod3 = _interopRequireDefault(_mod2);

var _mul2 = require('./mul');

var _mul3 = _interopRequireDefault(_mul2);

var _neg2 = require('./neg');

var _neg3 = _interopRequireDefault(_neg2);

var _negtranspose2 = require('./negtranspose');

var _negtranspose3 = _interopRequireDefault(_negtranspose2);

var _neq2 = require('./neq');

var _neq3 = _interopRequireDefault(_neq2);

var _norm2 = require('./norm2');

var _norm3 = _interopRequireDefault(_norm2);

var _norm2Squared2 = require('./norm2Squared');

var _norm2Squared3 = _interopRequireDefault(_norm2Squared2);

var _not2 = require('./not');

var _not3 = _interopRequireDefault(_not2);

var _or2 = require('./or');

var _or3 = _interopRequireDefault(_or2);

var _pointwise3 = require('./pointwise');

var _pointwise4 = _interopRequireDefault(_pointwise3);

var _pointwise5 = require('./pointwise2');

var _pointwise6 = _interopRequireDefault(_pointwise5);

var _pow2 = require('./pow');

var _pow3 = _interopRequireDefault(_pow2);

var _random2 = require('./random');

var _random3 = _interopRequireDefault(_random2);

var _reciprocal2 = require('./reciprocal');

var _reciprocal3 = _interopRequireDefault(_reciprocal2);

var _rep2 = require('./rep');

var _rep3 = _interopRequireDefault(_rep2);

var _round2 = require('./round');

var _round3 = _interopRequireDefault(_round2);

var _rrshift2 = require('./rrshift');

var _rrshift3 = _interopRequireDefault(_rrshift2);

var _rshift2 = require('./rshift');

var _rshift3 = _interopRequireDefault(_rshift2);

var _same2 = require('./same');

var _same3 = _interopRequireDefault(_same2);

var _setBlock2 = require('./setBlock');

var _setBlock3 = _interopRequireDefault(_setBlock2);

var _sin2 = require('./sin');

var _sin3 = _interopRequireDefault(_sin2);

var _sqrt2 = require('./sqrt');

var _sqrt3 = _interopRequireDefault(_sqrt2);

var _sub2 = require('./sub');

var _sub3 = _interopRequireDefault(_sub2);

var _tan2 = require('./tan');

var _tan3 = _interopRequireDefault(_tan2);

var _tensor2 = require('./tensor');

var _tensor3 = _interopRequireDefault(_tensor2);

var _transpose2 = require('./transpose');

var _transpose3 = _interopRequireDefault(_transpose2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Complex = _Complex3.default;
exports.Sparse = _Sparse3.default;
exports.abs = _abs3.default;
exports.acos = _acos3.default;
exports.add = _add3.default;
exports.and = _and3.default;
exports.asin = _asin3.default;
exports.atan = _atan4.default;
exports.atan2 = _atan6.default;
exports.band = _band3.default;
exports.bnot = _bnot3.default;
exports.bor = _bor3.default;
exports.bxor = _bxor3.default;
exports.ceil = _ceil3.default;
exports.clone = _clone3.default;
exports.cos = _cos3.default;
exports.det = _det3.default;
exports.diag = _diag3.default;
exports.dim = _dim3.default;
exports.div = _div3.default;
exports.dot = _dot3.default;
exports.eig = _eig3.default;
exports.epsilon = _epsilon3.default;
exports.eq = _eq3.default;
exports.exp = _exp3.default;
exports.floor = _floor3.default;
exports.geq = _geq3.default;
exports.getBlock = _getBlock3.default;
exports.getDiag = _getDiag3.default;
exports.gt = _gt3.default;
exports.identity = _identity3.default;
exports.inv = _inv3.default;
exports.leq = _leq3.default;
exports.linspace = _linspace3.default;
exports.log = _log3.default;
exports.lshift = _lshift3.default;
exports.lt = _lt3.default;
exports.mod = _mod3.default;
exports.mul = _mul3.default;
exports.neg = _neg3.default;
exports.negtranspose = _negtranspose3.default;
exports.neq = _neq3.default;
exports.norm2 = _norm3.default;
exports.norm2Squared = _norm2Squared3.default;
exports.not = _not3.default;
exports.or = _or3.default;
exports.pointwise = _pointwise4.default;
exports.pointwise2 = _pointwise6.default;
exports.pow = _pow3.default;
exports.random = _random3.default;
exports.reciprocal = _reciprocal3.default;
exports.rep = _rep3.default;
exports.round = _round3.default;
exports.rrshift = _rrshift3.default;
exports.rshift = _rshift3.default;
exports.same = _same3.default;
exports.setBlock = _setBlock3.default;
exports.sin = _sin3.default;
exports.sqrt = _sqrt3.default;
exports.sub = _sub3.default;
exports.tan = _tan3.default;
exports.tensor = _tensor3.default;
exports.transpose = _transpose3.default;
},{"./Complex":2,"./Sparse":3,"./abs":4,"./acos":5,"./add":6,"./and":7,"./asin":8,"./atan":9,"./atan2":10,"./band":11,"./bnot":12,"./bor":13,"./bxor":14,"./ceil":15,"./clone":16,"./cos":17,"./det":18,"./diag":19,"./dim":20,"./div":21,"./dot":22,"./eig":23,"./epsilon":24,"./eq":25,"./exp":26,"./fft":27,"./floor":28,"./geq":29,"./getBlock":30,"./getDiag":31,"./gt":32,"./identity":33,"./inv":35,"./leq":36,"./linspace":37,"./log":38,"./lshift":39,"./lt":40,"./mod":41,"./mul":42,"./neg":43,"./negtranspose":44,"./neq":45,"./norm2":46,"./norm2Squared":47,"./not":48,"./or":49,"./pointwise":50,"./pointwise2":51,"./pow":52,"./random":53,"./reciprocal":54,"./rep":55,"./round":56,"./rrshift":57,"./rshift":58,"./same":59,"./setBlock":60,"./sin":61,"./sqrt":64,"./sub":65,"./tan":67,"./tensor":68,"./transpose":69}],35:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inv;

var _dim = require('./dim');

var _dim2 = _interopRequireDefault(_dim);

var _identity = require('./identity');

var _identity2 = _interopRequireDefault(_identity);

var _clone = require('./clone');

var _clone2 = _interopRequireDefault(_clone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Inverse of an matrix
 * 
 * @export
 * @param {Array} x
 * @returns {Array}
 * @example 
 * 
 * inv([[1,2],[3,4]])
 * // [[   -2,    1],
 * //  [  1.5, -0.5]]
 */
function inv(x) {
  var s = (0, _dim2.default)(x),
      abs = Math.abs,
      m = s[0],
      n = s[1];
  var A = (0, _clone2.default)(x),
      Ai,
      Aj;
  var I = (0, _identity2.default)(m),
      Ii,
      Ij;
  var i, j, k, x;
  for (j = 0; j < n; ++j) {
    var i0 = -1;
    var v0 = -1;
    for (i = j; i !== m; ++i) {
      k = abs(A[i][j]);if (k > v0) {
        i0 = i;v0 = k;
      }
    }
    Aj = A[i0];A[i0] = A[j];A[j] = Aj;
    Ij = I[i0];I[i0] = I[j];I[j] = Ij;
    x = Aj[j];
    for (k = j; k !== n; ++k) {
      Aj[k] /= x;
    }for (k = n - 1; k !== -1; --k) {
      Ij[k] /= x;
    }for (i = m - 1; i !== -1; --i) {
      if (i !== j) {
        Ai = A[i];
        Ii = I[i];
        x = Ai[j];
        for (k = j + 1; k !== n; ++k) {
          Ai[k] -= Aj[k] * x;
        }for (k = n - 1; k > 0; --k) {
          Ii[k] -= Ij[k] * x;--k;Ii[k] -= Ij[k] * x;
        }
        if (k === 0) Ii[0] -= Ij[0] * x;
      }
    }
  }
  return I;
}
},{"./clone":16,"./dim":20,"./identity":33}],36:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return cleq(m1, m2);
    case 'Sparse':
      return sleq(m1, m2);
    default:
      return leq(m1, m2);
  }
};

var _pointwise = require('./pointwise2');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _spPointwise = require('./spPointwise2');

var _spPointwise2 = _interopRequireDefault(_spPointwise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var leq = (0, _pointwise2.default)(function (x, y) {
  return x <= y;
});
var sleq = (0, _spPointwise2.default)(function (x, y) {
  return x <= y;
});

function cleq(x, y) {
  throw new Error('mathlab.leq: no leq for complex number');
}

/**
 * Pointwise leq
 * 
 * @export
 * @param {Number|Array|Complex|Sparse} m1
 * @param {Number|Array|Complex|Sparse} m2
 * @returns {Number|Array|Complex|Sparse}
 * @example 
 * 
 * leq(1, 2)
 * // returns 1 <= 2
 * leq([1, 2], [2, 2])
 * // returns [1 <= 2, 2 <= 2]
 * leq([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 <= 2, 1 <= 2], [1 <= 2, 2 <= 2] ]
 */
},{"./pointwise2":51,"./spPointwise2":63}],37:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = linspace;
/**
 * Generate evenly spaced values
 * 
 * @export
 * @param {Number} a
 * @param {Number} b
 * @param {Number} n
 * @returns {Array}
 * @example 
 * 
 * linspace(1, 2, 3)
 * // [1, 1.5, 2]
 */
function linspace(a, b, n) {
  if (typeof n === 'undefined') n = Math.max(Math.round(b - a) + 1, 1);
  if (n < 2) {
    return n === 1 ? [a] : [];
  }
  var i,
      ret = Array(n);
  n--;
  for (i = n; i >= 0; i--) {
    ret[i] = (i * b + (n - i) * a) / n;
  }
  return ret;
}
},{}],38:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return clog(m);
    case 'Sparse':
      return slog(m);
    default:
      return log(m);
  }
};

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _spPointwise = require('./spPointwise');

var _spPointwise2 = _interopRequireDefault(_spPointwise);

var _Sparse = require('./Sparse');

var _Sparse2 = _interopRequireDefault(_Sparse);

var _Complex = require('./Complex');

var _Complex2 = _interopRequireDefault(_Complex);

var _atan = require('./atan2');

var _atan2 = _interopRequireDefault(_atan);

var _abs = require('./abs');

var _abs2 = _interopRequireDefault(_abs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _pointwise2.default)(Math.log);
var slog = (0, _spPointwise2.default)(Math.log);

function clog(x) {
  if (x.im) {
    var theta = new _Complex2.default((0, _atan2.default)(x.im, x.re)),
        r = (0, _abs2.default)(x);
    return new _Complex2.default(log(r.re), theta.re);
  }
  return new _Complex2.default(log(x.re));
}

/**
 * Pointwise Math.log(x)
 * 
 * @export
 * @param {Number|Array|Complex|Sparse} m
 * @returns {Number|Array|Complex|Sparse}
 * @example 
 * 
 * log(1)
 * // returns Math.log(1)
 * log([1, 2])
 * // returns [Math.log(1), Math.log(2)]
 * log([[1,2],[1,3]])
 * // returns [ [Math.log(1), Math.log(2)], [Math.log(1), Math.log(3)] ]
 */
},{"./Complex":2,"./Sparse":3,"./abs":4,"./atan2":10,"./pointwise":50,"./spPointwise":62}],39:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return clshift(m1, m2);
    case 'Sparse':
      return slshift(m1, m2);
    default:
      return lshift(m1, m2);
  }
};

var _pointwise = require('./pointwise2');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _spPointwise = require('./spPointwise2');

var _spPointwise2 = _interopRequireDefault(_spPointwise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lshift = (0, _pointwise2.default)(function (x, y) {
  return x << y;
});
var slshift = (0, _spPointwise2.default)(function (x, y) {
  return x << y;
});

function clshift(x, y) {
  throw new Error('mathlab.lshift: no lshift for complex number');
}

/**
 * Pointwise lshift
 * 
 * @export
 * @param {Number|Array|Complex|Sparse} m1
 * @param {Number|Array|Complex|Sparse} m2
 * @returns {Number|Array|Complex|Sparse}
 * @example 
 * 
 * lshift(1, 2)
 * // returns 1 << 2
 * lshift([1, 2], [2, 2])
 * // returns [1 << 2, 2 << 2]
 * lshift([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 << 2, 1 << 2], [1 << 2, 2 << 2] ]
 */
},{"./pointwise2":51,"./spPointwise2":63}],40:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return clt(m1, m2);
    case 'Sparse':
      return slt(m1, m2);
    default:
      return lt(m1, m2);
  }
};

var _pointwise = require('./pointwise2');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _spPointwise = require('./spPointwise2');

var _spPointwise2 = _interopRequireDefault(_spPointwise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lt = (0, _pointwise2.default)(function (x, y) {
  return x < y;
});
var slt = (0, _spPointwise2.default)(function (x, y) {
  return x < y;
});

function clt(x, y) {
  throw new Error('mathlab.lt: no lt for complex number');
}

/**
 * Pointwise lt
 * 
 * @export
 * @param {Number|Array|Complex|Sparse} m1
 * @param {Number|Array|Complex|Sparse} m2
 * @returns {Number|Array|Complex|Sparse}
 * @example 
 * 
 * lt(1, 2)
 * // returns 1 < 2
 * lt([1, 2], [2, 2])
 * // returns [1 < 2, 2 < 2]
 * lt([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 < 2, 1 < 2], [1 < 2, 2 < 2] ]
 */
},{"./pointwise2":51,"./spPointwise2":63}],41:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return cmod(m1, m2);
    case 'Sparse':
      return smod(m1, m2);
    default:
      return mod(m1, m2);
  }
};

var _pointwise = require('./pointwise2');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _spPointwise = require('./spPointwise2');

var _spPointwise2 = _interopRequireDefault(_spPointwise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mod = (0, _pointwise2.default)(function (x, y) {
  return x % y;
});
var smod = (0, _spPointwise2.default)(function (x, y) {
  return x % y;
});

function cmod(x, y) {
  throw new Error('mathlab.mod: no mod for complex number');
}

/**
 * Pointwise mod
 * 
 * @export
 * @param {Number|Array|Complex|Sparse} m1
 * @param {Number|Array|Complex|Sparse} m2
 * @returns {Number|Array|Complex|Sparse}
 * @example 
 * 
 * mod(1, 2)
 * // returns 1 % 2
 * mod([1, 2], [2, 2])
 * // returns [1 % 2, 2 % 2]
 * mod([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 % 2, 1 % 2], [1 % 2, 2 % 2] ]
 */
},{"./pointwise2":51,"./spPointwise2":63}],42:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m1, m2) {
  // if (m1.constructor.name !== m2.constructor.name) {
  //   throw new Error('mathlab.mul: argument type mismatch')
  // }

  switch (m1.constructor.name) {
    case 'Array':
      return amul(m1, m2);
    case 'Complex':
      return cmul(m1, m2);
    case 'Sparse':
      return smul(m1, m2);
    default:
      return amul(m1, m2);
  }
};

var _pointwise = require('./pointwise2');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _spPointwise = require('./spPointwise2');

var _spPointwise2 = _interopRequireDefault(_spPointwise);

var _Complex = require('./Complex');

var _Complex2 = _interopRequireDefault(_Complex);

var _add = require('./add');

var _add2 = _interopRequireDefault(_add);

var _sub = require('./sub');

var _sub2 = _interopRequireDefault(_sub);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// array mul
var amul = (0, _pointwise2.default)(function (x, y) {
  return x * y;
});
var smul = (0, _spPointwise2.default)(function (x, y) {
  return x * y;
});

// complex array mul
function cmul(x, y) {
  if (!(y instanceof _Complex2.default)) {
    y = new _Complex2.default(y);
  }
  if (x.im) {
    if (y.im) {
      return new _Complex2.default((0, _sub2.default)(amul(x.re, y.re), amul(x.im, y.im)), (0, _add2.default)(amul(x.re, y.im), amul(x.im, y.re)));
    }
    return new _Complex2.default(amul(x.re, y.re), amul(x.im, y.re));
  }
  if (y.im) {
    return new _Complex2.default(amul(x.re, y.re), amul(x.re, y.im));
  }
  return new _Complex2.default(amul(x.re, y.re));
}

/**
 * Pointwise mul
 * 
 * @export
 * @param {Number|Array|Complex|Sparse|Object} m1
 * @param {Number|Array|Complex|Sparse|Object} m2
 * @returns {Number|Array|Complex|Sparse}
 * @example 
 * 
 * mul(1, 2)
 * // returns 1 * 2
 * mul([1, 2], [2, 2])
 * // returns [1 * 2, 2 * 2]
 * mul([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 * 2, 1 * 2], [1 * 2, 2 * 2] ]
 */
},{"./Complex":2,"./add":6,"./pointwise2":51,"./spPointwise2":63,"./sub":65}],43:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return cneg(m);
    case 'Sparse':
      return sneg(m);
    default:
      return neg(m);
  }
};

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _spPointwise = require('./spPointwise');

var _spPointwise2 = _interopRequireDefault(_spPointwise);

var _Complex = require('./Complex');

var _Complex2 = _interopRequireDefault(_Complex);

var _Sparse = require('./Sparse');

var _Sparse2 = _interopRequireDefault(_Sparse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var neg = (0, _pointwise2.default)(function (x) {
  return -x;
});
var sneg = (0, _spPointwise2.default)(function (x) {
  return -x;
});

function cneg(x) {
  if (x.im) {
    return new _Complex2.default(neg(x.re), neg(x.im));
  }
  return new _Complex2.default(neg(x.re));
}

/**
 * Pointwise Math.neg(x)
 * 
 * @export
 * @param {Number|Array|Complex|Sparse} m
 * @returns {Number|Array|Complex|Sparse}
 * @example 
 * 
 * neg(1)
 * // returns Math.neg(1)
 * neg([1, 2])
 * // returns [Math.neg(1), Math.neg(2)]
 * neg([[1,2],[1,3]])
 * // returns [ [Math.neg(1), Math.neg(2)], [Math.neg(1), Math.neg(3)] ]
 */
},{"./Complex":2,"./Sparse":3,"./pointwise":50,"./spPointwise":62}],44:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = negtranspose;
/**
 * neg transpose
 * 
 * @export
 * @param {any} x
 * @returns
 */
function negtranspose(x) {
    var i,
        j,
        m = x.length,
        n = x[0].length,
        ret = Array(n),
        A0,
        A1,
        Bj;
    for (j = 0; j < n; j++) {
        ret[j] = Array(m);
    }for (i = m - 1; i >= 1; i -= 2) {
        A1 = x[i];
        A0 = x[i - 1];
        for (j = n - 1; j >= 1; --j) {
            Bj = ret[j];Bj[i] = -A1[j];Bj[i - 1] = -A0[j];
            --j;
            Bj = ret[j];Bj[i] = -A1[j];Bj[i - 1] = -A0[j];
        }
        if (j === 0) {
            Bj = ret[0];Bj[i] = -A1[0];Bj[i - 1] = -A0[0];
        }
    }
    if (i === 0) {
        A0 = x[0];
        for (j = n - 1; j >= 1; --j) {
            ret[j][0] = -A0[j];
            --j;
            ret[j][0] = -A0[j];
        }
        if (j === 0) {
            ret[0][0] = -A0[0];
        }
    }
    return ret;
}
},{}],45:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return cneq(m1, m2);
    case 'Sparse':
      return sneq(m1, m2);
    default:
      return neq(m1, m2);
  }
};

var _pointwise = require('./pointwise2');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _spPointwise = require('./spPointwise2');

var _spPointwise2 = _interopRequireDefault(_spPointwise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var neq = (0, _pointwise2.default)(function (x, y) {
  return x !== y;
});
var sneq = (0, _spPointwise2.default)(function (x, y) {
  return x !== y;
});

function cneq(x, y) {
  throw new Error('mathlab.neq: no neq for complex number');
}

/**
 * Pointwise neq
 * 
 * @export
 * @param {Number|Array|Complex|Sparse} m1
 * @param {Number|Array|Complex|Sparse} m2
 * @returns {Number|Array|Complex|Sparse}
 * @example 
 * 
 * neq(1, 2)
 * // returns 1 !== 2
 * neq([1, 2], [2, 2])
 * // returns [1 !== 2, 2 !== 2]
 * neq([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 !== 2, 1 !== 2], [1 !== 2, 2 !== 2] ]
 */
},{"./pointwise2":51,"./spPointwise2":63}],46:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (x, y) {
  switch (x.constructor.name) {
    case 'Complex':
      return cnorm2(x, y);
    case 'Sparse':
      return snorm2(x, y);
    default:
      return norm2(x, y);
  }
};

var _norm2Squared = require('./norm2Squared');

var _norm2Squared2 = _interopRequireDefault(_norm2Squared);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cnorm2(x, y) {
  if (x.im) {
    var f = _norm2Squared2.default;
    return Math.sqrt(f(x.re) + f(x.im));
  }
  return norm2(x.re);
}

/**
 * Square root of the sum of the squares of the entries of x
 * 
 * @export
 * @param {Array|Number} x
 * @returns {Number}
 * @example
 * 
 * norm2(2)
 * // 2
 * norm2([2,2])
 * // 2.828
 */


function snorm2(x, y) {
  throw new Error('mathlab.norm2: norm2 for sparse matrix not exist');
}

function norm2(x) {
  return Math.sqrt((0, _norm2Squared2.default)(x));
}
},{"./norm2Squared":47}],47:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.default = nrom2Squared;

var _dim = require("./dim");

var _dim2 = _interopRequireDefault(_dim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Sum of the squares of the entries of x
 * 
 * @export
 * @param {Array|Number} x
 * @returns {Number}
 * @example
 * 
 * norm2Squared(2)
 * // 4
 * norm2Squared([2,2])
 * // 8
 */
function nrom2Squared(x, s, k) {
  var accum = 0;
  if ((typeof x === "undefined" ? "undefined" : _typeof(x)) !== "object") {
    xi = x;
    accum += xi * xi;;
    return accum;
  }
  if (typeof s === "undefined") s = (0, _dim2.default)(x);
  if (typeof k === "undefined") k = 0;
  if (k === s.length - 1) return norm2SquaredV(x);
  var xi;
  var n = x.length,
      i;
  for (i = n - 1; i !== -1; --i) {
    xi = nrom2Squared(x[i]);
    accum += xi * xi;;
  }
  return accum;
}

function norm2SquaredV(x) {
  var n = x.length;
  var i, xi;
  var accum = 0;;
  for (i = n - 1; i !== -1; --i) {
    xi = x[i];
    accum += xi * xi;
  }
  return accum;
}
},{"./dim":20}],48:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return cnot(m);
    case 'Sparse':
      return snot(m);
    default:
      return not(m);
  }
};

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _spPointwise = require('./spPointwise');

var _spPointwise2 = _interopRequireDefault(_spPointwise);

var _Sparse = require('./Sparse');

var _Sparse2 = _interopRequireDefault(_Sparse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var not = (0, _pointwise2.default)(function (x) {
  return !x;
});
var snot = (0, _spPointwise2.default)(function (x) {
  return !x;
});

function cnot(x) {
  throw new Error('mathlab.not: no not for complex number');
}

/**
 * Pointwise Math.not(x)
 * 
 * @export
 * @param {Number|Array|Complex|Sparse} m
 * @returns {Number|Array|Complex|Sparse}
 * @example 
 * 
 * not(1)
 * // returns Math.not(1)
 * not([1, 2])
 * // returns [Math.not(1), Math.not(2)]
 * not([[1,2],[1,3]])
 * // returns [ [Math.not(1), Math.not(2)], [Math.not(1), Math.not(3)] ]
 */
},{"./Sparse":3,"./pointwise":50,"./spPointwise":62}],49:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return cor(m1, m2);
    case 'Sparse':
      return sor(m1, m2);
    default:
      return or(m1, m2);
  }
};

var _pointwise = require('./pointwise2');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _spPointwise = require('./spPointwise2');

var _spPointwise2 = _interopRequireDefault(_spPointwise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var or = (0, _pointwise2.default)(function (x, y) {
  return x || y;
});
var sor = (0, _spPointwise2.default)(function (x, y) {
  return x || y;
});

function cor(x, y) {
  throw new Error('mathlab.or: no or for complex number');
}

/**
 * Pointwise or
 * 
 * @export
 * @param {Number|Array|Complex|Sparse} m1
 * @param {Number|Array|Complex|Sparse} m2
 * @returns {Number|Array|Complex|Sparse}
 * @example 
 * 
 * or(1, 2)
 * // returns 1 || 2
 * or([1, 2], [2, 2])
 * // returns [1 || 2, 2 || 2]
 * or([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 || 2, 1 || 2], [1 || 2, 2 || 2] ]
 */
},{"./pointwise2":51,"./spPointwise2":63}],50:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pointwise;

var _dim = require('./dim');

var _dim2 = _interopRequireDefault(_dim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create a pointwise function
 * 
 * @export
 * @param {Function} fun
 * @returns {Function}
 * @example 
 * 
 * function _inc (x) {
 *   return x + 1
 * }
 * const inc = pointwise(inc)
 * inc(1)                                  // 2
 * inc([1, 2])                             // [2, 3]
 * inc([[1, 2], [1, 3]])                   // [[2, 3], [2, 4]]
 */
function pointwise(fun) {
  return function (m) {
    switch ((0, _dim2.default)(m).length) {
      case 0:
        return fun(m);
      case 1:
        return m.map(fun);
      case 2:
        return m.map(function (a) {
          return a.map(fun);
        });
      default:
        throw new Error('mathlab.pointwise: dimension of matrix should <= 2');
    }
  };
}
},{"./dim":20}],51:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = pointwise2;

var _dim = require('./dim');

var _dim2 = _interopRequireDefault(_dim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create a pointwise function of two arguments
 * 
 * @export
 * @param {Function} fun
 * @returns {Function}
 * @example 
 * 
 * function _add (x, y) {
 *   return x + y
 * }
 * const add = pointwise(_add)
 * add(1, 2)                                // 3
 * add([1, 2], [1, 2])                      // [2, 4]
 * add([[1, 2], [1, 2]], [[1, 2], [1, 2]])  //[[2, 4], [2, 4]]
 */
function pointwise2(fun) {
    return function (m1, m2) {
        switch ((0, _dim2.default)(m1).length) {
            case 0:
                return fun(m1, m2);
            case 1:
                {
                    if (typeof m2 === 'number') {
                        return m1.map(function (x) {
                            return fun(x, m2);
                        });
                    }
                    return m1.map(function (x, i) {
                        return fun(x, m2[i]);
                    });
                }
            case 2:
                {
                    if (typeof m2 === 'number') {
                        return m1.map(function (mm1) {
                            return mm1.map(function (x) {
                                return fun(x, m2);
                            });
                        });
                    }
                    return m1.map(function (mm1, i) {
                        return mm1.map(function (x, j) {
                            return fun(x, m2[i][j]);
                        });
                    });
                }

            default:
                throw new Error('mathlab.pointwise: dimension of given array should <= 2');
        }
    };
}
},{"./dim":20}],52:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m1, m2) {
  return (0, _pointwise2.default)(Math.pow)(m1, m2);
};

var _pointwise = require('./pointwise2');

var _pointwise2 = _interopRequireDefault(_pointwise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./pointwise2":51}],53:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = random;

/**
 * Create an Array of random numbers 
 * 
 * @export
 * @param {Array} size of the random matrix
 * @returns {Array} array of random numbers
 * @example
 * 
 * random([2, 3])
 * // [[0.05303,0.1537,0.7280],
 *     [0.3839,0.08818,0.6316]]
 */
function random(s) {
    return _random(s, 0);
}

function _random(s, k) {
    var i,
        n = s[k],
        ret = Array(n),
        rnd;
    if (k === s.length - 1) {
        rnd = Math.random;
        for (i = n - 1; i >= 1; i -= 2) {
            ret[i] = rnd();
            ret[i - 1] = rnd();
        }
        if (i === 0) {
            ret[0] = rnd();
        }
        return ret;
    }
    for (i = n - 1; i >= 0; i--) {
        ret[i] = _random(s, k + 1);
    }return ret;
}
},{}],54:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.reciprocal = reciprocal;
function reciprocal() {
    var mul = numeric.mul,
        div = numeric.div;
    if (this.im) {
        var d = numeric.add(mul(this.re, this.re), mul(this.im, this.im));
        return new numeric.Complex(div(this.re, d), div(numeric.neg(this.im), d));
    }
    return new Complex(div(1, this.re));
}
},{}],55:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = rep;
/**
 * Create an Array by duplicating values 
 * 
 * @param {Array} s size of the Matrix
 * @param {Array} v value
 * @returns {Array}
 * @example
 * 
 * rep([2,3], 0)
 * // [[0,0,0],
 *     [0,0,0]] 
 * 
 * rep([3], 5)
 * // [5,5,5]
 */
function rep(s, v, k) {
    if (typeof k === "undefined") {
        k = 0;
    }
    var n = s[k],
        ret = Array(n),
        i;
    if (k === s.length - 1) {
        for (i = n - 2; i >= 0; i -= 2) {
            ret[i + 1] = v;ret[i] = v;
        }
        if (i === -1) {
            ret[0] = v;
        }
        return ret;
    }
    for (i = n - 1; i >= 0; i--) {
        ret[i] = rep(s, v, k + 1);
    }
    return ret;
}
},{}],56:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return cround(m);
    case 'Sparse':
      return sround(m);
    default:
      return round(m);
  }
};

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var round = (0, _pointwise2.default)(Math.round);

function cround(x) {
  throw new Error('mathlab.round: no round for complex number');
}

function sround(x) {
  throw new Error('mathlab.round: round for sparse matrix not exist');
}

/**
 * Pointwise Math.round(x)
 * 
 * @export
 * @param {Number|Array|Complex|Sparse} m
 * @returns {Number|Array|Complex|Sparse}
 * @example 
 * 
 * round(1)
 * // returns Math.round(1)
 * round([1, 2])
 * // returns [Math.round(1), Math.round(2)]
 * round([[1,2],[1,3]])
 * // returns [ [Math.round(1), Math.round(2)], [Math.round(1), Math.round(3)] ]
 */
},{"./pointwise":50}],57:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return crrshift(m1, m2);
    case 'Sparse':
      return srrshift(m1, m2);
    default:
      return rrshift(m1, m2);
  }
};

var _pointwise = require('./pointwise2');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _spPointwise = require('./spPointwise2');

var _spPointwise2 = _interopRequireDefault(_spPointwise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rrshift = (0, _pointwise2.default)(function (x, y) {
  return x >>> y;
});
var srrshift = (0, _spPointwise2.default)(function (x, y) {
  return x >>> y;
});

function crrshift(x, y) {
  throw new Error('mathlab.rrshift: no rrshift for complex number');
}

/**
 * Pointwise rrshift
 * 
 * @export
 * @param {Number|Array|Complex|Sparse} m1
 * @param {Number|Array|Complex|Sparse} m2
 * @returns {Number|Array|Complex|Sparse}
 * @example 
 * 
 * rrshift(1, 2)
 * // returns 1 >>> 2
 * rrshift([1, 2], [2, 2])
 * // returns [1 >>> 2, 2 >>> 2]
 * rrshift([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 >>> 2, 1 >>> 2], [1 >>> 2, 2 >>> 2] ]
 */
},{"./pointwise2":51,"./spPointwise2":63}],58:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return crshift(m1, m2);
    case 'Sparse':
      return srshift(m1, m2);
    default:
      return rshift(m1, m2);
  }
};

var _pointwise = require('./pointwise2');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _spPointwise = require('./spPointwise2');

var _spPointwise2 = _interopRequireDefault(_spPointwise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rshift = (0, _pointwise2.default)(function (x, y) {
  return x >> y;
});
var srshift = (0, _spPointwise2.default)(function (x, y) {
  return x >> y;
});

function crshift(x, y) {
  throw new Error('mathlab.rshift: no rshift for complex number');
}

/**
 * Pointwise rshift
 * 
 * @export
 * @param {Number|Array|Complex|Sparse} m1
 * @param {Number|Array|Complex|Sparse} m2
 * @returns {Number|Array|Complex|Sparse}
 * @example 
 * 
 * rshift(1, 2)
 * // returns 1 >> 2
 * rshift([1, 2], [2, 2])
 * // returns [1 >> 2, 2 >> 2]
 * rshift([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 >> 2, 1 >> 2], [1 >> 2, 2 >> 2] ]
 */
},{"./pointwise2":51,"./spPointwise2":63}],59:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.default = same;
/**
 * 	x and y are entrywise identical 
 * 
 * @export
 * @param {Array} x
 * @param {Array} y
 * @returns {Boolean}
 * @example
 * 
 * same([1,2], [1,2,3]) // false
 * same([1, 2], [1, 2]) // true
 */
function same(x, y) {
    var i, n;
    if (!(x instanceof Array) || !(y instanceof Array)) {
        return false;
    }
    n = x.length;
    if (n !== y.length) {
        return false;
    }
    for (i = 0; i < n; i++) {
        if (x[i] === y[i]) {
            continue;
        }
        if (_typeof(x[i]) === "object") {
            if (!same(x[i], y[i])) return false;
        } else {
            return false;
        }
    }
    return true;
}
},{}],60:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = setBlock;

var _dim = require('./dim');

var _dim2 = _interopRequireDefault(_dim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Set a block of a matrix 
 * 
 * @param {Array} x
 * @param {Array} from
 * @param {Array} to
 * @param {Array} B
 * @returns {Array}
 * @example
 * 
 * setBlock([[1,2,3], [3,4,5]], [0,0], [1,1],[[2,2],[2,2]])
 * // [[2,2,3],[2,2,5]]
 */
function setBlock(x, from, to, B) {
    var s = (0, _dim2.default)(x);
    function foo(x, y, k) {
        var i,
            a = from[k],
            n = to[k] - a;
        if (k === s.length - 1) {
            for (i = n; i >= 0; i--) {
                x[i + a] = y[i];
            }
        }
        for (i = n; i >= 0; i--) {
            foo(x[i + a], y[i], k + 1);
        }
    }
    foo(x, B, 0);
    return x;
}
},{"./dim":20}],61:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return csin(m);
    case 'Sparse':
      return ssin(m);
    default:
      return sin(m);
  }
};

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _spPointwise = require('./spPointwise');

var _spPointwise2 = _interopRequireDefault(_spPointwise);

var _Complex = require('./Complex');

var _Complex2 = _interopRequireDefault(_Complex);

var _Sparse = require('./Sparse');

var _Sparse2 = _interopRequireDefault(_Sparse);

var _neg = require('./neg');

var _neg2 = _interopRequireDefault(_neg);

var _exp = require('./exp');

var _exp2 = _interopRequireDefault(_exp);

var _div = require('./div');

var _div2 = _interopRequireDefault(_div);

var _sub = require('./sub');

var _sub2 = _interopRequireDefault(_sub);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sin = (0, _pointwise2.default)(Math.sin);
var ssin = (0, _spPointwise2.default)(Math.sin);

function csin(x) {
  if (x.im) {
    return (0, _div2.default)((0, _sub2.default)((0, _exp2.default)(x), (0, _exp2.default)((0, _neg2.default)(x))), new _Complex2.default(0, 2));
    // return x.exp().sub(x.neg().exp()).div(new Complex(0, 2));
  }
  return new _Complex2.default(sin(x.re));
}

/**
 * Pointwise Math.sin(x)
 * 
 * @export
 * @param {Number|Array|Complex|Sparse} m
 * @returns {Number|Array|Complex|Sparse}
 * @example 
 * 
 * sin(1)
 * // returns Math.sin(1)
 * sin([1, 2])
 * // returns [Math.sin(1), Math.sin(2)]
 * sin([[1,2],[1,3]])
 * // returns [ [Math.sin(1), Math.sin(2)], [Math.sin(1), Math.sin(3)] ]
 */
},{"./Complex":2,"./Sparse":3,"./div":21,"./exp":26,"./neg":43,"./pointwise":50,"./spPointwise":62,"./sub":65}],62:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = spPointwise;

var _Sparse = require('./Sparse');

var _Sparse2 = _interopRequireDefault(_Sparse);

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create pointwise function for sparse matrix operating on none zero arguments
 * 
 * @export
 * @param {Function} fun
 * @returns {Function}
 * @example 
 * 
 * function _inc (x) {
 *   return x + 1
 * }
 * const inc = spPointwise(_inc)
 * inc(new Sparse([1,0],[0,0]))           // new Sparse([2,0],[0,0])
 */
function spPointwise(fun) {
  return function (x) {
    return new _Sparse2.default({
      col: x.col.slice(), // copy the array
      row: x.row.slice(),
      val: x.val.map(fun)
    });
  };
}
},{"./Sparse":3,"./pointwise":50}],63:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = spPointwise2;

var _sup = require('./sup');

var _sup2 = _interopRequireDefault(_sup);

var _rep = require('./rep');

var _rep2 = _interopRequireDefault(_rep);

var _Sparse = require('./Sparse');

var _Sparse2 = _interopRequireDefault(_Sparse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function spPointwise2(fun) {
	return function (X, Y) {
		var Xi = X.col,
		    Xj = X.row,
		    Xv = X.val;
		var Yi = Y.col,
		    Yj = Y.row,
		    Yv = Y.val;
		var n = Xi.length - 1,
		    m = Math.max((0, _sup2.default)(Xj), (0, _sup2.default)(Yj)) + 1;
		var Zi = (0, _rep2.default)([n + 1], 0),
		    Zj = [],
		    Zv = [];
		var x = (0, _rep2.default)([m], 0),
		    y = (0, _rep2.default)([m], 0);
		var xk, yk, zk;
		var i,
		    j,
		    j0,
		    j1,
		    k,
		    p = 0;
		for (i = 0; i < n; ++i) {
			j0 = Xi[i];
			j1 = Xi[i + 1];
			for (j = j0; j !== j1; ++j) {
				k = Xj[j];
				x[k] = 1;
				Zj[p] = k;
				++p;
			}
			j0 = Yi[i];
			j1 = Yi[i + 1];
			for (j = j0; j !== j1; ++j) {
				k = Yj[j];
				y[k] = Yv[j];
				if (x[k] === 0) {
					Zj[p] = k;++p;
				}
			}
			Zi[i + 1] = p;
			j0 = Xi[i];
			j1 = Xi[i + 1];
			for (j = j0; j !== j1; ++j) {
				x[Xj[j]] = Xv[j];
			}j0 = Zi[i];
			j1 = Zi[i + 1];
			for (j = j0; j !== j1; ++j) {
				k = Zj[j];
				xk = x[k];
				yk = y[k];
				zk = fun(xk, yk);
				Zv[j] = zk;
			}
			j0 = Xi[i];
			j1 = Xi[i + 1];
			for (j = j0; j !== j1; ++j) {
				x[Xj[j]] = 0;
			}j0 = Yi[i];
			j1 = Yi[i + 1];
			for (j = j0; j !== j1; ++j) {
				y[Yj[j]] = 0;
			}
		}
		return new _Sparse2.default({
			col: Zi,
			row: Zj,
			val: Zv
		});
	};
}
},{"./Sparse":3,"./rep":55,"./sup":66}],64:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return csqrt(m);
    case 'Sparse':
      return ssqrt(m);
    default:
      return sqrt(m);
  }
};

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _spPointwise = require('./spPointwise');

var _spPointwise2 = _interopRequireDefault(_spPointwise);

var _Sparse = require('./Sparse');

var _Sparse2 = _interopRequireDefault(_Sparse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sqrt = (0, _pointwise2.default)(Math.sqrt);
var ssqrt = (0, _spPointwise2.default)(Math.sqrt);

function csqrt(x) {
  throw new Error('mathlab.sqrt: no sqrt for complex number');
}

/**
 * Pointwise Math.sqrt(x)
 * 
 * @export
 * @param {Number|Array|Complex|Sparse} m
 * @returns {Number|Array|Complex|Sparse}
 * @example 
 * 
 * sqrt(1)
 * // returns Math.sqrt(1)
 * sqrt([1, 2])
 * // returns [Math.sqrt(1), Math.sqrt(2)]
 * sqrt([[1,2],[1,3]])
 * // returns [ [Math.sqrt(1), Math.sqrt(2)], [Math.sqrt(1), Math.sqrt(3)] ]
 */
},{"./Sparse":3,"./pointwise":50,"./spPointwise":62}],65:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return csub(m1, m2);
    case 'Sparse':
      return ssub(m1, m2);
    default:
      return sub(m1, m2);
  }
};

var _pointwise = require('./pointwise2');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _spPointwise = require('./spPointwise2');

var _spPointwise2 = _interopRequireDefault(_spPointwise);

var _Complex = require('./Complex');

var _Complex2 = _interopRequireDefault(_Complex);

var _neg = require('./neg');

var _neg2 = _interopRequireDefault(_neg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sub = (0, _pointwise2.default)(function (x, y) {
  return x - y;
});
var ssub = (0, _spPointwise2.default)(function (x, y) {
  return x - y;
});

function csub(x, y) {
  if (!(y instanceof _Complex2.default)) {
    y = new _Complex2.default(y);
  }
  if (x.im) {
    if (y.im) {
      return new _Complex2.default(sub(x.re, y.re), sub(x.im, y.im));
    }
    return new _Complex2.default(sub(x.re, y.re), x.im);
  }
  if (y.im) {
    return new _Complex2.default(sub(x.re, y.re), (0, _neg2.default)(y.im));
  }
  return new _Complex2.default(sub(x.re, y.re));
}

/**
 * Pointwise sub
 * 
 * @export
 * @param {Number|Array|Complex|Sparse} m1
 * @param {Number|Array|Complex|Sparse} m2
 * @returns {Number|Array|Complex|Sparse}
 * @example 
 * 
 * sub(1, 2)
 * // returns 1 - 2
 * sub([1, 2], [2, 2])
 * // returns [1 - 2, 2 - 2]
 * sub([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 - 2, 1 - 2], [1 - 2, 2 - 2] ]
 */
},{"./Complex":2,"./neg":43,"./pointwise2":51,"./spPointwise2":63}],66:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.default = sup;

var _dim = require("./dim");

var _dim2 = _interopRequireDefault(_dim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sup(x, s, k) {
  var accum = -Infinity,
      max = Math.max;
  if ((typeof x === "undefined" ? "undefined" : _typeof(x)) !== "object") {
    xi = x;
    accum = max(accum, xi);;
    return accum;
  }
  if (typeof s === "undefined") s = (0, _dim2.default)(x);
  if (typeof k === "undefined") k = 0;
  if (k === s.length - 1) return supV(x);
  var xi,
      n = x.length,
      i;
  for (i = n - 1; i !== -1; --i) {
    xi = arguments.callee(x[i]);
    accum = max(accum, xi);
  }
  return accum;
}

function supV(x) {
  var n = x.length;
  var i, xi;
  var accum = -Infinity,
      max = Math.max;;
  for (i = n - 1; i !== -1; --i) {
    xi = x[i];
    accum = max(accum, xi);;
  }
  return accum;
}
},{"./dim":20}],67:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return ctan(m);
    case 'Sparse':
      return stan(m);
    default:
      return tan(m);
  }
};

var _pointwise = require('./pointwise');

var _pointwise2 = _interopRequireDefault(_pointwise);

var _spPointwise = require('./spPointwise');

var _spPointwise2 = _interopRequireDefault(_spPointwise);

var _Sparse = require('./Sparse');

var _Sparse2 = _interopRequireDefault(_Sparse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tan = (0, _pointwise2.default)(Math.tan);
var stan = (0, _spPointwise2.default)(Math.tan);

function ctan(x) {
  // TODO
  throw new Error('mathlab.tan: no tan for complex number');
}

/**
 * Pointwise Math.tan(x)
 * 
 * @export
 * @param {Number|Array|Complex|Sparse} m
 * @returns {Number|Array|Complex|Sparse}
 * @example 
 * 
 * tan(1)
 * // returns Math.tan(1)
 * tan([1, 2])
 * // returns [Math.tan(1), Math.tan(2)]
 * tan([[1,2],[1,3]])
 * // returns [ [Math.tan(1), Math.tan(2)], [Math.tan(1), Math.tan(3)] ]
 */
},{"./Sparse":3,"./pointwise":50,"./spPointwise":62}],68:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = tensor;

var _mul = require('./mul');

var _mul2 = _interopRequireDefault(_mul);

var _dim = require('./dim');

var _dim2 = _interopRequireDefault(_dim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Tensor product ret[i][j] = x[i]*y[j]
 * 
 * @export
 * @param {Array|Number} x
 * @param {Array|Number} y
 * @returns {Array|Number}
 * @example 
 * 
 * tensor([1,2],[3,4])
 * // [[1,4],
 * //  [6,8]]
 */
function tensor(x, y) {
    if (typeof x === "number" || typeof y === "number") return (0, _mul2.default)(x, y);
    var s1 = (0, _dim2.default)(x),
        s2 = (0, _dim2.default)(y);
    if (s1.length !== 1 || s2.length !== 1) {
        throw new Error('Mathlab.tensor: tensor product is only defined for vectors');
    }
    var m = s1[0],
        n = s2[0],
        A = Array(m),
        Ai,
        i,
        j,
        xi;
    for (i = m - 1; i >= 0; i--) {
        Ai = Array(n);
        xi = x[i];
        for (j = n - 1; j >= 3; --j) {
            Ai[j] = xi * y[j];
            --j;
            Ai[j] = xi * y[j];
            --j;
            Ai[j] = xi * y[j];
            --j;
            Ai[j] = xi * y[j];
        }
        while (j >= 0) {
            Ai[j] = xi * y[j];--j;
        }
        A[i] = Ai;
    }
    return A;
}
},{"./dim":20,"./mul":42}],69:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (x) {
  switch (x.constructor.name) {
    case 'Complex':
      return ctranspose(x);
    case 'Sparse':
      return stranspose(x);
    default:
      return transpose(x);
  }
};

var _Complex = require('./Complex');

var _Complex2 = _interopRequireDefault(_Complex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ctranspose(x) {
  // TODO: Check if is matrix
  var t = transpose;
  if (x.im) {
    return new _Complex2.default(t(x.re), t(x.im));
  }
  return new _Complex2.default(t(x.re));
}

/**
 * Matrix transpose
 * 
 * @export
 * @param {Array} x
 * @returns {Array}
 * @example 
 * 
 * transpose([[1,2,3],[4,5,6]])
 * //[[1,4],
 * // [2,5],
 * // [3,6]]
 */


function stranspose(x) {
  throw new Error('mathlab.transpose: transpose for sparse matrix not exist');
}

function transpose(x) {
  var i,
      j,
      m = x.length,
      n = x[0].length,
      ret = Array(n),
      A0,
      A1,
      Bj;
  for (j = 0; j < n; j++) {
    ret[j] = Array(m);
  }for (i = m - 1; i >= 1; i -= 2) {
    A1 = x[i];
    A0 = x[i - 1];
    for (j = n - 1; j >= 1; --j) {
      Bj = ret[j];Bj[i] = A1[j];Bj[i - 1] = A0[j];
      --j;
      Bj = ret[j];Bj[i] = A1[j];Bj[i - 1] = A0[j];
    }
    if (j === 0) {
      Bj = ret[0];Bj[i] = A1[0];Bj[i - 1] = A0[0];
    }
  }
  if (i === 0) {
    A0 = x[0];
    for (j = n - 1; j >= 1; --j) {
      ret[j][0] = A0[j];
      --j;
      ret[j][0] = A0[j];
    }
    if (j === 0) {
      ret[0][0] = A0[0];
    }
  }
  return ret;
}
},{"./Complex":2}]},{},[1]);
