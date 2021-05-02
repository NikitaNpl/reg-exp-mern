const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UsersSchema = new Schema({
  accessToken: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  createdExpressions: {
    type: Array
  },
  favorites: {
    type: Array
  },
  viewed: {
    type: Array
  }
})

module.exports = Users = mongoose.model('users', UsersSchema);