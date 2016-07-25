
import assert from 'assert'
import should from 'should'
import { bnot, Sparse } from '../lib'

describe('bnot', () => {
  it('', () => {
    bnot(1).should.equal(~1)
    bnot([1, 2]).should.deepEqual([~1, ~2])
    bnot([[2,1], [1,2]])
      .should.deepEqual(
        [ [~ 2, ~ 1], [~ 1, ~ 2] ]
      )
  })

  it('Sparse', () =>{
    bnot(new Sparse([[1,2],[1,3]])).toFull()
      .should.deepEqual([ [~1, ~2], [~1, ~3] ])
  })
})
