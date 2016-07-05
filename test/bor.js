
import assert from 'assert'
import should from 'should'
import { bor } from '../lib'

describe('bor', () => {
  it('', () => {
    bor(1, 2).should.equal(1 | 2)
    bor([1, 2], [2, 2]).should.deepEqual([1 | 2, 2 | 2])
    bor([[2,1], [1,2]], [[2, 2], [2, 2]])
      .should.deepEqual(
        [ [2 | 2, 1 | 2], [1 | 2, 2 | 2] ]
      )
  })
})
