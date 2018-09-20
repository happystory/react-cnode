const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.conf');

const HOST = process.env.HOST || '0.0.0.0';
const PORT = (process.env.PORT && Number(process.env.PORT)) || 8888;

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  devServer: {
    host: HOST,
    port: PORT,
    contentBase: false,
    hot: true,
    overlay: { warnings: false, errors: true },
    quiet: true,
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
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: [`Your application is running here: http://${HOST}:${PORT}`],
      },
      onErrors: undefined,
      clearConsole: true,
    }),
  ]
});
