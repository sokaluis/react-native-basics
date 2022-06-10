module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier', 'react-native', 'react-hooks'],
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx']
      }
    ],
    'react/prop-types': 0,
    'no-underscore-dangle': 0,
    'no-useless-escape': 0,
    'import/imports-first': ['error', 'absolute-first'],
    'arrow-body-style': ['error', 'as-needed'],
    'import/newline-after-import': 'error',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 1,
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-raw-text': 1,
    'react-native/no-single-element-style-arrays': 2,
    'no-use-before-define': 1,
    'react/jsx-props-no-spreading': 0,
    semi: [2, 'always'],
    'no-plusplus': 0,
    'no-param-reassign': 0,
    'keyword-spacing': ['error', { before: true, after: true }],
    'object-curly-spacing': ['error', 'always'],
    'consistent-return': 0,
    'eol-last': ['error', 'always']
  },
  globals: {
    fetch: true,
    test: true,
    expect: true
  },
  parser: 'babel-eslint'
};
