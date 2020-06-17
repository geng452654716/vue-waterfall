const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  entry: './src/dom/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'vue-waterfall.js'
  },
  devServer: {
    hot: true,
    useLocalIp: true,
    port: 9999,
    host: '0.0.0.0',
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/dom/index.html'
    })
  ]
})
