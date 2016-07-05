
import assert from 'assert'
import should from 'should'
import { add } from '../lib'

describe('add', () => {
  it('', () => {
    add(1, 2).should.equal(1 + 2)
    add([1, 2], [2, 2]).should.deepEqual([1 + 2, 2 + 2])
    add([[2,1], [1,2]], [[2, 2], [2, 2]])
      .should.deepEqual(
        [ [2 + 2, 1 + 2], [1 + 2, 2 + 2] ]
      )
  })
})
