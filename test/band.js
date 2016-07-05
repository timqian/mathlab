
import assert from 'assert'
import should from 'should'
import { band } from '../lib'

describe('band', () => {
  it('', () => {
    band(1, 2).should.equal(1 & 2)
    band([1, 2], [2, 2]).should.deepEqual([1 & 2, 2 & 2])
    band([[2,1], [1,2]], [[2, 2], [2, 2]])
      .should.deepEqual(
        [ [2 & 2, 1 & 2], [1 & 2, 2 & 2] ]
      )
  })
})
