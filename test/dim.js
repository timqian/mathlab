import assert from 'assert'
import should from 'should'
import { dim } from '../lib'

describe('dim', () => {
  it('', () => {
    dim([[1, 2, 3], [1, 2, 2]]).should.deepEqual([2, 3])
  })
})