
import assert from 'assert'
import should from 'should'
import { cos } from '../lib'

describe('cos', () => {
  it('', () => {
    cos(1).should.equal(Math.cos(1))
    cos([1, 2]).should.deepEqual([Math.cos(1), Math.cos(2)])
    cos([[1,2],[1,3]]).should.deepEqual([ [Math.cos(1), Math.cos(2)], [Math.cos(1), Math.cos(3)] ])
  })
})
