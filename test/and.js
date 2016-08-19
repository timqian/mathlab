
import assert from 'assert'
import should from 'should'
import { and, Sparse } from '../lib'

describe('and', () => {
  it('num & arr', () => {
    and(1, 2).should.equal(1 && 2)
    and([1, 2], [2, 2]).should.deepEqual([1 && 2, 2 && 2])
    and([[2,1], [1,2]], [[2, 2], [2, 2]])
      .should.deepEqual(
        [ [2 && 2, 1 && 2], [1 && 2, 2 && 2] ]
      )
  })

  it('Sparse', () => {
    const a = new Sparse([[1,2,0],[0,3,0],[0,0,5]])
    const b = new Sparse([[2,9,0],[0,4,0],[-2,0,0]])

    and(a, b).val.should.deepEqual([ 2, 0, 9, 4, 0])
  })
})
