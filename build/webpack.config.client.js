const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const config = {
  mode: 'production',

  context: path.resolve(__dirname, '../'),

  entry: {
    app: './src/main.js'
  },

  output: {
    filename: '[name].[hash].js',
    path: resolve('dist'),
    publicPath: '/public/'
  },

  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      '@': resolve('src')
    }
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        include: [resolve('src')]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('src/template.html'),
      inject: true
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};

// 如果是开发环境，开启热更新
// webpack-dev-server 3.1.2有问题 指定3.1.1版本
if (isDev) {
  config.mode = 'development';
  config.devServer = {
    host: '0.0.0.0',
    port: 8888,
    contentBase: false,
    hot: true,
    overlay: {
      errors: true,
      warnings: false
    },
    publicPath: '/public',
    historyApiFallback: {
      index: '/public/index.html'
    }
  };
}

module.exports = config;