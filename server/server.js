const fs = require('fs');
const path = require('path');
const express = require('express');
const ReactSSR = require('react-dom/server');

const isDev = process.env.NODE_ENV === 'development';

const app = express();

if (!isDev) {
  const serverEntry = require('../dist/server-entry').default;
  const template = fs.readFileSync(path.join(__dirname, '../dist/server.html'), 'utf8');
  app.use('/public', express.static(path.join(__dirname, '../dist')));

  app.get('/', (req, res) => {
    const appString = ReactSSR.renderToString(serverEntry);
    const tempStr = template.replace('<!-- app -->', appString);
    res.send(tempStr);
  });
} else {
  const devStatic = require('./utils/dev-static');
  devStatic(app);
}

app.listen(3333, () => {
  console.log('Server is running at http://localhost:3333/');
});
