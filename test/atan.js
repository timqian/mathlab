
import assert from 'assert'
import should from 'should'
import { atan, Sparse } from '../lib'

describe('atan', () => {
  it('num & arr', () => {
    atan(1).should.equal(Math.atan(1))
    atan([1, 2]).should.deepEqual([Math.atan(1), Math.atan(2)])
    atan([[1,2],[1,3]]).should.deepEqual([ [Math.atan(1), Math.atan(2)], [Math.atan(1), Math.atan(3)] ])
  })

  it('Sparse', () =>{
    atan(new Sparse([[1,2],[1,3]])).toFull()
      .should.deepEqual([ [Math.atan(1), Math.atan(2)], [Math.atan(1), Math.atan(3)] ])
  })
})
