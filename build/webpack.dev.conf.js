const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.conf');

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  devServer: {
    host: '0.0.0.0',
    port: '8888',
    contentBase: false,
    hot: true,
    overlay: { warnings: false, errors: true },
    historyApiFallback: {
      index: '/public/index.html'
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../client/template.html'),
      inject: true
    }),
  ]
});
