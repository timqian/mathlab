
import assert from 'assert'
import should from 'should'
import { setBlock } from '../lib'

describe('setBlock', () => {
  it('', () => {
    setBlock([[1,2,3], [3,4,5]], [0,0], [1,1],[[2,2],[2,2]]).should.deepEqual([[2,2,3],[2,2,5]])
  })
})
