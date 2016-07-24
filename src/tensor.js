import mul from './mul'
import dim from './dim'

/**
 * Tensor product ret[i][j] = x[i]*y[j]
 * 
 * @export
 * @param {Array|Number} x
 * @param {Array|Number} y
 * @returns {Array|Number}
 * @example 
 * 
 * tensor([1,2],[3,4])
 * // [[1,4],
 * //  [6,8]]
 */
export default function tensor(x,y) {
    if(typeof x === "number" || typeof y === "number") return mul(x,y);
    var s1 = dim(x), s2 = dim(y);
    if(s1.length !== 1 || s2.length !== 1) {
        throw new Error('Mathlab.tensor: tensor product is only defined for vectors');
    }
    var m = s1[0], n = s2[0], A = Array(m), Ai, i,j,xi;
    for(i=m-1;i>=0;i--) {
        Ai = Array(n);
        xi = x[i];
        for(j=n-1;j>=3;--j) {
            Ai[j] = xi * y[j];
            --j;
            Ai[j] = xi * y[j];
            --j;
            Ai[j] = xi * y[j];
            --j;
            Ai[j] = xi * y[j];
        }
        while(j>=0) { Ai[j] = xi * y[j]; --j; }
        A[i] = Ai;
    }
    return A;
}