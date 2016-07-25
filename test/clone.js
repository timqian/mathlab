
import assert from 'assert'
import should from 'should'
import { clone, Sparse } from '../lib'

describe('clone', () => {
  it('', () => {
    clone(1).should.equal(1)
    clone([1, 2]).should.deepEqual([1, 2])
    clone([[2,1], [1,2]])
      .should.deepEqual(
        [ [ 2,  1], [ 1,  2] ]
      )
  })

  it('Sparse', () =>{
    clone(new Sparse([[1,2],[1,3]])).toFull()
      .should.deepEqual([ [1, 2], [1, 3] ])
  })
})
