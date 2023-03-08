const mongoose = require('mongoose');
const locationSchema = require('./locationSchema');

const eventSchema = new mongoose.Schema({
  _id: Number,
  title: String,
  datetime: Date,
  description: String,
  invitees: [Number], // Dog _ids
  attendees: [Number], // Dog _ids
  hostMeta: {
    _id: Number, // matches Dog _id hosting event
    name: String,
    mainImgPath: String,
  },
  location: locationSchema,
});

const EventModel = mongoose.model('Event', eventSchema);

module.exports = EventModel;
