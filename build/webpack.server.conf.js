const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.conf');

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  target: 'node',
  entry: {
    app: './src/server-entry.js'
  },
  output: {
    filename: 'server-entry.js',
    publicPath: '/public/',
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/template.html'),
      filename: 'server.html',
    }),
  ]
});
