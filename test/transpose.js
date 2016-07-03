import assert from 'assert'
import should from 'should'
import { transpose } from '../lib'

describe('transpose', () => {
  it('', () => {
    transpose([[1,2,3],[4,5,6]]).should.deepEqual([[1,4], [2,5], [3,6]])
  })
})