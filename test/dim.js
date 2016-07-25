import assert from 'assert'
import should from 'should'
import { dim, Complex, Sparse } from '../lib'

describe('dim', () => {
  it('num & arr', () => {
    dim(1).should.deepEqual([])
    dim([2]).should.deepEqual([1])
    dim([[1, 2, 3], [1, 2, 2]]).should.deepEqual([2, 3])
  })

  it('Complex', () =>{
    dim(new Complex(1)).should.deepEqual([])
    dim(new Complex(undefined,[1,2])).should.deepEqual([2])
  })

  it('Sparse', () => {
    dim(new Sparse([[0,0,0],[0,2,0],[1,0,0]])).should.deepEqual([3,3])
  })
})