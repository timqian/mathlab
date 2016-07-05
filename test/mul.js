
import assert from 'assert'
import should from 'should'
import { mul } from '../lib'

describe('mul', () => {
  it('', () => {
    mul(1, 2).should.equal(1 * 2)
    mul([1, 2], [2, 2]).should.deepEqual([1 * 2, 2 * 2])
    mul([[2,1], [1,2]], [[2, 2], [2, 2]])
      .should.deepEqual(
        [ [2 * 2, 1 * 2], [1 * 2, 2 * 2] ]
      )
  })
})
