import assert from 'assert'
import should from 'should'
import { det } from '../lib'

describe('det', () => {
  it('', () => {
    det([[1, 2, 3],[1, 1, 1], [0, 1, 0]]).should.equal(2)
  })
})