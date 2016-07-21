"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.reciprocal = reciprocal;
function reciprocal() {
    var mul = numeric.mul,
        div = numeric.div;
    if (this.y) {
        var d = numeric.add(mul(this.x, this.x), mul(this.y, this.y));
        return new numeric.T(div(this.x, d), div(numeric.neg(this.y), d));
    }
    return new T(div(1, this.x));
}