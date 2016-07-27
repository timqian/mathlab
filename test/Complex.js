
import assert from 'assert'
import should from 'should'
import {Complex} from '../lib'    

describe('Complex', () => {
  it('fft', () => {
    const z = new Complex([1,2,3,4,5],[6,7,8,9,10])
    z.fft().re[0].should.be.approximately(15, 0.01)
    z.fft().im[1].should.be.approximately(0.941, 0.01)
    // {
    //  x:[15,-5.941,-3.312,-1.688, 0.941],
    //  y:[40, 0.941,-1.688,-3.312,-5.941]
    // }
  })
})
