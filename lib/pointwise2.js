'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = pointwise2;

var _dim = require('./dim');

var _dim2 = _interopRequireDefault(_dim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create a pointwise function of two arguments
 * 
 * @export
 * @param {Function} fun
 * @returns {Function}
 * @example 
 * 
 * function _add (x, y) {
 *   return x + y
 * }
 * const add = pointwise(_add)
 * add(1, 2)                                // 3
 * add([1, 2], [1, 2])                      // [2, 4]
 * add([[1, 2], [1, 2]], [[1, 2], [1, 2]])  //[[2, 4], [2, 4]]
 */
function pointwise2(fun) {
    return function (m1, m2) {
        switch ((0, _dim2.default)(m1).length) {
            case 0:
                return fun(m1, m2);
            case 1:
                {
                    if (typeof m2 === 'number') {
                        return m1.map(function (x) {
                            return fun(x, m2);
                        });
                    }
                    return m1.map(function (x, i) {
                        return fun(x, m2[i]);
                    });
                }
            case 2:
                {
                    if (typeof m2 === 'number') {
                        return m1.map(function (mm1) {
                            return mm1.map(function (x) {
                                return fun(x, m2);
                            });
                        });
                    }
                    return m1.map(function (mm1, i) {
                        return mm1.map(function (x, j) {
                            return fun(x, m2[i][j]);
                        });
                    });
                }

            default:
                throw new Error('mathlab.pointwise: dimension of given array should <= 2');
        }
    };
}