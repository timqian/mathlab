
import assert from 'assert'
import should from 'should'
import { gt } from '../lib'

describe('gt', () => {
  it('', () => {
    gt(1, 2).should.equal(1 > 2)
    gt([1, 2], [2, 2]).should.deepEqual([1 > 2, 2 > 2])
    gt([[2,1], [1,2]], [[2, 2], [2, 2]])
      .should.deepEqual(
        [ [2 > 2, 1 > 2], [1 > 2, 2 > 2] ]
      )
  })
})
