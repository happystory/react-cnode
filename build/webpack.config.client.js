const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolveApp(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  mode: 'development',
  entry: {
    app: resolveApp('client/app.js')
  },
  output: {
    filename: '[name].[hash].js',
    path: resolveApp('dist'),
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: [resolveApp('client')]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin()]
};
