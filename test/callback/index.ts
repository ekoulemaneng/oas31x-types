import assert from 'assert'
import { Callback } from '../../types/index'
import { schema1, schema2 } from './schemas'

describe('CallbackObject', () => {
    it('should match schema1', () => {
        // Setup
        const schema: Callback = schema1
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
})