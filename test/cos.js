
import assert from 'assert'
import should from 'should'
import { cos, Complex, Sparse } from '../lib'

describe('cos', () => {
  it('num & arr', () => {
    cos(1).should.equal(Math.cos(1))
    cos([1, 2]).should.deepEqual([Math.cos(1), Math.cos(2)])
    cos([[1,2],[1,3]]).should.deepEqual([ [Math.cos(1), Math.cos(2)], [Math.cos(1), Math.cos(3)] ])
  })

  it('Complex', () => {
    cos(new Complex(1)).x.should.approximately(0.540, 0.01)
    // {x: [ -0.6421, -1.566], y: [ 1.069, 3.298]}
    cos(new Complex([1, 2], [2, 2])).x[0].should.approximately(-0.642, 0.01)
    cos(new Complex([1, 2], [2, 2])).y[1].should.approximately(3.298, 0.01)
  })

  it('Sparse', () =>{
    cos(new Sparse([[1,2],[1,3]])).toFull()
      .should.deepEqual([ [Math.cos(1), Math.cos(2)], [Math.cos(1), Math.cos(3)] ])
  })
})
