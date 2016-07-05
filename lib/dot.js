// import dim from './dim'
// import dotMMbig from './dotMMbig'
// import dotMMsmall from './dotMMsmall'
// import dotVV from './dotVV'
// import dotVM from './dotVM'
// import dotMV from './dotMV'
// import mulVS from './mulVS'
// import mulSV from './mulSV'

// export default function dot (x, y) {
//   var d = dim
//   switch (d(x).length * 1000 + d(y).length) {
//     case 2002:
//       if (y.length < 10) return dotMMsmall(x, y)
//       else return dotMMbig(x, y)
//     case 2001:
//       return dotMV(x, y)
//     case 1002:
//       return dotVM(x, y)
//     case 1001:
//       return dotVV(x, y)
//     case 1000:
//       return mulVS(x, y)
//     case 1:
//       return mulSV(x, y)
//     case 0:
//       return x * y
//     default:
//       throw new Error('dot() only works on vectors and matrices')
//   }
// }
"use strict";