const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  pattern: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    required: true
  },
  rating: {
    type: Object,
    required: true,
    likes: Number,
    wiews: Number
  },
  creator: {
    type: String,
  },
  categoriesId: {
    type: mongoose.Types.ObjectId,
    required: true,
  }
})

module.exports = Item = mongoose.model('item', ItemSchema);