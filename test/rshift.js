
import assert from 'assert'
import should from 'should'
import { rshift } from '../lib'

describe('rshift', () => {
  it('', () => {
    rshift(1, 2).should.equal(1 >> 2)
    rshift([1, 2], [2, 2]).should.deepEqual([1 >> 2, 2 >> 2])
    rshift([[2,1], [1,2]], [[2, 2], [2, 2]])
      .should.deepEqual(
        [ [2 >> 2, 1 >> 2], [1 >> 2, 2 >> 2] ]
      )
  })
})
