import assert from 'assert'
import randomStringGenerator from '..'
import { alphabetic_array, alphanumeric_array, binary_array, hex_array, numeric_array, octal_array, password_array } from '../charsets'

describe('The strings generator function', () => {

    describe('without setted parameters', () => {

        it('should return a string', () => {
            // Perform this test 30 times
            for (let i = 0; i < 30; i++) {
                // Setup
                const expected = 'string'
                // Exercise
                const result = typeof randomStringGenerator()
                // Verify
                assert.equal(result, expected)
            }
        })
    
        it('should return a string with 32 characters by default', () => {
            // Perform this test 30 times
            for (let i = 0; i < 30; i++) {
                // Setup
                const expected = 32
                // Exercise
                const result = randomStringGenerator().length
                // Verify
                assert.equal(result, expected)
            }
        })
    
        it('should return a string with alpha-numeric characters by default', () => {
            // Perform this test 30 times
            for (let i = 0; i < 30; i++) {
                // Setup
                const expected = true
                // Exercise
                const result = randomStringGenerator().split('').every((char: string) => alphanumeric_array.includes(char))
                // Verify
                assert.equal(result, expected)
            }
        })

    })

    describe('given the length parameter', () => {
    
        it('should return a string with n characters if n is given as length parameter, n being a random integer between 0 and 1000 included', () => {
            // Perform this test 1000 times
            for (let i = 0; i < 1000; i++) {
                // Setup
                const randomInteger = Math.floor(Math.random() * 1001) + 1
                const expected = randomInteger
                // Exercise
                const result = randomStringGenerator(randomInteger).length
                // Verify
                assert.equal(result, expected)
            }
        })
    
        it('should throw an error if the length parameter is not a  number', () => {
            // Setup
            const randomInput = ['', true, {}, []][Math.floor(Math.random() * ['', true, {}, []].length)]
            const expected = new Error('length must be a number.')
            // Exercise and verify
            assert.throws(() => randomStringGenerator(randomInput as number), expected)
        })
    
        it('should throw an error if the length parameter is a negative number', () => {
            // Setup
            const randomInteger = - Math.random() * 1000
            const expected = new Error('length must be a positive number (>=0).')
            // Exercise and verify
            assert.throws(() => randomStringGenerator(randomInteger), expected)
        })
    
        it('should throw an error if the length parameter is a float number', () => {
            // Setup
            const randomInteger = Math.random() * 1000
            const expected = new Error('length must be an integer.')
            // Exercise and verify
            assert.throws(() => randomStringGenerator(randomInteger), expected)
        })
    
        it('should throw an error if the length parameter is equal to 0', () => {
            // Setup
            const input = 0
            const expected = new Error('length must be greater than zero.')
            // Exercise and verify
            assert.throws(() => randomStringGenerator(input), expected)
        })

    })

    describe('given the readable parameter', () => {

        it('should return a readable string if readable parameter is setted to true', () => {
            // Perform this test 30 times
            for (let i = 0; i < 30; i++) {
                // Setup
                const input = true
                const expected = true
                // Exercise
                const actual = randomStringGenerator(undefined, input).split('').every((char: string) => !['0', 'O', 'I', 'l'].includes(char))
                // Verify
                assert.equal(actual, expected)
            }
        })

        it('should return a non readable string if readable parameter is setted to false', () => {
            // Perform this test 30 times
            for (let i = 0; i < 30; i++) {
                // Setup
                const input = false
                const expected = true
                // Exercise
                const actual = randomStringGenerator(undefined, input).split('').every((char: string) => ['0', 'O', 'I', 'l'].includes(char) || !['0', 'O', 'I', 'l'].includes(char))
                // Verify
                assert.equal(actual, expected)
            }
        })

        it('should return a non readable string if readable parameter is not setted', () => {
            // Perform this test 30 times
            for (let i = 0; i < 30; i++) {
                // Setup
                const input = undefined
                const expected = true
                // Exercise
                const actual = randomStringGenerator(undefined, input).split('').every((char: string) => ['0', 'O', 'I', 'l'].includes(char) || !['0', 'O', 'I', 'l'].includes(char))
                // Verify
                assert.equal(actual, expected)
            }
        })
    
        it('should throw an error if the readable parameter is not a boolean', () => {
            // Setup
            const input = ['', 0, {}, []][Math.floor(Math.random() * ['', 0, {}, []].length)]
            const expected = new Error('readable must be a boolean.')
            // Exercise and verify
            assert.throws(() => randomStringGenerator(undefined, input as boolean), expected)
        })

    })

    describe('given charset_type, p_charset and c_charset parameters', () => {

        it('should throw an error if the charset_type input is not a string', () => {
            // Setup
            const input = [true, 0, {}, []][Math.floor(Math.random() * ['', 0, {}, []].length)]
            const expected = new Error('charset_type must be a string.')
            // Exercise and verify
            assert.throws(() => randomStringGenerator(undefined, undefined, input as ('predefined' | 'customized')), expected)
        })

        it('should throw an error if the charset_type input is not equal to "predefined" or "customized"', () => {
            // Setup
            const input = 'dfg'
            const expected = new Error('charset_type must be equal to "predefined" or "customized".')
            // Exercise and verify
            assert.throws(() => randomStringGenerator(undefined, undefined, input as ('predefined' | 'customized')), expected)
        })

        it('should return a string if the charset-type parameter is setted to "predeficed"', () => {
            // Setup
            const input = 'predefined'
            const expected = 'string'
            // Exercise
            const actual = typeof randomStringGenerator(undefined, undefined, input)
            // Verify
            assert.strictEqual(actual, expected)
        })
        
        it('should return a string with all single characters included in the right set of characters if charset is set to predefined', () => {
            // Perform this test 30 times
            for (let i = 0; i < 30; i++) {
                // Setup
                const charsetTypeInput = 'predefined'
                const predefinedCharsetInput = ['alphanumeric', 'alphabetic', 'numeric', 'hex', 'binary', 'octal', 'password'][Math.floor(Math.random() * ['alphanumeric', 'alphabetic', 'numeric', 'hex', 'binary', 'octal', 'password'].length)]
                const charsets: { [key: string]: string[] } = {
                    alphanumeric: alphanumeric_array,
                    alphabetic: alphabetic_array,
                    numeric: numeric_array,
                    hex: hex_array,
                    binary: binary_array,
                    octal: octal_array,
                    password: password_array
                }
                const expected = true
                // Exercise
                const actual = randomStringGenerator(undefined, undefined, charsetTypeInput, predefinedCharsetInput as 'alphabetic').split('').every((char: string) => {
                    if (!predefinedCharsetInput) return false
                    else {
                        if (!charsets) return false
                        else {
                            const arr = charsets[predefinedCharsetInput]
                            if (!arr) return false
                            return arr.includes(char)
                        } 
                    }
                })
                // Verify
                assert.strictEqual(actual, expected)
            }
        })

        it('should thrown an error if the charset_type input is set to "predefined" and the p_charset input is invalid', () => {
            // Setup
            const charsetTypeInput = 'predefined'
            const predefinedCharsetInput = 'hdhdh'
            const expected = new Error('p_charset must be "alphanumeric", "alphabetic", "numeric", "hex", "binary", "octal" or "password".')
            // Exercise and verify
            assert.throws(() => randomStringGenerator(undefined, undefined, charsetTypeInput, predefinedCharsetInput as 'alphabetic'), expected)
        })  

        it('should thrown an error if the charset_type input is set to "customized" and the c_charset input is not provided', () => {
            // Setup
            const charsetTypeInput = 'customized'
            const customizedCharsetInput = undefined
            const expected = new Error('c_charset must be provided.')
            // Exercise and verify
            assert.throws(() => randomStringGenerator(undefined, undefined, charsetTypeInput, undefined, customizedCharsetInput), expected)
        })     

        it('should thrown an error if the charset_type input is set to "customized" and the c_charset input is an empty string', () => {
            // Setup
            const charsetTypeInput = 'customized'
            const customizedCharsetInput = '  '
            const expected = new Error('c_charset must not be an empty string.')
            // Exercise and verify
            assert.throws(() => randomStringGenerator(undefined, undefined, charsetTypeInput, undefined, customizedCharsetInput), expected)
        })      

        it('should return a string without an empty space even if the charset_type input is set to "customized" and the c_charset comprises one empty space or over', () => {
            // Setup
            const charsetTypeInput = 'customized'
            const customizedCharsetInput = 'dfdd  gfff '
            const expected = true
            // Exercise 
            const actual = randomStringGenerator(undefined, undefined, charsetTypeInput, undefined, customizedCharsetInput).split('').every((char: string) => char !== ' ')
            // Verify
            assert.strictEqual(actual, expected)
        }) 

    })

    describe('given the capitalization parameter', () => {

        it('should return a string without lowercased characters if the capitalization parameter input is set to "uppercase"', () => {
            // Perform this test 30 times
            for (let i = 0; i < 30; i++) {
                // Setup
                const input = 'uppercase'
                const expected = true
                // Exercise
                const actual = randomStringGenerator(undefined, undefined, undefined, undefined, undefined, input).split('').every((char: string) => {
                    return !['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'].includes(char)
                })
                // Verify
                assert.strictEqual(actual, expected)
            }
        })

        it('should return a string without uppercased characters if the capitalization parameter input is set to "lowercase"', () => {
            // Perform this test 30 times
            for (let i = 0; i < 30; i++) {
                // Setup
                const input = 'lowercase'
                const expected = true
                // Exercise
                const actual = randomStringGenerator(undefined, undefined, undefined, undefined, undefined, input).split('').every((char: string) => {
                    return !['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Z'].includes(char)
                })
                // Verify
                assert.strictEqual(actual, expected)
            }
        })

        it('should throw an error if the capitalization parameter input is invalid', () => {
            // Perform this test 10 times
            for (let i = 0; i < 10; i++) {
                // Setup
                const input = ['ddg', true, 45, {}, []][Math.floor(Math.random() * ['ddg', true, 45, {}, []].length)]
                const expected = new Error('capitalization must be set "lowercase" or "uppercase" if it is not set to undefined.')
                // Exercise and verify
                assert.throws(() => randomStringGenerator(undefined, undefined, undefined, undefined, undefined, input as 'lowercase'), expected)
            }
        })

    })

})