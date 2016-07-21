import diag from './diag';
import rep from './rep';

/**
 * Generate identity matrix of given size
 * 
 * @param {Number} n
 * @returns {Array}
 * @example 
 * 
 * identity(2)
 * // [[1, 0], [0, 1]]
 */
export default function identity(n) {
    return diag(rep([n], 1));
}