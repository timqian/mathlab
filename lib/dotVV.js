"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dotVV;
/**
 * Matrix product between vectors
 * 
 * @export
 * @param {Array} x
 * @param {Array} y
 * @returns Number
 * @example 
 * 
 * dotVV([1, 2], [2, 1])
 * // 4
 */
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