
import assert from 'assert'
import should from 'should'
import { sub, Complex, Sparse } from '../lib'

describe('sub', () => {
  it('arr', () => {
    sub(1, 2).should.equal(1 - 2)
    sub([1, 2], [2, 2]).should.deepEqual([1 - 2, 2 - 2])
    sub([[2,1], [1,2]], [[2, 2], [2, 2]])
      .should.deepEqual(
        [ [2 - 2, 1 - 2], [1 - 2, 2 - 2] ]
      )
    sub(new Complex(1, 2), 2).re.should.equal(-1)
    sub(new Complex(1, 2), 2).im.should.equal(2)
    sub(new Complex([1,2], [2,2]), new Complex([1,1],[1,1]))
      .re.should.deepEqual([0, 1])
    sub(new Complex([[1,2], [2,2]]), [[1,1],[1,1]])
      .re.should.deepEqual([[0,1],[1,1]])
  })

  it('Sparse', () => {
    const a = new Sparse([[1,2,0],[0,3,0],[0,0,5]])
    const b = new Sparse([[2,9,0],[0,4,0],[-2,0,0]])

    sub(a, b).val.should.deepEqual([ -1, 2, -7, -1, 5])
  })
})
