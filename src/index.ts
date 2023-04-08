import { alphabetic_array, alphanumeric_array, binary_array, hex_array, numeric_array, octal_array, password_array } from "./charsets"
import { CapitalizationNotValidError, CharsetTypeNotStringError, CharsetTypeNotValidError, CustomizedCharsetEmptyError, CustomizedCharsetNotProvidedError, LengthNotGreaterThanZeroError, LengthNotIntegerError, LengthNotNumberError, LengthNotPositiveError, PredefinedCharsetNotValidError, ReadableNotBooleanError } from "./errors"

type Alpha = 'alphanumeric' | 'alphabetic' | 'numeric' | 'hex' | 'binary' | 'octal' | 'password'
type Capitalize = 'lowercase' | 'uppercase'
type Charset = 'predefined' | 'customized' 

/**
 * 
 * @param length Number of characters of the string generated (must be greater than zero). Optional. Default: 32.
 * @param readable Boolean parameter indicating if yes or no certains characters should be included in the string ('0', 'O', 'I' and 'l'). Optional. Default: false.
 * @param charset_type Parameter indicating if the set of characters to build generated string is either 'predefined' or 'customized'. Optional. Default: 'predefined'.
 * @param p_charset String parameter specifying the generic name of the predefined set of characters: 'alphanumeric', 'alphabetic', 'numeric', 'hex', 'binary', 'octal' and 'password'. Compulsory if charset_type is set to 'predefined'. Default: 'alphanumeric'.
 * @param c_charset String parameter setting a customized set of characters. Compulsory if charset_type is set to 'customized'.
 * @param capitalization Parameter specifying the string generated is lowercased or uppercase. Takes two values: 'lowercase' and 'uppercase'. Optional.
 * @returns Generated string
 */
const generator = (length: number = 32, readable: boolean = false, charset_type: Charset = 'predefined', p_charset: Alpha = 'alphanumeric', c_charset?: string, capitalization?: Capitalize): string => {
    // Throw error if...
    // The length parameter is not a number
    if (typeof length !== 'number') throw LengthNotNumberError
    // the length parameter is a negative number
    if (length < 0) throw LengthNotPositiveError
    // the length parameter is a float
    if (!Number.isInteger(length)) throw LengthNotIntegerError
    // the length parameter is equal to zero
    if (length === 0) throw LengthNotGreaterThanZeroError
    // the readable parameter is a boolean
    if (typeof readable !== 'boolean') throw ReadableNotBooleanError
    // the charset_type parameter is a string
    if (typeof charset_type !== 'string') throw CharsetTypeNotStringError
    // the charset_type parameter is equal 'predefined' or 'customized'
    if (!['predefined', 'customized'].includes(charset_type)) throw CharsetTypeNotValidError
    // the charset_type is set to 'predfined' and the p_charset parameter is invalid
    if (charset_type === 'predefined' && typeof p_charset !== 'undefined' && !['alphanumeric', 'alphabetic', 'numeric', 'hex', 'binary', 'octal', 'password'].includes(p_charset)) throw PredefinedCharsetNotValidError
    // the charset_type parameter is set to 'customized' and the c_charset parameter is not provided
    if (charset_type === 'customized' && typeof c_charset === 'undefined') throw CustomizedCharsetNotProvidedError
    // the charset_type parameter is set to 'customized' and the c_charset parameter is an empty string
    if (charset_type === 'customized' && typeof c_charset !== 'undefined' && c_charset.replace(/\s/g, '').length === 0) throw CustomizedCharsetEmptyError
    // the capitalization parameter is invalid
    if (typeof capitalization !== 'undefined' && !['lowercase', 'uppercase'].includes(capitalization)) throw CapitalizationNotValidError
    
    // Get the array to deal with
    let array = alphanumeric_array
    // If charset is predefined
    if (charset_type === 'predefined') {
        switch (p_charset) {
            case 'alphanumeric':
                array = alphanumeric_array
                break
            case 'alphabetic':
                array = alphabetic_array
                break
            case 'numeric':
                array = numeric_array
                break
            case 'hex':
                array = hex_array
                break
            case 'binary':
                array = binary_array
                break
            case 'octal':
                array = octal_array
                break
            case 'password':
                array = password_array
                break
            default:
                break
        }
    }
    // If not, if charset is customized
    else {
        if (c_charset) array = c_charset.split(' ').join('').split('')
    }
    // if needed, refine the array
    if (readable) array = array.filter((item: string) => !['0', 'O', 'I', 'l'].includes(item))
    // Set the raw result
    let result = ''
    for (let i = 0; i < length; i++) result += array[Math.floor(Math.random() * array.length)]
    // If needed, upper or lower case the result
    if (capitalization === 'lowercase') result = result.toLowerCase()
    else if (capitalization === 'uppercase') result = result.toUpperCase()
    // Return the final result
    return result
}

export = generator