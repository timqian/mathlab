
import assert from 'assert'
import should from 'should'
import { or, Sparse } from '../lib'

describe('or', () => {
  it('arr', () => {
    or(1, 2).should.equal(1 || 2)
    or([1, 2], [2, 2]).should.deepEqual([1 || 2, 2 || 2])
    or([[2,1], [1,2]], [[2, 2], [2, 2]])
      .should.deepEqual(
        [ [2 || 2, 1 || 2], [1 || 2, 2 || 2] ]
      )
  })

  it('Sparse', () => {
    const a = new Sparse([[1,2,0],[0,3,0],[0,0,5]])
    const b = new Sparse([[2,9,0],[0,4,0],[-2,0,0]])

    or(a, b).val.should.deepEqual([ 1, -2, 2, 3, 5])
  })
})
