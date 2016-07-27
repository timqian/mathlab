import assert from 'assert'
import should from 'should'
import { transpose, Complex } from '../lib'

describe('transpose', () => {
  it('arr', () => {
    transpose([[1,2,3],[4,5,6]]).should.deepEqual([[1,4], [2,5], [3,6]])
  })

  it('Complex', () =>{
    transpose(new Complex([[1,2],[1,2]], [[1,2],[3,4]]))
      .re.should.deepEqual([[1,1],[2,2]])
    transpose(new Complex([[1,2],[1,2]], [[1,2],[3,4]]))
      .im.should.deepEqual([[1,3],[2,4]])
  })
})