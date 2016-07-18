
import assert from 'assert'
import should from 'should'
import { rep } from '../lib'

describe('rep', () => {
  it('', () => {
    rep([2, 3], 0).should.deepEqual([[0,0,0],[0,0,0]])
    rep([3], 5).should.deepEqual([5,5,5])
  })
})
