const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

function resolveApp(dir) {
  return path.join(__dirname, '..', dir);
}

const isDev = process.env.NODE_ENV === 'development';

const config = {
  mode: isDev ? 'development' : 'production',
  entry: {
    app: resolveApp('src/index.js'),
  },
  output: {
    filename: '[name].[hash].js',
    path: resolveApp('dist'),
    publicPath: '/public/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolveApp('src/template.html'),
    }),
  ],
};

if (isDev) {
  config.devServer = {
    host: '0.0.0.0',
    port: 8888,
    contentBase: resolveApp('dist'),
    hot: true,
    overlay: {
      errors: true,
    },
    publicPath: '/public/',
    historyApiFallback: {
      index: '/public/index.html',
    },
  };
}

module.exports = merge(baseConfig, config);
