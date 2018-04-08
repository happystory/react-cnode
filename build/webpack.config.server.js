const path = require('path');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  // see https://doc.webpack-china.org/configuration/target/
  target: 'node',

  mode: 'production',

  context: path.resolve(__dirname, '../'),

  entry: {
    app: './src/server-entry.js'
  },

  output: {
    filename: 'server-entry.js',
    path: resolve('dist'),
    publicPath: '/public/',

    // see https://doc.webpack-china.org/configuration/output#output-librarytarget
    // 入口起点的返回值将分配给 module.exports 对象，这个名称也意味着模块用于 CommonJS 环境
    libraryTarget: 'commonjs2'
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
  }
};