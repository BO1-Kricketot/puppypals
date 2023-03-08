const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema(
  {
    address1: String,
    address2: String,
    city: String,
    state: String,
    postalCode: String,
    coordinates: {
      lat: Number,
      lng: Number,
    },
  },
  { _id: false },
);

module.exports = locationSchema;
