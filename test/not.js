
import assert from 'assert'
import should from 'should'
import { not } from '../lib'

describe('not', () => {
  it('', () => {
    not(1).should.equal(!1)
    not([1, 2]).should.deepEqual([!1, !2])
    not([[2,1], [1,2]])
      .should.deepEqual(
        [ [! 2, ! 1], [! 1, ! 2] ]
      )
  })
})
