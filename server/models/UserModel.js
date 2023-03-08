const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: Number,
  userId: Number,
  email: String,
  password: String,
  salt: String,
})

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;

// Heads up I need to tweak the dog schema a lil bit, its gonna have a userID attached to it now. It shouldn't cause any issues but wanted to put that out there just in case