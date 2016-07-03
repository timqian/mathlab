import dotVV from './dotVV';

export default function dotMV(x,y) {
    var p = x.length, q = y.length,i;
    var ret = Array(p);
    for(i=p-1;i>=0;i--) { ret[i] = dotVV(x[i],y); }
    return ret;
}