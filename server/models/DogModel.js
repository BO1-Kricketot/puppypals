const mongoose = require('mongoose');
const locationSchema = require('./locationSchema');

const dogSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  breed: String,
  mainImageUrl: String,
  imageUrls: [String],
  energy: String, // low, medium, high
  size: String, // small, medium, large
  isDogFriendly: String,
  isHumanFriendly: String,
  bio: String,
  friendsList: [String],
  pendingDogs: [String],
  rejectedDogs: [String],
  eventsAttending: [String],
  eventsPending: [String],
  location: locationSchema,
  owner: {
    name: String,
    imageUrl: String,
  },
  userInfo: {
    email: String,
    password: String,
  },
});

const DogModel = mongoose.model('Dog', dogSchema);

module.exports = DogModel;
