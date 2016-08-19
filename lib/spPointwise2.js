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