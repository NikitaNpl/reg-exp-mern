const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const axios = require('axios');

const items = require('./routes/api/items');
const categories = require('./routes/api/categories');
const users = require('./routes/api/users');

const app = express();

const clientID = '8382cfd78e2814de8811';
const clientSecret = '50249d0d3d508a50f1cecded2ec51a905f80a062';

// BodyParser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys.js').mongoURI;
const { response } = require('express');
// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use Routes
app.use('/api/items', items);
app.use('/api/categories', categories);
app.get('/oauth-callback/:code?', (req, res) => {
  console.log(req.query.code)
  const requestToken = req.query.code;
  if (!requestToken) {
    return res.send({
      success: false,
      message: 'Error: no code'
    });
  }

  axios({
    method: 'post',
    url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
    headers: {
      accept: 'application/json'
    }
  })
    .then((response) => {
      const accessToken = response.data.access_token;
      return accessToken;
    })
    .then((accessToken) => {
      return axios({
        url: 'https://api.github.com/user',
        headers: {
          Authorization: 'token ' + accessToken
        }
      })
    })
    .then(({ data }) => {
      console.log(data.login);
      res.status(200).send(JSON.stringify({redirect: `/?name=${data.login}`}));
    })
    .catch((err) => {
      console.error(err);
    });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server starting on port ${port}`));