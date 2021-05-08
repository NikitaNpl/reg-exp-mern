const express = require('express');
const mongoose = require("mongoose");
const router = express.Router();

// Item model
const Item = require('../../models/Item');

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
  Item.aggregate([
    {
      $lookup:
      {
        from: "categories",
        localField: "categoriesId",
        foreignField: "_id",
        as: "additionalInfo"
      },
    },
    {
      $unwind: "$additionalInfo"
    },
    {
      $lookup:
      {
        from: "colors",
        localField: "additionalInfo.colorId",
        foreignField: "_id",
        as: "color"
      }
    },
    {
      $unwind: "$color"
    },
    {
      $project: { categoriesId: 0 }
    }
  ])
    .then(items => res.status(200).json(items))
    .catch(err => res.status(502).json({ err: `${err}` }));
});

// @route   GET api/items/:id
// @desc    Get Item By ID
// @access  Public
router.get('/:id?', (req, res) => {
  Item.aggregate([
    {
      $lookup:
      {
        from: "categories",
        localField: "categoriesId",
        foreignField: "_id",
        as: "additionalInfo"
      },
    },
    {
      $unwind: "$additionalInfo"
    },
    {
      $lookup:
      {
        from: "colors",
        localField: "additionalInfo.colorId",
        foreignField: "_id",
        as: "color"
      }
    },
    {
      $unwind: "$color"
    },
    {
      $match: { _id: mongoose.Types.ObjectId(req.params.id) }
    },
    {
      $project: { colorId: 0, ratingId: 0 }
    }
  ])
    .then(item => res.status(200).json(item))
    .catch(err => res.status(502).json({ err: `${err}` }))
})

// @route   GET api/items/search/:text
// @desc    Get Items By searchAndType
// @access  Public
router.get('/search/:text', (req, res) => {
  Item.aggregate([
    {
      $lookup:
      {
        from: "categories",
        localField: "categoriesId",
        foreignField: "_id",
        as: "additionalInfo"
      },
    },
    {
      $unwind: "$additionalInfo"
    },
    {
      $lookup:
      {
        from: "colors",
        localField: "additionalInfo.colorId",
        foreignField: "_id",
        as: "color"
      }
    },
    {
      $unwind: "$color"
    },
    {
      $match: {
        $or: [
          { 'additionalInfo.name': { $regex: req.params.text, $options: 'i' } },
          { 'title': { $regex: req.params.text, $options: 'i' } }
        ]
      }
    },
    {
      $project: { colorId: 0, ratingId: 0 }
    }
  ])
    .then(items => res.status(200).json(items))
    .catch(err => res.status(502).json({ err: `${err}` }))
})

// @route   POST api/items
// @desc    Create An Items
// @access  Public
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save().then(item => res.json(item));
});

// @route   PATCH api/items/like:itemId
// @desc    Update An Item/like
// @access  Public
router.patch('/like/:itemId?', (req, res) => {
  Item.updateOne(
    { _id: req.params.itemId },
    { $inc: { "rating.likes": 1 } }
  )
    .then(() => res.status(200).json({ itemId: req.params.itemId }))
    .catch(err => res.json({ err: `${err}` }))
})

// @route   PATCH api/items/unlike:itemId
// @desc    Update An Item/like
// @access  Public
router.patch('/unlike/:itemId?', (req, res) => {
  Item.updateOne(
    { _id: req.params.itemId },
    { $inc: { "rating.likes": -1 } }
  )
    .then(() => res.status(200).json({ itemId: req.params.itemId }))
    .catch(err => res.json({ err: `${err}` }))
})

// @route   PATCH api/items/views:itemId
// @desc    Update An Item/views
// @access  Public
router.patch('/views/:itemId?', (req, res) => {
  Item.updateOne(
    { _id: req.params.itemId },
    { $inc: { "rating.views": 1 } }
  )
    .then(() => res.status(200).json({ itemId: req.params.itemId }))
    .catch(err => res.json({ err: `${err}` }))
})

// @route   DELETE api/items/:id
// @desc    Delete An Item
// @access  Public
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
})

module.exports = router;