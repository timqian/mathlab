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