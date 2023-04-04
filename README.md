# Random String Generator

A npm package to generate string randomly.

## Installation
To install this package, run the following command:
```
npm install random-string-generator --save
```
or
```
yarn add random-string-generator
```

## Usage
To use this package, import it into your project and call its function:
```javascript
import generator from 'random-string-generator'

const str = generator(8, false, 'predefined', 'alphabetic', undefined, 'uppercase')

console.log(str) // => 'GDUEGSKE'
```
The string generator is a function that takes six arguments at most that are:
1. **length**: Number of characters of the string generated (must be greater than zero). *Optional*. Default: `32`.
2. **readable**: Boolean parameter indicating if yes or no certains characters should be included in the string (`0`, `O`, `I` and `l`). *Optional*. Default: `false`.
3. **charset_type**: Parameter indicating if the set of characters to build generated string is either `predefined` or `customized`. *Optional*. Default: `predefined`.
4. **p_charset**: String parameter specifying the generic name of the predefined set of characters: `alphanumeric`, `alphabetic`, `numeric`, `hex`, `binary`, `octal` and `password`. *Compulsory* if charset_type is set to 'predefined'. Default: `alphanumeric`.
5. **c_charset**: String parameter setting a customized set of characters. *Compulsory* if charset_type is set to `customized`.
6. **capitalization**: Parameter specifying the string generated is lowercased or uppercase. Takes two values: `lowercase` and `uppercase`. *Optional*.

## License
This package is licensed under the [ISC License](https://opensource.org/licenses/ISC).

## Contact
If you have any questions or issues, please contact the package maintainer at ekoulemaneng@gmail.com.
