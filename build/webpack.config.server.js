const path = require('path');

function resolveApp(dir) {
  return path.join(__dirname, '..', dir);
}

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  mode: isDev ? 'development' : 'production',
  target: 'node',
  entry: {
    app: resolveApp('src/server-entry.js')
  },
  output: {
    filename: 'server-entry.js',
    path: resolveApp('dist'),
    publicPath: '/public/',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolveApp('src')]
      }
    ]
  }
};
