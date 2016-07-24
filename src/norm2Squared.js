import dim from './dim';

/**
 * Sum of the squares of the entries of x
 * 
 * @export
 * @param {Array|Number} x
 * @returns {Number}
 * @example
 * 
 * norm2Squared(2)
 * // 4
 * norm2Squared([2,2])
 * // 8
 */
export default function nrom2Squared(x, s, k) {
  var accum = 0;
  if (typeof x !== "object") {
    xi = x;
    accum += xi * xi;;
    return accum;
  }
  if (typeof s === "undefined") s = dim(x);
  if (typeof k === "undefined") k = 0;
  if (k === s.length - 1) return norm2SquaredV(x);
  var xi;
  var n = x.length,
    i;
  for (i = n - 1; i !== -1; --i) {
    xi = nrom2Squared(x[i]);
    accum += xi * xi;;
  }
  return accum;
}

function norm2SquaredV(x) {
  var n = x.length;
  var i, xi;
  var accum = 0;;
  for (i = n - 1; i !== -1; --i) {
    xi = x[i];
    accum += xi * xi;
  }
  return accum;
}