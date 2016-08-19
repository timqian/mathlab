
import assert from 'assert'
import should from 'should'
import { mod, Sparse } from '../lib'

describe('mod', () => {
  it('arr', () => {
    mod(1, 2).should.equal(1 % 2)
    mod([1, 2], [2, 2]).should.deepEqual([1 % 2, 2 % 2])
    mod([[2,1], [1,2]], [[2, 2], [2, 2]])
      .should.deepEqual(
        [ [2 % 2, 1 % 2], [1 % 2, 2 % 2] ]
      )
  })

  it('Sparse', () => {
    const a = new Sparse([[1,2,0],[0,3,0],[0,0,5]])
    const b = new Sparse([[2,9,0],[0,4,0],[-2,0,0]])

    mod(a, b).val.should.deepEqual([1, 0, 2, 3, NaN])
  })
})
