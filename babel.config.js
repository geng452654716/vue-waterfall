module.exports = {
  plugins: [
    'lodash',
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 2,
        helpers: true,
        regenerator: true,
        useESModules: false
      }
    ]
  ]
}
