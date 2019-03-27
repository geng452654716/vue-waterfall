const vueLoaderPlugin = require('vue-loader/lib/plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.less$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10240,
            name: '[name].[ext]',
            outputPath: './img'
          }
        }
      }
    ]
  },
  plugins: [
    new vueLoaderPlugin(),
    new cleanWebpackPlugin()
  ]
}