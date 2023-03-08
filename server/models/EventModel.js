const mongoose = require('mongoose');
const locationSchema = require('./locationSchema');

const eventSchema = new mongoose.Schema({
  title: String,
  datetime: Date,
  description: String,
  invitees: { type: [String], default: undefined }, // Dog _ids
  attendees: { type: [String], default: undefined }, // Dog _ids
  hostMeta: {
    dogId: String, // matches Dog _id hosting event
    name: String,
    mainImgPath: String,
  },
  location: locationSchema,
});

const EventModel = mongoose.model('Event', eventSchema);

module.exports = EventModel;
