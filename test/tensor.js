
import assert from 'assert'
import should from 'should'
import { tensor } from '../lib'

describe('tensor', () => {
  it('', () => {
    tensor(1, 2).should.equal(2)
    tensor([1, 2], [3, 4]).should.deepEqual([[3,4],[6,8]])
  })
})
