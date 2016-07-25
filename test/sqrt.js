
import assert from 'assert'
import should from 'should'
import { sqrt, Sparse } from '../lib'

describe('sqrt', () => {
  it('num & arr', () => {
    sqrt(1).should.equal(Math.sqrt(1))
    sqrt([1, 2]).should.deepEqual([Math.sqrt(1), Math.sqrt(2)])
    sqrt([[1,2],[1,3]]).should.deepEqual([ [Math.sqrt(1), Math.sqrt(2)], [Math.sqrt(1), Math.sqrt(3)] ])
  })

  it('Sparse', () =>{
    sqrt(new Sparse([[1,2],[1,3]])).toFull()
      .should.deepEqual([ [Math.sqrt(1), Math.sqrt(2)], [Math.sqrt(1), Math.sqrt(3)] ])
  })
})
