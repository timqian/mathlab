
import assert from 'assert'
import should from 'should'
import { not, Sparse } from '../lib'

describe('not', () => {
  it('', () => {
    not(1).should.equal(!1)
    not([1, 2]).should.deepEqual([!1, !2])
    not([[2,1], [1,2]])
      .should.deepEqual(
        [ [! 2, ! 1], [! 1, ! 2] ]
      )
  })

  it('Sparse', () =>{
    not(new Sparse([[1,2],[1,3]])).toFull()
      .should.deepEqual([ [!1, !2], [!1, !3] ])
  })
})
