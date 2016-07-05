
import assert from 'assert'
import should from 'should'
import { or } from '../lib'

describe('or', () => {
  it('', () => {
    or(1, 2).should.equal(1 || 2)
    or([1, 2], [2, 2]).should.deepEqual([1 || 2, 2 || 2])
    or([[2,1], [1,2]], [[2, 2], [2, 2]])
      .should.deepEqual(
        [ [2 || 2, 1 || 2], [1 || 2, 2 || 2] ]
      )
  })
})
