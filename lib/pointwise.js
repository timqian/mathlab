'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.default = pointwise;

var _dim = require('./dim');

var _dim2 = _interopRequireDefault(_dim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create a pointwise function
 * 
 * @export
 * @param {Function} fun
 * @returns {Function}
 * @example 
 * 
 * function _inc (x) {
 *   return x + 1
 * }
 * const inc = pointwise(inc)
 * inc(1)                                  // 2
 * inc([1, 2])                             // [2, 3]
 * inc([[1, 2], [1, 3]])                   // [[2, 3], [2, 4]]
 * 
 * 
 * function _add (x, y) {
 *   return x + y
 * }
 * const add = pointwise(_add)
 * add(1, 2)                                // 3
 * add([1, 2], [1, 2])                      // [2, 4]
 * add([[1, 2], [1, 2]], [[1, 2], [1, 2]])  //[[2, 4], [2, 4]]
 */
function pointwise(fun) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (args.length === 0) {
      throw new Error('mathlab.pointwise: must provide arguments');
    } else if (args.length === 1) {
      var m = args[0];

      switch ((0, _dim2.default)(m).length) {
        case 0:
          return fun(m);
        case 1:
          return m.map(fun);
        case 2:
          return m.map(function (a) {
            return a.map(fun);
          });
        default:
          throw new Error('mathlab.pointwise: dimension of matrix should <= 2');
      }
    } else if (args.length === 2) {
      var _ret = function () {
        var m1 = args[0];
        var m2 = args[1];
        // if (dim(m1)[0] !== dim(m2)[0] || dim(m1)[1] !== dim(m2)[1]) {
        //   throw new Error('mathlab: size of two matrices should be the same')
        // }

        switch ((0, _dim2.default)(m1).length) {
          case 0:
            return {
              v: fun(m1, m2)
            };
          case 1:
            {
              if (typeof m2 === 'number') {
                return {
                  v: m1.map(function (x) {
                    return fun(x, m2);
                  })
                };
              }
              return {
                v: m1.map(function (x, i) {
                  return fun(x, m2[i]);
                })
              };
            }
          case 2:
            {
              if (typeof m2 === 'number') {
                return {
                  v: m1.map(function (mm1) {
                    return mm1.map(function (x) {
                      return fun(x, m2);
                    });
                  })
                };
              }
              return {
                v: m1.map(function (mm1, i) {
                  return mm1.map(function (x, j) {
                    return fun(x, m2[i][j]);
                  });
                })
              };
            }

          default:
            throw new Error('mathlab.pointwise: dimension of matrix should <= 2');
        }
      }();

      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
    }
  };
}