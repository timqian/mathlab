
import assert from 'assert'
import should from 'should'
import { neg, Complex } from '../lib'

describe('neg', () => {
  it('num & array', () => {
    neg(1).should.equal(-1)
    neg([1, 2]).should.deepEqual([-1, -2])
    neg([[2,1], [1,2]])
      .should.deepEqual(
        [ [- 2, - 1], [- 1, - 2] ]
      )
  })

  it('Complex', () => {
    neg(new Complex(1)).x.should.equal(-1)
    neg(new Complex([1, 2], [2, 2])).y.should.deepEqual([-2,-2])
  })
})
