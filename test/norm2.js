
import assert from 'assert'
import should from 'should'
import { norm2, Complex } from '../lib'

describe('norm2', () => {
  it('arr & num', () => {
    norm2(2).should.equal(2)
    norm2([2, 2]).should.be.approximately(2.8, 0.1)
    norm2([[2,2],[1,1]]).should.be.approximately(8.246, 0.01)
  })

  it('Complex', () => {
    norm2(new Complex(2)).should.equal(2)
    norm2(new Complex([1,2], [2,2])).should.be.approximately(3.605, 0.1)
  })
})
