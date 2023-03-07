const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  address1: String,
  address2: String,
  city: String,
  state: String,
  postalCode: String,
  latitude: Number,
  longitude: Number,
});

module.exports = locationSchema;
