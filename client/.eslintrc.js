module.exports = {
  root: true,
  extends: '@react-native-community',
<<<<<<< HEAD
  plugins: [
    'babel'
  ]
=======
  plugins: ['babel'],
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
  },
>>>>>>> eslint-fix
  rules: {
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        bracketSameLine: true,
        bracketSpacing: true,
        tabWidth: 2,
        printWidth: 80,
        singleQuote: true,
        semi: true,
        trailingComma: 'all',
      },
    ],
    'react/react-in-jsx-scope': 0,
  },
};
