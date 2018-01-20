const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: {
    app: path.resolve('demo/index.js')
  },
  output: {
    path: path.resolve('dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: path.resolve('src/loader-test.js')
      }
    ]
  },
  plugins: [
    // 清理dist
    new CleanWebpackPlugin('dist'),
    // 将js打入html
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve('demo/index.html'),
      chunks: ['app'] // 因为只有一个页面，这行不写也可以
    })
  ]
}