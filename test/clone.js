
import assert from 'assert'
import should from 'should'
import { clone } from '../lib'

describe('clone', () => {
  it('', () => {
    clone(1).should.equal(1)
    clone([1, 2]).should.deepEqual([1, 2])
    clone([[2,1], [1,2]])
      .should.deepEqual(
        [ [ 2,  1], [ 1,  2] ]
      )
  })
})
