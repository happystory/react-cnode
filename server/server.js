const fs = require('fs');
const path = require('path');
const express = require('express');
const ReactSSR = require('react-dom/server');
const serverEntry = require('../dist/server-entry').default;

const template = fs.readFileSync(path.join(__dirname, '../dist/server.html'), 'utf8');

const app = express();

app.use('/public', express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
  const appString = ReactSSR.renderToString(serverEntry);
  const tempStr = template.replace('<!-- app -->', appString);
  res.send(tempStr);
});

app.listen(3333, () => {
  console.log('Server is running at http://localhost:3333/');
});
