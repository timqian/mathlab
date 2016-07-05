
import fs from 'fs'

const mathFuns2 = ['atan2','pow']

mathFuns2.forEach(fun => {
    const src = `
import dim from './dim';

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
export default function ${fun}(m1, m2) {
  if (dim(m1)[0] !== dim(m2)[0] || dim(m1)[1] !== dim(m2)[1]) {
    throw new Error('${fun}() requires two matrices having the same size')
  }
  switch (dim(m1).length) {
    case 0:
      return Math.${fun}(m1, m2)
    case 1:
      return m1.map((x, i) => Math.${fun}(x, m2[i]))
    case 2:
      return m1.map( (mm1, i) => mm1.map( (x, j) => Math.${fun}(x, m2[i][j]) ) )
    default:
      throw new Error('${fun}(): wrong size')
  }
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