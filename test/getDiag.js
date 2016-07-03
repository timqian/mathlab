
import assert from 'assert'
import should from 'should'
import { getDiag } from '../lib'

describe('getDiag', function () {
  it('', function () {
    getDiag([[1, 3], [0, 2]]).should.deepEqual([1, 2])
  })
})
