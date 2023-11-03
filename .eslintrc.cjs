module.exports = {
    extends: 'airbnb-base',
    env: {
      es6: true,
      browser: true,
    },
    rules: {
      'import/extensions': 'off',
      camelcase: 'off',
      'no-restricted-globals': 'off',
      'import/prefer-default-export': 'off',
      'no-underscore-dangle': 'off',
      'no-console': 'off',
    },
    ignorePatterns: ['**/node_modules/**', '**/dist/**'],
  };