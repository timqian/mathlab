
import assert from 'assert'
import should from 'should'
import { add, Complex } from '../lib'

describe('add', () => {
  it('num & arr', () => {
    add(1, 2).should.equal(1 + 2)
    add([1, 2], [2, 2]).should.deepEqual([1 + 2, 2 + 2])
    add([[2,1], [1,2]], [[2, 2], [2, 2]])
      .should.deepEqual(
        [ [2 + 2, 1 + 2], [1 + 2, 2 + 2] ]
      )
  })

  it('Complex', () => {
    add(new Complex(1, 2), 2).x.should.equal(3)
    add(new Complex(1, 2), 2).y.should.equal(2)
    add(new Complex([1,2], [2,2]), new Complex([1,1],[1,1]))
      .x.should.deepEqual([2, 3])
    add(new Complex([[1,2], [2,2]]), [[1,1],[1,1]])
      .x.should.deepEqual([[2, 3],[3,3]])
    add(new Complex(1,2), 1).x.should.equal(2)
  })

  it('Sparse', () => {
  })
})
