
import assert from 'assert'
import should from 'should'
import { bxor } from '../lib'

describe('bxor', () => {
  it('', () => {
    bxor(1, 2).should.equal(1 ^ 2)
    bxor([1, 2], [2, 2]).should.deepEqual([1 ^ 2, 2 ^ 2])
    bxor([[2,1], [1,2]], [[2, 2], [2, 2]])
      .should.deepEqual(
        [ [2 ^ 2, 1 ^ 2], [1 ^ 2, 2 ^ 2] ]
      )
  })
})
