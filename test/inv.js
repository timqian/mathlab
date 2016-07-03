import assert from 'assert'
import should from 'should'
import { inv } from '../lib'

describe('inv', () => {
  it('', () => {
    inv([[1,2],[3,4]])[0][0].should.be.approximately(-2, 0.001)
    inv([[1,2],[3,4]])[0][1].should.be.approximately(1, 0.001)
    inv([[1,2],[3,4]])[1][0].should.be.approximately(1.5, 0.001)
    inv([[1,2],[3,4]])[1][1].should.be.approximately(-0.5, 0.001)
  })
})