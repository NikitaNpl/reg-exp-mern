const express = require('express');
const mongoose = require("mongoose");
const router = express.Router();
const axios = require('axios');

// Item model
const Users = require('../../models/Users');

const clientID = '8382cfd78e2814de8811';
const clientSecret = '50249d0d3d508a50f1cecded2ec51a905f80a062';

// @route   GET /user/signin/callback
// @desc    Get All Items
// @access  Public
router.get('/oauth-callback/:code?', (req, res) => {
  const requestToken = req.query.code;
  if (!requestToken) {
    return res.send({
      success: false,
      message: 'Error: no code',
      req: requestToken,
    });
  }

  axios({
    method: 'post',
    url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
    headers: {
      accept: 'application/json'
    }
  }).then((response) => {
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
    }).then(({ data }) => {
      Users.aggregate([
        {
          $match: { githubID: String(data.id) }
        }
      ])
        .then((items) => {
          items.length ? res.status(200).json(items) : (
            Users.insertMany({
              githubID: String(data.id),
              name: String(data.name),
              login: String(data.login)
            }).then(item => res.status(200).json(item))
          );
        })
        .catch(err => res.status(502).json({ err: `${err}` }));
      // res.redirect(`/?name=${data.login}`);
    });
});

module.exports = router;