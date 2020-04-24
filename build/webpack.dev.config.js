const webpackMerge = require('webpack-merge');
const baseConfig = require('../build/webpack.base.config');
const webpack = require('webpack');
const HappyPack = require('happypack');

const path = require('path');
const srcPath = path.join(__dirname, '../src');

const devConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('../dist/vendor-manifest.json')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HappyPack({ 
      id: 'js',
      loaders: [ 
        {
          loader: 'babel-loader',
          type: 'javascript/auto',
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-typescript",
              '@babel/preset-react'
            ],
            plugins: [
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              ['@babel/plugin-proposal-class-properties', { loose: true }],
              'react-hot-loader/babel'
            ],
            cacheDirectory: './runtime_cache/'
          }
        } 
      ]
    })
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|woff|woff2|eot|ttf|otf)/,
        include: srcPath,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[hash].[ext]'
            }
          }
        ],
      },
      {
        test: /\.css$/,
        include: srcPath,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
          }
        ]
      },
      {
        test: /\.(j|t)sx?$/,
        include: srcPath,
        use: 'happypack/loader?id=js'
      },
    ]
  }
}
console.log(JSON.stringify(webpackMerge(baseConfig, devConfig)))
module.exports = webpackMerge(baseConfig, devConfig);
