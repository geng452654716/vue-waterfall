module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  globals: {
    API_CONFIG: true,
    'process.env.NODE_ENV': true,
    NODE_ENV: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    parser: 'babel-eslint'
  },
  plugins: ['@vue'],
  rules: {}
}
