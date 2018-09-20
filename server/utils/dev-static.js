const axios = require('axios');
const webpack = require('webpack');
const path = require('path');
const MemoryFs = require('memory-fs');
const ReactDomServer = require('react-dom/server');
const proxy = require('http-proxy-middleware');

const serverConfig = require('../../build/webpack.dev.conf');

const getTemplate = () => {
  return new Promise((resolve, reject) => {
    axios.get('http://localhost:8888/public/index.html')
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
};

let serverBundle;
const Module = module.constructor;

const mfs = new MemoryFs();
const serverCompiler = webpack(serverConfig);
serverCompiler.outputFileSystem = mfs;

serverCompiler.watch({}, (err, stats) => {
  if (err) throw err;
  stats = stats.toJson();
  stats.errors.forEach(err => { console.log(err); });
  stats.warnings.forEach(warn => { console.log(warn); });

  const bundlePath = path.join(
    serverConfig.output.path,
    serverConfig.output.filename
  );

  const bundle = mfs.readFileSync(bundlePath, 'utf-8');
  const m = new Module();
  console.log(1)
  var code = 'module.exports = function () {console.log("abc");}';
  m._compile(code, 'first.js');
  var a = m.exports;

  a();
  m._compile(bundle, 'server-entry.js');
  console.log(m)
  serverBundle = m.exports.default;
});

module.exports = function(app) {
  app.use('/public', proxy({
    target: 'http://localhost:8888/',
    changeOrigin: true
  }));
  app.get('*', (req, res) => {
    getTemplate().then(template => {
      const content = ReactDomServer.renderToString(serverBundle);
      res.send(template.replace('<!-- app -->', content));
    })
  })
};
