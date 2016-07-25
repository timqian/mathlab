
import assert from 'assert'
import should from 'should'
import { ceil, Sparse } from '../lib'

describe('ceil', () => {
  it('', () => {
    ceil(1).should.equal(Math.ceil(1))
    ceil([1, 2]).should.deepEqual([Math.ceil(1), Math.ceil(2)])
    ceil([[1,2],[1,3]]).should.deepEqual([ [Math.ceil(1), Math.ceil(2)], [Math.ceil(1), Math.ceil(3)] ])
  })

  it('Sparse', () =>{
    ceil(new Sparse([[1,2],[1,3]])).toFull()
      .should.deepEqual([ [Math.ceil(1), Math.ceil(2)], [Math.ceil(1), Math.ceil(3)] ])
  })
})
