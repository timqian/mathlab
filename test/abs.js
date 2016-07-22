
import assert from 'assert'
import should from 'should'
import { abs, Complex } from '../lib'

const c1 = new Complex([1,2], [1,2])
describe('abs', () => {
  it('', () => {
    abs(1).should.equal(Math.abs(1))
    abs([1, 2]).should.deepEqual([Math.abs(1), Math.abs(2)])
    abs([[1,2],[1,3]]).should.deepEqual([ [Math.abs(1), Math.abs(2)], [Math.abs(1), Math.abs(3)] ])
  })
})
