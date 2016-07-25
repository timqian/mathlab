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
console.log(new Sparse({ col: [1, 2], row: [1, 2], val: [1, 2] }));
console.log(new Sparse([[1, 0, 0], [0, 1, 0], [0, 0, 0]]));