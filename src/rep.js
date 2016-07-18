/**
 * Create an Array by duplicating values 
 * 
 * @param {Array} s size of the Matrix
 * @param {Array} v value
 * @returns {Array}
 * @example
 * 
 * rep([2,3], 0)
 * // [[0,0,0],
 *     [0,0,0]] 
 * 
 * rep([3], 5)
 * // [5,5,5]
 */
export default function rep(s,v,k) {
    if(typeof k === "undefined") { k=0; }
    var n = s[k], ret = Array(n), i;
    if(k === s.length-1) {
        for(i=n-2;i>=0;i-=2) { ret[i+1] = v; ret[i] = v; }
        if(i===-1) { ret[0] = v; }
        return ret;
    }
    for(i=n-1;i>=0;i--) { ret[i] = rep(s,v,k+1); }
    return ret;
}