import assert from 'assert'
import should from 'should'
import { identity } from '../lib'

describe('identity', () => {
    it('', () => {
        identity(2).should.deepEqual([
            [1, 0],
            [0, 1]
        ])
    })
})