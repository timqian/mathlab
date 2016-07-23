
import assert from 'assert'
import should from 'should'
import { mul, Complex } from '../lib'

const c1 = new Complex([1,2],[1,1])
const c2 = new Complex([2,2],[1,1])

describe('mul', () => {
  it('', () => {
    mul(1, 2).should.equal(1 * 2)
    mul([1, 2], [2, 2]).should.deepEqual([1 * 2, 2 * 2])
    mul([[2,1], [1,2]], [[2, 2], [2, 2]])
      .should.deepEqual(
        [ [2 * 2, 1 * 2], [1 * 2, 2 * 2] ]
      )
    mul(c1, c2).x.should.deepEqual([ 1, 3 ])
    mul(c1, c2).y.should.deepEqual([ 3, 4 ])
    mul(c1, 3).x.should.deepEqual([3, 6])
  })
})
