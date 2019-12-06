const webpack = require('webpack');
const path = require('path');
module.exports = {
  mode: 'development',
  entry: {
    vendor: ['react', 'react-dom', 'moment', 'react-router']
  },
  output: {
    filename: '[name].dll.js',
    path: path.join(__dirname, '..', 'dist'),
    library: 'vendor_lib_[hash]'
  },
  plugins: [
    new webpack.DllPlugin({
      context: __dirname, // 上下文
      path: path.join(__dirname, '..', 'dist', 'vendor-manifest.json'),
      name: 'vendor_lib_[hash]'
    })
  ]
  
}