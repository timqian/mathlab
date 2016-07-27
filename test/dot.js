import assert from 'assert'
import should from 'should'
import { dot, Complex } from '../lib'

describe('dot', () => {
  it('arr & num', () => {
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

  it('Complex', () => {
    dot(new Complex(1), 2).re.should.be.equal(2)
    // {x: -2, y: 14}
    dot(new Complex([1, 2], [2, 2]), new Complex([2,2], [2,2]))
      .re.should.equal(-2)
    dot(new Complex([1, 2], [2, 2]), new Complex([2,2], [2,2]))
      .im.should.equal(14)
  })
})