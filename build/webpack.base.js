const path = require('path');

function resolveApp(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolveApp('src')],
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: [resolveApp('src')],
      },
    ],
  },
};
