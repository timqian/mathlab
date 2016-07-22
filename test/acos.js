
import assert from 'assert'
import should from 'should'
import { acos, Complex } from '../lib'

const c1 = new Complex([1,2])

describe('acos', () => {
  it('', () => {
    acos(1).should.equal(Math.acos(1))
    acos([1, 2]).should.deepEqual([Math.acos(1), Math.acos(2)])
    acos([[1,2],[1,3]]).should.deepEqual([ [Math.acos(1), Math.acos(2)], [Math.acos(1), Math.acos(3)] ])
    
    try {
      acos(c1) 
    } catch (error) {
      console.log(error);
    }
 })
})
