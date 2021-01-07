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
  }
})

module.exports = Item = mongoose.model('item', ItemSchema);