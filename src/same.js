/**
 * 	x and y are entrywise identical 
 * 
 * @export
 * @param {Array} x
 * @param {Array} y
 * @returns {Boolean}
 * @example
 * 
 * same([1,2], [1,2,3]) // false
 * same([1, 2], [1, 2]) // true
 */
export default function same(x,y) {
    var i,n;
    if(!(x instanceof Array) || !(y instanceof Array)) { return false; }
    n = x.length;
    if(n !== y.length) { return false; }
    for(i=0;i<n;i++) {
        if(x[i] === y[i]) { continue; }
        if(typeof x[i] === "object") { if(!same(x[i],y[i])) return false; }
        else { return false; }
    }
    return true;
}