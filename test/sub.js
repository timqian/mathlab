
import assert from 'assert'
import should from 'should'
import { sub } from '../lib'

describe('sub', () => {
  it('', () => {
    sub(1, 2).should.equal(1 - 2)
    sub([1, 2], [2, 2]).should.deepEqual([1 - 2, 2 - 2])
    sub([[2,1], [1,2]], [[2, 2], [2, 2]])
      .should.deepEqual(
        [ [2 - 2, 1 - 2], [1 - 2, 2 - 2] ]
      )
  })
})
