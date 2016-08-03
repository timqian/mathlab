
import assert from 'assert'
import should from 'should'
import { ifft, fft, Complex, Sparse } from '../lib'

describe('fft', () => {
  it('number & Array', () => {
		// {re: [ 15, -2.5, -2.5, -2.5, -2.5], im: [ 6.439e-15, 3.441, 0.8123, -0.8123, -3.441]}
		fft([1,2,3,4,5]).re[0].should.approximately(15, 0.1)
  })

  it('Complex', () => {
		fft(new Complex([1,2,3,4,5],[6,7,8,9,10])).im[0].should.approximately(40, 0.1)
  })
})

describe('ifft', () => {
  it('number & Array', () => {
		// {re: [ 15, -2.5, -2.5, -2.5, -2.5], im: [ 6.439e-15, 3.441, 0.8123, -0.8123, -3.441]}
		ifft( fft([1,2,3,4,5]) ).re[0].should.approximately(1, 0.1)
  })

  it('Complex', () => {
		ifft( fft(new Complex([1,2,3,4,5],[6,7,8,9,10])) ).im[0].should.approximately(6, 0.1)
  })
})