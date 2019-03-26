const path = require('path');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base');
module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  entry: {
    'vue-waterfall': './src/vue-waterfall/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../lib'),
    publicPath: '/',
    filename: '[name].js',
    library: 'VueWaterfall',
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
});
