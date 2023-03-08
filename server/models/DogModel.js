const mongoose = require('mongoose');
const locationSchema = require('./locationSchema');

const dogSchema = new mongoose.Schema({
  name: String,
  breed: String,
  mainImageUrl: String,
  imageUrls: { type: [String], default: undefined },
  energy: String, // low, medium, high
  size: String, // small, medium, large
  isDogFriendly: Boolean,
  isHumanFriendly: Boolean,
  bio: String,
  friendsList: { type: [String], default: undefined }, // Dog ids
  pendingDogs: { type: [String], default: undefined }, // Dog ids
  rejectedDogs: { type: [String], default: undefined }, // Dog ids
  eventsAttending: { type: [String], default: undefined }, // Event ids
  eventsPending: { type: [String], default: undefined }, // Event ids
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
