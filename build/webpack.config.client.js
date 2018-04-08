const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  mode: 'production',

  context: path.resolve(__dirname, '../'),

  entry: {
    app: './src/main.js'
  },

  output: {
    filename: '[name].[hash].js',
    path: resolve('dist'),
    publicPath: '/public'
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
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
    })
  ]
};