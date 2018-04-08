const fs = require('fs');
const path = require('path');
const express = require('express');
const ReactSSR = require('react-dom/server');
const serverEntry = require('../dist/server-entry').default;
const app = express();

app.use('/public', express.static(path.join(__dirname, '../dist')));

const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8');

app.get('*', (req, res) => {
  const appString = ReactSSR.renderToString(serverEntry);
  res.send(template.replace('<!-- app -->', appString))
});

app.listen(3000, error => {
  console.log('server is listening on 3000');
});
