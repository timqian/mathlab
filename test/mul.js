
import assert from 'assert'
import should from 'should'
import { mul, Complex, Sparse } from '../lib'

const c1 = new Complex([1,2],[1,1])
const c2 = new Complex([2,2],[1,1])

describe('mul', () => {
  it('arr ', () => {
    mul(1, 2).should.equal(1 * 2)
    mul([1, 2], [2, 2]).should.deepEqual([1 * 2, 2 * 2])
    mul([[2,1], [1,2]], [[2, 2], [2, 2]])
      .should.deepEqual(
        [ [2 * 2, 1 * 2], [1 * 2, 2 * 2] ]
      )
    mul(c1, c2).re.should.deepEqual([ 1, 3 ])
    mul(c1, c2).im.should.deepEqual([ 3, 4 ])
    mul(c1, 3).re.should.deepEqual([3, 6])
  })

  it('Sparse', () => {
    const a = new Sparse([[1,2,0],[0,3,0],[0,0,5]])
    const b = new Sparse([[2,9,0],[0,4,0],[-2,0,0]])

    mul(a, b).val.should.deepEqual( [ 2, 0, 18, 12, 0])
  })
})
