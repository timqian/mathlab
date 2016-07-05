
import assert from 'assert'
import should from 'should'
import { geq } from '../lib'

describe('geq', () => {
  it('', () => {
    geq(1, 2).should.equal(1 >= 2)
    geq([1, 2], [2, 2]).should.deepEqual([1 >= 2, 2 >= 2])
    geq([[2,1], [1,2]], [[2, 2], [2, 2]])
      .should.deepEqual(
        [ [2 >= 2, 1 >= 2], [1 >= 2, 2 >= 2] ]
      )
  })
})
