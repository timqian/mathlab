import assert from 'assert'
import should from 'should'
import { linspace } from '../lib'

describe('linspace', () => {
  it('', () => {
    linspace(1, 2, 3).should.deepEqual([1, 1.5, 2])
  })
})