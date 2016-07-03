import assert from 'assert'
import should from 'should'
import { dotVV } from '../lib'

describe('dotVV', () => {
  it('', () => {
    dotVV([1, 2], [2, 1]).should.deepEqual(4)
  })
})