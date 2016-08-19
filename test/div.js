
import assert from 'assert'
import should from 'should'
import { div, Complex, Sparse } from '../lib'

const c1 = new Complex([1,2],[1,1])
const c2 = new Complex([2,2],[1,1])

describe('div', () => {
  it('num & arr', () => {
    div(1, 2).should.equal(1 / 2)
    div([1, 2], [2, 2]).should.deepEqual([1 / 2, 2 / 2])
    div([[2,1], [1,2]], [[2, 2], [2, 2]])
      .should.deepEqual(
        [ [2 / 2, 1 / 2], [1 / 2, 2 / 2] ]
      )
  })

  it('Complex', () => {
    div([4, 2], 2).should.deepEqual([2, 1])
    div(c1, c2).re.should.deepEqual([ 0.6000000000000001, 1 ])
    div(c1, c2).im.should.deepEqual([ 0.2, 0 ])
    div(c1, 2).re.should.deepEqual([.5, 1])
  })

  it('Sparse', () => {
    const a = new Sparse([[1,2,0],[0,3,0],[0,0,5]])
    const b = new Sparse([[2,9,0],[0,4,0],[-2,0,0]])

    div(a, b).val.should.deepEqual([0.5, -0, 0.2222222222222222, 0.75, Infinity])
  })
})
