
import assert from 'assert'
import should from 'should'
import { atan2 } from '../lib'

describe('atan2', () => {
  it('', () => {
    atan2(1, 2).should.equal(Math.atan2(1, 2))
    atan2([1, 2], [2, 2]).should.deepEqual([Math.atan2(1, 2), Math.atan2(2, 2)])
    atan2([[2,1], [1,2]], [[2, 2], [2, 2]])
      .should.deepEqual(
        [ [Math.atan2(2, 2), Math.atan2(1, 2)], [Math.atan2(1, 2), Math.atan2(2, 2)] ]
      )
  })
})
