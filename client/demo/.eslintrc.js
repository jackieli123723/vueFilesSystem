module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'generator-star-spacing':'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-parsing-error': [4, { 'x-invalid-end-tag': false }],
    'no-undef': 'off',
      'no-mixed-spaces-and-tabs': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
