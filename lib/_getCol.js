"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = _getCol;
function _getCol(A, j, x) {
    var n = A.length,
        i;
    for (i = n - 1; i > 0; --i) {
        x[i] = A[i][j];
        --i;
        x[i] = A[i][j];
    }
    if (i === 0) x[0] = A[0][j];
}