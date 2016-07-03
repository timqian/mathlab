'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.default = dim;
/**
 * Get Array dimensions
 * 
 * @export
 * @param {Array} x
 * @returns Array
 * @example 
 * 
 * dim([[1, 2, 3], [1, 2, 2]])
 * // [2, 3]
 */
function dim(x) {
  var y; // ,z
  if ((typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object') {
    y = x[0];
    if ((typeof y === 'undefined' ? 'undefined' : _typeof(y)) === 'object') {
      // z = y[0]
      // if (typeof z === 'object') {
      //   return numeric._dim(x)
      // }
      return [x.length, y.length];
    }
    return [x.length];
  }
  return [];
}