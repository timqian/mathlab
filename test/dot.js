import assert from 'assert'
import should from 'should'
import {
  dot
} from '../lib'

describe('dot', () => {
  it('', () => {
    dot([1, 2], 4).should.deepEqual([4, 8])
    dot(4, [1, 2]).should.deepEqual([4, 8])
    dot([
      [1, 1],
      [2, 1]
    ], [1, 2]).should.deepEqual([3, 4])

    dot([1, 2], [
      [1, 1],
      [2, 1]
    ]).should.deepEqual([5, 3])

    dot(1, 2).should.deepEqual(2)

  })
})