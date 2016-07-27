
import assert from 'assert'
import should from 'should'
import { getDiag, Complex } from '../lib'

describe('getDiag', function () {
  it('Array', function () {
    getDiag([[1, 3], [0, 2]]).should.deepEqual([1, 2])
  })

  it('Complex', () =>{
    getDiag(new Complex([[1, 3], [0, 2]], [[1, 3], [0, 2]]))
      .re.should.deepEqual([1,2])
    getDiag(new Complex([[1, 3], [0, 2]], [[1, 3], [0, 2]]))
      .im.should.deepEqual([1,2])
  })
})
