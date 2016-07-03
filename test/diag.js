import assert from 'assert'
import should from 'should'
import { diag } from '../lib'

describe('diag', function () {
  it('', function () {
    diag([1, 2]).should.deepEqual([[1, 0], [0, 2]])
  })
})
