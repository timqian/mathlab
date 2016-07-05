
import assert from 'assert'
import should from 'should'
import { atan } from '../lib'

describe('atan', () => {
  it('', () => {
    atan(1).should.equal(Math.atan(1))
    atan([1, 2]).should.deepEqual([Math.atan(1), Math.atan(2)])
    atan([[1,2],[1,3]]).should.deepEqual([ [Math.atan(1), Math.atan(2)], [Math.atan(1), Math.atan(3)] ])
  })
})
