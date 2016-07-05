
import assert from 'assert'
import should from 'should'
import { tan } from '../lib'

describe('tan', () => {
  it('', () => {
    tan(1).should.equal(Math.tan(1))
    tan([1, 2]).should.deepEqual([Math.tan(1), Math.tan(2)])
    tan([[1,2],[1,3]]).should.deepEqual([ [Math.tan(1), Math.tan(2)], [Math.tan(1), Math.tan(3)] ])
  })
})
