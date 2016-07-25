
import assert from 'assert'
import should from 'should'
import { and } from '../lib'

describe('and', () => {
  it('num & arr', () => {
    and(1, 2).should.equal(1 && 2)
    and([1, 2], [2, 2]).should.deepEqual([1 && 2, 2 && 2])
    and([[2,1], [1,2]], [[2, 2], [2, 2]])
      .should.deepEqual(
        [ [2 && 2, 1 && 2], [1 && 2, 2 && 2] ]
      )
  })
})
