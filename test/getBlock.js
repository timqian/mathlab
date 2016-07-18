
import assert from 'assert'
import should from 'should'
import { getBlock } from '../lib'

describe('getBlock', function () {
  it('', function () {
    getBlock([[1,2,3],
              [3,4,5]], [0,0], [1,1]).should.deepEqual([[1, 2], [3, 4]])
  })
})
