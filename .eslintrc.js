module.exports = {
  plugins: ['prettier'],
  extends: ['eslint:recommended', 'airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  root: true,
};
