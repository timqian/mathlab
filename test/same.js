
import assert from 'assert'
import should from 'should'
import { same } from '../lib'

describe('same', () => {
  it('', () => {
    same([1,2], [1,2,3]).should.be.equal(false)
    same([1, 2], [1, 2]).should.be.equal(true)
    same([[1,1],[1,2]], [[1,1], [1,2]]).should.be.equal(true)
    same([[0,1],[1,2]], [[1,1], [1,2]]).should.be.equal(false)
  })
})
