
import assert from 'assert'
import should from 'should'
import { round } from '../lib'

describe('round', () => {
  it('', () => {
    round(1).should.equal(Math.round(1))
    round([1, 2]).should.deepEqual([Math.round(1), Math.round(2)])
    round([[1,2],[1,3]]).should.deepEqual([ [Math.round(1), Math.round(2)], [Math.round(1), Math.round(3)] ])
  })
})
