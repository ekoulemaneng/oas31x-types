export const LengthNotNumberError = new Error('length must be a number.')

export const LengthNotPositiveError = new Error('length must be a positive number (>=0).')

export const LengthNotIntegerError = new Error('length must be an integer.')

export const LengthNotGreaterThanZeroError = new Error('length must be greater than zero.')

export const ReadableNotBooleanError = new Error('readable must be a boolean.')

export const CharsetTypeNotStringError = new Error('charset_type must be a string.')

export const CharsetTypeNotValidError = new Error('charset_type must be equal to "predefined" or "customized".')

export const PredefinedCharsetNotValidError = new Error('p_charset must be "alphanumeric", "alphabetic", "numeric", "hex", "binary", "octal" or "password".')

export const CustomizedCharsetNotProvidedError = new Error('c_charset must be provided.')

export const CustomizedCharsetEmptyError = new Error('c_charset must not be an empty string.')

export const CapitalizationNotValidError = new Error('capitalization must be set "lowercase" or "uppercase" if it is not set to undefined.')