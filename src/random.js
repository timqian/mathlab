
/**
 * Create an Array of random numbers 
 * 
 * @export
 * @param {Array} size of the random matrix
 * @returns {Array} array of random numbers
 * @example
 * 
 * random([2, 3])
 * // [[0.05303,0.1537,0.7280],
 *     [0.3839,0.08818,0.6316]]
 */
export default function random(s) { 
    return _random(s,0);
}

function _random(s,k) {
    var i,n=s[k],ret=Array(n), rnd;
    if(k === s.length-1) {
        rnd = Math.random;
        for(i=n-1;i>=1;i-=2) {
            ret[i] = rnd();
            ret[i-1] = rnd();
        }
        if(i===0) { ret[0] = rnd(); }
        return ret;
    }
    for(i=n-1;i>=0;i--) ret[i] = _random(s,k+1);
    return ret;
}