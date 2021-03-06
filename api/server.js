const express = require('express'),
      app = express(),
      port = process.env.PORT || 8080,
      bodyParser = require('body-parser')
      cors = require('cors');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

const routes = require('./routes/githubApiRoutes');
routes(app);

app.listen(port);

console.log(`keep.i test API running on: ${port}`);
