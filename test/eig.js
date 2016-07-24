import assert from 'assert'
import should from 'should'
import { eig } from '../lib'

describe('eig', () => {
  it('', () => {
		// {
		//		lambda: {x: [ -4.284, 9.027, 6.257], y: }, 
		//    E: {x: [[ 0.7131, -0.5543, 0.4019], [ -0.2987, -0.2131, 0.9139], [ -0.6342, -0.8046, 0.057]],
		//	      y: }
		// }
    eig([[1,2,5],[3,5,-1],[7,-3,5]])
      .lambda.x[0].should.be.approximately(-4.28, 0.01)
		eig([[1,2,5],[3,5,-1],[7,-3,5]])
			.E.x[0][0].should.approximately(0.71, 0.1)
  })
})