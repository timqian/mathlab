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
  if (A.y) {
    return new _Complex2.default(getDiag(A.x), getDiag(A.y));
  }
  return new _Complex2.default(getDiag(A.x));
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