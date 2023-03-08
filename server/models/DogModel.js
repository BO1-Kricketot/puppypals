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
  isDogFriendly: Boolean,
  isHumanFriendly: Boolean,
  bio: String,
  friendsList: [Number], // Dog ids
  pendingDogs: [Number], // Dog ids
  rejectedDogs: [Number], // Dog ids
  eventsAttending: [Number], // Event ids
  eventsPending: [Number], // Event ids
  location: locationSchema,
  owner: {
    name: String,
    imageUrl: String,
  },
});

const DogModel = mongoose.model('Dog', dogSchema);

module.exports = DogModel;
