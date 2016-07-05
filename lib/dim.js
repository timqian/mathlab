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
 * @returns {Array}
 * @example 
 * 
 * dim([[1, 2, 3], [1, 2, 2]])
 * // [2, 3]
 */
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