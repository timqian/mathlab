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