
import assert from 'assert'
import should from 'should'
import { exp } from '../lib'

describe('exp', () => {
  it('', () => {
    exp(1).should.equal(Math.exp(1))
    exp([1, 2]).should.deepEqual([Math.exp(1), Math.exp(2)])
    exp([[1,2],[1,3]]).should.deepEqual([ [Math.exp(1), Math.exp(2)], [Math.exp(1), Math.exp(3)] ])
  })
})
