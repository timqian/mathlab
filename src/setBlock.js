import dim from './dim'

/**
 * Set a block of a matrix 
 * 
 * @param {Array} x
 * @param {Array} from
 * @param {Array} to
 * @param {Array} B
 * @returns {Array}
 * @example
 * 
 * setBlock([[1,2,3], [3,4,5]], [0,0], [1,1],[[2,2],[2,2]])
 * // [[2,2,3],[2,2,5]]
 */
export default function setBlock(x,from,to,B) {
    var s = dim(x);
    function foo(x,y,k) {
        var i,a = from[k], n = to[k]-a;
        if(k === s.length-1) { for(i=n;i>=0;i--) { x[i+a] = y[i]; } }
        for(i=n;i>=0;i--) { foo(x[i+a],y[i],k+1); }
    }
    foo(x,B,0);
    return x;
}