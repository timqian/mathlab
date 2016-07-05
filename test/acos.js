
import assert from 'assert'
import should from 'should'
import { acos } from '../lib'

describe('acos', () => {
  it('', () => {
    acos(1).should.equal(Math.acos(1))
    acos([1, 2]).should.deepEqual([Math.acos(1), Math.acos(2)])
    acos([[1,2],[1,3]]).should.deepEqual([ [Math.acos(1), Math.acos(2)], [Math.acos(1), Math.acos(3)] ])
  })
})
