const path = require('path');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base');
module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  entry: './src/vue-waterfall/index.js',
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: 'vue-waterfall.js',
    library: 'VueWaterfall',
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
});
