
import assert from 'assert'
import should from 'should'
import { mod } from '../lib'

describe('mod', () => {
  it('', () => {
    mod(1, 2).should.equal(1 % 2)
    mod([1, 2], [2, 2]).should.deepEqual([1 % 2, 2 % 2])
    mod([[2,1], [1,2]], [[2, 2], [2, 2]])
      .should.deepEqual(
        [ [2 % 2, 1 % 2], [1 % 2, 2 % 2] ]
      )
  })
})
