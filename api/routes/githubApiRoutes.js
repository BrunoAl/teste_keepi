module.exports = function(app) {
  const github = require('../controllers/githubApiControllers');

  app.route('/listFiles/:username/:repo/:folder*?')
    .get(github.listFiles);
}
