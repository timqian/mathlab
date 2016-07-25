
import assert from 'assert'
import should from 'should'
import { asin, Sparse  } from '../lib'

describe('asin', () => {
  it('num & arr', () => {
    asin(1).should.equal(Math.asin(1))
    asin([1, 2]).should.deepEqual([Math.asin(1), Math.asin(2)])
    asin([[1,2],[1,3]]).should.deepEqual([ [Math.asin(1), Math.asin(2)], [Math.asin(1), Math.asin(3)] ])
  })

  it('Sparse', () =>{
    asin(new Sparse([[1,2],[1,3]])).toFull()
      .should.deepEqual([ [Math.asin(1), Math.asin(2)], [Math.asin(1), Math.asin(3)] ])
  })
})
