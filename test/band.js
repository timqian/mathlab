
import assert from 'assert'
import should from 'should'
import { band, Sparse } from '../lib'

describe('band', () => {
  it('num & arr', () => {
    band(1, 0).should.equal(1 & 0)
    band([1, 0], [0, 0]).should.deepEqual([1 & 0, 0 & 0])
    band([[0,1], [1,0]], [[0, 0], [0, 0]])
      .should.deepEqual(
        [ [0 & 0, 1 & 0], [1 & 0, 0 & 0] ]
      )
  })

  it('Sparse', () => {
    const a = new Sparse([[1,2,0],[0,3,0],[0,0,5]])
    const b = new Sparse([[2,9,0],[0,4,0],[-2,0,0]])

    band(a, b).val.should.deepEqual([ 0, 0, 0, 0, 0])
  })
})
