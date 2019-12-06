const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const srcPath = path.join(__dirname, '../src');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin({ default: [ 'dist' ] }),
    new HtmlWebpackPlugin({
      template: './src/asset/index.html'
    })
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, '../src/asset')
    },
  }
}