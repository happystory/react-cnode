const axios = require('axios');

const baseUrl = 'https://cnodejs.org/api/v1';

module.exports = (req, res, next) => {
  const path = req.path;
  const user = req.session.user || {};
  console.log(user)
  const needAccessToken = req.query.needAccessToken;

  if (needAccessToken && !user.accessToken) {
    res.status(401).send({
      success: false,
      msg: 'need login'
    });
  }

  const query = Object.assign({}, res.query, {
    accesstoken: (needAccessToken && req.method === 'GET') ? user.accessToken: ''
  });
  if (query.needAccessToken) delete query.needAccessToken;

  axios(`${baseUrl}${path}`, {
    method: req.method,
    params: query,
    data: Object.assign({}, req.body, {
      accesstoken: (needAccessToken && req.method === 'POST') ? user.accessToken: ''
    })
  }).then(resp => {
    if (resp.status === 200) {
      res.send(resp.data);
    } else {
      res.status(resp.status).sned(resp.data);
    }
  }).catch(err => {
    if (err.response) {
      res.status(500).send(err.response.data);
    } else {
      res.status(500).send({
        success: false,
        msg: '未知错误'
      });
    }
  });
};
