
import assert from 'assert'
import should from 'should'
import { sin } from '../lib'

describe('sin', () => {
  it('', () => {
    sin(1).should.equal(Math.sin(1))
    sin([1, 2]).should.deepEqual([Math.sin(1), Math.sin(2)])
    sin([[1,2],[1,3]]).should.deepEqual([ [Math.sin(1), Math.sin(2)], [Math.sin(1), Math.sin(3)] ])
  })
})
