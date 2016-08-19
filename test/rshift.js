
import assert from 'assert'
import should from 'should'
import { rshift, Sparse } from '../lib'

describe('rshift', () => {
  it('arr', () => {
    rshift(1, 2).should.equal(1 >> 2)
    rshift([1, 2], [2, 2]).should.deepEqual([1 >> 2, 2 >> 2])
    rshift([[2,1], [1,2]], [[2, 2], [2, 2]])
      .should.deepEqual(
        [ [2 >> 2, 1 >> 2], [1 >> 2, 2 >> 2] ]
      )
  })

  it('Sparse', () => {
    const a = new Sparse([[1,2,0],[0,3,0],[0,0,5]])
    const b = new Sparse([[2,9,0],[0,4,0],[-2,0,0]])

    rshift(a, b).val.should.deepEqual([ 0, 0, 0, 0, 5])
  })
})
