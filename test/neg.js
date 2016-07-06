
import assert from 'assert'
import should from 'should'
import { neg } from '../lib'

describe('neg', () => {
  it('', () => {
    neg(1).should.equal(-1)
    neg([1, 2]).should.deepEqual([-1, -2])
    neg([[2,1], [1,2]])
      .should.deepEqual(
        [ [- 2, - 1], [- 1, - 2] ]
      )
  })
})
