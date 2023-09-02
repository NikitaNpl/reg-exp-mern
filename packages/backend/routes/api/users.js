const express = require('express');
const mongoose = require("mongoose");
const router = express.Router();
const axios = require('axios');

// Item model
const Users = require('../../models/Users');

const clientID = '8382cfd78e2814de8811';
const clientSecret = '50249d0d3d508a50f1cecded2ec51a905f80a062';

// @route   GET api/users/oauth-callback/:code?
// @desc    Get An User
// @access  Public
router.get('/oauth-callback/:code?', (req, res) => {
  console.log(req.query.code)
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
        method: 'get',
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
        .then((item) => {
          item.length ? res.status(200).json(item) : (
            Users.create({
              githubID: String(data.id),
              name: String(data.name),
              login: String(data.login)
            }).then(item => res.status(200).json(item))
          );
        })
        .catch(err => res.status(502).json({ err: `${err}` }));
      // res.redirect(`/?name=${data.login}`);
    })
});

// @route   GET api/users/:id
// @desc    Get User By ID
// @access  Public
router.get('/:id?', (req, res) => {
  Users.aggregate([
    {
      $match: { _id: mongoose.Types.ObjectId(req.query.id) }
    }
  ])
    .then(item => res.status(200).json(item))
    .catch(err => res.status(502).json({ err: `${err}` }))
})

// @route   PATCH api/users/views:userId:itemId
// @desc    Update An Item/views
// @access  Public
router.patch('/viewed', (req, res) => {
  Users.updateOne(
    { _id: req.query.userId },
    {
      $addToSet: {
        viewed: mongoose.Types.ObjectId(req.query.cartId)
      }
    }
  )
    .then(() => res.status(200).json({ userId: req.query.userId, cartId: req.query.cartId }))
    .catch(err => res.json({ err: `${err}` }))
})

// @route   PATCH api/users/favorites:userId:itemId
// @desc    Update An Item/favorites
// @access  Public
router.patch('/favorites', (req, res) => {
  Users.updateOne(
    { _id: req.query.userId },
    {
      $addToSet: {
        favorites: mongoose.Types.ObjectId(req.query.cartId)
      }
    }
  )
    .then(() => res.status(200).json({ userId: req.query.userId, cartId: req.query.cartId }))
    .catch(err => res.json({ err: `${err}` }))
})

// @route   PATCH api/users/favorites:userId:itemId
// @desc    Update An Item/favorites
// @access  Public
router.patch('/createdExpressions', (req, res) => {
  Users.updateOne(
    { _id: req.query.userId },
    {
      $addToSet: {
        createdExpressions: mongoose.Types.ObjectId(req.query.cartId)
      }
    }
  )
    .then(() => res.status(200).json({ userId: req.query.userId, cartId: req.query.cartId }))
    .catch(err => res.json({ err: `${err}` }))
})

// @route   DELETE api/users/favorites:userId:itemId
// @desc    Update An Item/favorites
// @access  Public
router.delete('/favorites', (req, res) => {
  Users.updateOne(
    { _id: req.query.userId },
    {
      $pull: {
        favorites: mongoose.Types.ObjectId(req.query.cartId)
      }
    }
  )
    .then(() => res.status(200).json({ userId: req.query.userId, cartId: req.query.cartId }))
    .catch(err => res.json({ err: `${err}` }));
})

module.exports = router;