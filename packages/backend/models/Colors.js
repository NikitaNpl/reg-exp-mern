const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ColorsSchema = new Schema({
  hex: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})

module.exports = Colors = mongoose.model('colors', ColorsSchema);