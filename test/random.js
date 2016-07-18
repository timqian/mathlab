
import assert from 'assert'
import should from 'should'
import { random, dim } from '../lib'

describe('random', () => {
  it('', () => {
    dim(random([2,3])).should.deepEqual([2,3])
    random([2,3])[0][0].should.be.above(0).below(1)
  })
})
