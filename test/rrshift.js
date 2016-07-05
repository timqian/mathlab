
import assert from 'assert'
import should from 'should'
import { rrshift } from '../lib'

describe('rrshift', () => {
  it('', () => {
    rrshift(1, 2).should.equal(1 >>> 2)
    rrshift([1, 2], [2, 2]).should.deepEqual([1 >>> 2, 2 >>> 2])
    rrshift([[2,1], [1,2]], [[2, 2], [2, 2]])
      .should.deepEqual(
        [ [2 >>> 2, 1 >>> 2], [1 >>> 2, 2 >>> 2] ]
      )
  })
})
