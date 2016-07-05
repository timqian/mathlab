
import assert from 'assert'
import should from 'should'
import { log } from '../lib'

describe('log', () => {
  it('', () => {
    log(1).should.equal(Math.log(1))
    log([1, 2]).should.deepEqual([Math.log(1), Math.log(2)])
    log([[1,2],[1,3]]).should.deepEqual([ [Math.log(1), Math.log(2)], [Math.log(1), Math.log(3)] ])
  })
})
