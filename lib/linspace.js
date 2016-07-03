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
 * @returns Array
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