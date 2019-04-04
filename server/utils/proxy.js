const axios = require('axios');

const baseUrl = 'https://cnodejs.org/api/v1';

module.exports = (req, res, next) => {
  const { path, method } = req;
  const user = req.session.user || {};
  const { needAccessToken } = req.query;

  if (needAccessToken && !user.accessToken) {
    res.status(401).send({
      success: false,
      msg: 'need login',
    });
  } else {
    const query = Object.assign({}, req.query, {
      accestoken: (needAccessToken && req.method === 'GET') ? user.accessToken : '',
    });
    if (!query.needAccessToken) delete query.needAccessToken;

    axios(`${baseUrl}${path}`, {
      method,
      params: query,
      data: Object.assign({}, req.body, {
        accesstoken: (needAccessToken && req.method === 'POST') ? user.accessToken : '',
      }),
    })
      .then((resp) => {
        if (resp.status === 200) {
          res.send(resp.data);
        } else {
          res.status(resp.status).send(resp.data);
        }
      })
      .catch((err) => {
        if (err.response) {
          res.status(500).send(err.response.data);
        } else {
          res.status(500).send({
            success: false,
            message: '未知错误',
          });
        }
      });
  }
};
