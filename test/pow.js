
import assert from 'assert'
import should from 'should'
import { pow } from '../lib'

describe('pow', () => {
  it('', () => {
    pow(1, 2).should.equal(Math.pow(1, 2))
    pow([1, 2], [2, 2]).should.deepEqual([Math.pow(1, 2), Math.pow(2, 2)])
    pow([[2,1], [1,2]], [[2, 2], [2, 2]])
      .should.deepEqual(
        [ [Math.pow(2, 2), Math.pow(1, 2)], [Math.pow(1, 2), Math.pow(2, 2)] ]
      )
  })
})
