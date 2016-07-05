
import fs from 'fs'

const mathFuns2 = ['atan2','pow']

mathFuns2.forEach(fun => {
    const src = `
import pointwise from './pointwise'

/**
 * Pointwise Math.${fun}(x, y)
 * 
 * @export
 * @param {Number|Array} m1
 * @param {Number|Array} m2
 * @returns {Number|Array}
 * @example 
 * 
 * ${fun}(1, 2)
 * // Equals Math.${fun}(1, 2)
 * ${fun}([1, 2], [2, 2])
 * // Equals [Math.${fun}(1, 2), Math.${fun}(2, 2)]
 * ${fun}([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // Equals [ [Math.${fun}(2, 2), Math.${fun}(1, 2)], [Math.${fun}(1, 2), Math.${fun}(2, 2)] ]
 */
export default function (m1, m2) { 
  return pointwise(Math.${fun})(m1, m2)
}
`
const test = `
import assert from 'assert'
import should from 'should'
import { ${fun} } from '../lib'

describe('${fun}', () => {
  it('', () => {
    ${fun}(1, 2).should.equal(Math.${fun}(1, 2))
    ${fun}([1, 2], [2, 2]).should.deepEqual([Math.${fun}(1, 2), Math.${fun}(2, 2)])
    ${fun}([[2,1], [1,2]], [[2, 2], [2, 2]])
      .should.deepEqual(
        [ [Math.${fun}(2, 2), Math.${fun}(1, 2)], [Math.${fun}(1, 2), Math.${fun}(2, 2)] ]
      )
  })
})
`
  fs.writeFileSync(`./src/${fun}.js`, src)
  fs.writeFileSync(`./test/${fun}.js`, test)
})