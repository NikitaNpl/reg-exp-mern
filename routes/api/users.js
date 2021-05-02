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
router.get('/oauth-callback', (req, res) => {
  console.log(req)
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
  }).then(({data}) => {
    console.log(data.name);
    res.redirect(`./?name=${data.name}`);
  });
});

module.exports = router;