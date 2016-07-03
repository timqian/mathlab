"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = random;
function _random(s, k) {
    var i,
        n = s[k],
        ret = Array(n),
        rnd;
    if (k === s.length - 1) {
        rnd = Math.random;
        for (i = n - 1; i >= 1; i -= 2) {
            ret[i] = rnd();
            ret[i - 1] = rnd();
        }
        if (i === 0) {
            ret[0] = rnd();
        }
        return ret;
    }
    for (i = n - 1; i >= 0; i--) {
        ret[i] = _random(s, k + 1);
    }return ret;
}

function random(s) {
    return _random(s, 0);
}