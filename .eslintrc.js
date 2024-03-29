module.exports = {
  'env': {
    'browser': true,
    'node': true
  },
  'parser': 'babel-eslint',
  'extends': [
    'eslint:recommended',
    'standard',
    'standard-react'
  ],
  'rules': {
    'jsx-quotes': [
      'error',
      'prefer-double'
    ],
    'react/no-unused-prop-types': [
      2
    ],
    'react/jsx-handler-names': ['warn', {
      'eventHandlerPropPrefix': 'on|do'
    }
    ],
    'no-shadow': 0,

    // custom additions
    'curly': 'error',
    'object-curly-newline': [
      'error',
      {
        'ObjectExpression': {
          'minProperties': 4,
          'multiline': true,
          'consistent': true
        },
        'ObjectPattern': {
          'minProperties': 4,
          'multiline': true,
          'consistent': true
        },
        'ImportDeclaration': {
          'minProperties': 3,
          'multiline': true,
          'consistent': true
        },
        'ExportDeclaration': {
          'minProperties': 1,
          'multiline': true
        }
      }
    ],
    'object-curly-spacing': 'error',
    'array-bracket-spacing': [
      'error',
      'always'
    ],
    'newline-per-chained-call': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        'max': 1,
        'maxEOF': 1
      }
    ],
    'no-duplicate-imports': 'error',
    'no-var': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'eqeqeq': ['error', 'always']
  }
}
