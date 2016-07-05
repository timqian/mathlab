
import assert from 'assert'
import should from 'should'
import { lshift } from '../lib'

describe('lshift', () => {
  it('', () => {
    lshift(1, 2).should.equal(1 << 2)
    lshift([1, 2], [2, 2]).should.deepEqual([1 << 2, 2 << 2])
    lshift([[2,1], [1,2]], [[2, 2], [2, 2]])
      .should.deepEqual(
        [ [2 << 2, 1 << 2], [1 << 2, 2 << 2] ]
      )
  })
})
