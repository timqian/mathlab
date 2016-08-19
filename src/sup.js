import dim from './dim'

export default function sup(x, s, k) {
  var accum = -Infinity, max = Math.max;
  if (typeof x !== "object") { 
    xi = x;
    accum = max(accum, xi);;
    return accum; 
	}
  if (typeof s === "undefined") s = dim(x);
  if (typeof k === "undefined") k = 0;
  if (k === s.length - 1) return supV(x);
  var xi, n = x.length, i;
  for (i = n - 1; i !== -1; --i) { 
		xi = arguments.callee(x[i]);
    accum = max(accum, xi);
	}
  return accum; 
}

function supV(x) {
	var n = x.length;
	var i,xi;
	var accum = -Infinity, max = Math.max;;
	for(i=n-1;i!==-1;--i) { 
			xi = x[i];
			accum = max(accum,xi);;
	}
	return accum;
}
