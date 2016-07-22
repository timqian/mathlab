
import assert from 'assert'
import should from 'should'
import { div, Complex } from '../lib'

const c1 = new Complex([1,2],[1,1])
const c2 = new Complex([2,2],[1,1])

describe('div', () => {
  it('', () => {
    div(1, 2).should.equal(1 / 2)
    div([1, 2], [2, 2]).should.deepEqual([1 / 2, 2 / 2])
    div([[2,1], [1,2]], [[2, 2], [2, 2]])
      .should.deepEqual(
        [ [2 / 2, 1 / 2], [1 / 2, 2 / 2] ]
      )
    div(c1, c2).x.should.deepEqual([ 0.6000000000000001, 1 ])
    div(c1, c2).y.should.deepEqual([ 0.2, 0 ])
    div(c1, 2).x.should.deepEqual([.5, 1])
    console.log(c1, c2);
  })
})
