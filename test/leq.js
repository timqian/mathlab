
import assert from 'assert'
import should from 'should'
import { leq } from '../lib'

describe('leq', () => {
  it('', () => {
    leq(1, 2).should.equal(1 <= 2)
    leq([1, 2], [2, 2]).should.deepEqual([1 <= 2, 2 <= 2])
    leq([[2,1], [1,2]], [[2, 2], [2, 2]])
      .should.deepEqual(
        [ [2 <= 2, 1 <= 2], [1 <= 2, 2 <= 2] ]
      )
  })
})
