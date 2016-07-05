
import assert from 'assert'
import should from 'should'
import { neq } from '../lib'

describe('neq', () => {
  it('', () => {
    neq(1, 2).should.equal(1 !== 2)
    neq([1, 2], [2, 2]).should.deepEqual([1 !== 2, 2 !== 2])
    neq([[2,1], [1,2]], [[2, 2], [2, 2]])
      .should.deepEqual(
        [ [2 !== 2, 1 !== 2], [1 !== 2, 2 !== 2] ]
      )
  })
})
