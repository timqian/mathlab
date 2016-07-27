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