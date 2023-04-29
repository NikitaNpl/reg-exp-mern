const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const CategoriesSchema = new Schema({
  name: {
    type: String,
    required: true
  }
})

module.exports = Categories = mongoose.model('categories', CategoriesSchema);