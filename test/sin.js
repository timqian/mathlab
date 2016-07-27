
import assert from 'assert'
import should from 'should'
import { sin, Complex, Sparse } from '../lib'

describe('sin', () => {
  it('num & arr', () => {
    sin(1).should.equal(Math.sin(1))
    sin([1, 2]).should.deepEqual([Math.sin(1), Math.sin(2)])
    sin([[1,2],[1,3]]).should.deepEqual([ [Math.sin(1), Math.sin(2)], [Math.sin(1), Math.sin(3)] ])
  })


  it('Complex', () => {
    sin(new Complex(1)).re.should.approximately(0.841, 0.01)
    // {x: [ 1.403, 3.421], y: [ 0.4891, 1.509]}
    sin(new Complex([1, 2], [2, 2])).re[0].should.approximately(1.403, 0.01)
    sin(new Complex([1, 2], [2, 2])).im[1].should.approximately(1.509, 0.01)
  })

  it('Sparse', () =>{
    sin(new Sparse([[1,2],[1,3]])).toFull()
      .should.deepEqual([ [Math.sin(1), Math.sin(2)], [Math.sin(1), Math.sin(3)] ])
  })
})
