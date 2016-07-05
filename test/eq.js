
import assert from 'assert'
import should from 'should'
import { eq } from '../lib'

describe('eq', () => {
  it('', () => {
    eq(1, 2).should.equal(1 === 2)
    eq([1, 2], [2, 2]).should.deepEqual([1 === 2, 2 === 2])
    eq([[2,1], [1,2]], [[2, 2], [2, 2]])
      .should.deepEqual(
        [ [2 === 2, 1 === 2], [1 === 2, 2 === 2] ]
      )
  })
})
