
import assert from 'assert'
import should from 'should'
import { exp, Complex, Sparse } from '../lib'

describe('exp', () => {
  it('number & Array', () => {
    exp(1).should.equal(Math.exp(1))
    exp([1, 2]).should.deepEqual([Math.exp(1), Math.exp(2)])
    exp([[1,2],[1,3]]).should.deepEqual([ [Math.exp(1), Math.exp(2)], [Math.exp(1), Math.exp(3)] ])
  })

  it('Complex', () => {
    exp(new Complex(1)).re.should.approximately(2.718, 0.01)
    /**{x: [ -1.131, -3.075], y: [ 2.472, 6.719]} */
    exp(new Complex([1, 2], [2, 2])).re[0].should.approximately(-1.131, 0.01)
    exp(new Complex([1, 2], [2, 2])).im[1].should.approximately(6.719, 0.01)
  })

 it('Sparse', () =>{
    exp(new Sparse([[1,2],[1,3]])).toFull()
      .should.deepEqual([ [Math.exp(1), Math.exp(2)], [Math.exp(1), Math.exp(3)] ])
  })
})
