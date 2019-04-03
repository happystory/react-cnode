const path = require('path');

function resolveApp(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  mode: 'development',
  target: 'node',
  entry: {
    app: resolveApp('client/app.js')
  },
  output: {
    filename: 'server-entry.js',
    path: resolveApp('dist'),
    publicPath: '',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: [resolveApp('client')]
      }
    ]
  }
};
