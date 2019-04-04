const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

function resolveApp(dir) {
  return path.join(__dirname, '..', dir);
}

const isDev = process.env.NODE_ENV === 'development';

const config = {
  mode: isDev ? 'development' : 'production',
  target: 'node',
  entry: {
    app: resolveApp('src/server-entry.js'),
  },
  output: {
    filename: 'server-entry.js',
    path: resolveApp('dist'),
    publicPath: '/public/',
    libraryTarget: 'commonjs2',
  },
};

module.exports = merge(baseConfig, config);
