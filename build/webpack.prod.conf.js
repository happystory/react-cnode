const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'static/js/[name].[chunkhash].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/template.html')
    }),
  ]
});
