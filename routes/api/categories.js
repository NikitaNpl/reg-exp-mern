const express = require('express');
const router = express.Router();

// Item model
const Categoies = require('../../models/Categoies');

// @route   GET api/categories
// @desc    Get All Categoies
// @access  Public
router.get('/', (req, res) => {
  Categoies.aggregate([
    {
      $lookup: 
        {
          from: "colors",
          localField: "colorId",
          foreignField: "_id",
          as: "color"
        },
    },
    {
      $unwind: "$color"
    },
    {
      $project: {colorId: 0}
    }
  ])
    .then(categories => res.status(200).json(categories))
    .catch(err => res.json({ err: `${err}` }));
});

module.exports = router;