
import fs from 'fs'

const ops2 = {
  add: '+',
  sub: '-',
  mul: '*',
  div: '/',
  mod: '%',
  and: '&&',
  or: '||',
  eq: '===',
  neq: '!==',
  lt: '<',
  gt: '>',
  leq: '<=',
  geq: '>=',
  band: '&',
  bor: '|',
  bxor: '^',
  lshift: '<<',
  rshift: '>>',
  rrshift: '>>>'
}

Object.keys(ops2).forEach(key => {
  const op = ops2[key]
  const src = `
import pointwise from './pointwise'

/**
 * Pointwise ${key}
 * 
 * @export
 * @param {Number|Array} m1
 * @param {Number|Array} m2
 * @returns {Number|Array}
 * @example 
 * 
 * ${key}(1, 2)
 * // returns 1 ${op} 2
 * ${key}([1, 2], [2, 2])
 * // returns [1 ${op} 2, 2 ${op} 2]
 * ${key}([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 ${op} 2, 1 ${op} 2], [1 ${op} 2, 2 ${op} 2] ]
 */
export default function (m1, m2) {
  return pointwise((x, y) => x ${op} y)(m1, m2)
}
`
  const test = `
import assert from 'assert'
import should from 'should'
import { ${key} } from '../lib'

describe('${key}', () => {
  it('', () => {
    ${key}(1, 2).should.equal(1 ${op} 2)
    ${key}([1, 2], [2, 2]).should.deepEqual([1 ${op} 2, 2 ${op} 2])
    ${key}([[2,1], [1,2]], [[2, 2], [2, 2]])
      .should.deepEqual(
        [ [2 ${op} 2, 1 ${op} 2], [1 ${op} 2, 2 ${op} 2] ]
      )
  })
})
`

  fs.writeFileSync(`./src/${key}.js`, src)
  fs.writeFileSync(`./test/${key}.js`, test)
})