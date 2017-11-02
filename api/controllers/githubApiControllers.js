const request = require('request');

exports.listFiles = function(req, res) {
  const options = {
    url: `https://api.github.com/repos/${req.params.username}/${req.params.repo}/contents/${req.params.folder || ''}${req.params[0] || ''}`,
    headers: {
      'User-Agent': 'request'
    }
  };

  request.get(options, (req, data) => res.send(JSON.parse(data.body)));
}
