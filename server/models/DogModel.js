const mongoose = require('mongoose');

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
  location: {
    address1: String,
    address2: String,
    city: String,
    state: String,
    postalCode: String,
    latitude: Number,
    longitude: Number,
  },
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
