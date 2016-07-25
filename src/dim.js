/**
 * Get Array dimensions
 * 
 * @export
 * @param {Array} x
 * @returns {Array}
 * @example 
 * 
 * dim([[1, 2, 3], [1, 2, 2]])
 * // [2, 3]
 */
export default function(x) {
  switch (x.constructor.name) {
    case 'Complex':
      return cdim(x);
    case 'Sparse':
      return sdim(x);
    default:
      return dim(x);
  }
}

function cdim(x) {
  if (x.x) {
    return dim(x.x)
  } else {
    return dim(x.y)
  }
}

function sdim(x) {
  return [x.col.length-1, x.col.length-1];
}


function dim (x) {
  if (typeof x === 'object') {
    if (typeof x[0] === 'object') {
      if (typeof x[0][0] === 'object') {
        throw new Error('mathlab: only support two demitional matrix for now')
      }
      return [x.length, x[0].length]
    }
    return [x.length]
  }
  return []
}
