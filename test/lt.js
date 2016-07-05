
import assert from 'assert'
import should from 'should'
import { lt } from '../lib'

describe('lt', () => {
  it('', () => {
    lt(1, 2).should.equal(1 < 2)
    lt([1, 2], [2, 2]).should.deepEqual([1 < 2, 2 < 2])
    lt([[2,1], [1,2]], [[2, 2], [2, 2]])
      .should.deepEqual(
        [ [2 < 2, 1 < 2], [1 < 2, 2 < 2] ]
      )
  })
})
