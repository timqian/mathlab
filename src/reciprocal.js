export function reciprocal() {
    var mul = numeric.mul, div = numeric.div;
    if(this.im) {
        var d = numeric.add(mul(this.re,this.re),mul(this.im,this.im));
        return new numeric.Complex(div(this.re,d),div(numeric.neg(this.im),d));
    }
    return new Complex(div(1,this.re));
}