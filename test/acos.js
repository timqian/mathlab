
import assert from 'assert'
import should from 'should'
import { acos, Complex, Sparse } from '../lib'

describe('acos', () => {
  it('num & array & Complex', () => {
    acos(1).should.equal(Math.acos(1))
    acos([1, 2]).should.deepEqual([Math.acos(1), Math.acos(2)])
    acos([[1,2],[1,3]]).should.deepEqual([ [Math.acos(1), Math.acos(2)], [Math.acos(1), Math.acos(3)] ])
    
    try {
      acos(new Complex([1,2])) 
    } catch (error) {
      console.log(error);
    }
  })

  it('Sparse', () =>{
    acos(new Sparse([[1,2],[1,3]])).toFull()
      .should.deepEqual([ [Math.acos(1), Math.acos(2)], [Math.acos(1), Math.acos(3)] ])
  })
})
